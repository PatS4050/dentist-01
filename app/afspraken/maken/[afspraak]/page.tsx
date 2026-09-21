import AfspraakPlanner from "@/components/AfspraakPlanner";

const treatments = [
    { url: "controle", name: "Periodieke controle" },
    { url: "bleken", name: "Tanden bleken" },
    { url: "klacht", name: "Pijn of klacht" },
];

const beschikbareTijden = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "13:30", "14:00", "14:30","15:00", "15:30", "16:00"];

export default async function AfspraakPage({ params }: { params: { afspraak: string } }) {
    const {afspraak} = await params;
    const treatment = treatments.find((T) => T.url === afspraak);

    return (
        <main classname="page-container">
            <h1>Afspraak maken</h1>
            <section className="intro">
                <h2>{treatment ? treatment.name : "Onbekende behandeling"}</h2>
                <p>U wilt een afspraak maken voor de behandeling <strong> {treatment?.name}</strong>.</p>
            </section>
            <AfspraakPlanner times={beschikbareTijden} />
        </main>
    );
}