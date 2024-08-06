function printUserRole(role: Status | Status1 | TStatus) {
	console.log(role);
}

enum Status {
	Admin = "Admin",
	User = "User",
	Moderator = "Moderator",
}

printUserRole(Status.Admin);

type Status1 = "Admin" | "User" | "Moderator";
printUserRole("Admin");

const Status2 = {
	Admin: "Admin",
	User: "User",
	Moderator: "Moderator",
} as const;
printUserRole(Status2.Admin);

// You can even get the const values of Status when using the object:
type TStatus = (typeof Status2)[keyof typeof Status2];
