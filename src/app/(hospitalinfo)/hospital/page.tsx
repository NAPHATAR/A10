import HospitalCatalog from "@/components/HospitalCatalog";
import getHospitals from "@/libs/getHospitals";
import { LinearProgress } from "@mui/material";
import { Suspense } from "react";

export default async function Hospital() {
  const response: HospitalJson = await getHospitals();
  return (
    <div className="container mx-auto py-8 bg-gray-100 p-8 rounded-md">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
        Participating Hospitals
      </h1>
      <Suspense fallback={<p>Loading...<LinearProgress /></p>}>
        <HospitalCatalog hospitalsJson={response}/>
      </Suspense>
    </div>
  )
}