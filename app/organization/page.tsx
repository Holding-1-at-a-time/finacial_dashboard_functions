"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { OrganizationProfile } from "@/components/organization/organization-profile"
import { OrganizationMembers } from "@/components/organization/organization-members"
import { OrganizationBilling } from "@/components/organization/organization-billing"
import { OrganizationSettings } from "@/components/organization/organization-settings"

export default function OrganizationPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Organization</h1>
        <p className="text-muted-foreground mt-2">Manage your organization profile, members, billing, and settings.</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="members">Members</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="profile" className="space-y-4">
          <OrganizationProfile />
        </TabsContent>
        <TabsContent value="members" className="space-y-4">
          <OrganizationMembers />
        </TabsContent>
        <TabsContent value="billing" className="space-y-4">
          <OrganizationBilling />
        </TabsContent>
        <TabsContent value="settings" className="space-y-4">
          <OrganizationSettings />
        </TabsContent>
      </Tabs>
    </div>
  )
}
