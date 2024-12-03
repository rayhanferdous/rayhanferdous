const FooterInfoItem = ({ label, value }) => (
  <div className="footer-info-item translate-y-20 flex flex-col gap-1.5">
    <p className="text-secondery text-lg">{label}</p>
    <p className="font-medium text-xl text-white">{value}</p>
  </div>
);

export default FooterInfoItem;
