import ClaimsPage from "./claims/page";
import DonationsPage from "./donations/page";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProfilePage() {
  return (
    <Tabs defaultValue="donor" className="flex w-full">
      <TabsList
        variant="line"
        className="mx-auto border-bright bg-transparent border-b-2"
      >
        <TabsTrigger value="donor">Donor Profile</TabsTrigger>
        <TabsTrigger value="claimer">Claimer Profile</TabsTrigger>
      </TabsList>
      <TabsContent value="donor">
        <DonationsPage />
      </TabsContent>
      <TabsContent value="claimer">
        <ClaimsPage />
      </TabsContent>
    </Tabs>
  );
}
