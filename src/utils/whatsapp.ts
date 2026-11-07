import { CartItem, DeliveryDetails } from '../types';

const SHOP_PHONE = '919875348721'; // India country code (91) + vendor number

export function buildWhatsAppMessage(
  items: CartItem[],
  delivery: DeliveryDetails,
  totalPrice: number
): string {
  const itemLines = items
    .map(
      (item, i) =>
        `${i + 1}. [${item.product.id}] ${item.product.name} × ${item.quantity} = ₹${(
          item.product.price * item.quantity
        ).toLocaleString('en-IN')}`
    )
    .join('\n');

  const message = `🪔 *New Diwali Crackers Order* 🪔
━━━━━━━━━━━━━━━━━━━

📦 *Order Items:*
${itemLines}

💰 *Total: ₹${totalPrice.toLocaleString('en-IN')} (COD)*

📍 *Delivery Details:*
Name: ${delivery.name}
Phone: ${delivery.phone}
Address: ${delivery.address}
City: ${delivery.city}
PIN: ${delivery.pincode}
${delivery.notes ? `\n📝 Notes: ${delivery.notes}` : ''}

━━━━━━━━━━━━━━━━━━━
Thank you for your order! 🎆`;

  return message;
}

export function sendWhatsAppOrder(
  items: CartItem[],
  delivery: DeliveryDetails,
  totalPrice: number
): void {
  const message = buildWhatsAppMessage(items, delivery, totalPrice);
  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${SHOP_PHONE}?text=${encoded}`;
  window.open(url, '_blank');
}
