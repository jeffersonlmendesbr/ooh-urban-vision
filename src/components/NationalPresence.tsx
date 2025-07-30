import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const cityGroups = [
  { region: "NORTE", cities: ["Manaus", "Belém"] },
  {
    region: "CENTRO-OESTE",
    cities: ["Brasília", "Goiânia", "Campo Grande", "Cuiabá"],
  },
  {
    region: "NORDESTE",
    cities: [
      "Salvador", "Recife", "Maceió", "Fortaleza", "João Pessoa", "Natal", "São Luís",
    ],
  },
  {
    region: "SUDESTE",
    cities: ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Vitória"],
  },
  { region: "SUL", cities: ["Porto Alegre", "Florianópolis", "Curitiba"] },
];

const NationalPresence = () => (
  <section
    id="nationalpresence"
    className="py-24 lg:py-32 relative overflow-hidden"
    style={{
      backgroundImage: `
        radial-gradient(circle at 10% 10%, hsla(var(--primary), 0.1) 0px, transparent 20%),
        radial-gradient(circle at 90% 80%, hsla(var(--primary), 0.1) 0px, transparent 20%)
      `,
    }}
  >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-sm font-bold tracking-widest uppercase text-primary">
          Alcance Nacional
        </h2>
        <div className="w-20 h-0.5 mt-2 bg-primary mx-auto" />
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          Planejar é mais do que escolher espaços, é entender as ruas. Estas são as praças em que já estive em visita técnica, construindo um conhecimento prático e profundo do OOH em todo o Brasil.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cityGroups.map((group) => (
          <Card key={group.region} className="text-center">
            <CardHeader>
              <CardTitle className="text-primary tracking-widest uppercase text-lg">
                {group.region}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-2">
                {group.cities.map((city) => (
                  <span
                    key={city}
                    className="bg-primary/10 text-foreground font-medium px-3 py-1 rounded-full text-sm"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default NationalPresence;
