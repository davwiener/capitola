export interface LayerData {
  value: string;
  name: string;
  description: string;
}

export type CarriersData = Record<string, string[]>;

export type SavedData = Record<string, string>;

export const layers: LayerData[] = [
  {
    value: 'generalLiabilityInsurance',
    name: 'General liability insurance',
    description: 'coverage that can protect you from a variety of claims'
  },
  {
    value: 'productLiabilityInsurance',
    name: 'Product liability insurance',
    description: 'helps protect your business from claims that a product you made or sold caused bodily injury or property damage to someone else\'s'
  },
  {
    value: 'professionalLiabilityInsurance',
    name: 'Professional liability insurance',
    description: 'form of liability insurance which helps protect professional advice- and service-providing individuals and companies from bearing the full cost of defending against a negligence claim made by a client, and damages awarded in such a civil lawsuit'
  },
  {
    value: 'commercialPropertyInsurance',
    name: 'Commercial property insurance',
    description: 'protects your company\'s physical assets from fire, explosions, burst pipes, storms, theft and vandalism'
  },
  {
    value: 'homeBasedBusinessInsurance',
    name: 'Home-based business insurance',
    description: 'may help cover their claim. Interior Decorator. For interior decorators who run their services out of their home'
  },
  {
    value: 'businessIncomeInsurance',
    name: 'Business Income Insurance',
    description: 'can help pay bills and cover payroll. If your business is forced to close temporarily due to direct physical loss or damage'
  },
  {
    value: 'workersCompensationInsurance',
    name: 'Workers’ Compensation Insurance',
    description: 'form of insurance providing wage replacement and medical benefits to employees injured'
  },
  {
    value: 'dataBreachInsurance',
    name: 'Data Breach Insurance',
    description: 'helps your business respond to breaches and can offer enough protection for small business owners'
  },
  {
    value: 'commercialUmbrellaInsurance',
    name: 'Commercial Umbrella Insurance',
    description: 'provides an extra layer of liability protection by covering costs that go beyond your other liability coverage limits.'
  },
  {
    value: 'commercialAutoInsurance',
    name: 'Commercial Auto Insurance',
    description: 'is liability and physical damage protection for vehicles, such as cars, trucks and vans, that are used for business.'
  },
];



export const carriers: CarriersData = {
  generalLiabilityInsurance: ['https://www.thehartford.com/', 'https://www.chubb.com/us-en/', 'https://www.hiscox.com/'],
  productLiabilityInsurance: ['https://www.thehartford.com/', 'https://www.chubb.com/us-en/', 'https://www.hanover.com/'],
  professionalLiabilityInsurance: ['https://www.aig.com/', 'https://www.chubb.com/us-en/', 'https://www.hanover.com/'],
  commercialPropertyInsurance: ['https://www.coverwallet.com/', 'https://www.hiscox.com/', 'https://www.progressive.com/'],
  homeBasedBusinessInsurance: ['https://www.thehartford.com/home-based-business-insurance', 'https://www.thehartford.com/', 'https://www.chubb.com/us-en/'],
  businessIncomeInsurance: ['https://www.clearblueinsurancegroup.com/', 'https://www.chubb.com/us-en/', 'https://www.hanover.com/'],
  workersCompensationInsurance: ['https://www.coverwallet.com/', 'https://www.chubb.com/us-en/', 'https://www.chubb.com/us-en/'],
  dataBreachInsurance: ['https://www.hiscox.com/', 'https://www.chubb.com/us-en/', 'https://www.clearblueinsurancegroup.com/'],
  commercialUmbrellaInsurance: ['https://www.chubb.com/us-en/', 'https://www.hiscox.com/', 'https://www.thehartford.com/'],
  commercialAutoInsurance: ['https://www.libertymutual.com/', 'https://www.thehartford.com/', 'https://www.geico.com/']
}
