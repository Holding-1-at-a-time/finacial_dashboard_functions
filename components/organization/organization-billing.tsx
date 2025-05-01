"use client"

import { useState } from "react"
import { toast } from "sonner"
import { CreditCard, Calendar, Download, FileText, CheckCircle2, AlertCircle, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const plans = [
  {
    id: "starter",
    name: "Starter",
    description: "For small teams just getting started",
    price: 49,
    features: ["Up to 5 team members", "Basic analytics", "Standard support", "1GB storage", "Basic integrations"],
    current: false,
  },
  {
    id: "professional",
    name: "Professional",
    description: "For growing teams and businesses",
    price: 99,
    features: [
      "Up to 20 team members",
      "Advanced analytics",
      "Priority support",
      "10GB storage",
      "Advanced integrations",
      "Custom branding",
    ],
    current: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For large organizations with complex needs",
    price: 249,
    features: [
      "Unlimited team members",
      "Enterprise analytics",
      "24/7 dedicated support",
      "Unlimited storage",
      "All integrations",
      "Custom branding",
      "SSO & advanced security",
      "Custom contract",
    ],
    current: false,
  },
]

const invoices = [
  {
    id: "INV-001",
    date: "2023-07-01",
    amount: 99,
    status: "Paid",
    description: "Professional Plan - July 2023",
  },
  {
    id: "INV-002",
    date: "2023-08-01",
    amount: 99,
    status: "Paid",
    description: "Professional Plan - August 2023",
  },
  {
    id: "INV-003",
    date: "2023-09-01",
    amount: 99,
    status: "Paid",
    description: "Professional Plan - September 2023",
  },
  {
    id: "INV-004",
    date: "2023-10-01",
    amount: 99,
    status: "Paid",
    description: "Professional Plan - October 2023",
  },
  {
    id: "INV-005",
    date: "2023-11-01",
    amount: 99,
    status: "Paid",
    description: "Professional Plan - November 2023",
  },
  {
    id: "INV-006",
    date: "2023-12-01",
    amount: 99,
    status: "Pending",
    description: "Professional Plan - December 2023",
  },
]

export function OrganizationBilling() {
  const [selectedPlan, setSelectedPlan] = useState("professional")

  const handleChangePlan = (planId: string) => {
    setSelectedPlan(planId)
    toast.success(`Plan changed to ${plans.find((p) => p.id === planId)?.name}`)
  }

  const handleDownloadInvoice = (invoiceId: string) => {
    toast.success(`Downloading invoice ${invoiceId}`)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Current Plan</CardTitle>
          <CardDescription>Manage your subscription and billing information.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold">Professional Plan</h3>
                <Badge className="bg-green-500 hover:bg-green-600">Active</Badge>
              </div>
              <p className="text-muted-foreground">Your plan renews on January 1, 2024</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                  <span>20 team members</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                  <span>10GB storage</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Team members used</span>
                  <span>8 of 20</span>
                </div>
                <Progress value={40} className="h-2" />
                <div className="flex justify-between text-sm">
                  <span>Storage used</span>
                  <span>4.2GB of 10GB</span>
                </div>
                <Progress value={42} className="h-2" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-muted rounded-lg">
              <div className="text-3xl font-bold mb-2">
                $99<span className="text-lg font-normal text-muted-foreground">/month</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Billed monthly</p>
              <Button variant="outline">Manage Subscription</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Payment Method</CardTitle>
          <CardDescription>Manage your payment methods and billing address.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-start gap-4">
            <div className="p-4 border rounded-md flex-1">
              <div className="flex items-center gap-2 mb-2">
                <CreditCard className="h-5 w-5 text-muted-foreground" />
                <h3 className="font-medium">Credit Card</h3>
              </div>
              <p className="text-sm">•••• •••• •••• 4242</p>
              <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                <span>Expires 12/2025</span>
                <span>•</span>
                <span>Default</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Button variant="outline" size="sm">
                <CreditCard className="mr-2 h-4 w-4" />
                Update Card
              </Button>
              <Button variant="outline" size="sm">
                <CreditCard className="mr-2 h-4 w-4" />
                Add Card
              </Button>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-medium mb-2">Billing Address</h3>
            <p className="text-sm text-muted-foreground">
              Flowers & Saints Inc.
              <br />
              123 Financial District
              <br />
              New York, NY 10004
              <br />
              United States
            </p>
            <Button variant="link" className="p-0 h-auto mt-2">
              Update billing address
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Billing History</CardTitle>
          <CardDescription>View and download your past invoices.</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="invoices">
            <TabsList className="mb-4">
              <TabsTrigger value="invoices">Invoices</TabsTrigger>
              <TabsTrigger value="usage">Usage</TabsTrigger>
            </TabsList>
            <TabsContent value="invoices">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map((invoice) => (
                    <TableRow key={invoice.id}>
                      <TableCell className="font-medium">{invoice.id}</TableCell>
                      <TableCell>{invoice.date}</TableCell>
                      <TableCell>${invoice.amount}</TableCell>
                      <TableCell>
                        {invoice.status === "Paid" ? (
                          <Badge variant="outline" className="text-green-500 border-green-500">
                            <CheckCircle2 className="mr-1 h-3 w-3" /> Paid
                          </Badge>
                        ) : invoice.status === "Pending" ? (
                          <Badge variant="outline" className="text-yellow-500 border-yellow-500">
                            <Clock className="mr-1 h-3 w-3" /> Pending
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="text-red-500 border-red-500">
                            <AlertCircle className="mr-1 h-3 w-3" /> Failed
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" onClick={() => handleDownloadInvoice(invoice.id)}>
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="usage">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>API Calls (December 2023)</span>
                    <span>45,678 / 100,000</span>
                  </div>
                  <Progress value={45.678} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Storage Usage</span>
                    <span>4.2GB / 10GB</span>
                  </div>
                  <Progress value={42} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Team Members</span>
                    <span>8 / 20</span>
                  </div>
                  <Progress value={40} className="h-2" />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">
            <FileText className="mr-2 h-4 w-4" />
            Export All Invoices
          </Button>
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            View Billing Calendar
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Available Plans</CardTitle>
          <CardDescription>Compare plans and choose the best one for your organization.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`border rounded-lg p-6 ${plan.current ? "border-primary ring-2 ring-primary ring-opacity-50" : ""}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>
                  {plan.current && <Badge>Current</Badge>}
                </div>
                <div className="text-3xl font-bold mb-4">
                  ${plan.price}
                  <span className="text-lg font-normal text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  variant={plan.current ? "outline" : "default"}
                  disabled={plan.current}
                  onClick={() => handleChangePlan(plan.id)}
                >
                  {plan.current ? "Current Plan" : "Switch Plan"}
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
