const CreateProductVariants = async (current_variant, other_variants) => {
  let variantArray = []; // Initialize as an array, not an object
  // Looping current variant
  await current_variant?.assigned_variant_attributes?.forEach(
    (currentVariant) => {
      // Creating object with attribute name
      const attributeObj = {
        attribute_name: currentVariant.attribute_name,
        layout: currentVariant?.layout_type,
        variants: [],
      };
      // Looping variants array
      currentVariant?.attribute_values?.forEach((attribute_value) => {
        // Pushing variant to variants array
        attributeObj.variants.push({
          value: attribute_value.value,
          flag: true,
        });
      });
      // Pushing the attribute object to the variantArray
      variantArray.push(attributeObj);
    }
  );
  // Loop through other variants and update variantArray
  await other_variants?.forEach((other_variant) => {
    other_variant?.assigned_variant_attributes?.forEach((variant_attribute) => {
      variant_attribute?.attribute_values?.forEach((attribute_values) => {
        const attributeName = variant_attribute.attribute_name;
        const attributeValue = attribute_values.value;
        // Check if the variant with the same attribute name and value exists in variantArray
        const existingVariant = variantArray.find(
          (item) =>
            item.attribute_name === attributeName &&
            item.variants.some((variant) => variant.value === attributeValue)
        );
        // If the variant does not exist in variantArray, add it
        if (!existingVariant) {
          const attributeObj = variantArray.find(
            (item) => item.attribute_name === attributeName
          );
          if (attributeObj) {
            attributeObj.variants.push({
              value: attributeValue,
              flag: true,
            });
          } else {
            // If the attribute does not exist in variantArray, create it
            variantArray.push({
              attribute_name: attributeName,
              layout: variant_attribute.layout_type,
              variants: [{ value: attributeValue, flag: true }],
            });
          }
        }
      });
    });
  });
  // Now you can update the state with the updated variantArray
  return variantArray;
};
export default CreateProductVariants;
