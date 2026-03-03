import httpClient from "../../client/http-client";
import type { SkillFilter } from "./queries/skill.query";

export class SkillService {
  getSkills(queryFilter?: SkillFilter) {
    return httpClient.get("/skills/?format=json", { params: queryFilter });
  }
}
