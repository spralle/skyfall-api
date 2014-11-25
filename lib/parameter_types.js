var parameterTypes = {};

parameterTypes.query = function(aName, aDescription, aType, aRequired,
  aAllowedValues, aDefaultValue) {

  return {
    'name' : aName,
    'description' : aDescription,
    'type' : aType,
    'required' : aRequired,
    'enum' : aAllowedValues,
    'defaultValue' : aDefaultValue,
    'paramType' : 'query'
  };
};

module.exports = parameterTypes;
