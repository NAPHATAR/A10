export default async function getHospitals(): Promise<HospitalJson> {
    await new Promise(resolve => setTimeout(resolve, 1000)); 
    const response = await fetch('https://vaccine-app-backend-blond.vercel.app/api/v1/hospitals');

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return response.json() as Promise<HospitalJson>;
}