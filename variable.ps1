# Define the Azure DevOps organization, project, variable group, and variable name

$Company = 'itsector-tfs02'
$projectName = 'DevOps%20Role%20Play'
$MyPat = '$args[0]

$variableGroupName = "vars"
$variableName = "test"
$newVariableValue = "33"

$B64Pat = [Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes(":$MyPat"))
$headers = @{
	'Authorization' = 'Basic ' + $B64Pat
	 'Content-Type' = 'application/json'
}

$orgUrl = "https://dev.azure.com/$($Company)"

# Get the current variable group
$variableGroupUrl = "$orgUrl/$projectName/_apis/distributedtask/variablegroups?groupName=$variableGroupName&api-version=6.1-preview.1"
$variableGroup = Invoke-RestMethod -Uri $variableGroupUrl -Headers $headers
$variableGroup = $variableGroup.value[0]

#$variableGroupJson = $variableGroup | ConvertTo-Json
#echo $variableGroupJson

$variable = $variableGroup.variables.$variableName

$variable.value = $newVariableValue
	
$updateUrl = "$orgUrl/$projectName/_apis/distributedtask/variablegroups/$($variableGroup.id)?api-version=6.1-preview.1"
Invoke-RestMethod -Method Put -Uri $updateUrl -Headers $headers -Body ($variableGroup | ConvertTo-Json -Depth 10)
