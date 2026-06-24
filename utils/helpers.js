export const formatCurrency = (amount) => {
  return `₹${amount.toLocaleString('en-IN')}`;
};

export const generateOrderId = () => {
  return 'ORD' + Math.floor(100000 + Math.random() * 900000);
};
