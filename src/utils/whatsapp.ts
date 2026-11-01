import { CartItem, DeliveryDetails } from '../types';

const SHOP_PHONE = '919875348721'; // India country code (91) + your number

export function buildWhatsAppMessage(
  items: CartItem[],
  delivery: DeliveryDetails,
  total: number
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

💰 *Total: ₹${total.toLocaleString('en-IN')}*

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
  total: number
): void {
  const message = buildWhatsAppMessage(items, delivery, total);
  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${SHOP_PHONE}?text=${encoded}`;
  window.open(url, '_blank');
}
