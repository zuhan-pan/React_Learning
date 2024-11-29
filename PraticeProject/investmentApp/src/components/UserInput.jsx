export default function UserInput({ onChange, formData }) {
  return (
    <form id="user-input">
      <div className="input-group">
        <p>
          <label>initial investment </label>
          <input
            type="number"
            name="initialInvestment"
            value={formData.initialInvestment}
            onChange={onChange}
          />
        </p>
        <p>
          <label>annual investment </label>
          <input
            type="number"
            name="annualInvestment"
            value={formData.annualInvestment}
            onChange={onChange}
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>expected return </label>
          <input
            type="number"
            name="expectedReturn"
            value={formData.expectedReturn}
            onChange={onChange}
          />
        </p>
        <p>
          <label>duration</label>
          <input
            type="number"
            name="duration"
            value={formData.duration}
            onChange={onChange}
          />
        </p>
      </div>
    </form>
  );
}
