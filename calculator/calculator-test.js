
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount : 10000,
    years : 12,
    rate : 4
  };
  
  expect(calculateMonthlyPayment(values)).toEqual("33.33");
});

it('should reject invalid variables', function () {
  
  const values = {
    amount : 12,
    years : 2,
    rate : 4
  };
  const valuesInvalid = {
    amount : -12,
    years : -2,
    rate : 4
  };
//expect(() => calculateTaxes('sadfewasd')).toThrowError();
  expect(() => calculateMonthlyPayment(values)).not.toThrowError();
  expect(() => calculateMonthlyPayment(valuesInvalid)).toThrowError();
  
});

it("should return a result with 2 decimal places", function() {
  const values = {
    amount : 12,
    years : 2,
    rate : 4
  };
  let test = parseFloat(calculateMonthlyPayment(values));
  test *= 100;
  expect(test % 1).toEqual(0);
});

/// etc
