export const customInput = `
  <div>
    <p id="validationWarning"></p>
  </div>
  <div>
    <label for="3D-model">3D Model Source: </label>
    <input class="custom-input-field" type="text" name="3D-model" placeholder="Enter the URL if your source file" />
  </div>  
  <div>
    <label for="model-thumbnail">Model Thumbnail Source: </label>
    <input class="custom-input-field" type="text" name="model-thumbnail" placeholder="Enter the URL if your source file" />
  </div>
  <div>
    <label for="product-placement">Desired Product Placement: </label>
    <select class="custom-input-field" name="product-placement">
      <option value="" disabled selected hidden>Choose one</option>
      <option value="hat">Hat</option>
      <option value="glasses">Glasses</option>
      <option value="nose ring">Nose Ring</option>
      <option value="earrings">Earrings</option>
      <option value="necklace">Necklace</option>
    </select>
  </div>
  <div>
    <button type="button" id="customInputBtn">Go to Dynamic Demo</button>
  </div>
`;

export const homeContent = `
  <div id="landing-div">
    <div id="message">
      <h2></h2>
      <p></p>
      <button type="button" id="getStartedBtn">Get Started</button>
    </div>
  </div>
`;