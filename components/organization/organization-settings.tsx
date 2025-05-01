"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Trash2, Download, Upload, LogOut, Globe, Palette } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export function OrganizationSettings() {
  const [isLoading, setIsLoading] = useState(false)
  const [deleteConfirmText, setDeleteConfirmText] = useState("")
  const [exportDialogOpen, setExportDialogOpen] = useState(false)

  const handleSaveSettings = () => {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      toast.success("Settings saved successfully")
      setIsLoading(false)
    }, 1000)
  }

  const handleExportData = () => {
    toast.success("Data export initiated. You will receive an email when it's ready.")
    setExportDialogOpen(false)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">General Settings</CardTitle>
          <CardDescription>Configure general settings for your organization.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="org-url">Organization URL</Label>
            <div className="flex items-center">
              <Globe className="mr-2 h-4 w-4 text-muted-foreground" />
              <div className="flex w-full max-w-sm items-center space-x-2">
                <span className="text-muted-foreground">https://app.flowersandsaints.com/</span>
                <Input id="org-url" defaultValue="flowers-saints" />
              </div>
            </div>
            <p className="text-sm text-muted-foreground">This is your organization's unique URL on our platform.</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="timezone">Default Timezone</Label>
            <Select defaultValue="America/New_York">
              <SelectTrigger id="timezone" className="w-full max-w-sm">
                <SelectValue placeholder="Select timezone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="America/New_York">Eastern Time (US & Canada)</SelectItem>
                <SelectItem value="America/Chicago">Central Time (US & Canada)</SelectItem>
                <SelectItem value="America/Denver">Mountain Time (US & Canada)</SelectItem>
                <SelectItem value="America/Los_Angeles">Pacific Time (US & Canada)</SelectItem>
                <SelectItem value="Europe/London">London</SelectItem>
                <SelectItem value="Europe/Paris">Paris</SelectItem>
                <SelectItem value="Asia/Tokyo">Tokyo</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-sm text-muted-foreground">This timezone will be used as the default for all members.</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="language">Default Language</Label>
            <Select defaultValue="en-US">
              <SelectTrigger id="language" className="w-full max-w-sm">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en-US">English (US)</SelectItem>
                <SelectItem value="en-GB">English (UK)</SelectItem>
                <SelectItem value="es">Spanish</SelectItem>
                <SelectItem value="fr">French</SelectItem>
                <SelectItem value="de">German</SelectItem>
                <SelectItem value="ja">Japanese</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-sm text-muted-foreground">This language will be used as the default for all members.</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="fiscal-year">Fiscal Year Start</Label>
              <p className="text-sm text-muted-foreground">Set the start of your organization's fiscal year.</p>
            </div>
            <Select defaultValue="01">
              <SelectTrigger id="fiscal-year" className="w-[180px]">
                <SelectValue placeholder="Select month" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="01">January</SelectItem>
                <SelectItem value="02">February</SelectItem>
                <SelectItem value="03">March</SelectItem>
                <SelectItem value="04">April</SelectItem>
                <SelectItem value="05">May</SelectItem>
                <SelectItem value="06">June</SelectItem>
                <SelectItem value="07">July</SelectItem>
                <SelectItem value="08">August</SelectItem>
                <SelectItem value="09">September</SelectItem>
                <SelectItem value="10">October</SelectItem>
                <SelectItem value="11">November</SelectItem>
                <SelectItem value="12">December</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Two-Factor Authentication</Label>
              <p className="text-sm text-muted-foreground">Require all members to use two-factor authentication.</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSaveSettings} disabled={isLoading}>
            {isLoading ? "Saving..." : "Save Settings"}
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Appearance</CardTitle>
          <CardDescription>Customize the appearance of your organization's dashboard.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="theme">Theme</Label>
            <Select defaultValue="system">
              <SelectTrigger id="theme" className="w-full max-w-sm">
                <SelectValue placeholder="Select theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-sm text-muted-foreground">Choose the default theme for your organization.</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="primary-color">Primary Color</Label>
            <div className="flex items-center space-x-2">
              <Palette className="h-4 w-4 text-muted-foreground" />
              <Input id="primary-color" type="color" defaultValue="#0ea5e9" className="w-16 h-8 p-1" />
              <Input defaultValue="#0ea5e9" className="w-32" />
            </div>
            <p className="text-sm text-muted-foreground">
              This color will be used for buttons, links, and other UI elements.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="logo">Logo</Label>
            <div className="flex items-center space-x-4">
              <div className="h-16 w-16 rounded-md bg-muted flex items-center justify-center">
                <img src="/letter-f-typography.png" alt="Organization Logo" className="h-12 w-12" />
              </div>
              <Button variant="outline" size="sm">
                <Upload className="mr-2 h-4 w-4" />
                Upload Logo
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Upload your organization's logo (SVG, PNG, or JPG, max 1MB).
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="favicon">Favicon</Label>
            <div className="flex items-center space-x-4">
              <div className="h-8 w-8 rounded-md bg-muted flex items-center justify-center">
                <img src="/letter-f-typography.png" alt="Favicon" className="h-6 w-6" />
              </div>
              <Button variant="outline" size="sm">
                <Upload className="mr-2 h-4 w-4" />
                Upload Favicon
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Upload your organization's favicon (ICO, PNG, or SVG, max 100KB).
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSaveSettings} disabled={isLoading}>
            {isLoading ? "Saving..." : "Save Appearance"}
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Security & Privacy</CardTitle>
          <CardDescription>Configure security and privacy settings for your organization.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Password Policy</Label>
              <p className="text-sm text-muted-foreground">Require strong passwords for all members.</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Session Timeout</Label>
              <p className="text-sm text-muted-foreground">Automatically log out inactive users after 2 hours.</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>IP Restrictions</Label>
              <p className="text-sm text-muted-foreground">Restrict access to specific IP addresses.</p>
            </div>
            <Switch />
          </div>

          <div className="space-y-2">
            <Label htmlFor="allowed-ips">Allowed IP Addresses</Label>
            <Textarea
              id="allowed-ips"
              placeholder="Enter IP addresses, one per line"
              className="resize-none h-20"
              disabled
            />
            <p className="text-sm text-muted-foreground">Enter IP addresses or CIDR ranges, one per line.</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Data Sharing</Label>
              <p className="text-sm text-muted-foreground">Share anonymous usage data to help improve our services.</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSaveSettings} disabled={isLoading}>
            {isLoading ? "Saving..." : "Save Security Settings"}
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Advanced</CardTitle>
          <CardDescription>Advanced settings and dangerous actions.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Dialog open={exportDialogOpen} onOpenChange={setExportDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full justify-start">
                <Download className="mr-2 h-4 w-4" />
                Export Organization Data
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Export Organization Data</DialogTitle>
                <DialogDescription>This will export all your organization's data in JSON format.</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label>Select data to export</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="export-members" className="rounded" defaultChecked />
                      <Label htmlFor="export-members">Members</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="export-billing" className="rounded" defaultChecked />
                      <Label htmlFor="export-billing">Billing History</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="export-settings" className="rounded" defaultChecked />
                      <Label htmlFor="export-settings">Settings</Label>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Export format</Label>
                  <Select defaultValue="json">
                    <SelectTrigger>
                      <SelectValue placeholder="Select format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="json">JSON</SelectItem>
                      <SelectItem value="csv">CSV</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setExportDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleExportData}>Export Data</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Button variant="outline" className="w-full justify-start">
            <LogOut className="mr-2 h-4 w-4" />
            Transfer Ownership
          </Button>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" className="w-full justify-start">
                <Trash2 className="mr-2 h-4 w-4" />
                Delete Organization
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your organization and remove all data from
                  our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="confirm-delete">
                    Type <span className="font-semibold">delete my organization</span> to confirm
                  </Label>
                  <Input
                    id="confirm-delete"
                    value={deleteConfirmText}
                    onChange={(e) => setDeleteConfirmText(e.target.value)}
                    placeholder="delete my organization"
                  />
                </div>
              </div>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  className="bg-destructive text-destructive-foreground"
                  disabled={deleteConfirmText !== "delete my organization"}
                >
                  Delete Organization
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardContent>
      </Card>
    </div>
  )
}
