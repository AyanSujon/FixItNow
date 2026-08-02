
// import { getAllUsers } from "../../_actions/getAllUsers";


// export default async function AdminUserPage() {
//      const result = await getAllUsers();
//       console.log(result.data)
//   return (
//     <div>AdminUserPage
//     </div>
//   )
// }











import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

import { getAllUsers } from "../../_actions/getAllUsers";






export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: "ADMIN" | "CUSTOMER" | "TECHNICIAN";

  activeStatus: "ACTIVE" | "INACTIVE" | "BANNED";
  userStatus: string | null;

  isVerified: boolean;
  lastLoginAt: string | null;

  createdAt: string;
  updatedAt: string;

  password: string;
}









export default async function AdminUserPage() {
  const result = await getAllUsers();

  const users:  IUser[] = result.data ?? [];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Users</h1>
        <p className="text-muted-foreground">
          Manage all customers and technicians.
        </p>
      </div>

      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Verified</TableHead>
              <TableHead>Joined</TableHead>
              <TableHead className="w-[80px]">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {users.length > 0 ? (
              users.map((user: IUser) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>
                          {user.name
                            ?.split(" ")
                            .map((word: string) => word[0])
                            .join("")
                            .toUpperCase()}
                        </AvatarFallback>
                      </Avatar>

                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {user.id.slice(0, 8)}...
                        </p>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell>{user.email}</TableCell>

                  <TableCell>{user.phone}</TableCell>

                  <TableCell>
                    <Badge variant="secondary">{user.role}</Badge>
                  </TableCell>

                  <TableCell>
                    <Badge
                      variant={
                        user.activeStatus === "ACTIVE"
                          ? "default"
                          : "destructive"
                      }
                    >
                      {user.activeStatus}
                    </Badge>
                  </TableCell>

                  <TableCell>
                    <Badge
                      variant={
                        user.isVerified ? "default" : "outline"
                      }
                    >
                      {user.isVerified ? "Verified" : "Not Verified"}
                    </Badge>
                  </TableCell>

                  <TableCell>
                    {new Date(user.createdAt).toLocaleDateString()}
                  </TableCell>

                  <TableCell>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={8}
                  className="h-24 text-center text-muted-foreground"
                >
                  No users found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}