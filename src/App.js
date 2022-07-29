import { Routes, Route } from "react-router-dom";
import Button from "./Button";
import Screen from "./Screen";
import "./styles.css";

/* Change debug to `true` to see the invisible Buttons */
export const debug = true;

/* Step 1
<---- UPLOAD YOU OWN IMAGE FILES INTO /public

You can use .jpg, .png, .svg
Try to make all your images roughly the same width, 
i.e. 360 pixels wide for a mobile screen
or 1200 pixels wide for a desktop screen
*/

export default function App() {
  /* Step 2

  For each Screen in your click dummy, create a new
  - Route
    - Screen

  If you want to make the screens interactive, place a Button inside the screen
  – Route
    – Screen
      – Button
      – Button

  The Button "to" parameter links to the Route "path" parameter.
  The Screen "image" parameter should be the file name in the / folder (root)
  */
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Screen image="/1v2.jpg">
              <Button to="/2v2" x="105" y="480" w="200" h="55" />
            </Screen>
          }
        />
        <Route
          path="/2v2"
          element={
            <Screen image="/2v2.jpg">
              <Button to="/3v2" x="105" y="530" w="150" h="55" />
            </Screen>
          }
        />
        <Route
          path="/3v2"
          element={
            <Screen image="/3v2.jpg">
              <Button to="/4v2" x="80" y="100" w="200" h="400" />
              <Button to="/6" x="270" y="580" w="50" h="55" />
              <Button to="/7" x="150" y="580" w="50" h="55" />
            </Screen>
          }
        />
        <Route
          path="/4v2"
          element={
            <Screen image="/4v2.jpg">
              <Button to="/5v2" x="290" y="500" w="50" h="55" />
              <Button to="/6" x="270" y="580" w="50" h="55" />
              <Button to="/7" x="150" y="580" w="50" h="55" />
            </Screen>
          }
        />
        <Route
          path="/5v2"
          element={
            <Screen image="/5v2.jpg" back="/4v2">
              <Button to="/6" x="270" y="580" w="50" h="55" />
              <Button to="/7" x="150" y="580" w="50" h="55" />
            </Screen>
          }
        />
        <Route
          path="/6"
          element={
            <Screen image="/6.jpg" back="/4v2">
              <Button to="/" x="105" y="480" w="200" h="55" />
            </Screen>
          }
        />
        <Route
          path="/7"
          element={
            <Screen image="/7.jpg" back="/4v2">
              <Button to="/5v2" x="100" y="70" w="200" h="500" />
              <Button to="/6" x="250" y="580" w="50" h="55" />
            </Screen>
          }
        />
      </Routes>
    </div>
  );
}
