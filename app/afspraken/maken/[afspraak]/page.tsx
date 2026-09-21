const treatments = [
    { url: "controle", name: "Periodieke controle" },
    { url: "bleken", name: "Tanden bleken" },
    { url: "klacht", name: "Pijn of klacht" },
];

export default function AfspraakPage({ params }: { params: { afspraak: string } }) {
    const treatment = treatments.find((t) => t.url === params.afspraak);

    return (
        <div>
            <h2>{treatment ? treatment.name : "Onbekende behandeling"}</h2>
        </div>
    );
}