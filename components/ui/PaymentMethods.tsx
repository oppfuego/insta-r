import Image from "next/image";

const paymentMethods = [
  { name: "Visa", src: "/assets/cards/visa.png", width: 60, height: 45 },
  {
    name: "Mastercard",
    src: "/assets/cards/mastercard.png",
    width: 60, height: 45
  },
  {
    name: "PCI DSS Compliant",
    src: "/assets/cards/pci-dss-compliant-logo-vector.svg",
    width: 60, height: 45
  },
];

const variantStyles = {
  footer: "gap-3",
  compact: "gap-2.5",
  checkout: "gap-4",
} as const;

const imageStyles = {
  footer: { height: 42, width: 60 },
  compact: { height: 28, width: 46 },
  checkout: { height: 36, width: 58 },
} as const;

interface PaymentMethodsProps {
  variant?: keyof typeof variantStyles;
  className?: string;
}

export default function PaymentMethods({
  variant = "footer",
  className = "",
}: PaymentMethodsProps) {
  return (
    <div
      className={`flex items-center ${variantStyles[variant]} ${className}`}
    >
      {paymentMethods.map((method) => (
        <Image
          key={method.name}
          src={method.src}
          alt={method.name}
          width={imageStyles[variant].width}
          height={imageStyles[variant].height}
          className="object-contain"
          style={{ height: imageStyles[variant].height, width: "auto" }}
        />
      ))}
    </div>
  );
}
