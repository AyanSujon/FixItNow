import { getTechnicianById } from "../../_actions/getTechnicianById";





interface TechnicianDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function TechnicianDetailsPage({
  params,
}: TechnicianDetailsPageProps) {
  const { id } = await params;

  const result = await getTechnicianById(id);
  const technicianContact = result.data.technician;
  const technicianProfile = result.data.technician.technicianProfile;
  console.log(technicianContact, technicianProfile, "technician:________________")

  return (
    <div>
         
      <h1>{technicianContact.name}</h1>
      <h1>{technicianContact.email}</h1>


    </div>
  );
}















