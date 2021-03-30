import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export declare class frontendteamschema {
  readonly id: string;
  readonly Battery: string;
  readonly Date: string;
  readonly Env_PM_smaller_than_1_0: string;
  readonly Env_PM_smaller_than_10: string;
  readonly Env_PM_smaller_than_2_5: string;
  readonly equiv_CO2_ppm: string;
  readonly Latitude: string;
  readonly Longitude: string;
  readonly Particle_Count_0_3um: string;
  readonly PC_0_5um: string;
  readonly PC_1_0num: string;
  readonly PC_10um: string;
  readonly PC_2_5um: string;
  readonly PC_5um: string;
  readonly Relative_Humidity: string;
  readonly Serial_Number: string;
  readonly Temperature_c: string;
  readonly Time: string;
  readonly total_VoC_ppb: string;
  readonly Wifi_Strength: string;
  constructor(init: ModelInit<frontendteamschema>);
  static copyOf(source: frontendteamschema, mutator: (draft: MutableModel<frontendteamschema>) => MutableModel<frontendteamschema> | void): frontendteamschema;
}