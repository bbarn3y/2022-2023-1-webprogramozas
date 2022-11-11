<!DOCTYPE html>
<html lang="hu">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>

    <body>

        <form method="get" action="squareRoot.php">
            <label for="number" title="number"></label>
            <input type="text" id="number" name="number">
            <button type="submit">Calculate square root (GET)</button>
        </form>

        <form method="post" action="squareRoot.php">
            <label for="number" title="number"></label>
            <input type="text" id="number" name="number">
            <button type="submit">Calculate square root (POST)</button>
        </form>

        <form method="get" action="squareRoot.php">
            <input type="text" id="number" name="number" value="5" disabled>

            <input type="radio" name="theme" value="light"> Light
            <input type="radio" name="theme" value="dark"> Dark

            <input type="checkbox" name="mode[]" value="1"> Mode1
            <input type="checkbox" name="mode[]" value="2"> Mode2
            <input type="checkbox" name="mode[]" value="3"> Mode3

            <select name="select">
                <option value="opt1">1</option>
                <option value="opt2">2</option>
                <option value="opt3">3</option>
                <option value="opt4">4</option>
            </select>

            <textarea name="area"></textarea>

            <button type="submit">Submit</button>
        </form>

        <!-- File upload -->
        <form method="post" action="upload.php" enctype="multipart/form-data">
            Upload file: <input type="file" name="thefile" />
            <button type="submit">Upload</button>
        </form>


    </body>
</html>
