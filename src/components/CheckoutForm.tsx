import { useState } from 'react';
import { FaArrowLeft, FaWhatsapp, FaTag } from 'react-icons/fa';
import { CartItem, DeliveryDetails } from '../types';
import { sendWhatsAppOrder } from '../utils/whatsapp';
import { useFlashSale, FLASH_DISCOUNT_PERCENT } from '../hooks/useFlashSale';
import toast from 'react-hot-toast';

interface CheckoutFormProps {
  cartItems: CartItem[];
  totalPrice: number;
  onBack: () => void;
  onOrderComplete: () => void;
}

interface FormErrors {
  name?: string;
  phone?: string;
  address?: string;
  city?: string;
  pincode?: string;
}

export default function CheckoutForm({
  cartItems,
  totalPrice,
  onBack,
  onOrderComplete,
}: CheckoutFormProps) {
  const { isActive } = useFlashSale();
  const discountAmount = isActive ? Math.round(totalPrice * (FLASH_DISCOUNT_PERCENT / 100)) : 0;
  const finalPrice = totalPrice - discountAmount;

  const [delivery, setDelivery] = useState<DeliveryDetails>({
    name: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
    notes: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showSummary, setShowSummary] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!delivery.name.trim() || delivery.name.trim().length < 2) {
      newErrors.name = 'Please enter your full name';
    }
    if (!/^[6-9]\d{9}$/.test(delivery.phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!delivery.address.trim() || delivery.address.trim().length < 10) {
      newErrors.address = 'Please enter your complete delivery address';
    }
    if (!delivery.city.trim() || delivery.city.trim().length < 2) {
      newErrors.city = 'Please enter your city';
    }
    if (!/^\d{6}$/.test(delivery.pincode.trim())) {
      newErrors.pincode = 'Please enter a valid 6-digit PIN code';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleReview = () => {
    if (validate()) {
      setShowSummary(true);
    }
  };

  const handlePlaceOrder = () => {
    sendWhatsAppOrder(cartItems, delivery, finalPrice, totalPrice, discountAmount);
    toast.success('🎆 Order sent via WhatsApp! We\'ll confirm shortly.');
    onOrderComplete();
  };

  const handleChange = (field: keyof DeliveryDetails, value: string) => {
    setDelivery((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="text-center">
          <span className="text-6xl block mb-4">🛒</span>
          <p className="text-diwali-cream/50 text-xl mb-4">Your cart is empty</p>
          <button
            onClick={onBack}
            className="text-diwali-gold hover:text-diwali-warmYellow transition-colors"
          >
            ← Back to shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-diwali-gold hover:text-diwali-warmYellow transition-colors mb-8"
      >
        <FaArrowLeft /> Back to Shop
      </button>

      {!showSummary ? (
        <>
          {/* Checkout Header */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            <span className="shimmer-text">📋 Delivery Details</span>
          </h2>

          {/* Order Summary Mini */}
          <div className="bg-diwali-purple/20 border border-diwali-gold/20 rounded-xl p-5 mb-8">
            <h3 className="text-diwali-gold font-semibold mb-3">Your Order ({cartItems.length} items)</h3>
            {cartItems.map((item) => (
              <div key={item.product.id} className="flex justify-between text-sm text-diwali-cream/70 py-1">
                <span>
                  [{item.product.id}] {item.product.name} × {item.quantity}
                </span>
                <span className="text-diwali-gold">
                  ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                </span>
              </div>
            ))}
            {isActive && discountAmount > 0 && (
              <div className="flex justify-between text-sm text-green-400 py-1 font-medium">
                <span className="flex items-center gap-1.5">
                  <FaTag className="text-xs" /> 10% Flash Discount
                </span>
                <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
              </div>
            )}
            <div className="border-t border-diwali-gold/20 mt-3 pt-3 flex justify-between font-bold text-lg">
              <span>Total Payable</span>
              <span className="text-diwali-gold">₹{finalPrice.toLocaleString('en-IN')}</span>
            </div>
          </div>

          {/* Form */}
          <div className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-diwali-cream/80 text-sm font-medium mb-2">
                Full Name *
              </label>
              <input
                type="text"
                value={delivery.name}
                onChange={(e) => handleChange('name', e.target.value)}
                placeholder="Enter your full name"
                className={`w-full px-4 py-3 rounded-xl bg-diwali-purple/20 border ${
                  errors.name ? 'border-red-500' : 'border-diwali-gold/20'
                } text-diwali-cream placeholder-diwali-cream/30 focus:outline-none focus:border-diwali-gold focus:ring-1 focus:ring-diwali-gold/50 transition-colors`}
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-diwali-cream/80 text-sm font-medium mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                value={delivery.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                placeholder="10-digit mobile number"
                maxLength={10}
                className={`w-full px-4 py-3 rounded-xl bg-diwali-purple/20 border ${
                  errors.phone ? 'border-red-500' : 'border-diwali-gold/20'
                } text-diwali-cream placeholder-diwali-cream/30 focus:outline-none focus:border-diwali-gold focus:ring-1 focus:ring-diwali-gold/50 transition-colors`}
              />
              {errors.phone && (
                <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Address */}
            <div>
              <label className="block text-diwali-cream/80 text-sm font-medium mb-2">
                Delivery Address *
              </label>
              <textarea
                value={delivery.address}
                onChange={(e) => handleChange('address', e.target.value)}
                placeholder="House/Flat No., Street, Landmark"
                rows={3}
                className={`w-full px-4 py-3 rounded-xl bg-diwali-purple/20 border ${
                  errors.address ? 'border-red-500' : 'border-diwali-gold/20'
                } text-diwali-cream placeholder-diwali-cream/30 focus:outline-none focus:border-diwali-gold focus:ring-1 focus:ring-diwali-gold/50 transition-colors resize-none`}
              />
              {errors.address && (
                <p className="text-red-400 text-sm mt-1">{errors.address}</p>
              )}
            </div>

            {/* City and Pincode */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-diwali-cream/80 text-sm font-medium mb-2">
                  City *
                </label>
                <input
                  type="text"
                  value={delivery.city}
                  onChange={(e) => handleChange('city', e.target.value)}
                  placeholder="Your city"
                  className={`w-full px-4 py-3 rounded-xl bg-diwali-purple/20 border ${
                    errors.city ? 'border-red-500' : 'border-diwali-gold/20'
                  } text-diwali-cream placeholder-diwali-cream/30 focus:outline-none focus:border-diwali-gold focus:ring-1 focus:ring-diwali-gold/50 transition-colors`}
                />
                {errors.city && (
                  <p className="text-red-400 text-sm mt-1">{errors.city}</p>
                )}
              </div>
              <div>
                <label className="block text-diwali-cream/80 text-sm font-medium mb-2">
                  PIN Code *
                </label>
                <input
                  type="text"
                  value={delivery.pincode}
                  onChange={(e) => handleChange('pincode', e.target.value)}
                  placeholder="6-digit PIN code"
                  maxLength={6}
                  className={`w-full px-4 py-3 rounded-xl bg-diwali-purple/20 border ${
                    errors.pincode ? 'border-red-500' : 'border-diwali-gold/20'
                  } text-diwali-cream placeholder-diwali-cream/30 focus:outline-none focus:border-diwali-gold focus:ring-1 focus:ring-diwali-gold/50 transition-colors`}
                />
                {errors.pincode && (
                  <p className="text-red-400 text-sm mt-1">{errors.pincode}</p>
                )}
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-diwali-cream/80 text-sm font-medium mb-2">
                Order Notes (Optional)
              </label>
              <textarea
                value={delivery.notes}
                onChange={(e) => handleChange('notes', e.target.value)}
                placeholder="Any special instructions..."
                rows={2}
                className="w-full px-4 py-3 rounded-xl bg-diwali-purple/20 border border-diwali-gold/20 text-diwali-cream placeholder-diwali-cream/30 focus:outline-none focus:border-diwali-gold focus:ring-1 focus:ring-diwali-gold/50 transition-colors resize-none"
              />
            </div>

            {/* Review Order Button */}
            <button
              onClick={handleReview}
              className="glow-btn w-full py-4 rounded-xl bg-gradient-to-r from-diwali-deepOrange to-diwali-gold text-diwali-darkBg font-bold text-lg mt-4"
            >
              Review Order 📋
            </button>
          </div>
        </>
      ) : (
        /* Order Summary */
        <>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            <span className="shimmer-text">📦 Order Summary</span>
          </h2>

          {/* Items */}
          <div className="bg-diwali-purple/20 border border-diwali-gold/20 rounded-xl p-6 mb-6">
            <h3 className="text-diwali-gold font-semibold mb-4 text-lg">Order Items</h3>
            <div className="space-y-3">
              {cartItems.map((item) => (
                <div
                  key={item.product.id}
                  className="flex justify-between items-center py-2 border-b border-diwali-gold/10 last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg overflow-hidden bg-diwali-purple/30 flex-shrink-0">
                      <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-diwali-cream font-medium">{item.product.name}</p>
                        <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-diwali-gold/15 text-diwali-gold">
                          #{item.product.id}
                        </span>
                      </div>
                      <p className="text-diwali-cream/50 text-sm">
                        ₹{item.product.price.toLocaleString('en-IN')} × {item.quantity}
                      </p>
                    </div>
                  </div>
                  <span className="text-diwali-gold font-bold">
                    ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                  </span>
                </div>
              ))}
            </div>
            {isActive && discountAmount > 0 && (
              <div className="flex justify-between items-center text-green-400 font-medium py-1">
                <span className="flex items-center gap-1.5">
                  <FaTag className="text-xs" /> 10% Flash Discount
                </span>
                <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
              </div>
            )}
            <div className="border-t-2 border-diwali-gold/30 mt-4 pt-4 flex justify-between text-xl font-bold">
              <span>Grand Total</span>
              <span className="text-diwali-gold">₹{finalPrice.toLocaleString('en-IN')}</span>
            </div>
          </div>

          {/* Delivery Details */}
          <div className="bg-diwali-purple/20 border border-diwali-gold/20 rounded-xl p-6 mb-8">
            <h3 className="text-diwali-gold font-semibold mb-4 text-lg">📍 Delivery Details</h3>
            <div className="space-y-2 text-diwali-cream/80">
              <p><span className="text-diwali-cream/50">Name:</span> {delivery.name}</p>
              <p><span className="text-diwali-cream/50">Phone:</span> {delivery.phone}</p>
              <p><span className="text-diwali-cream/50">Address:</span> {delivery.address}</p>
              <p><span className="text-diwali-cream/50">City:</span> {delivery.city}</p>
              <p><span className="text-diwali-cream/50">PIN Code:</span> {delivery.pincode}</p>
              {delivery.notes && (
                <p><span className="text-diwali-cream/50">Notes:</span> {delivery.notes}</p>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setShowSummary(false)}
              className="flex-1 py-4 rounded-xl border border-diwali-gold/30 text-diwali-cream font-semibold hover:bg-diwali-purple/30 transition-colors"
            >
              ← Edit Details
            </button>
            <button
              onClick={handlePlaceOrder}
              className="glow-btn flex-1 py-4 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold text-lg flex items-center justify-center gap-3 transition-colors"
            >
              <FaWhatsapp className="text-2xl" />
              Place Order via WhatsApp
            </button>
          </div>
        </>
      )}
    </div>
  );
}
