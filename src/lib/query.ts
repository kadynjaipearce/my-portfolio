import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { unmarshall } from "@aws-sdk/util-dynamodb";
import { ProjectData } from "@/lib/types";

export async function getDataFromDB(): Promise<ProjectData[]> {
  const client = new DynamoDBClient({
    region: process.env.AWS_REGION ?? "",
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? "",
      secretAccessKey: process.env.AWS_SECRET_KEY ?? "",
    },
  });

  const docClient = DynamoDBDocumentClient.from(client);
  const command = new ScanCommand({
    TableName: "projects",
  });

  try {
    const result = await docClient.send(command);

    const newData: ProjectData[] = (result.Items ?? []).map(
      (item) => unmarshall(item) as ProjectData,
    );

    return newData;
  } catch (error) {
    console.error("Error fetching data from DynamoDB:", error);
    return [];
  }
}
