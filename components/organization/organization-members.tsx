"use client"

import { useState } from "react"
import { toast } from "sonner"
import {
  UserPlus,
  Search,
  MoreHorizontal,
  Mail,
  Shield,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  UserCog,
  UserMinus,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

type Member = {
  id: string
  name: string
  email: string
  role: "Owner" | "Admin" | "Member" | "Viewer"
  status: "Active" | "Pending" | "Inactive"
  avatar: string
  lastActive: string
}

const members: Member[] = [
  {
    id: "1",
    name: "Dollar Singh",
    email: "dollar.singh@example.com",
    role: "Owner",
    status: "Active",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/38184074.jpg-M4vCjTSSWVw5RwWvvmrxXBcNVU8MBU.jpeg",
    lastActive: "Just now",
  },
  {
    id: "2",
    name: "Alice Johnson",
    email: "alice@example.com",
    role: "Admin",
    status: "Active",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/375238645_11475210.jpg-lU8bOe6TLt5Rv51hgjg8NT8PsDBmvN.jpeg",
    lastActive: "2 hours ago",
  },
  {
    id: "3",
    name: "Bob Smith",
    email: "bob@example.com",
    role: "Member",
    status: "Active",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/375238208_11475222.jpg-poEIzVHAGiIfMFQ7EiF8PUG1u0Zkzz.jpeg",
    lastActive: "1 day ago",
  },
  {
    id: "4",
    name: "Charlie Brown",
    email: "charlie@example.com",
    role: "Member",
    status: "Active",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dd.jpg-4MCwPC2Bec6Ume26Yo1kao3CnONxDg.jpeg",
    lastActive: "3 days ago",
  },
  {
    id: "5",
    name: "Diana Martinez",
    email: "diana@example.com",
    role: "Viewer",
    status: "Pending",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9334178.jpg-Y74tW6XFO68g7N36SE5MSNDNVKLQ08.jpeg",
    lastActive: "Never",
  },
]

export function OrganizationMembers() {
  const [searchQuery, setSearchQuery] = useState("")
  const [inviteDialogOpen, setInviteDialogOpen] = useState(false)
  const [inviteEmail, setInviteEmail] = useState("")
  const [inviteRole, setInviteRole] = useState("Member")

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleInvite = () => {
    if (!inviteEmail) {
      toast.error("Please enter an email address")
      return
    }

    toast.success(`Invitation sent to ${inviteEmail}`)
    setInviteDialogOpen(false)
    setInviteEmail("")
    setInviteRole("Member")
  }

  const getRoleBadge = (role: Member["role"]) => {
    switch (role) {
      case "Owner":
        return (
          <Badge className="bg-purple-500 hover:bg-purple-600">
            <ShieldCheck className="mr-1 h-3 w-3" /> {role}
          </Badge>
        )
      case "Admin":
        return (
          <Badge className="bg-blue-500 hover:bg-blue-600">
            <Shield className="mr-1 h-3 w-3" /> {role}
          </Badge>
        )
      case "Member":
        return <Badge className="bg-green-500 hover:bg-green-600">{role}</Badge>
      case "Viewer":
        return <Badge variant="outline">{role}</Badge>
      default:
        return <Badge>{role}</Badge>
    }
  }

  const getStatusBadge = (status: Member["status"]) => {
    switch (status) {
      case "Active":
        return (
          <Badge variant="outline" className="text-green-500 border-green-500">
            <CheckCircle2 className="mr-1 h-3 w-3" /> {status}
          </Badge>
        )
      case "Pending":
        return (
          <Badge variant="outline" className="text-yellow-500 border-yellow-500">
            {status}
          </Badge>
        )
      case "Inactive":
        return (
          <Badge variant="outline" className="text-gray-500 border-gray-500">
            <XCircle className="mr-1 h-3 w-3" /> {status}
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div>
            <CardTitle className="text-xl">Team Members</CardTitle>
            <CardDescription>Manage your organization's team members and their access levels.</CardDescription>
          </div>
          <Dialog open={inviteDialogOpen} onOpenChange={setInviteDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <UserPlus className="mr-2 h-4 w-4" />
                Invite Member
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Invite Team Member</DialogTitle>
                <DialogDescription>Send an invitation to join your organization.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <div className="flex items-center">
                    <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="colleague@example.com"
                      value={inviteEmail}
                      onChange={(e) => setInviteEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="role" className="text-sm font-medium">
                    Role
                  </label>
                  <Select value={inviteRole} onValueChange={setInviteRole}>
                    <SelectTrigger id="role">
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Admin">Admin</SelectItem>
                      <SelectItem value="Member">Member</SelectItem>
                      <SelectItem value="Viewer">Viewer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setInviteDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleInvite}>Send Invitation</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          <div className="flex items-center mb-4">
            <Search className="mr-2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search members..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="max-w-sm"
            />
          </div>

          <div className="rounded-md border">
            <div className="grid grid-cols-12 gap-4 p-4 font-medium border-b">
              <div className="col-span-5">User</div>
              <div className="col-span-2">Role</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-2">Last Active</div>
              <div className="col-span-1"></div>
            </div>

            {filteredMembers.length > 0 ? (
              filteredMembers.map((member) => (
                <div key={member.id} className="grid grid-cols-12 gap-4 p-4 items-center border-b last:border-0">
                  <div className="col-span-5 flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{member.name}</p>
                      <p className="text-sm text-muted-foreground">{member.email}</p>
                    </div>
                  </div>
                  <div className="col-span-2">{getRoleBadge(member.role)}</div>
                  <div className="col-span-2">{getStatusBadge(member.status)}</div>
                  <div className="col-span-2 text-sm text-muted-foreground">{member.lastActive}</div>
                  <div className="col-span-1 text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <UserCog className="mr-2 h-4 w-4" />
                          <span>Change Role</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Mail className="mr-2 h-4 w-4" />
                          <span>Send Message</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                          <UserMinus className="mr-2 h-4 w-4" />
                          <span>Remove</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-4 text-center text-muted-foreground">No members found matching your search.</div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
