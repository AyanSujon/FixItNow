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

  const technician = await getTechnicianById(id);

  const profile = technician.data;
  console.log(profile, "technician:________________")

  return (
    <div>
      {/* <h1>{technician.data.technician.name}</h1> */}
      {/* <p>{profile.profession}</p>
      <p>{profile.bio}</p> */}
    </div>
  );
}















