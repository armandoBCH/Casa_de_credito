"use client";

import { useState } from "react";
import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import { Button } from "../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../src/components/ui/card";
import { Input } from "../../src/components/ui/input";
import { Label } from "../../src/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../src/components/ui/select";
import { Calculator, TrendingUp, DollarSign, Clock, CheckCircle } from "lucide-react";

const interestRates = [
  { months: 3, rate: 0 },
  { months: 6, rate: 0 },
  { months: 12, rate: 0 },
  { months: 18, rate: 15 },
  { months: 24, rate: 25 },
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
  }).format(price);
};

const Simulator = () => {
  const [productPrice, setProductPrice] = useState<string>("");
  const [downPayment, setDownPayment] = useState<string>("");
  const [selectedMonths, setSelectedMonths] = useState<string>("");
  
  const price = parseFloat(productPrice) || 0;
  const down = parseFloat(downPayment) || 0;
  const months = parseInt(selectedMonths) || 0;
  
  const selectedRate = interestRates.find(r => r.months === months)?.rate || 0;
  const financedAmount = price - down;
  const totalInterest = (financedAmount * selectedRate) / 100;
  const totalAmount = financedAmount + totalInterest;
  const monthlyPayment = months > 0 ? totalAmount / months : 0;
  const totalToPay = down + totalAmount;

  const resetForm = () => {
    setProductPrice("");
    setDownPayment("");
    setSelectedMonths("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-6">
            <Calculator className="h-8 w-8 text-accent" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simulador de Cuotas
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calculá tus cuotas y descubrí cuánto podés pagar por el producto que querés
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-primary" />
                Datos del Producto
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Product Price */}
              <div className="space-y-2">
                <Label htmlFor="productPrice">Precio del Producto</Label>
                <Input
                  id="productPrice"
                  type="number"
                  placeholder="Ej: 89999"
                  value={productPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                  className="text-lg"
                />
              </div>

              {/* Down Payment */}
              <div className="space-y-2">
                <Label htmlFor="downPayment">Anticipo (Opcional)</Label>
                <Input
                  id="downPayment"
                  type="number"
                  placeholder="Ej: 20000"
                  value={downPayment}
                  onChange={(e) => setDownPayment(e.target.value)}
                  className="text-lg"
                />
                <p className="text-sm text-muted-foreground">
                  Dejá en blanco si no querés dar anticipo
                </p>
              </div>

              {/* Payment Terms */}
              <div className="space-y-2">
                <Label htmlFor="months">Cantidad de Cuotas</Label>
                <Select value={selectedMonths} onValueChange={setSelectedMonths}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccioná el plazo" />
                  </SelectTrigger>
                  <SelectContent>
                    {interestRates.map((option) => (
                      <SelectItem key={option.months} value={option.months.toString()}>
                        {option.months} cuotas {option.rate === 0 ? "(Sin interés)" : `(${option.rate}% interés)`}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <Button 
                  variant="outline" 
                  onClick={resetForm}
                  className="flex-1"
                >
                  Limpiar
                </Button>
                <Button 
                  variant="accent" 
                  className="flex-1"
                  disabled={!price || !months}
                >
                  Calcular
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          {price > 0 && months > 0 && (
            <Card className="shadow-card animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-success" />
                  Resultado de la Simulación
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Monthly Payment Highlight */}
                <div className="bg-gradient-accent p-6 rounded-lg text-center">
                  <div className="text-sm font-medium text-accent-foreground/80 mb-1">
                    Cuota Mensual
                  </div>
                  <div className="text-3xl font-bold text-accent-foreground">
                    {formatPrice(monthlyPayment)}
                  </div>
                  <div className="text-sm text-accent-foreground/80 mt-1">
                    en {months} cuotas
                  </div>
                </div>

                {/* Breakdown */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-muted-foreground">Precio del producto:</span>
                    <span className="font-semibold">{formatPrice(price)}</span>
                  </div>
                  
                  {down > 0 && (
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-muted-foreground">Anticipo:</span>
                      <span className="font-semibold text-success">-{formatPrice(down)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-muted-foreground">Monto financiado:</span>
                    <span className="font-semibold">{formatPrice(financedAmount)}</span>
                  </div>
                  
                  {selectedRate > 0 && (
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-muted-foreground">Intereses ({selectedRate}%):</span>
                      <span className="font-semibold">{formatPrice(totalInterest)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center py-3 border-t-2 border-primary/20 bg-primary/5 rounded px-3">
                    <span className="font-semibold text-primary">Total a pagar:</span>
                    <span className="font-bold text-xl text-primary">{formatPrice(totalToPay)}</span>
                  </div>
                </div>

                {/* Benefits */}
                <div className="bg-success/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-success mb-3 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Beneficios incluidos
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-success" />
                      Entrega a domicilio en CABA y GBA
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-success" />
                      Aprobación en 24 horas
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-success" />
                      Sin gastos administrativos
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-success" />
                      Garantía extendida disponible
                    </li>
                  </ul>
                </div>

                {/* CTA */}
                <div className="space-y-3">
                  <Button variant="hero" size="lg" className="w-full" asChild>
                    <a href="https://wa.me/1234567890?text=Hola! Me interesa solicitar financiación">
                      Solicitar Financiación
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="w-full" asChild>
                    <a href="/catalog">
                      Ver Productos
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Information Card */}
          {!(price > 0 && months > 0) && (
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Información sobre Financiamiento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Plazos Disponibles:</h4>
                    <ul className="space-y-2">
                      {interestRates.map((rate) => (
                        <li key={rate.months} className="flex justify-between">
                          <span>{rate.months} cuotas</span>
                          <span className={rate.rate === 0 ? "text-success font-semibold" : "text-muted-foreground"}>
                            {rate.rate === 0 ? "Sin interés" : `${rate.rate}% interés`}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <h4 className="font-semibold mb-2">Requisitos:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• DNI argentino</li>
                      <li>• Ingresos demostrables</li>
                      <li>• Edad mínima 18 años</li>
                      <li>• Domicilio en CABA o GBA</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Simulator;
