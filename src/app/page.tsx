import LandingPage, { LandingPageProps } from "@/modules/website/landingpage/LandingPage";

const LandingPageConfigs: {
  [key: string]: LandingPageProps["config"]
} = {
  company_1: {
    company: {
      name: "My Company",
      slogan: "The best company ever"
    },
    color: {
      text: "#333",
      background: "#f0f0f0"
    }
  },
  company_2: {
    company: {
      name: "Another Company"
    },
    color: {
      text: "#fff",
      background: "#333"
    }
  },
  company_3: {
    company: {
      name: "Yet Another Company",
      slogan: "We are the best"
    },
    color: {
      text: "#fff",
      background: "#f00"
    }
  }
};

interface LandingPageDemoProps {
  config: LandingPageProps["config"]
}

const LandingPageDemo: React.FC<LandingPageDemoProps> = ({ config }) => {
  return (
    <div className="flex flex-col gap-4">
      <LandingPage config={config} />
      <LandingPage config={config} style={1} />
      <LandingPage config={config} style={2} />
    </div>
  );

}

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-4 py-4">
      <LandingPageDemo config={LandingPageConfigs.company_1} />
      <LandingPageDemo config={LandingPageConfigs.company_2} />
      <LandingPageDemo config={LandingPageConfigs.company_3} />
    </main>
  );
}
