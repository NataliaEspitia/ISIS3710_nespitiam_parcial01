export function getHouseBgColor(house: string): string {
  switch (house.toLowerCase()) {
    case "gryffindor":
      return 'bg-[#740001]';
    case "slytherin":
      return 'bg-[#1A472A]';
    case "ravenclaw":
      return 'bg-[#0E1A40]';
    case "hufflepuff":
      return 'bg-[#FFD800]';
    default:
      return  'bg-[#D1D5DB]';
  }
}

export function getHouseBorderColor(house: string): string {
  switch (house.toLowerCase()) {
    case "gryffindor":
      return 'border-[#740001]';
    case "slytherin":
      return 'border-[#1A472A]';
    case "ravenclaw":
      return 'border-[#0E1A40]';
    case "hufflepuff":
      return 'border-[#FFD800]';
    default:
      return  'border-[#D1D5DB]';
  }
}