// import { retrieveUserProfileFromDatabaseByEmail } from '@/features/user-profiles/user-profiles-model';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import prisma from '@/lib/prisma';

export default async function Dashboard() {
  // const user = await prisma.userProfile.findUnique({
  //     where: { email: 'jan@reactsquad.io' },
  // });
  // const user =
  // await retrieveUserProfileFromDatabaseByEmail('jan@reactsquad.io');

  return (
    <Card className="mx-auto max-w-md">
      <CardHeader>
        <CardTitle> User Profile </CardTitle>
      </CardHeader>
      <CardContent>
        {/* {user ? (
                    <ul>
                        <li>Name: {user.name}</li>
                        <li>Email: {user.email}</li>
                    </ul>
                ) : (
                    <p>User not found.</p>
                )} */}
        hello world
      </CardContent>
    </Card>
  );
}
