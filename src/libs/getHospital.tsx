export default async function getHospital(id: string): Promise<HospitalJson> {
    const response = await fetch(`https://vaccine-app-backend-blond.vercel.app/api/v1/hospitals/${id}`);
    
    if (!response.ok) {
        throw new Error('Failed to fetch hospital details');
    }

    return response.json() as Promise<HospitalJson>;
}
