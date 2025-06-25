"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { z } from "zod";

// import { ModeToggle } from "@/components/modeToggle";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

/* ──────────────────── validation ──────────────────── */
const yearlySchema = z.number().positive().max(1_000_000_000);
const monthlySchema = z.number().positive().max(200_000);
const hourlySchema = z.number().positive().max(2_000);

/* ──────────────────── component ──────────────────── */
export function SalaryCalculator() {
  /* state */
  const [monthly, setMonthly] = useState(0);
  const [yearly, setYearly] = useState(0);
  const [hourly, setHourly] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const [currencies, setCurrencies] = useState<string[]>([]);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("USD");
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);

  /* currency list */
  useEffect(() => {
    fetch("https://open.er-api.com/v6/latest")
      .then((r) => r.json())
      .then((d) => {
        const list = Object.keys(d.rates);
        setCurrencies(list);
        setFromCurrency(list[0] ?? "USD");
        setToCurrency(list[0] ?? "USD");
      });
  }, []);

  /* exchange rate */
  useEffect(() => {
    if (!fromCurrency || !toCurrency) 
return;
    fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`)
      .then((r) => r.json())
      .then((d) => setExchangeRate(d.rates[toCurrency]));
  }, [fromCurrency, toCurrency]);

  /* helpers */
  const validateAndCalc = (
    val: number,
    type: "monthly" | "yearly" | "hourly",
  ) => {
    try {
      if (type === "monthly") 
monthlySchema.parse(val);
      if (type === "yearly") 
yearlySchema.parse(val);
      if (type === "hourly") 
hourlySchema.parse(val);

      setError(null);
      if (type === "monthly") {
        setMonthly(val);
        setYearly(val * 12);
        setHourly((val * 12) / 2080);
      } else if (type === "yearly") {
        setYearly(val);
        setMonthly(val / 12);
        setHourly(val / 2080);
      } else {
        setHourly(val);
        setMonthly((val * 2080) / 12);
        setYearly(val * 2080);
      }
    } catch (e) {
      setError((e as z.ZodError).issues[0].message);
    }
  };

  const convert = (v: number) => (v * (exchangeRate ?? 1)).toFixed(2);
  const weekly = hourly ? (hourly * 40).toFixed(2) : "";
  const fmtCur = (v: number, c: string) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: c }).format(
      v,
    );

  /* ──────────────────── UI ──────────────────── */
  return (
    <Card className="mx-auto w-full max-w-2xl rounded-xl bg-black/70 text-slate-100 shadow-xl ring-1 ring-slate-700/50 backdrop-blur-md">
      <CardHeader>
        <CardTitle className="text-center text-lg font-semibold tracking-tight">
          Salary Calculator
        </CardTitle>
        <CardDescription className="text-center">
          <p>
            Enter any salary figure to instantly see its equivalents and
            currency conversion.
          </p>
          <Link
            href="/"
            aria-label="Home"
            className="text-blue-600 hover:text-violet-600 hover:underline dark:text-blue-400 dark:hover:text-violet-400"
          >
            Home
          </Link>
        </CardDescription>
      </CardHeader>

      <form>
        <CardContent className="space-y-6">
          {/* <div className="flex justify-end"><ModeToggle /></div> */}

          {/* currency selectors */}
          <div className="flex gap-4">
            {["From", "To"].map((lbl, i) => (
              <div key={lbl} className="w-1/2 space-y-2">
                <Label>{lbl} Currency</Label>
                <Select
                  value={i ? toCurrency : fromCurrency}
                  onValueChange={i ? setToCurrency : setFromCurrency}
                >
                  <SelectTrigger className="w-full border border-slate-600 bg-black/40 text-slate-100">
                    {i ? toCurrency : fromCurrency}
                  </SelectTrigger>
                  <SelectContent>
                    {currencies.map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            ))}
          </div>

          {/* salary inputs */}
          {[
            {
              id: "monthly",
              lab: "Monthly Salary",
              val: monthly,
              t: "monthly",
            },
            { id: "yearly", lab: "Yearly Salary", val: yearly, t: "yearly" },
            { id: "hourly", lab: "Hourly Rate", val: hourly, t: "hourly" },
          ].map(({ id, lab, val, t }) => (
            <div key={id} className="space-y-2">
              <Label htmlFor={id}>{lab}</Label>
              <Input
                id={id}
                type="number"
                value={val}
                onChange={(e) =>
                  validateAndCalc(Number(e.target.value), t as any)
                }
                placeholder={`Enter ${lab.toLowerCase()}`}
                className="border border-slate-600 bg-black/40 placeholder:text-slate-400 focus-visible:ring-sky-500"
              />
            </div>
          ))}

          {error && <p className="text-sm text-red-500">{error}</p>}

          {/* reset */}
          <Button
            type="button"
            onClick={() => {
              setMonthly(0);
              setYearly(0);
              setHourly(0);
              setError(null);
            }}
            className="w-full rounded-md bg-slate-600 px-4 py-2 font-semibold text-slate-100 shadow-lg transition duration-300 hover:bg-slate-700 hover:shadow-slate-800/50 focus-visible:ring-2 focus-visible:ring-sky-500"
          >
            Reset
          </Button>
        </CardContent>

        <CardFooter className="flex flex-col gap-4">
          <Table>
            <TableCaption className="text-slate-400">
              Exchange Rate: 1 {fromCurrency} = {exchangeRate?.toFixed(2)}{" "}
              {toCurrency}
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>{fromCurrency}</TableHead>
                <TableHead>{toCurrency}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[monthly, yearly, hourly, weekly ? Number(weekly) : null].map(
                (v, i) => (
                  <TableRow key={i}>
                    <TableCell>
                      {v !== null ? fmtCur(v, fromCurrency) : "-"}
                    </TableCell>
                    <TableCell>
                      {v !== null ? fmtCur(+convert(v), toCurrency) : "-"}
                    </TableCell>
                  </TableRow>
                ),
              )}
            </TableBody>
          </Table>
        </CardFooter>
      </form>
    </Card>
  );
}
