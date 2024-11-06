export default function userInput({ onChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            name=""
            id=""
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
            required
          />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            name=""
            id=""
            onChange={(event) =>
              onChange("annualInvestment", event.target.value)
            }
            required
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label htmlFor="">Expected return</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            name=""
            id=""
            onChange={(event) => onChange("expectedReturn", event.target.value)}
            required
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            value={userInput.duration}
            name=""
            id=""
            onChange={(event) => onChange("duration", event.target.value)}
            required
          />
        </p>
      </div>
    </section>
  );
}
