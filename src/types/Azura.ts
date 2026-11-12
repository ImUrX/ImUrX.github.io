/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export enum WebhookTypes {
  Generic = "generic",
  Email = "email",
  TuneIn = "tunein",
  RadioDe = "radiode",
  RadioReg = "radioreg",
  GetMeRadio = "getmeradio",
  Discord = "discord",
  Telegram = "telegram",
  GroupMe = "groupme",
  Mastodon = "mastodon",
  Bluesky = "bluesky",
  GoogleAnalyticsV4 = "google_analytics_v4",
  MatomoAnalytics = "matomo_analytics",
  Twitter = "twitter",
  GoogleAnalyticsV3 = "google_analytics",
}

export enum WebhookTriggers {
  SongChanged = "song_changed",
  SongChangedLive = "song_changed_live",
  ListenerGained = "listener_gained",
  ListenerLost = "listener_lost",
  LiveConnect = "live_connect",
  LiveDisconnect = "live_disconnect",
  StationOffline = "station_offline",
  StationOnline = "station_online",
}

export enum StreamFormats {
  Mp3 = "mp3",
  Ogg = "ogg",
  Aac = "aac",
  Opus = "opus",
  Flac = "flac",
}

export enum RemoteAdapters {
  Shoutcast1 = "shoutcast1",
  Shoutcast2 = "shoutcast2",
  Icecast = "icecast",
  AzuraRelay = "azurarelay",
}

export enum MasterMePresets {
  MusicGeneral = "music_general",
  SpeechGeneral = "speech_general",
  EbuR128 = "ebu_r128",
  ApplePodcasts = "apple_podcasts",
  YouTube = "youtube",
}

export enum HlsStreamProfiles {
  AacLowComplexity = "aac",
  AacHighEfficiencyV1 = "aac_he",
  AacHighEfficiencyV2 = "aac_he_v2",
}

export enum FrontendAdapters {
  Icecast = "icecast",
  Shoutcast = "shoutcast2",
  Rsas = "rsas",
  Remote = "remote",
}

export enum CrossfadeModes {
  Normal = "normal",
  Smart = "smart",
  Disabled = "none",
}

export enum BackendAdapters {
  Liquidsoap = "liquidsoap",
  None = "none",
}

export enum AudioProcessingMethods {
  None = "none",
  Liquidsoap = "nrj",
  MasterMe = "master_me",
  StereoTool = "stereo_tool",
}

export enum SupportedThemes {
  Browser = "browser",
  Light = "light",
  Dark = "dark",
}

export enum SupportedLocales {
  English = "en_US.UTF-8",
  Czech = "cs_CZ.UTF-8",
  Dutch = "nl_NL.UTF-8",
  French = "fr_FR.UTF-8",
  German = "de_DE.UTF-8",
  Greek = "el_GR.UTF-8",
  Italian = "it_IT.UTF-8",
  Japanese = "ja_JP.UTF-8",
  Korean = "ko_KR.UTF-8",
  Norwegian = "nb_NO.UTF-8",
  Polish = "pl_PL.UTF-8",
  Portuguese = "pt_PT.UTF-8",
  PortugueseBrazilian = "pt_BR.UTF-8",
  Russian = "ru_RU.UTF-8",
  SimplifiedChinese = "zh_CN.UTF-8",
  Spanish = "es_ES.UTF-8",
  Swedish = "sv_SE.UTF-8",
  Turkish = "tr_TR.UTF-8",
  Ukrainian = "uk_UA.UTF-8",
}

export enum StationPermissions {
  All = "administer all",
  View = "view station management",
  Reports = "view station reports",
  Logs = "view station logs",
  Profile = "manage station profile",
  Broadcasting = "manage station broadcasting",
  Streamers = "manage station streamers",
  MountPoints = "manage station mounts",
  RemoteRelays = "manage station remotes",
  Media = "manage station media",
  DeleteMedia = "delete station media",
  Automation = "manage station automation",
  WebHooks = "manage station web hooks",
  Podcasts = "manage station podcasts",
}

export enum ReleaseChannel {
  RollingRelease = "latest",
  Stable = "stable",
}

export enum GlobalPermissions {
  All = "administer all",
  View = "view administration",
  Logs = "view system logs",
  Settings = "administer settings",
  ApiKeys = "administer api keys",
  Stations = "administer stations",
  CustomFields = "administer custom fields",
  Backups = "administer backups",
  StorageLocations = "administer storage locations",
}

export enum FlashLevels {
  Success = "success",
  Warning = "warning",
  Error = "danger",
  Info = "info",
}

export enum StorageLocationTypes {
  Backup = "backup",
  StationMedia = "station_media",
  StationRecordings = "station_recordings",
  StationPodcasts = "station_podcasts",
}

export enum StorageLocationAdapters {
  Local = "local",
  S3 = "s3",
  Dropbox = "dropbox",
  Sftp = "sftp",
}

export enum StationBackendPerformanceModes {
  LessMemory = "less_memory",
  LessCpu = "less_cpu",
  Balanced = "balanced",
  Disabled = "disabled",
}

export enum PodcastSources {
  Manual = "manual",
  Playlist = "playlist",
}

export enum PlaylistTypes {
  Standard = "default",
  OncePerXSongs = "once_per_x_songs",
  OncePerXMinutes = "once_per_x_minutes",
  OncePerHour = "once_per_hour",
  Advanced = "custom",
}

export enum PlaylistSources {
  Songs = "songs",
  Playlists = "playlists",
  RemoteUrl = "remote_url",
  Requests = "requests",
}

export enum PlaylistRemoteTypes {
  Stream = "stream",
  Playlist = "playlist",
  Other = "other",
}

export enum PlaylistOrders {
  Random = "random",
  Shuffle = "shuffle",
  Sequential = "sequential",
}

export enum PlaylistGroupAllowedRequests {
  Any = "any",
  Playlist = "playlist",
  None = "none",
}

export enum LoginTokenTypes {
  ResetPassword = "reset_password",
  Login = "login",
}

export enum IpSources {
  Local = "local",
  XForwardedFor = "xff",
  Cloudflare = "cloudflare",
}

export enum FileTypes {
  Directory = "directory",
  Media = "media",
  CoverArt = "cover_art",
  UnprocessableFile = "unprocessable_file",
  Other = "other",
}

export enum AnalyticsLevel {
  All = "all",
  NoIp = "no_ip",
  None = "none",
}

export interface ApiAccountChangePassword {
  /** The current account password. */
  current_password: string;
  /** The new account password. */
  new_password: string;
}

export interface ApiAccountNewApiKey {
  /** The newly generated API key. */
  key: string;
}

export interface ApiAccountTwoFactorStatus {
  /** The current two-factor status for this account. */
  two_factor_enabled: boolean;
}

export interface ApiAdminAuditLogChangeset {
  field: string;
  from: string;
  to: string;
}

export type ApiAdminBackup = HasLinks & {
  path: string;
  basename: string;
  pathEncoded: string;
  timestamp: number;
  size: number;
  storageLocationId: number;
};

export interface ApiAdminDebugQueue {
  name:
    | "high_priority"
    | "normal_priority"
    | "low_priority"
    | "media"
    | "backup";
  count: number;
  url: string;
}

export interface ApiAdminDebugStation {
  id: number;
  name: string;
  clearQueueUrl: string;
  getNextSongUrl: string;
  getNowPlayingUrl: string;
  clearComputedAutoCueUrl: string;
  syncMediaAllowEmptyStorageUrl: string;
}

export interface ApiAdminDebugLogEntry {
  /** @format date-time */
  datetime: string;
  channel: string;
  level: 100 | 200 | 250 | 300 | 400 | 500 | 550 | 600;
  message: string;
  context: any[];
  extra: any[];
  formatted: any;
}

export interface ApiAdminDebugLogResult {
  logs: ApiAdminDebugLogEntry[];
}

export interface ApiAdminDebugSyncTask {
  task: string;
  pattern: string | null;
  time: number;
  nextRun: number | null;
  url: string;
}

export interface ApiAdminGeoLiteStatus {
  version: string | null;
  key: string | null;
}

export interface ApiAdminLogList {
  globalLogs: ApiLogType[];
  stationLogs: ApiAdminStationLogList[];
}

export interface ApiAdminNewApiKey {
  /** User ID or e-mail address. */
  user: number | string;
  /** @example "Admin-generated API key" */
  comment?: string;
}

export interface ApiAdminNewLoginToken {
  /** User ID or e-mail address. */
  user: number | string;
  type?: LoginTokenTypes | null;
  /** @example "SSO Login" */
  comment?: string | null;
  expires_minutes?: number;
}

export interface ApiAdminNewLoginTokenResponse {
  /** @example true */
  success: boolean;
  /** @example "Changes saved successfully." */
  message: string;
  /** @example "<b>Changes saved successfully.</b>" */
  formatted_message: string;
  record: UserLoginToken;
  links: Record<string, string>;
}

export interface ApiAdminPermission {
  id: string;
  name: string;
}

export interface ApiAdminPermissions {
  global: ApiAdminPermission[];
  station: ApiAdminPermission[];
}

export interface ApiAdminRelay {
  /**
   * Station ID
   * @example 1
   */
  id?: number;
  /**
   * Station name
   * @example "AzuraTest Radio"
   */
  name?: string | null;
  /**
   * Station "short code", used for URL and folder paths
   * @example "azuratest_radio"
   */
  shortcode?: string | null;
  /**
   * Station description
   * @example "An AzuraCast station!"
   */
  description?: string | null;
  /**
   * Station homepage URL
   * @example "https://www.azuracast.com/"
   */
  url?: string | null;
  /**
   * The genre of the station
   * @example "Variety"
   */
  genre?: string | null;
  /**
   * Which broadcasting software (frontend) the station uses
   * @example "shoutcast2"
   */
  type?: string | null;
  /**
   * The port used by this station to serve its broadcasts.
   * @example 8000
   */
  port?: number | null;
  /**
   * The relay password for the frontend (if applicable).
   * @example "p4ssw0rd"
   */
  relay_pw?: string;
  /**
   * The administrator password for the frontend (if applicable).
   * @example "p4ssw0rd"
   */
  admin_pw?: string;
  mounts?: ApiNowPlayingStationMount[];
}

export type ApiAdminRole = HasLinks & {
  id?: number;
  /** @example "Super Administrator" */
  name: string;
  permissions?: ApiAdminRolePermissions;
  /** Whether this role is the protected "Super Administrator" role. */
  is_super_admin?: boolean;
};

export interface ApiAdminRolePermissions {
  global: GlobalPermissions[];
  station: ApiAdminRoleStationPermission[];
}

export interface ApiAdminRoleStationPermission {
  /** The station ID. */
  id: number;
  permissions: StationPermissions[];
}

export interface ApiAdminRsasStatus {
  version: string | null;
  hasLicense: boolean;
}

export interface ApiAdminServerStatsCpuStats {
  total: ApiAdminServerStatsCpuStatsSection;
  cores: ApiAdminServerStatsCpuStatsSection[];
  load: number[];
}

export interface ApiAdminServerStatsCpuStatsSection {
  name: string;
  usage: string;
  idle: string;
  io_wait: string;
  steal: string;
}

export interface ApiAdminServerStatsMemoryStats {
  total_bytes: string;
  total_readable: string;
  free_bytes: string;
  free_readable: string;
  buffers_bytes: string;
  buffers_readable: string;
  cached_bytes: string;
  cached_readable: string;
  sReclaimable_bytes: string;
  sReclaimable_readable: string;
  shmem_bytes: string;
  shmem_readable: string;
  used_bytes: string;
  used_readable: string;
}

export interface ApiAdminServerStatsNetworkInterfaceReceived {
  speed_bytes: string;
  speed_readable: string;
  packets: string;
  errs: string;
  drop: string;
  fifo: string;
  frame: string;
  compressed: string;
  multicast: string;
}

export interface ApiAdminServerStatsNetworkInterfaceStats {
  interface_name: string;
  received: ApiAdminServerStatsNetworkInterfaceReceived;
  transmitted: ApiAdminServerStatsNetworkInterfaceTransmitted;
}

export interface ApiAdminServerStatsNetworkInterfaceTransmitted {
  speed_bytes: string;
  speed_readable: string;
  packets: string;
  errs: string;
  drop: string;
  fifo: string;
  frame: string;
  carrier: string;
  compressed: string;
}

export interface ApiAdminServerStats {
  cpu: ApiAdminServerStatsCpuStats;
  memory: ApiAdminServerStatsMemoryStats;
  swap: ApiAdminServerStatsStorageStats;
  disk: ApiAdminServerStatsStorageStats;
  network: ApiAdminServerStatsNetworkInterfaceStats[];
}

export interface ApiAdminServerStatsStorageStats {
  total_bytes: string;
  total_readable: string;
  free_bytes: string;
  free_readable: string;
  used_bytes: string;
  used_readable: string;
}

export type ApiAdminServiceData = HasLinks & {
  name: string;
  description: string;
  running: boolean;
};

export interface ApiAdminShoutcastStatus {
  version: string | null;
}

export interface ApiAdminStationLogList {
  id: number;
  name: string;
  logs: ApiLogType[];
}

export interface ApiAdminStereoToolStatus {
  version: string | null;
}

export type ApiAdminStorageLocation = HasLinks & {
  /** @example "75" */
  storageUsedPercent?: number | null;
  /** @example "true" */
  isFull?: boolean;
  /**
   * The URI associated with the storage location.
   * @example "/var/azuracast/www"
   */
  uri?: string;
  /** The stations using this storage location, if any. */
  stations?: string[] | null;
};

export interface ApiAdminUpdateDetails {
  /**
   * The stable-equivalent branch your installation currently appears to be on.
   * @example "0.20.3"
   */
  current_release?: string | null;
  /**
   * The current latest stable release of the software.
   * @example "0.20.4"
   */
  latest_release?: string | null;
  /** If you are on the Rolling Release, whether your installation needs to be updated. */
  needs_rolling_update?: boolean;
  /** Whether a newer stable release is available than the version you are currently using. */
  needs_release_update?: boolean;
  /** If you are on the Rolling Release, the number of updates released since your version. */
  rolling_updates_available?: number;
  /** Whether you can seamlessly move from the Rolling Release channel to Stable without issues. */
  can_switch_to_stable?: boolean;
}

export type ApiAdminUserWithDetails = User &
  HasLinks & {
    /**
     * Whether this user record represents the currently logged-in user.
     * @example true
     */
    is_me: boolean;
  };

export interface ApiAdminVueBackupProps {
  isDocker: boolean;
  storageLocations: Record<string, string>;
}

export interface ApiAdminVueCustomFieldProps {
  autoAssignTypes: Record<string, string>;
  /** Alternative tag names mapped to the known tag they are saved as. */
  autoAssignAliases: Record<string, string>;
}

export interface ApiAdminVuePermissionsProps {
  stations: Record<string, string>;
  globalPermissions: Record<string, string>;
  stationPermissions: Record<string, string>;
}

export interface ApiAdminVueSettingsProps {
  releaseChannel: string;
}

export interface ApiAdminVueStationsFormProps {
  timezones: Record<string, string>;
  countries: Record<string, string>;
  isRsasInstalled: boolean;
  isShoutcastInstalled: boolean;
  isStereoToolInstalled: boolean;
}

export interface ApiAdminVueStationsProps {
  formProps: ApiAdminVueStationsFormProps;
  frontendTypes: object;
  backendTypes: object;
}

export interface ApiAdminVueUpdateProps {
  releaseChannel: string;
  enableWebUpdates: boolean;
  initialUpdateInfo: ApiAdminUpdateDetails | null;
}

export interface ApiAdminVueUsersProps {
  roles: Record<string, string>;
}

export interface ApiBatchResult {
  success: boolean;
  errors: string[];
}

export type ApiDetailedSongHistory = ApiNowPlayingSongHistory & {
  /**
   * Number of listeners when the song playback started.
   * @example 94
   */
  listeners_start?: number;
  /**
   * Number of listeners when song playback ended.
   * @example 105
   */
  listeners_end?: number;
  /**
   * The sum total change of listeners between the song's start and ending.
   * @example 11
   */
  delta_total?: number;
  /**
   * Whether the entry is visible on public playlists.
   * @example true
   */
  is_visible?: boolean;
};

export interface ApiError {
  /**
   * The numeric code of the error.
   * @example 500
   */
  code: number;
  /**
   * The programmatic class of error.
   * @example "NotLoggedInException"
   */
  type: string;
  /**
   * The text description of the error.
   * @example "Error description."
   */
  message: string;
  /**
   * The HTML-formatted text description of the error.
   * @example "<b>Error description.</b><br>Detailed error text."
   */
  formatted_message: string | null;
  /** Stack traces and other supplemental data. */
  extra_data: any[];
  /**
   * Used for API calls that expect an \Entity\Api\Status type response.
   * @example false
   */
  success: boolean;
}

export type ApiFileList = HasLinks & {
  path?: string;
  path_short?: string;
  text?: string;
  type?: FileTypes;
  timestamp?: number;
  size?: number | null;
  media?: ApiStationMedia | null;
  dir?: ApiFileListDir | null;
};

export interface ApiFileListDir {
  playlists?: ApiStationMediaPlaylist[];
}

export interface ApiFormOption {
  value: any;
  text: string;
  description?: string | null;
}

export interface ApiFormOptionGroup {
  options: ApiFormOption[];
  label: string;
}

export type ApiGenericForm = Record<string, any>;

export type ApiFormNestedOptions = (ApiFormOption | ApiFormOptionGroup)[];

export type ApiFormSimpleOptions = ApiFormOption[];

export type ApiGenericBatchResult = ApiBatchResult & {
  records: {
    /** @format int64 */
    id: number;
    title: string;
  }[];
};

/** A hash-map array represented as an object. */
export type HashMap = object;

export interface ApiListener {
  /**
   * The listener's IP address
   * @example "127.0.0.1"
   */
  ip?: string;
  /**
   * The listener's HTTP User-Agent
   * @example "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.86 Safari/537.36"
   */
  user_agent?: string;
  /**
   * A unique identifier for this listener/user agent (used for unique calculations).
   * @example ""
   */
  hash?: string;
  /**
   * Whether the user is connected to a local mount point or a remote one.
   * @example false
   */
  mount_is_local?: boolean;
  /**
   * The display name of the mount point.
   * @example "/radio.mp3"
   */
  mount_name?: string;
  /**
   * UNIX timestamp that the user first connected.
   * @example 1609480800
   */
  connected_on?: number;
  /**
   * UNIX timestamp that the user disconnected (or the latest timestamp if they are still connected).
   * @example 1609480800
   */
  connected_until?: number;
  /**
   * Number of seconds that the user has been connected.
   * @example 30
   */
  connected_time?: number;
  device?: ApiListenerDevice;
  location?: ApiListenerLocation;
}

export interface ApiLogContents {
  contents: string;
  /** Whether the log file has ended at this point or has additional data. */
  eof: boolean;
  position: number | null;
}

export type ApiLogType = HasLinks & {
  key: string;
  name: string;
  path: string;
  tail: boolean;
};

export type ApiMediaBatchResult = ApiBatchResult & {
  files: string[];
  directories: string[];
  responseRecord: any[] | null;
};

export interface ApiNotification {
  id: string;
  title: string;
  body: string;
  type: FlashLevels;
  actionLabel: string | null;
  actionUrl: string | null;
}

export type ApiNowPlayingCurrentSong = ApiNowPlayingSongHistory & {
  /**
   * Elapsed time of the song's playback since it started.
   * @example 25
   */
  elapsed: number;
  /**
   * Remaining time in the song, in seconds.
   * @example 155
   */
  remaining: number;
};

export interface ApiNowPlayingListeners {
  /**
   * Total non-unique current listeners
   * @example 20
   */
  total: number;
  /**
   * Total unique current listeners
   * @example 15
   */
  unique: number;
  /**
   * Total non-unique current listeners (Legacy field, may be retired in the future.)
   * @example 20
   */
  current: number;
}

export interface ApiNowPlayingLive {
  /**
   * Whether the stream is known to currently have a live DJ.
   * @example false
   */
  is_live: boolean;
  /**
   * The current active streamer/DJ, if one is available.
   * @example "DJ Jazzy Jeff"
   */
  streamer_name: string;
  /**
   * The start timestamp of the current broadcast, if one is available.
   * @example "1591548318"
   */
  broadcast_start: number | null;
  /**
   * URL to the streamer artwork (if available).
   * @example "https://picsum.photos/1200/1200"
   */
  art: string | null;
}

export interface ApiNowPlaying {
  station: ApiNowPlayingStation;
  listeners: ApiNowPlayingListeners;
  live: ApiNowPlayingLive;
  now_playing: ApiNowPlayingCurrentSong | null;
  playing_next: ApiNowPlayingStationQueue | null;
  song_history: ApiNowPlayingSongHistory[];
  /**
   * Whether the stream is currently online.
   * @example true
   */
  is_online: boolean;
  /** Debugging information about where the now playing data comes from. */
  cache: "hit" | "database" | "station" | null;
}

export interface ApiNowPlayingSongHistory {
  /** Song history unique identifier */
  sh_id: number;
  /**
   * UNIX timestamp when playback started.
   * @example 1609480800
   */
  played_at: number;
  /**
   * Duration of the song in seconds
   * @example 180
   */
  duration: number;
  /**
   * Indicates the playlist that the song was played from, if available, or empty string if not.
   * @example "Top 100"
   */
  playlist: string | null;
  /**
   * Names of the playlist group chain the song was picked through if played from a group
   * @example ["Main Rotation","Rock","Rock Hits"]
   */
  playlist_chain: string[] | null;
  /** The source of the playlist that the song was played from, if available. */
  playlist_source: PlaylistSources | null;
  /**
   * Indicates the current streamer that was connected, if available, or empty string if not.
   * @example "Test DJ"
   */
  streamer: string | null;
  /** Indicates whether the song is a listener request. */
  is_request: boolean;
  song: ApiSong;
}

export interface ApiNowPlayingStation {
  /**
   * Station ID
   * @example 1
   */
  id: number;
  /**
   * Station name
   * @example "AzuraTest Radio"
   */
  name: string;
  /**
   * Station "short code", used for URL and folder paths
   * @example "azuratest_radio"
   */
  shortcode: string;
  /**
   * Station description
   * @example "An AzuraCast station!"
   */
  description: string;
  /**
   * Which broadcasting software (frontend) the station uses
   * @example "shoutcast2"
   */
  frontend: string;
  /**
   * Which AutoDJ software (backend) the station uses
   * @example "liquidsoap"
   */
  backend: string;
  /**
   * The station's IANA time zone
   * @example "America/Chicago"
   */
  timezone: string;
  /**
   * The full URL to listen to the default mount of the station
   * @example "http://localhost:8000/radio.mp3"
   */
  listen_url: string;
  /**
   * The public URL of the station.
   * @example "https://example.com/"
   */
  url: string | null;
  /**
   * The public player URL for the station.
   * @example "https://example.com/public/example_station"
   */
  public_player_url: string;
  /**
   * The playlist download URL in PLS format.
   * @example "https://example.com/public/example_station/playlist.pls"
   */
  playlist_pls_url: string;
  /**
   * The playlist download URL in M3U format.
   * @example "https://example.com/public/example_station/playlist.m3u"
   */
  playlist_m3u_url: string;
  /**
   * If the station is public (i.e. should be shown in listings of all stations)
   * @example true
   */
  is_public: boolean;
  /**
   * If the station has song requests enabled.
   * @example true
   */
  requests_enabled: boolean;
  mounts: ApiNowPlayingStationMount[];
  remotes: ApiNowPlayingStationRemote[];
  /**
   * If the station has HLS streaming enabled.
   * @example true
   */
  hls_enabled: boolean;
  /**
   * If the HLS stream should be the default one for the station.
   * @example true
   */
  hls_is_default: boolean;
  /**
   * The full URL to listen to the HLS stream for the station.
   * @example "https://example.com/hls/azuratest_radio/live.m3u8"
   */
  hls_url: string | null;
  /**
   * HLS Listeners
   * @example 1
   */
  hls_listeners: number;
}

export type ApiNowPlayingStationMount = ApiNowPlayingStationRemote & {
  /**
   * The relative path that corresponds to this mount point
   * @example "/radio.mp3"
   */
  path: string;
  /**
   * If the mount is the default mount for the parent station
   * @example true
   */
  is_default: boolean;
};

export interface ApiNowPlayingStationQueue {
  /**
   * UNIX timestamp when the AutoDJ is expected to queue the song for playback.
   * @example 1609480800
   */
  cued_at: number;
  /**
   * UNIX timestamp when playback is expected to start.
   * @example 1609480800
   */
  played_at: number | null;
  /**
   * Duration of the song in seconds
   * @format float
   * @example 180
   */
  duration: number;
  /**
   * Indicates the playlist that the song was played from, if available, or empty string if not.
   * @example "Top 100"
   */
  playlist: string | null;
  /**
   * Names of the playlist group chain the song was picked through if played from a group
   * @example ["Main Rotation","Rock","Rock Hits"]
   */
  playlist_chain: string[] | null;
  /** The source of the playlist that the song was played from, if available. */
  playlist_source: PlaylistSources | null;
  /** Indicates whether the song is a listener request. */
  is_request: boolean;
  song: ApiSong;
}

export interface ApiNowPlayingStationRemote {
  /**
   * Mount/Remote ID number.
   * @example 1
   */
  id: number;
  /**
   * Mount point name/URL
   * @example "/radio.mp3"
   */
  name: string;
  /**
   * Full listening URL specific to this mount
   * @example "http://localhost:8000/radio.mp3"
   */
  url: string;
  /**
   * Bitrate (kbps) of the broadcasted audio (if known)
   * @example 128
   */
  bitrate: number | null;
  /**
   * Audio encoding format of broadcasted audio (if known)
   * @example "mp3"
   */
  format: string | null;
  listeners: ApiNowPlayingListeners;
}

export interface ApiNowPlayingVueProps {
  stationShortName: string;
  useStatic: boolean;
  useSse: boolean;
}

export type ApiPlaylistConfigurationImportResult = ApiStatus & {
  /** @example 3 */
  playlists_created?: number;
  /** @example 10 */
  media_relinked?: number;
  /** @example 2 */
  media_generated?: number;
  /** @example 1 */
  members_created?: number;
  warnings?: string[];
};

export type ApiPodcast = HasLinks & {
  id?: string;
  storage_location_id?: number;
  source?: string;
  playlist_id?: number | null;
  playlist_auto_publish?: boolean;
  title?: string;
  link?: string | null;
  description?: string;
  description_short?: string;
  explicit?: boolean;
  is_enabled?: boolean;
  branding_config?: PodcastBrandingConfiguration;
  language?: string;
  language_name?: string;
  author?: string;
  email?: string;
  has_custom_art?: boolean;
  art?: string;
  art_updated_at?: number;
  /** The UUIDv5 global unique identifier for this podcast, based on its RSS feed URL. */
  guid?: string;
  is_published?: boolean;
  episodes?: number;
  categories?: ApiPodcastCategory[];
};

export type ApiPodcastBatchResult = ApiBatchResult & {
  episodes: {
    id: string;
    title: string;
  }[];
  records: ApiPodcastEpisode[] | null;
};

export interface ApiPodcastCategory {
  category?: string;
  text?: string;
  title?: string;
  subtitle?: string | null;
}

export type ApiPodcastEpisode = HasLinks & {
  id?: string;
  title?: string;
  link?: string | null;
  description?: string;
  description_short?: string;
  explicit?: boolean;
  season_number?: number | null;
  episode_number?: number | null;
  created_at?: number;
  publish_at?: number;
  is_published?: boolean;
  has_media?: boolean;
  playlist_media_id?: string | null;
  playlist_media?: ApiSong | null;
  media?: ApiPodcastMedia | null;
  has_custom_art?: boolean;
  art?: string | null;
  art_updated_at?: number;
};

export interface ApiPodcastMedia {
  id?: string | null;
  original_name?: string | null;
  /** @format float */
  length?: number;
  length_text?: string | null;
  path?: string | null;
  /**
   * The file size (in bytes).
   * @example 19693056
   */
  size?: number;
}

export type ApiResolvableUrl = string;

export type ApiSong = ApiHasSongFields & {
  /**
   * The song's 32-character unique identifier hash
   * @example "9f33bbc912c19603e51be8e0987d076b"
   */
  id?: string;
  /**
   * URL to the album artwork (if available).
   * @example "https://picsum.photos/1200/1200"
   */
  art?: string;
  custom_fields?: string[];
};

export type ApiStationMedia = ApiHasSongFields &
  HasLinks & {
    /**
     * The media's identifier.
     * @example 1
     */
    id?: number;
    /**
     * A unique identifier for this specific media item in the station's library. Each entry in the media table has a unique ID, even if it refers to a song that exists elsewhere.
     * @example "69b536afc7ebbf16457b8645"
     */
    unique_id?: string;
    /**
     * The media file's 32-character unique song identifier hash. This hash is based on track metadata, so the same song uploaded multiple times will have the same `song_id`.
     * @example "9f33bbc912c19603e51be8e0987d076b"
     */
    song_id?: string;
    /**
     * URL to the album art.
     * @example "https://picsum.photos/1200/1200"
     */
    art?: string;
    /**
     * The relative path of the media file.
     * @example "test.mp3"
     */
    path?: string;
    /**
     * The size of the media file in bytes.
     * @example 4194304
     */
    size?: number;
    /**
     * The UNIX timestamp when the database was last modified.
     * @example 1609480800
     */
    mtime?: number;
    /**
     * The UNIX timestamp when the item was first imported into the database.
     * @example 1609480800
     */
    uploaded_at?: number;
    /**
     * The latest time (UNIX timestamp) when album art was updated.
     * @example 1609480800
     */
    art_updated_at?: number;
    /**
     * The song duration in seconds.
     * @format float
     * @example 240
     */
    length?: number;
    /**
     * The formatted song duration (in mm:ss format)
     * @example "4:00"
     */
    length_text?: string;
    /** A hash-map array represented as an object. */
    custom_fields?: HashMap;
    /** A hash-map array represented as an object. */
    extra_metadata?: HashMap;
    playlists?: (ApiStationMediaPlaylist | number)[];
  };

export interface ApiStationMediaPlaylist {
  /**
   * The playlist identifier.
   * @example 1
   */
  id?: number;
  name?: string;
  short_name?: string;
  folder?: string | null;
  count?: number;
}

export interface ApiStationOnDemand {
  /**
   * Track ID unique identifier
   * @example 1
   */
  track_id?: string;
  /**
   * URL to download/play track.
   * @example "/api/station/1/ondemand/download/1"
   */
  download_url?: string;
  media?: ApiSong;
  playlist?: string;
}

export interface ApiStationPlaylistComputedFields {
  /** A URL-safe version of the playlist name. */
  short_name?: string;
  /**
   * The number of songs in the playlist, if it is a song-based playlist.
   * @example 25
   */
  num_songs?: number | null;
  /**
   * The total length of the playlist in seconds, if it is a song-based playlist.
   * @format float
   * @example 3600
   */
  total_length?: number | null;
  /** The parent groups that this playlist is a member of. */
  playlist_groups?: ApiStationPlaylistParentGroup[];
}

export interface ApiStationPlaylistParentGroup {
  /**
   * The unique identifier of the parent group.
   * @example 1
   */
  id: number;
  /**
   * The name of the parent group.
   * @example "My Group"
   */
  name: string;
}

export interface ApiStationPlaylistQueue {
  /**
   * ID of the StationPlaylistMedia record associating this track with the playlist
   * @example 1
   */
  spm_id?: number;
  /**
   * ID of the StationMedia record associating this track with the media
   * @example 1
   */
  media_id?: number;
  /**
   * The song's 32-character unique identifier hash
   * @example "9f33bbc912c19603e51be8e0987d076b"
   */
  song_id?: string;
  /**
   * The song artist.
   * @example "Chet Porter"
   */
  artist?: string;
  /**
   * The song title.
   * @example "Aluko River"
   */
  title?: string;
  /** The UNIX timestamp when this specific track was last played. */
  last_played?: number | null;
}

export interface ApiStationProfile {
  station: ApiNowPlayingStation;
  services: ApiStationServiceStatus;
  schedule: ApiStationSchedule[];
}

export type ApiStationQueueDetailed = HasLinks & {
  /** Indicates whether the song has been sent to the AutoDJ. */
  sent_to_autodj?: boolean;
  /** Indicates whether the song has already been marked as played. */
  is_played?: boolean;
  /**
   * Custom AutoDJ playback URI, if it exists.
   * @example ""
   */
  autodj_custom_uri?: string | null;
  /** Log entries on how the specific queue item was picked by the AutoDJ. */
  log?: any[] | null;
};

export interface ApiStationQuota {
  used: string;
  used_bytes: string;
  used_percent: number;
  available: string;
  available_bytes: string;
  quota: string | null;
  quota_bytes: string | null;
  is_full: boolean;
  num_files: number | null;
}

export interface ApiStationRequest {
  /**
   * Requestable ID unique identifier
   * @example 1
   */
  request_id?: string;
  /**
   * URL to directly submit request
   * @example "/api/station/1/request/1"
   */
  request_url?: string;
  song?: ApiSong;
}

export interface ApiStationSchedule {
  /**
   * Unique identifier for this schedule entry.
   * @example 1
   */
  id?: number;
  /**
   * The type of this schedule entry.
   * @example "playlist"
   */
  type?: "playlist" | "streamer";
  /**
   * Either the playlist or streamer's display name.
   * @example "Example Schedule Entry"
   */
  name?: string;
  /**
   * The name of the event.
   * @example "Example Schedule Entry"
   */
  title?: string;
  /**
   * The full name of the type and name combined.
   * @example "Playlist: Example Schedule Entry"
   */
  description?: string;
  /**
   * The start time of the schedule entry, in UNIX format.
   * @example 1609480800
   */
  start_timestamp?: number;
  /**
   * The start time of the schedule entry, in ISO 8601 format.
   * @example "020-02-19T03:00:00-06:00"
   */
  start?: string;
  /**
   * The end time of the schedule entry, in UNIX format.
   * @example 1609480800
   */
  end_timestamp?: number;
  /**
   * The start time of the schedule entry, in ISO 8601 format.
   * @example "020-02-19T05:00:00-06:00"
   */
  end?: string;
  /**
   * Whether the event is currently ongoing.
   * @example true
   */
  is_now?: boolean;
}

export interface ApiStationScheduleGroupMember {
  /**
   * The unique identifier of the member playlist.
   * @example 1
   */
  id: number;
  /**
   * The name of the member playlist.
   * @example "Example Playlist"
   */
  name: string;
  source: PlaylistSources;
  order: PlaylistOrders;
  /**
   * The weighting of this member within the group.
   * @example 3
   */
  weight: number;
  /**
   * The number of songs or member playlists in this member, if applicable.
   * @example 25
   */
  count: number | null;
  /**
   * The number of consecutive plays configured for this member.
   * @example 1
   */
  consecutive_plays: number;
  /**
   * Whether the member plays through its full cycle before advancing.
   * @example false
   */
  play_full_cycle: boolean;
  /**
   * Whether the member playlist is enabled.
   * @example true
   */
  is_enabled: boolean;
}

export interface ApiStationSchedulePlaylistEvent {
  /**
   * The unique identifier of the playlist.
   * @example 1
   */
  id: number;
  /**
   * The playlist name representing the event title.
   * @example "Example Playlist"
   */
  title: string;
  /**
   * The type of this schedule event.
   * @example "playlist"
   */
  type: "playlist";
  /**
   * The start time of this schedule event, in ISO 8601 format.
   * @example "2020-02-19T03:00:00-06:00"
   */
  start: string;
  /**
   * The end time of this schedule event, in ISO 8601 format.
   * @example "2020-02-19T05:00:00-06:00"
   */
  end: string;
  /**
   * The API URL used to edit the underlying playlist.
   * @example "/api/station/1/playlist/1"
   */
  edit_url: string;
  source: PlaylistSources;
  order: PlaylistOrders;
  playlist_type: PlaylistTypes;
  /** @example 0 */
  play_per_songs: number;
  /** @example 0 */
  play_per_minutes: number;
  /** @example 0 */
  play_per_hour_minute: number;
  /** @example 3 */
  weight: number;
  /** @example false */
  is_jingle: boolean;
  /** @example false */
  include_in_on_demand: boolean;
  /** @example false */
  avoid_duplicates: boolean;
  /**
   * True if this playlist is a group member and an ancestor group's schedule covers this entire event, so it plays via that group instead of on its own. Partially covered events report false.
   * @example false
   */
  plays_via_group_schedule: boolean;
  members: ApiStationScheduleGroupMember[];
  /**
   * The number of songs in the playlist, if it is a song-based playlist.
   * @example 25
   */
  num_songs: number | null;
  /**
   * The total length of the playlist in seconds, if it is a song-based playlist.
   * @format float
   * @example 3600
   */
  total_length: number | null;
  /**
   * The remote URL, if this is a remote URL playlist.
   * @example "https://example.com/stream"
   */
  remote_url: string | null;
  remote_type: PlaylistRemoteTypes | null;
}

export interface ApiStationScheduleStreamerEvent {
  /**
   * The unique identifier of the streamer.
   * @example 1
   */
  id: number;
  /**
   * The streamer display name representing the event title.
   * @example "Example Streamer"
   */
  title: string;
  /**
   * The type of this schedule event.
   * @example "streamer"
   */
  type: "streamer";
  /**
   * The start time of this schedule event, in ISO 8601 format.
   * @example "2020-02-19T03:00:00-06:00"
   */
  start: string;
  /**
   * The end time of this schedule event, in ISO 8601 format.
   * @example "2020-02-19T05:00:00-06:00"
   */
  end: string;
  /**
   * The API URL used to edit the underlying streamer.
   * @example "/api/station/1/streamer/1"
   */
  edit_url: string;
  /**
   * The streamer login username.
   * @example "example_dj"
   */
  streamer_username: string;
  /**
   * Comments about the streamer.
   * @example "Live every weekday evening."
   */
  comments: string | null;
  /**
   * Whether the streamer has custom artwork.
   * @example true
   */
  has_custom_art: boolean;
  /**
   * The URL of the streamer artwork, if custom artwork is present.
   * @example "/api/station/1/streamer/1/art/1.jpg"
   */
  art: string | null;
}

export interface ApiStationServiceStatus {
  /** @example true */
  backendRunning: boolean;
  /** @example true */
  frontendRunning: boolean;
}

export interface ApiStationStreamer {
  id: number;
  streamer_username: string;
  display_name: string;
}

export type ApiStationStreamerBroadcast = HasLinks & {
  id: number;
  /** @format date-time */
  timestampStart: string;
  /** @format date-time */
  timestampEnd: string | null;
  streamer: ApiStationStreamer | null;
  recording: ApiStationStreamerBroadcastRecording | null;
};

export interface ApiStationStreamerBroadcastRecording {
  path: string;
  size: number;
  downloadUrl: string;
}

export interface ApiStationsVueFilesProps {
  initialPlaylists: {
    /** @format int64 */
    id: number;
    name: string;
  }[];
  customFields: CustomField[];
  validMimeTypes: string[];
  supportsImmediateQueue: boolean;
}

export interface ApiStationsVuePodcastsProps {
  languageOptions: Record<string, string>;
  categoriesOptions: ApiFormNestedOptions;
}

export interface ApiStationsVueProfileProps {
  nowPlayingProps: ApiNowPlayingVueProps;
  publicPageEmbedUrl: string;
  publicOnDemandEmbedUrl: string;
  publicRequestEmbedUrl: string;
  publicHistoryEmbedUrl: string;
  publicScheduleEmbedUrl: string;
  publicPodcastsEmbedUrl: string;
  frontendAdminUri: string;
  frontendAdminPassword: string;
  frontendSourcePassword: string;
  frontendRelayPassword: string;
  frontendPort: number | null;
}

export interface ApiStationsVueSftpUsersProps {
  connectionUrl: string;
  connectionIp: string | null;
  connectionPort: number;
}

export interface ApiStationsVueStreamersProps {
  recordStreams: boolean;
  connectionServerUrl: string;
  connectionStreamPort: number | null;
  connectionIp: string | null;
  connectionDjMountPoint: string;
}

export interface ApiStatus {
  /** @example true */
  success: boolean;
  /** @example "Changes saved successfully." */
  message: string;
  /** @example "<b>Changes saved successfully.</b>" */
  formatted_message: string;
}

export interface ApiSystemStatus {
  /**
   * Whether the service is online or not (should always be true)
   * @example true
   */
  online: boolean;
  /**
   * The current UNIX timestamp
   * @example 1609480800
   */
  timestamp: number;
}

export interface ApiTaskWithLog {
  /**
   * The URL to view logs of the ongoing background task.
   * @format uri
   */
  logUrl: string;
}

export interface ApiTime {
  /**
   * The current UNIX timestamp
   * @example 1497652397
   */
  timestamp: number;
  /** @example "2017-06-16 10:33:17" */
  utc_datetime: string;
  /** @example "June 16, 2017" */
  utc_date: string;
  /** @example "10:33pm" */
  utc_time: string;
  /** @example "2012-12-25T16:30:00.000000Z" */
  utc_json: string;
}

export interface ApiToastNotification {
  message: string;
  title: string | null;
  variant: FlashLevels;
}

export interface HasLinks {
  links?: Record<string, string>;
}

export interface ApiHasSongFields {
  /**
   * The song title, usually "Artist - Title"
   * @example "Chet Porter - Aluko River"
   */
  text?: string;
  /**
   * The song artist.
   * @example "Chet Porter"
   */
  artist?: string | null;
  /**
   * The song title.
   * @example "Aluko River"
   */
  title?: string | null;
  /**
   * The song album.
   * @example "Moving Castle"
   */
  album?: string | null;
  /**
   * The song genre.
   * @example "Rock"
   */
  genre?: string | null;
  /**
   * The International Standard Recording Code (ISRC) of the file.
   * @example "US28E1600021"
   */
  isrc?: string | null;
  /**
   * Lyrics to the song.
   * @example ""
   */
  lyrics?: string | null;
}

export interface ApiUploadFile {
  /**
   * The destination path of the uploaded file.
   * @example "relative/path/to/file.mp3"
   */
  path: string;
  /**
   * The base64-encoded contents of the file to upload.
   * @example ""
   */
  file: string;
}

export interface ApiUploadedRecordStatus {
  hasRecord: boolean;
  url: string | null;
}

export interface VueAppGlobals {
  locale: string;
  localeShort: string;
  localeWithDashes: string;
  timeConfig: object | null;
  apiCsrf: string | null;
  dashboardProps: VueDashboardGlobals | null;
  user: VueUserGlobals | null;
  notifications: ApiToastNotification[];
  componentProps: any[] | null;
}

export interface VueDashboardGlobals {
  instanceName: string;
  homeUrl: string;
  logoutUrl: string;
  version: string;
  isDocker: boolean;
  platform: string;
  showCharts: boolean;
  showAlbumArt: boolean;
  supportedLocales: Record<string, string>;
  analyticsLevel: AnalyticsLevel;
}

export interface VueStationFeatures {
  media: boolean;
  sftp: boolean;
  podcasts: boolean;
  streamers: boolean;
  webhooks: boolean;
  requests: boolean;
  mountPoints: boolean;
  hlsStreams: boolean;
  remoteRelays: boolean;
  customLiquidsoapConfig: boolean;
  autoDjQueue: boolean;
}

export interface VueStationGlobals {
  id: number;
  name: string | null;
  shortName: string;
  description: string | null;
  isEnabled: boolean;
  hasStarted: boolean;
  needsRestart: boolean;
  timezone: string;
  offlineText: string | null;
  maxBitrate: number;
  maxMounts: number;
  maxHlsStreams: number;
  enablePublicPages: boolean;
  publicPageUrl: string;
  enableOnDemand: boolean;
  onDemandUrl: string;
  enableStreamers: boolean;
  webDjUrl: string;
  publicPodcastsUrl: string;
  publicScheduleUrl: string;
  enableRequests: boolean;
  features: VueStationFeatures;
  ipGeoAttribution: string;
  backendType: BackendAdapters;
  frontendType: FrontendAdapters;
  canReload: boolean;
  useManualAutoDj: boolean;
}

export interface VueUserGlobals {
  id: number;
  displayName: string | null;
  permissions: ApiAdminRolePermissions;
}

export interface ApiWidgetCustomization {
  /**
   * Primary accent color (hex without #).
   * @example "2196F3"
   */
  primaryColor?: string | null;
  /**
   * Background color (hex without #).
   * @example "ffffff"
   */
  backgroundColor?: string | null;
  /**
   * Text color (hex without #).
   * @example "000000"
   */
  textColor?: string | null;
  /**
   * Whether album art should be shown.
   * @example true
   */
  showAlbumArt?: boolean;
  /**
   * Whether the widget should use rounded corners.
   * @example false
   */
  roundedCorners?: boolean;
  /**
   * Whether autoplay should be requested.
   * @example false
   */
  autoplay?: boolean;
  /**
   * Whether the volume controls are visible.
   * @example true
   */
  showVolumeControls?: boolean;
  /**
   * Whether track progress is visible.
   * @example true
   */
  showTrackProgress?: boolean;
  /**
   * Whether stream selection controls are visible.
   * @example true
   */
  showStreamSelection?: boolean;
  /**
   * Whether the history button is visible.
   * @example false
   */
  showHistoryButton?: boolean;
  /**
   * Whether the request button is visible.
   * @example false
   */
  showRequestButton?: boolean;
  /**
   * Whether the playlist download button is visible.
   * @example false
   */
  showPlaylistButton?: boolean;
  /**
   * Initial player volume (0-100).
   * @min 0
   * @max 100
   * @example 75
   */
  initialVolume?: number;
  /**
   * Layout variant for the widget.
   * @example "horizontal"
   */
  layout?: string;
  /**
   * Whether to show an "open popup" button.
   * @example false
   */
  enablePopupPlayer?: boolean;
  /**
   * Whether to persist playback state across pages.
   * @example false
   */
  continuousPlay?: boolean;
  /**
   * Additional CSS applied to the widget.
   * @example ".radio-player-widget { border-radius: 12px; }"
   */
  customCss?: string | null;
}

export type ApiKey = HasSplitTokenFields & {
  user?: User;
  comment?: string;
};

export type AuditLog = HasAutoIncrementId & {
  /** @format date-time */
  timestamp: string;
  operation: 1 | 2 | 3;
  operationText: string;
  class: string;
  identifier: string;
  targetClass: string | null;
  target: string | null;
  changes: ApiAdminAuditLogChangeset[];
  user: string | null;
};

export type CustomField = HasAutoIncrementId & {
  name: string;
  /** The programmatic name for the field. Can be auto-generated from the full name. */
  short_name?: string;
  /** The media file tag this field is read from on import and written back to when the media is saved. */
  auto_assign?: string | null;
};

export interface ApiListenerDevice {
  /**
   * Summary of the listener client.
   * @example "Firefox 121.0, Windows"
   */
  client?: string | null;
  /**
   * If the listener device is likely a browser.
   * @example true
   */
  is_browser?: boolean;
  /**
   * If the listener device is likely a mobile device.
   * @example true
   */
  is_mobile?: boolean;
  /**
   * If the listener device is likely a crawler.
   * @example true
   */
  is_bot?: boolean;
  /**
   * Summary of the listener browser family.
   * @example "Firefox"
   */
  browser_family?: string | null;
  /**
   * Summary of the listener OS family.
   * @example "Windows"
   */
  os_family?: string | null;
}

export interface ApiListenerLocation {
  /**
   * A description of the location.
   * @example "Austin, Texas, US"
   */
  description?: string;
  /**
   * The approximate region/state of the listener.
   * @example "Texas"
   */
  region?: string | null;
  /**
   * The approximate city of the listener.
   * @example "Austin"
   */
  city?: string | null;
  /**
   * The approximate country of the listener.
   * @example "United States"
   */
  country?: string | null;
  /**
   * Latitude.
   * @format float
   * @example "30.000000"
   */
  lat?: number | null;
  /**
   * Longitude.
   * @format float
   * @example "-97.000000"
   */
  lon?: number | null;
}

export interface PodcastBrandingConfiguration {
  public_custom_html?: string | null;
  enable_op3_prefix?: boolean;
}

export type Relay = HasAutoIncrementId & {
  /** @example "https://custom-url.example.com" */
  base_url?: string;
  /** @example "Relay" */
  name?: string | null;
  /** @example true */
  is_visible_on_public_pages?: boolean;
  /**
   * @format date-time
   * @example "2025-01-31T21:31:58+00:00"
   */
  created_at?: string;
  /**
   * @format date-time
   * @example "2025-01-31T21:31:58+00:00"
   */
  updated_at?: string;
};

export interface Settings {
  app_unique_identifier?: string;
  /**
   * Site Base URL
   * @example "https://your.azuracast.site"
   */
  base_url?: string | null;
  /**
   * AzuraCast Instance Name
   * @example "My AzuraCast Instance"
   */
  instance_name?: string | null;
  /**
   * Prefer Browser URL (If Available)
   * @example "false"
   */
  prefer_browser_url?: boolean;
  /**
   * Use Web Proxy for Radio
   * @example "false"
   */
  use_radio_proxy?: boolean;
  /** Days of Playback History to Keep */
  history_keep_days?: number;
  /**
   * Always Use HTTPS
   * @example "false"
   */
  always_use_ssl?: boolean;
  /**
   * API 'Access-Control-Allow-Origin' header
   * @example "*"
   */
  api_access_control?: string | null;
  /**
   * Allow stations to manually edit Liquidsoap code.
   * @example "true"
   */
  enable_liquidsoap_editing?: boolean;
  /**
   * Allow stations to dispatch webhooks.
   * @example "true"
   */
  enable_all_webhooks?: boolean;
  /**
   * Prevent users from using local IPs or URLs in Webhooks, etc.
   * @example "true"
   */
  filter_local_user_urls?: boolean;
  /**
   * Whether to use high-performance static JSON for Now Playing data updates.
   * @example "false"
   */
  enable_static_nowplaying?: boolean;
  /** Listener Analytics Collection */
  analytics?: AnalyticsLevel | null;
  /**
   * Check for Updates and Announcements
   * @example "true"
   */
  check_for_updates?: boolean;
  /**
   * Results of the latest update check.
   * @example ""
   */
  update_results?: ApiAdminUpdateDetails | null;
  /**
   * The UNIX timestamp when updates were last checked.
   * @example 1609480800
   */
  update_last_run?: number;
  /**
   * Base Theme for Public Pages
   * @example "light"
   */
  public_theme?: SupportedThemes | null;
  /**
   * Hide Album Art on Public Pages
   * @example "false"
   */
  hide_album_art?: boolean;
  /**
   * Homepage Redirect URL
   * @example "https://example.com/"
   */
  homepage_redirect_url?: string | null;
  /**
   * Default Album Art URL
   * @example "https://example.com/image.jpg"
   */
  default_album_art_url?: string | null;
  /**
   * Attempt to fetch album art from external sources when processing media.
   * @example "false"
   */
  use_external_album_art_when_processing_media?: boolean;
  /**
   * Attempt to fetch album art from external sources in API requests.
   * @example "false"
   */
  use_external_album_art_in_apis?: boolean;
  /**
   * An API key to connect to Last.fm services, if provided.
   * @example "SAMPLE-API-KEY"
   */
  last_fm_api_key?: string | null;
  /**
   * Hide AzuraCast Branding on Public Pages
   * @example "false"
   */
  hide_product_name?: boolean;
  /**
   * Custom CSS for Public Pages
   * @example ""
   */
  public_custom_css?: string | null;
  /**
   * Custom JS for Public Pages
   * @example ""
   */
  public_custom_js?: string | null;
  /**
   * Custom CSS for Internal Pages
   * @example ""
   */
  internal_custom_css?: string | null;
  /**
   * Whether backup is enabled.
   * @example "false"
   */
  backup_enabled?: boolean;
  /**
   * The timecode (i.e. 400 for 4:00AM) when automated backups should run.
   * @example 400
   */
  backup_time_code?: string | null;
  /**
   * Whether to exclude media in automated backups.
   * @example "false"
   */
  backup_exclude_media?: boolean;
  /**
   * Number of backups to keep, or infinite if zero/null.
   * @example 2
   */
  backup_keep_copies?: number;
  /**
   * The storage location ID for automated backups.
   * @example 1
   */
  backup_storage_location?: number | null;
  /**
   * The output format for the automated backup.
   * @example "zip"
   */
  backup_format?: string | null;
  /**
   * The UNIX timestamp when automated backup was last run.
   * @example 1609480800
   */
  backup_last_run?: number;
  /**
   * The output of the latest automated backup task.
   * @example ""
   */
  backup_last_output?: string | null;
  /**
   * The UNIX timestamp when setup was last completed.
   * @example 1609480800
   */
  setup_complete_time?: number;
  /**
   * Temporarily disable all sync tasks.
   * @example "false"
   */
  sync_disabled?: boolean;
  /**
   * The last run timestamp for the unified sync task.
   * @example 1609480800
   */
  sync_last_run?: number;
  /**
   * This installation's external IP.
   * @example "192.168.1.1"
   */
  external_ip?: string | null;
  /**
   * The license key for the Maxmind Geolite download.
   * @example ""
   */
  geolite_license_key?: string | null;
  /**
   * The UNIX timestamp when the Maxmind Geolite was last downloaded.
   * @example 1609480800
   */
  geolite_last_run?: number;
  /**
   * Enable e-mail delivery across the application.
   * @example "true"
   */
  mail_enabled?: boolean;
  /**
   * The name of the sender of system e-mails.
   * @example "AzuraCast"
   */
  mail_sender_name?: string | null;
  /**
   * The e-mail address of the sender of system e-mails.
   * @example "example@example.com"
   */
  mail_sender_email?: string | null;
  /**
   * The host to send outbound SMTP mail.
   * @example "smtp.example.com"
   */
  mail_smtp_host?: string | null;
  /**
   * The port for sending outbound SMTP mail.
   * @example 465
   */
  mail_smtp_port?: number;
  /**
   * The username when connecting to SMTP mail.
   * @example "username"
   */
  mail_smtp_username?: string | null;
  /**
   * The password when connecting to SMTP mail.
   * @example "password"
   */
  mail_smtp_password?: string | null;
  /**
   * Whether to use a secure (TLS) connection when sending SMTP mail.
   * @example "true"
   */
  mail_smtp_secure?: boolean;
  /**
   * The external avatar service to use when fetching avatars.
   * @example "libravatar"
   */
  avatar_service?: string | null;
  /**
   * The default avatar URL.
   * @example ""
   */
  avatar_default_url?: string | null;
  /**
   * ACME (LetsEncrypt) e-mail address.
   * @example ""
   */
  acme_email?: string | null;
  /**
   * ACME (LetsEncrypt) domain name(s).
   * @example ""
   */
  acme_domains?: string | null;
  /** IP Address Source */
  ip_source?: IpSources | null;
}

export type SftpUser = HasAutoIncrementId & {
  username?: string;
  password?: string;
  publicKeys?: string | null;
};

export type Station = HasAutoIncrementId & {
  /**
   * The full display name of the station.
   * @example "AzuraTest Radio"
   */
  name?: string;
  /**
   * The URL-friendly name for the station, typically auto-generated from the full station name.
   * @example "azuratest_radio"
   */
  short_name?: string;
  /**
   * If set to 'false', prevents the station from broadcasting but leaves it in the database.
   * @example true
   */
  is_enabled?: boolean;
  frontend_type?: FrontendAdapters;
  frontend_config?: StationFrontendConfiguration;
  backend_type?: BackendAdapters;
  backend_config?: StationBackendConfiguration;
  /** @example "A sample radio station." */
  description?: string | null;
  /** @example "https://demo.azuracast.com/" */
  url?: string | null;
  /** @example "Various" */
  genre?: string | null;
  /** @example "/var/azuracast/stations/azuratest_radio" */
  radio_base_dir?: string;
  /**
   * Whether listeners can request songs to play on this station.
   * @example true
   */
  enable_requests?: boolean;
  /** @example 5 */
  request_delay?: number | null;
  /** @example 15 */
  request_threshold?: number | null;
  /** @example false */
  requests_only_via_playlists?: boolean;
  /** @example 0 */
  disconnect_deactivate_streamer?: number | null;
  /**
   * Whether streamers are allowed to broadcast to this station at all.
   * @example false
   */
  enable_streamers?: boolean;
  /**
   * Whether a streamer is currently active on the station.
   * @example false
   */
  is_streamer_live?: boolean;
  /**
   * Whether this station's public pages (player, on-demand streaming, etc.) are visible to non-authenticated users.
   * @example true
   */
  enable_public_page?: boolean;
  /**
   * Whether the public-facing API endpoints (now playing, art, etc.) are visible to non-authenticated users. Automatically enabled if 'enable_public_page' is true.
   * @example true
   */
  enable_public_api?: boolean;
  /**
   * Whether this station has a public 'on-demand' streaming and download page.
   * @example true
   */
  enable_on_demand?: boolean;
  /**
   * Whether the 'on-demand' page offers download capability.
   * @example true
   */
  enable_on_demand_download?: boolean;
  /**
   * Whether HLS streaming is enabled.
   * @example true
   */
  enable_hls?: boolean;
  /**
   * The number of 'last played' history items to show for a station in API responses.
   * @example 5
   */
  api_history_items?: number;
  /**
   * The time zone that station operations should take place in.
   * @example "UTC"
   */
  timezone?: string;
  /**
   * The maximum bitrate at which a station may broadcast, in Kbps. 0 for unlimited
   * @example 128
   */
  max_bitrate?: number;
  /**
   * The maximum number of mount points the station can have, 0 for unlimited
   * @example 3
   */
  max_mounts?: number;
  /**
   * The maximum number of HLS streams the station can have, 0 for unlimited
   * @example 3
   */
  max_hls_streams?: number;
  branding_config?: StationBrandingConfiguration;
};

export interface StationBackendConfiguration {
  charset?: string;
  dj_port?: number | null;
  telnet_port?: number | null;
  record_streams?: boolean;
  record_streams_format?: string;
  record_streams_bitrate?: number;
  use_manual_autodj?: boolean;
  /**
   * Reset the internal queue of sequential playlists when the station is restarted or its configuration is rewritten.
   * @example false
   */
  reset_sequential_queues_on_restart?: boolean;
  autodj_queue_length?: number;
  dj_mount_point?: string;
  dj_buffer?: number;
  audio_processing_method?: string;
  post_processing_include_live?: boolean;
  stereo_tool_license_key?: string | null;
  stereo_tool_configuration_path?: string | null;
  master_me_preset?: string | null;
  master_me_loudness_target?: number;
  enable_replaygain_metadata?: boolean;
  crossfade_type?: string;
  /** @format float */
  crossfade?: number;
  /**
   * The dB level above which a track is considered 'loud' ('high' parameter in 'cross.smart').
   * @format float
   */
  crossfade_smart_high?: number;
  /**
   * The dB level below which a track is considered 'quiet' ('medium' parameter in 'cross.smart').
   * @format float
   */
  crossfade_smart_medium?: number;
  /**
   * The dB difference above which two tracks are considered too different to overlap ('margin' parameter in 'cross.smart').
   * @format float
   */
  crossfade_smart_margin?: number;
  /**
   * The time range (in minutes) of the song history that duplicate prevention checks tracks and titles against, also applies to artists when duplicate_prevention_artist_time_range is not set.
   * @example 120
   */
  duplicate_prevention_time_range?: number;
  /**
   * The time range (in minutes) of the song history that duplicate prevention checks artists against, uses duplicate_prevention_time_range if set to null.
   * @example 120
   */
  duplicate_prevention_artist_time_range?: number | null;
  performance_mode?: string;
  hls_segment_length?: number;
  hls_segments_in_playlist?: number;
  hls_segments_overhead?: number;
  hls_enable_on_public_player?: boolean;
  hls_is_default?: boolean;
  live_broadcast_text?: string;
  enable_auto_cue?: boolean;
  write_playlists_to_liquidsoap?: boolean;
  share_encoders?: boolean;
  /** Custom Liquidsoap Configuration: Top Section */
  custom_config_top?: string | null;
  /** Custom Liquidsoap Configuration: Pre-Playlists Section */
  custom_config_pre_playlists?: string | null;
  /** Custom Liquidsoap Configuration: Pre-Live Section */
  custom_config_pre_live?: string | null;
  /** Custom Liquidsoap Configuration: Pre-Fade Section */
  custom_config_pre_fade?: string | null;
  /** Custom Liquidsoap Configuration: Pre-Broadcast Section */
  custom_config?: string | null;
  /** Custom Liquidsoap Configuration: Post-Broadcast Section */
  custom_config_bottom?: string | null;
}

export interface StationBrandingConfiguration {
  default_album_art_url?: string | null;
  public_custom_css?: string | null;
  public_custom_js?: string | null;
  offline_text?: string | null;
}

export interface StationFrontendConfiguration {
  custom_config?: string | null;
  source_pw?: string;
  admin_pw?: string;
  relay_pw?: string;
  streamer_pw?: string;
  port?: number | null;
  max_listeners?: number | null;
  banned_ips?: string | null;
  banned_user_agents?: string | null;
  banned_countries?: string[] | null;
  allowed_ips?: string | null;
  sc_license_id?: string | null;
  sc_user_id?: string | null;
}

export type StationHlsStream = HasAutoIncrementId & {
  /** @example "aac_lofi" */
  name?: string;
  /** @example "aac" */
  format?: HlsStreamProfiles | null;
  /** @example 128 */
  bitrate?: number | null;
};

export interface StationMediaMetadata {
  /**
   * Value (in dB) to amplify the current track to produce a uniform loudness.
   * @format float
   * @example "-1.5"
   */
  amplify?: number | null;
  /**
   * Seconds from the start of the track to end fading in.
   * @format float
   * @example "2.0"
   */
  fade_in?: number | null;
  /**
   * Seconds from the end of the track to begin fading out.
   * @format float
   * @example "2.0"
   */
  fade_out?: number | null;
  /**
   * Seconds from the start of the track to start playback (cue in).
   * @format float
   * @example "3.5"
   */
  cue_in?: number | null;
  /**
   * Seconds from the start of the track to end playback (cue out).
   * @format float
   * @example "181.5"
   */
  cue_out?: number | null;
  /**
   * Seconds from the start of the track to begin fading in the next track.
   * @format float
   * @example "180.0"
   */
  cross_start_next?: number | null;
}

export type StationMount = HasAutoIncrementId & {
  /** @example "/radio.mp3" */
  name?: string;
  /** @example "128kbps MP3" */
  display_name?: string;
  /** @example true */
  is_visible_on_public_pages?: boolean;
  /** @example false */
  is_default?: boolean;
  /** @example false */
  is_public?: boolean;
  /** @example "/error.mp3" */
  fallback_mount?: string | null;
  /** @example "https://radio.example.com:8000/radio.mp3" */
  relay_url?: string | null;
  /** @example "" */
  authhash?: string | null;
  /** @example 43200 */
  max_listener_duration?: number;
  /** @example true */
  enable_autodj?: boolean;
  /** @example "mp3" */
  autodj_format?: StreamFormats | null;
  /** @example 128 */
  autodj_bitrate?: number | null;
  /** @example "https://custom-listen-url.example.com/stream.mp3" */
  custom_listen_url?: string | null;
  frontend_config?: string | null;
  /**
   * The most recent number of unique listeners.
   * @example 10
   */
  listeners_unique?: number;
  /**
   * The most recent number of total (non-unique) listeners.
   * @example 12
   */
  listeners_total?: number;
};

export type StationPlaylist = HasAutoIncrementId & {
  /** @example "Test Playlist" */
  name?: string;
  /** @example "A playlist containing my favorite songs" */
  description?: string | null;
  type?: PlaylistTypes;
  source?: PlaylistSources;
  order?: PlaylistOrders;
  /** @example "https://remote-url.example.com/stream.mp3" */
  remote_url?: string | null;
  /** @example "stream" */
  remote_type?: PlaylistRemoteTypes | null;
  /**
   * The total time (in seconds) that Liquidsoap should buffer remote URL streams.
   * @example 0
   */
  remote_buffer?: number;
  /** @example true */
  is_enabled?: boolean;
  /**
   * If yes, do not send jingle metadata to AutoDJ or trigger web hooks.
   * @example false
   */
  is_jingle?: boolean;
  /** @example 5 */
  play_per_songs?: number;
  /** @example 120 */
  play_per_minutes?: number;
  /** @example 15 */
  play_per_hour_minute?: number;
  /**
   * The relative weight of the playlist. Larger numbers play more often than playlists with lower number weights.
   * @example 3
   */
  weight?: number;
  /** @example true */
  include_in_requests?: boolean;
  /**
   * Whether this playlist's media is included in 'on demand' download/streaming if enabled.
   * @example true
   */
  include_in_on_demand?: boolean;
  /** @example "interrupt,loop_once,single_track,merge" */
  backend_options?: string[];
  /** @example true */
  avoid_duplicates?: boolean;
  /**
   * Don't reset this playlist's queue when the station is restarted or its configuration is rewritten.
   * @example false
   */
  preserve_queue_on_restart?: boolean;
  schedule_items?: any[];
  podcasts?: any[];
  playlists?: any[];
};

export type StationPlaylistGroup = HasAutoIncrementId & {
  /**
   * The playlist name.
   * @example "My Playlist"
   */
  name?: string;
  /** @example 1 */
  weight?: number;
  /** @example 0 */
  consecutive_plays?: number;
  /** @example false */
  play_full_cycle?: boolean;
  /**
   * Keep the member's queue on a recursive queue reset of a parent playlist group, also keeps the queues of its nested members. If the same playlist is added to a group more than once, all of its entries share this setting.
   * @example false
   */
  preserve_queue_on_recursive_reset?: boolean;
  allowed_requests?: PlaylistGroupAllowedRequests;
};

export type StationRemote = HasAutoIncrementId & {
  /** @example "128kbps MP3" */
  display_name?: string;
  /** @example true */
  is_visible_on_public_pages?: boolean;
  type?: RemoteAdapters;
  /** @example "true" */
  is_editable?: boolean;
  /** @example false */
  enable_autodj?: boolean;
  /** @example "mp3" */
  autodj_format?: StreamFormats | null;
  /** @example 128 */
  autodj_bitrate?: number | null;
  /** @example "https://custom-listen-url.example.com/stream.mp3" */
  custom_listen_url?: string | null;
  /** @example "https://custom-url.example.com" */
  url?: string;
  /** @example "/stream.mp3" */
  mount?: string | null;
  /** @example "password" */
  admin_password?: string | null;
  /** @example 8000 */
  source_port?: number | null;
  /** @example "/" */
  source_mount?: string | null;
  /** @example "source" */
  source_username?: string | null;
  /** @example "password" */
  source_password?: string | null;
  /** @example false */
  is_public?: boolean;
  /**
   * The most recent number of unique listeners.
   * @example 10
   */
  listeners_unique?: number;
  /**
   * The most recent number of total (non-unique) listeners.
   * @example 12
   */
  listeners_total?: number;
};

export type StationSchedule = HasAutoIncrementId & {
  /** @example 900 */
  start_time?: number;
  /** @example 2200 */
  end_time?: number;
  /**
   * Array of ISO-8601 days (1 for Monday, 7 for Sunday)
   * @example "0,1,2,3"
   */
  days?: number[];
  /** @example false */
  loop_once?: boolean;
  /**
   * Used to suppress the global request queue while this schedule window is active.
   * @example false
   */
  prevent_requests?: boolean;
  /**
   * Reset the playlist's internal queue when this schedule window becomes active.
   * @example false
   */
  reset_queue_at_start?: boolean;
  /**
   * Also reset nested playlist groups and member playlists (playlist groups only). Members with preserve_queue_on_recursive_reset keep their queues.
   * @example false
   */
  reset_queue_recursive?: boolean;
};

/** Station streamers (DJ accounts) allowed to broadcast to a station. */
export type StationStreamer = HasAutoIncrementId & {
  /** @example "dj_test" */
  streamer_username?: string;
  /** @example "" */
  streamer_password?: string;
  /** @example "Test DJ" */
  display_name?: string;
  /** @example "This is a test DJ account." */
  comments?: string | null;
  /** @example true */
  is_active?: boolean;
  /** @example false */
  enforce_schedule?: boolean;
  /** @example 1609480800 */
  reactivate_at?: number | null;
  schedule_items?: any[];
};

/** Each individual broadcast associated with a streamer. */
export type StationStreamerBroadcast = HasAutoIncrementId;

export type StationWebhook = HasAutoIncrementId & {
  /**
   * The nickname of the webhook connector.
   * @example "Twitter Post"
   */
  name?: string | null;
  type?: WebhookTypes;
  /** @example true */
  is_enabled?: boolean;
  /** List of events that should trigger the webhook notification. */
  triggers?: any[];
  /** Detailed webhook configuration (if applicable) */
  config?: any[];
  /** Internal details used by the webhook to preserve state. */
  metadata?: any[];
};

export type StorageLocation = HasAutoIncrementId & {
  type?: StorageLocationTypes;
  adapter?: StorageLocationAdapters;
  /**
   * The local path, if the local adapter is used, or path prefix for S3/remote adapters.
   * @example "/var/azuracast/stations/azuratest_radio/media"
   */
  path?: string;
  /**
   * The credential key for S3 adapters.
   * @example "your-key-here"
   */
  s3CredentialKey?: string | null;
  /**
   * The credential secret for S3 adapters.
   * @example "your-secret-here"
   */
  s3CredentialSecret?: string | null;
  /**
   * The region for S3 adapters.
   * @example "your-region"
   */
  s3Region?: string | null;
  /**
   * The API version for S3 adapters.
   * @example "latest"
   */
  s3Version?: string | null;
  /**
   * The S3 bucket name for S3 adapters.
   * @example "your-bucket-name"
   */
  s3Bucket?: string | null;
  /**
   * The optional custom S3 endpoint S3 adapters.
   * @example "https://your-region.digitaloceanspaces.com"
   */
  s3Endpoint?: string | null;
  /** @example false */
  s3UsePathStyle?: boolean | null;
  /**
   * The optional Dropbox App Key.
   * @example ""
   */
  dropboxAppKey?: string | null;
  /**
   * The optional Dropbox App Secret.
   * @example ""
   */
  dropboxAppSecret?: string | null;
  /**
   * The optional Dropbox Auth Token.
   * @example ""
   */
  dropboxAuthToken?: string | null;
  /**
   * The host for SFTP adapters
   * @example "127.0.0.1"
   */
  sftpHost?: string | null;
  /**
   * The username for SFTP adapters
   * @example "root"
   */
  sftpUsername?: string | null;
  /**
   * The password for SFTP adapters
   * @example "abc123"
   */
  sftpPassword?: string | null;
  /**
   * The port for SFTP adapters
   * @example 20
   */
  sftpPort?: number | null;
  /** The private key for SFTP adapters */
  sftpPrivateKey?: string | null;
  /** The private key pass phrase for SFTP adapters */
  sftpPrivateKeyPassPhrase?: string | null;
  /** @example "120000" */
  storageQuotaBytes?: any;
  /** @example "50 GB" */
  storageQuota?: string | null;
  /** @example "60000" */
  storageUsedBytes?: any;
  /** @example "1 GB" */
  storageUsed?: string;
  /** @example "120000" */
  storageAvailableBytes?: any;
  /** @example "1 GB" */
  storageAvailable?: string;
};

export interface HasAutoIncrementId {
  id: number;
}

export interface HasSongFields {
  song_id?: string;
  text?: string | null;
  artist?: string | null;
  title?: string | null;
  album?: string | null;
}

export interface HasSplitTokenFields {
  id?: string;
  verifier?: string;
}

export interface HasUniqueId {
  id: string;
}

export type User = HasAutoIncrementId & {
  /** @example "demo@azuracast.com" */
  email?: string;
  /** @example "" */
  auth_password?: string;
  /** @example "Demo Account" */
  name?: string | null;
  /** @example "en_US" */
  locale?: string | null;
  /** @example true */
  show_24_hour_time?: boolean | null;
  /** @example "A1B2C3D4" */
  two_factor_secret?: string | null;
  /** @example 1609480800 */
  created_at?: number;
  /** @example 1609480800 */
  updated_at?: number;
  roles?: any[];
};

export type UserLoginToken = HasSplitTokenFields & {
  user?: User;
  type?: LoginTokenTypes;
  /** @example "SSO Login" */
  comment?: string | null;
  /** @example 1640998800 */
  created_at?: number;
  /** @example 1640998800 */
  expires_at?: number;
};

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  JsonApi = "application/vnd.api+json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "https://cat.2dgirls.date/api";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => "undefined" !== typeof query[key],
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.JsonApi]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== "string"
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) => {
      if (input instanceof FormData) {
        return input;
      }

      return Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData());
    },
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams,
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken,
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { "Content-Type": type }
            : {}),
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === "undefined" || body === null
            ? null
            : payloadFormatter(body),
      },
    ).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const responseToParse = responseFormat ? response.clone() : response;
      const data = !responseFormat
        ? r
        : await responseToParse[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title AzuraCast
 * @version 0.24.0
 * @license GNU Affero General Public License v3.0 or later (https://www.gnu.org/licenses/agpl-3.0.txt)
 * @baseUrl https://cat.2dgirls.date/api
 * @externalDocs https://github.com/AzuraCast/AzuraCast
 *
 * AzuraCast is a standalone, turnkey web radio management tool. Radio stations hosted by AzuraCast expose a public API for viewing now playing data, making requests and more.
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  admin = {
    /**
     * No description
     *
     * @tags Administration: General
     * @name AdminAcmeViewLog
     * @summary View the logs of a manually run ACME certificate renewal.
     * @request GET:/admin/acme-log/{path}
     * @secure
     */
    adminAcmeViewLog: (path: string, params: RequestParams = {}) =>
      this.request<ApiLogContents, ApiError>({
        path: `/admin/acme-log/${path}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: General
     * @name PutAdminGenerateAcmeCert
     * @summary Generate or renew ACME certificate.
     * @request PUT:/admin/acme
     * @secure
     */
    putAdminGenerateAcmeCert: (params: RequestParams = {}) =>
      this.request<ApiTaskWithLog, ApiError>({
        path: `/admin/acme`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: General
     * @name AdminListApiKeys
     * @summary List all current API keys across the system.
     * @request GET:/admin/api-keys
     * @secure
     */
    adminListApiKeys: (params: RequestParams = {}) =>
      this.request<(ApiKey & HasLinks)[], ApiError>({
        path: `/admin/api-keys`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: General
     * @name AdminCreateApiKey
     * @summary Create a new API key for a specified user.
     * @request POST:/admin/api-keys
     * @secure
     */
    adminCreateApiKey: (data: ApiAdminNewApiKey, params: RequestParams = {}) =>
      this.request<ApiAccountNewApiKey & ApiKey & HasLinks, ApiError>({
        path: `/admin/api-keys`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: General
     * @name AdminDeleteApiKey
     * @summary Delete a single API key.
     * @request DELETE:/admin/api-key/{id}
     * @secure
     */
    adminDeleteApiKey: (id: string, params: RequestParams = {}) =>
      this.request<ApiStatus, ApiError>({
        path: `/admin/api-key/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: General
     * @name GetAuditlog
     * @summary List all Audit Log actions that have taken place on the installation.
     * @request GET:/admin/auditlog
     * @secure
     */
    getAuditlog: (params: RequestParams = {}) =>
      this.request<AuditLog[], ApiError>({
        path: `/admin/auditlog`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: Backups
     * @name DeleteBackup
     * @summary Delete a given backup.
     * @request DELETE:/admin/backups/delete/{path}
     * @secure
     */
    deleteBackup: (path: string, params: RequestParams = {}) =>
      this.request<ApiStatus, ApiError>({
        path: `/admin/backups/delete/${path}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: Backups
     * @name DownloadBackup
     * @summary Download a given backup.
     * @request GET:/admin/backups/download/{path}
     * @secure
     */
    downloadBackup: (path: string, params: RequestParams = {}) =>
      this.request<File, ApiError>({
        path: `/admin/backups/download/${path}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: Backups
     * @name GetBackups
     * @summary Return a list of all current backups.
     * @request GET:/admin/backups
     * @secure
     */
    getBackups: (params: RequestParams = {}) =>
      this.request<ApiAdminBackup[], ApiError>({
        path: `/admin/backups`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: Backups
     * @name AdminBackupsViewLog
     * @summary View a specific backup log contents.
     * @request GET:/admin/backups/log/{path}
     * @secure
     */
    adminBackupsViewLog: (path: string, params: RequestParams = {}) =>
      this.request<ApiLogContents, ApiError>({
        path: `/admin/backups/log/${path}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: Backups
     * @name PostAdminDoBackup
     * @summary Initialize a manual backup.
     * @request POST:/admin/backups/run
     * @secure
     */
    postAdminDoBackup: (params: RequestParams = {}) =>
      this.request<ApiTaskWithLog, ApiError>({
        path: `/admin/backups/run`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: General
     * @name GetAdminCustomAsset
     * @summary Get the details of the custom asset of the specified type.
     * @request GET:/admin/custom_assets/{type}
     * @secure
     */
    getAdminCustomAsset: (
      type: "album_art" | "background" | "browser_icon",
      params: RequestParams = {},
    ) =>
      this.request<ApiUploadedRecordStatus, ApiError>({
        path: `/admin/custom_assets/${type}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: General
     * @name PostAdminCustomAsset
     * @summary Upload a new custom asset of the specified type.
     * @request POST:/admin/custom_assets/{type}
     * @secure
     */
    postAdminCustomAsset: (
      type: "album_art" | "background" | "browser_icon",
      data: {
        /**
         * The body of the file to upload.
         * @format binary
         */
        file?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/admin/custom_assets/${type}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: General
     * @name DeleteAdminCustomAsset
     * @summary Removes the custom asset of the specified type.
     * @request DELETE:/admin/custom_assets/{type}
     * @secure
     */
    deleteAdminCustomAsset: (
      type: "album_art" | "background" | "browser_icon",
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/admin/custom_assets/${type}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: Custom Fields
     * @name GetCustomFields
     * @summary List all current custom fields in the system.
     * @request GET:/admin/custom_fields
     * @secure
     */
    getCustomFields: (params: RequestParams = {}) =>
      this.request<(CustomField & HasLinks)[], ApiError>({
        path: `/admin/custom_fields`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: Custom Fields
     * @name AddCustomField
     * @summary Create a new custom field.
     * @request POST:/admin/custom_fields
     * @secure
     */
    addCustomField: (data: CustomField, params: RequestParams = {}) =>
      this.request<CustomField & HasLinks, ApiError>({
        path: `/admin/custom_fields`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: Custom Fields
     * @name GetCustomField
     * @summary Retrieve details for a single custom field.
     * @request GET:/admin/custom_field/{id}
     * @secure
     */
    getCustomField: (id: number, params: RequestParams = {}) =>
      this.request<CustomField & HasLinks, ApiError>({
        path: `/admin/custom_field/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: Custom Fields
     * @name EditCustomField
     * @summary Update details of a single custom field.
     * @request PUT:/admin/custom_field/{id}
     * @secure
     */
    editCustomField: (
      id: number,
      data: CustomField,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/admin/custom_field/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: Custom Fields
     * @name DeleteCustomField
     * @summary Delete a single custom field.
     * @request DELETE:/admin/custom_field/{id}
     * @secure
     */
    deleteCustomField: (id: number, params: RequestParams = {}) =>
      this.request<ApiStatus, ApiError>({
        path: `/admin/custom_field/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: Debugging
     * @name AdminDebugClearCache
     * @summary Clear the application cache (Redis).
     * @request PUT:/admin/debug/clear-cache
     * @secure
     */
    adminDebugClearCache: (params: RequestParams = {}) =>
      this.request<ApiStatus, ApiError>({
        path: `/admin/debug/clear-cache`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: Debugging
     * @name AdminDebugClearQueue
     * @summary Clear the specified message queue.
     * @request PUT:/admin/debug/clear-queue/{queue}
     * @secure
     */
    adminDebugClearQueue: (
      queue:
        | "high_priority"
        | "normal_priority"
        | "low_priority"
        | "media"
        | "backup",
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/admin/debug/clear-queue/${queue}`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: Debugging
     * @name AdminDebugClearStationComputedAutoCue
     * @summary Clear the AutoCue values Liquidsoap computed for the media of this station.
     * @request PUT:/admin/debug/station/{station_id}/clear-computed-autocue
     * @secure
     */
    adminDebugClearStationComputedAutoCue: (
      stationId: number | string,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/admin/debug/station/${stationId}/clear-computed-autocue`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: Debugging
     * @name AdminDebugClearStationQueue
     * @summary Clear the upcoming song queue and generate a new one.
     * @request PUT:/admin/debug/station/{station_id}/clearqueue
     * @secure
     */
    adminDebugClearStationQueue: (
      stationId: number | string,
      params: RequestParams = {},
    ) =>
      this.request<ApiAdminDebugLogResult, ApiError>({
        path: `/admin/debug/station/${stationId}/clearqueue`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: Debugging
     * @name GetAdminDebugQueues
     * @summary List all message queues.
     * @request GET:/admin/debug/queues
     * @secure
     */
    getAdminDebugQueues: (params: RequestParams = {}) =>
      this.request<ApiAdminDebugQueue[], ApiError>({
        path: `/admin/debug/queues`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: Debugging
     * @name GetAdminDebugStations
     * @summary List all stations with their debug links.
     * @request GET:/admin/debug/stations
     * @secure
     */
    getAdminDebugStations: (params: RequestParams = {}) =>
      this.request<ApiAdminDebugStation[], ApiError>({
        path: `/admin/debug/stations`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: Debugging
     * @name GetAdminDebugSyncTasks
     * @summary List all sync tasks and details about their run times.
     * @request GET:/admin/debug/sync-tasks
     * @secure
     */
    getAdminDebugSyncTasks: (params: RequestParams = {}) =>
      this.request<ApiAdminDebugSyncTask[], ApiError>({
        path: `/admin/debug/sync-tasks`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: Debugging
     * @name AdminDebugStationNextSong
     * @summary Get the next song to be played by the AutoDJ for a given station.
     * @request PUT:/admin/debug/station/{station_id}/nextsong
     * @secure
     */
    adminDebugStationNextSong: (
      stationId: number | string,
      params: RequestParams = {},
    ) =>
      this.request<ApiAdminDebugLogResult, ApiError>({
        path: `/admin/debug/station/${stationId}/nextsong`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: Debugging
     * @name AdminDebugStationNowPlaying
     * @summary Generate the raw Now Playing data for a given station.
     * @request PUT:/admin/debug/station/{station_id}/nowplaying
     * @secure
     */
    adminDebugStationNowPlaying: (
      stationId: number | string,
      params: RequestParams = {},
    ) =>
      this.request<ApiAdminDebugLogResult, ApiError>({
        path: `/admin/debug/station/${stationId}/nowplaying`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: Debugging
     * @name AdminDebugRunSyncTask
     * @summary Manually run a scheduled synchronized task by name.
     * @request PUT:/admin/debug/sync/{task}
     * @secure
     */
    adminDebugRunSyncTask: (task: string, params: RequestParams = {}) =>
      this.request<ApiAdminDebugLogResult, ApiError>({
        path: `/admin/debug/sync/${task}`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: Debugging
     * @name AdminDebugSyncStationMediaAllowEmptyStorage
     * @summary Run the media sync for this station without skipping cleanup when its storage shows no files.
     * @request PUT:/admin/debug/station/{station_id}/sync-media-allow-empty-storage
     * @secure
     */
    adminDebugSyncStationMediaAllowEmptyStorage: (
      stationId: number | string,
      params: RequestParams = {},
    ) =>
      this.request<ApiAdminDebugLogResult, ApiError>({
        path: `/admin/debug/station/${stationId}/sync-media-allow-empty-storage`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: Debugging
     * @name PutAdminDebugTelnetCommand
     * @summary Manually run a Telnet command on a station backend.
     * @request PUT:/admin/debug/station/{station_id}/telnet
     * @secure
     */
    putAdminDebugTelnetCommand: (
      stationId: number | string,
      params: RequestParams = {},
    ) =>
      this.request<ApiAdminDebugLogResult, ApiError>({
        path: `/admin/debug/station/${stationId}/telnet`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: General
     * @name GetGeoLite
     * @summary Get the current MaxMindDB GeoLite Database status.
     * @request GET:/admin/geolite
     * @secure
     */
    getGeoLite: (params: RequestParams = {}) =>
      this.request<ApiAdminGeoLiteStatus, ApiError>({
        path: `/admin/geolite`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: General
     * @name PostGeoLite
     * @summary Set the GeoLite MaxMindDB Database license key.
     * @request POST:/admin/geolite
     * @secure
     */
    postGeoLite: (
      data: {
        key?: string | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiAdminGeoLiteStatus, ApiError>({
        path: `/admin/geolite`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: Users
     * @name GetLoginTokens
     * @summary List all current unexpired login tokens in the system.
     * @request GET:/admin/login_tokens
     * @secure
     */
    getLoginTokens: (params: RequestParams = {}) =>
      this.request<(UserLoginToken & HasLinks)[], ApiError>({
        path: `/admin/login_tokens`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: Users
     * @name AddLoginToken
     * @summary Create a new login token.
     * @request POST:/admin/login_tokens
     * @secure
     */
    addLoginToken: (data: ApiAdminNewLoginToken, params: RequestParams = {}) =>
      this.request<ApiAdminNewLoginTokenResponse, ApiError>({
        path: `/admin/login_tokens`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: Users
     * @name GetLoginToken
     * @summary Retrieve details for a single login token.
     * @request GET:/admin/login_token/{id}
     * @secure
     */
    getLoginToken: (id: string, params: RequestParams = {}) =>
      this.request<UserLoginToken & HasLinks, ApiError>({
        path: `/admin/login_token/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: Users
     * @name DeleteLoginToken
     * @summary Delete a single login token.
     * @request DELETE:/admin/login_token/{id}
     * @secure
     */
    deleteLoginToken: (id: string, params: RequestParams = {}) =>
      this.request<ApiStatus, ApiError>({
        path: `/admin/login_token/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: General
     * @name AdminListLogs
     * @summary List all available log types for viewing.
     * @request GET:/admin/logs
     * @secure
     */
    adminListLogs: (params: RequestParams = {}) =>
      this.request<ApiAdminLogList, ApiError>({
        path: `/admin/logs`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: General
     * @name AdminViewLog
     * @summary View a specific log contents.
     * @request GET:/admin/log/{key}
     * @secure
     */
    adminViewLog: (key: string, params: RequestParams = {}) =>
      this.request<ApiLogContents, ApiError>({
        path: `/admin/log/${key}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: Roles
     * @name GetPermissions
     * @summary Return a list of all available permissions.
     * @request GET:/admin/permissions
     * @secure
     */
    getPermissions: (params: RequestParams = {}) =>
      this.request<ApiAdminPermissions, ApiError>({
        path: `/admin/permissions`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: General
     * @name AdminGetRelays
     * @summary Return a list of all currently active AzuraRelay instances.
     * @request GET:/admin/relays/list
     * @secure
     */
    adminGetRelays: (params: RequestParams = {}) =>
      this.request<Relay[], ApiError>({
        path: `/admin/relays/list`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: Roles
     * @name GetRoles
     * @summary List all current roles in the system.
     * @request GET:/admin/roles
     * @secure
     */
    getRoles: (params: RequestParams = {}) =>
      this.request<ApiAdminRole[], ApiError>({
        path: `/admin/roles`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: Roles
     * @name AddRole
     * @summary Create a new role.
     * @request POST:/admin/roles
     * @secure
     */
    addRole: (data: ApiAdminRole, params: RequestParams = {}) =>
      this.request<ApiAdminRole, ApiError>({
        path: `/admin/roles`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: Roles
     * @name GetRole
     * @summary Retrieve details for a single current role.
     * @request GET:/admin/role/{id}
     * @secure
     */
    getRole: (id: number, params: RequestParams = {}) =>
      this.request<ApiAdminRole, ApiError>({
        path: `/admin/role/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: Roles
     * @name EditRole
     * @summary Update details of a single role.
     * @request PUT:/admin/role/{id}
     * @secure
     */
    editRole: (id: number, data: ApiAdminRole, params: RequestParams = {}) =>
      this.request<ApiStatus, ApiError>({
        path: `/admin/role/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: Roles
     * @name DeleteRole
     * @summary Delete a single role.
     * @request DELETE:/admin/role/{id}
     * @secure
     */
    deleteRole: (id: number, params: RequestParams = {}) =>
      this.request<ApiStatus, ApiError>({
        path: `/admin/role/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: General
     * @name GetRsas
     * @summary Get the current Rocket Streaming Audio Server (RSAS) status.
     * @request GET:/admin/rsas
     * @secure
     */
    getRsas: (params: RequestParams = {}) =>
      this.request<ApiAdminRsasStatus, ApiError>({
        path: `/admin/rsas`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: General
     * @name PostRsas
     * @summary Upload a new Rocket Streaming Audio Server (RSAS) binary.
     * @request POST:/admin/rsas
     * @secure
     */
    postRsas: (
      data: {
        /**
         * The body of the file to upload.
         * @format binary
         */
        file?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/admin/rsas`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: General
     * @name DeleteRsas
     * @summary Removes the Rocket Streaming Audio Server (RSAS) installation.
     * @request DELETE:/admin/rsas
     * @secure
     */
    deleteRsas: (params: RequestParams = {}) =>
      this.request<ApiStatus, ApiError>({
        path: `/admin/rsas`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: General
     * @name PostRsasLicense
     * @summary Upload a new Rocket Streaming Audio Server (RSAS) license key.
     * @request POST:/admin/rsas/license
     * @secure
     */
    postRsasLicense: (
      data: {
        /**
         * The body of the file to upload.
         * @format binary
         */
        file?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/admin/rsas/license`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: General
     * @name DeleteRsasLicense
     * @summary Removes the Rocket Streaming Audio Server (RSAS) license.
     * @request DELETE:/admin/rsas/license
     * @secure
     */
    deleteRsasLicense: (params: RequestParams = {}) =>
      this.request<ApiStatus, ApiError>({
        path: `/admin/rsas/license`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: General
     * @name AdminSendTestEmail
     * @summary Send a test e-mail to confirm mail delivery settings.
     * @request POST:/admin/send-test-message
     * @secure
     */
    adminSendTestEmail: (params: RequestParams = {}) =>
      this.request<ApiStatus, ApiError>({
        path: `/admin/send-test-message`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: General
     * @name GetServerStats
     * @summary Return a list of all CPU usage stats.
     * @request GET:/admin/server/stats
     * @secure
     */
    getServerStats: (params: RequestParams = {}) =>
      this.request<ApiAdminServerStats, ApiError>({
        path: `/admin/server/stats`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: General
     * @name GetServiceDetails
     * @summary List the status of essential system services.
     * @request GET:/admin/services
     * @secure
     */
    getServiceDetails: (params: RequestParams = {}) =>
      this.request<ApiAdminServiceData[], ApiError>({
        path: `/admin/services`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: General
     * @name RestartService
     * @summary Restart the specified service.
     * @request POST:/admin/services/restart/{service}
     * @secure
     */
    restartService: (
      service: string,
      data: CustomField,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/admin/services/restart/${service}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: Settings
     * @name GetSettings
     * @summary List the current values of all editable system settings.
     * @request GET:/admin/settings
     * @secure
     */
    getSettings: (params: RequestParams = {}) =>
      this.request<Settings, ApiError>({
        path: `/admin/settings`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: Settings
     * @name EditSettings
     * @summary Update settings to modify any settings provided.
     * @request PUT:/admin/settings
     * @secure
     */
    editSettings: (data: Settings, params: RequestParams = {}) =>
      this.request<ApiStatus, ApiError>({
        path: `/admin/settings`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: General
     * @name GetShoutcast
     * @summary Get details about the Shoutcast installation.
     * @request GET:/admin/shoutcast
     * @secure
     */
    getShoutcast: (params: RequestParams = {}) =>
      this.request<ApiAdminShoutcastStatus, ApiError>({
        path: `/admin/shoutcast`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: General
     * @name PostShoutcast
     * @summary Upload a new Shoutcast binary.
     * @request POST:/admin/shoutcast
     * @secure
     */
    postShoutcast: (
      data: {
        /**
         * The body of the file to upload.
         * @format binary
         */
        file?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/admin/shoutcast`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: General
     * @name DeleteShoutcast
     * @summary Removes the installed Shoutcast binary.
     * @request DELETE:/admin/shoutcast
     * @secure
     */
    deleteShoutcast: (params: RequestParams = {}) =>
      this.request<ApiStatus, ApiError>({
        path: `/admin/shoutcast`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: Stations
     * @name PostAdminStationsClone
     * @summary Clone a station, preserving certain settings.
     * @request POST:/admin/station/{id}/clone
     * @secure
     */
    postAdminStationsClone: (
      id: number,
      data: {
        /** The name of the newly cloned station. */
        name?: string;
        /** The description of the newly cloned station. */
        description?: string;
        /** Which parts of the original station to clone. */
        clone?: (
          | "media_storage"
          | "recordings_storage"
          | "podcasts_storage"
          | "playlists"
          | "mounts"
          | "remotes"
          | "streamers"
          | "permissions"
          | "webhooks"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/admin/station/${id}/clone`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: Stations
     * @name GetAdminStationStorageLocations
     * @summary List storage locations available for assignment to a station.
     * @request GET:/admin/stations/storage-locations
     * @secure
     */
    getAdminStationStorageLocations: (params: RequestParams = {}) =>
      this.request<Record<string, ApiFormSimpleOptions>, ApiError>({
        path: `/admin/stations/storage-locations`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: Stations
     * @name AdminGetStations
     * @summary List all current stations in the system.
     * @request GET:/admin/stations
     * @secure
     */
    adminGetStations: (params: RequestParams = {}) =>
      this.request<Station[], ApiError>({
        path: `/admin/stations`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: Stations
     * @name AdminAddStation
     * @summary Create a new station.
     * @request POST:/admin/stations
     * @secure
     */
    adminAddStation: (data: Station, params: RequestParams = {}) =>
      this.request<Station, ApiError>({
        path: `/admin/stations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: Stations
     * @name AdminGetStation
     * @summary Retrieve details for a single station.
     * @request GET:/admin/station/{id}
     * @secure
     */
    adminGetStation: (id: number, params: RequestParams = {}) =>
      this.request<Station, ApiError>({
        path: `/admin/station/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: Stations
     * @name AdminEditStation
     * @summary Update details of a single station.
     * @request PUT:/admin/station/{id}
     * @secure
     */
    adminEditStation: (id: number, data: Station, params: RequestParams = {}) =>
      this.request<ApiStatus, ApiError>({
        path: `/admin/station/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: Stations
     * @name AdminDeleteStation
     * @summary Delete a single station.
     * @request DELETE:/admin/station/{id}
     * @secure
     */
    adminDeleteStation: (id: number, params: RequestParams = {}) =>
      this.request<ApiStatus, ApiError>({
        path: `/admin/station/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: General
     * @name GetStereoTool
     * @summary Get information about the Stereo Tool installation.
     * @request GET:/admin/stereo_tool
     * @secure
     */
    getStereoTool: (params: RequestParams = {}) =>
      this.request<ApiAdminStereoToolStatus, ApiError>({
        path: `/admin/stereo_tool`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: General
     * @name PostStereoTool
     * @summary Upload a new Stereo Tool binary.
     * @request POST:/admin/stereo_tool
     * @secure
     */
    postStereoTool: (
      data: {
        /**
         * The body of the file to upload.
         * @format binary
         */
        file?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/admin/stereo_tool`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: General
     * @name DeleteStereoTool
     * @summary Removes the installed Stereo Tool binary.
     * @request DELETE:/admin/stereo_tool
     * @secure
     */
    deleteStereoTool: (params: RequestParams = {}) =>
      this.request<ApiStatus, ApiError>({
        path: `/admin/stereo_tool`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: Storage Locations
     * @name GetStorageLocations
     * @summary List all current storage locations in the system.
     * @request GET:/admin/storage_locations
     * @secure
     */
    getStorageLocations: (params: RequestParams = {}) =>
      this.request<(StorageLocation & ApiAdminStorageLocation)[], ApiError>({
        path: `/admin/storage_locations`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: Storage Locations
     * @name AddStorageLocation
     * @summary Create a new storage location.
     * @request POST:/admin/storage_locations
     * @secure
     */
    addStorageLocation: (
      data: ApiAdminStorageLocation,
      params: RequestParams = {},
    ) =>
      this.request<StorageLocation & ApiAdminStorageLocation, ApiError>({
        path: `/admin/storage_locations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: Storage Locations
     * @name GetStorageLocation
     * @summary Retrieve details for a single storage location.
     * @request GET:/admin/storage_location/{id}
     * @secure
     */
    getStorageLocation: (id: number, params: RequestParams = {}) =>
      this.request<StorageLocation & ApiAdminStorageLocation, ApiError>({
        path: `/admin/storage_location/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: Storage Locations
     * @name EditStorageLocation
     * @summary Update details of a single storage location.
     * @request PUT:/admin/storage_location/{id}
     * @secure
     */
    editStorageLocation: (
      id: number,
      data: StorageLocation,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/admin/storage_location/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: Storage Locations
     * @name DeleteStorageLocation
     * @summary Delete a single storage location.
     * @request DELETE:/admin/storage_location/{id}
     * @secure
     */
    deleteStorageLocation: (id: number, params: RequestParams = {}) =>
      this.request<ApiStatus, ApiError>({
        path: `/admin/storage_location/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: General
     * @name GetUpdateStatus
     * @summary Show information about this installation and its update status.
     * @request GET:/admin/updates
     * @secure
     */
    getUpdateStatus: (params: RequestParams = {}) =>
      this.request<ApiAdminUpdateDetails, ApiError>({
        path: `/admin/updates`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: General
     * @name PutWebUpdate
     * @summary Attempts to trigger a web-based update.
     * @request PUT:/admin/updates
     * @secure
     */
    putWebUpdate: (params: RequestParams = {}) =>
      this.request<ApiStatus, ApiError>({
        path: `/admin/updates`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: Users
     * @name GetUsers
     * @summary List all current users in the system.
     * @request GET:/admin/users
     * @secure
     */
    getUsers: (params: RequestParams = {}) =>
      this.request<ApiAdminUserWithDetails[], ApiError>({
        path: `/admin/users`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: Users
     * @name AddUser
     * @summary Create a new user.
     * @request POST:/admin/users
     * @secure
     */
    addUser: (data: User, params: RequestParams = {}) =>
      this.request<ApiAdminUserWithDetails, ApiError>({
        path: `/admin/users`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: Users
     * @name GetUser
     * @summary Retrieve details for a single current user.
     * @request GET:/admin/user/{id}
     * @secure
     */
    getUser: (id: number, params: RequestParams = {}) =>
      this.request<ApiAdminUserWithDetails, ApiError>({
        path: `/admin/user/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: Users
     * @name EditUser
     * @summary Update details of a single user.
     * @request PUT:/admin/user/{id}
     * @secure
     */
    editUser: (id: number, data: User, params: RequestParams = {}) =>
      this.request<ApiStatus, ApiError>({
        path: `/admin/user/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Administration: Users
     * @name DeleteUser
     * @summary Delete a single user.
     * @request DELETE:/admin/user/{id}
     * @secure
     */
    deleteUser: (id: number, params: RequestParams = {}) =>
      this.request<ApiStatus, ApiError>({
        path: `/admin/user/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  frontend = {
    /**
     * No description
     *
     * @tags My Account
     * @name GetMyApiKeys
     * @summary List all API keys associated with your account.
     * @request GET:/frontend/account/api-keys
     * @secure
     */
    getMyApiKeys: (params: RequestParams = {}) =>
      this.request<(ApiKey & HasLinks)[], ApiError>({
        path: `/frontend/account/api-keys`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags My Account
     * @name AddMyApiKey
     * @summary Create a new API key associated with your account.
     * @request POST:/frontend/account/api-keys
     * @secure
     */
    addMyApiKey: (data: ApiKey, params: RequestParams = {}) =>
      this.request<ApiAccountNewApiKey & ApiKey & HasLinks, ApiError>({
        path: `/frontend/account/api-keys`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags My Account
     * @name GetMyApiKey
     * @summary Retrieve details for a single API key.
     * @request GET:/frontend/account/api-key/{id}
     * @secure
     */
    getMyApiKey: (id: string, params: RequestParams = {}) =>
      this.request<ApiKey & HasLinks, ApiError>({
        path: `/frontend/account/api-key/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags My Account
     * @name DeleteMyApiKey
     * @summary Delete a single API key associated with your account.
     * @request DELETE:/frontend/account/api-key/{id}
     * @secure
     */
    deleteMyApiKey: (id: string, params: RequestParams = {}) =>
      this.request<ApiStatus, ApiError>({
        path: `/frontend/account/api-key/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags My Account
     * @name GetMyTwoFactor
     * @summary Get the current two-factor authentication status of your account.
     * @request GET:/frontend/account/two-factor
     * @secure
     */
    getMyTwoFactor: (params: RequestParams = {}) =>
      this.request<ApiAccountTwoFactorStatus, ApiError>({
        path: `/frontend/account/two-factor`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags My Account
     * @name PutAccountTwoFactor
     * @summary Register a new two-factor authentication method.
     * @request PUT:/frontend/account/two-factor
     * @secure
     */
    putAccountTwoFactor: (params: RequestParams = {}) =>
      this.request<ApiStatus, ApiError>({
        path: `/frontend/account/two-factor`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags My Account
     * @name DeleteMyTwoFactor
     * @summary Remove two-factor authentication from your account.
     * @request DELETE:/frontend/account/two-factor
     * @secure
     */
    deleteMyTwoFactor: (params: RequestParams = {}) =>
      this.request<ApiStatus, ApiError>({
        path: `/frontend/account/two-factor`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags My Account
     * @name GetMe
     * @summary Show the details for your current logged-in account.
     * @request GET:/frontend/account/me
     * @secure
     */
    getMe: (params: RequestParams = {}) =>
      this.request<ApiStatus, ApiError>({
        path: `/frontend/account/me`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags My Account
     * @name PutMe
     * @summary Save changes to your logged in account.
     * @request PUT:/frontend/account/me
     * @secure
     */
    putMe: (params: RequestParams = {}) =>
      this.request<ApiStatus, ApiError>({
        path: `/frontend/account/me`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags My Account
     * @name GetAccountListPasskeys
     * @summary List currently registered passkeys.
     * @request GET:/frontend/account/passkeys
     * @secure
     */
    getAccountListPasskeys: (params: RequestParams = {}) =>
      this.request<ApiStatus, ApiError>({
        path: `/frontend/account/passkeys`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags My Account
     * @name GetAccountGetPasskey
     * @summary Get the details of a single passkey.
     * @request GET:/frontend/account/passkey/{id}
     * @secure
     */
    getAccountGetPasskey: (id: string, params: RequestParams = {}) =>
      this.request<ApiStatus, ApiError>({
        path: `/frontend/account/passkey/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags My Account
     * @name DeleteAccountPasskey
     * @summary Delete a specified passkey by ID.
     * @request DELETE:/frontend/account/passkey/{id}
     * @secure
     */
    deleteAccountPasskey: (id: string, params: RequestParams = {}) =>
      this.request<ApiStatus, ApiError>({
        path: `/frontend/account/passkey/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags My Account
     * @name ChangeMyPassword
     * @summary Change the password of your account.
     * @request PUT:/frontend/account/password
     * @secure
     */
    changeMyPassword: (
      data: ApiAccountChangePassword,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/frontend/account/password`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags My Account
     * @name GetAccountWebAuthnRegister
     * @summary Get registration details for WebAuthn registration.
     * @request GET:/frontend/account/webauthn/register
     * @secure
     */
    getAccountWebAuthnRegister: (params: RequestParams = {}) =>
      this.request<ApiStatus, ApiError>({
        path: `/frontend/account/webauthn/register`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags My Account
     * @name PutAccountWebAuthnRegister
     * @summary Submit a new registration request for WebAuthn.
     * @request PUT:/frontend/account/webauthn/register
     * @secure
     */
    putAccountWebAuthnRegister: (params: RequestParams = {}) =>
      this.request<ApiStatus, ApiError>({
        path: `/frontend/account/webauthn/register`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Miscellaneous
     * @name GetDashboardCharts
     * @summary Get the measurements for the dashboard charts.
     * @request PUT:/frontend/dashboard/charts
     * @secure
     */
    getDashboardCharts: (params: RequestParams = {}) =>
      this.request<ApiStatus, ApiError>({
        path: `/frontend/dashboard/charts`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Miscellaneous
     * @name GetNotifications
     * @summary Show all notifications your current account should see.
     * @request GET:/frontend/dashboard/notifications
     * @secure
     */
    getNotifications: (params: RequestParams = {}) =>
      this.request<ApiNotification[], ApiError>({
        path: `/frontend/dashboard/notifications`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Miscellaneous
     * @name GetDashboardStations
     * @summary List stations that can be managed by the current user account on the dashboard.
     * @request GET:/frontend/dashboard/stations
     * @secure
     */
    getDashboardStations: (params: RequestParams = {}) =>
      this.request<(ApiNowPlaying & HasLinks)[], ApiError>({
        path: `/frontend/dashboard/stations`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  status = {
    /**
     * No description
     *
     * @tags Public: Miscellaneous
     * @name GetStatus
     * @summary Returns an affirmative response if the API is active.
     * @request GET:/status
     */
    getStatus: (params: RequestParams = {}) =>
      this.request<ApiSystemStatus, any>({
        path: `/status`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  time = {
    /**
     * @description Returns the time (with formatting) in GMT and the user's local time zone, if logged in.
     *
     * @tags Public: Miscellaneous
     * @name GetTime
     * @request GET:/time
     */
    getTime: (params: RequestParams = {}) =>
      this.request<ApiTime, any>({
        path: `/time`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  internal = {
    /**
     * @description Returns all necessary information to relay all 'relayable' stations.
     *
     * @tags Administration: General
     * @name InternalGetRelayDetails
     * @request GET:/internal/relays
     * @secure
     */
    internalGetRelayDetails: (params: RequestParams = {}) =>
      this.request<ApiAdminRelay[], any>({
        path: `/internal/relays`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  nowplaying = {
    /**
     * @description Returns a full summary of all stations' current state.
     *
     * @tags Public: Now Playing
     * @name GetAllNowPlaying
     * @request GET:/nowplaying
     */
    getAllNowPlaying: (params: RequestParams = {}) =>
      this.request<ApiNowPlaying[], any>({
        path: `/nowplaying`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a full summary of the specified station's current state.
     *
     * @tags Public: Now Playing
     * @name GetStationNowPlaying
     * @request GET:/nowplaying/{station_id}
     */
    getStationNowPlaying: (
      stationId: number | string,
      params: RequestParams = {},
    ) =>
      this.request<ApiNowPlaying, ApiError>({
        path: `/nowplaying/${stationId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Public: Now Playing
     * @name GetStationNowPlayingArt
     * @summary Always redirects to the current art for the given station.
     * @request GET:/nowplaying/{station_id}/art
     */
    getStationNowPlayingArt: (
      stationId: number | string,
      params: RequestParams = {},
    ) =>
      this.request<any, void | ApiError>({
        path: `/nowplaying/${stationId}/art`,
        method: "GET",
        ...params,
      }),
  };
  openapiYml = {
    /**
     * No description
     *
     * @tags Public: Miscellaneous
     * @name GetOpenApiSpec
     * @summary Returns the OpenAPI specification document for this installation.
     * @request GET:/openapi.yml
     */
    getOpenApiSpec: (params: RequestParams = {}) =>
      this.request<File, any>({
        path: `/openapi.yml`,
        method: "GET",
        ...params,
      }),
  };
  prometheus = {
    /**
     * No description
     *
     * @tags Miscellaneous
     * @name GetPrometheus
     * @summary Returns the Prometheus measurements for this installation.
     * @request GET:/prometheus
     * @secure
     */
    getPrometheus: (params: RequestParams = {}) =>
      this.request<File, any>({
        path: `/prometheus`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  station = {
    /**
     * No description
     *
     * @tags Public: Stations
     * @name GetMediaArt
     * @summary Returns the album art for a song, or a generic image.
     * @request GET:/station/{station_id}/art/{media_id}
     */
    getMediaArt: (
      stationId: number | string,
      mediaId: string,
      params: RequestParams = {},
    ) =>
      this.request<File, void>({
        path: `/station/${stationId}/art/${mediaId}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Media
     * @name PostMediaArt
     * @summary Sets the album art for a track.
     * @request POST:/station/{station_id}/art/{media_id}
     * @secure
     */
    postMediaArt: (
      stationId: number | string,
      mediaId: number | string,
      data: {
        /**
         * The body of the file to upload.
         * @format binary
         */
        file?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/art/${mediaId}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Media
     * @name DeleteMediaArt
     * @summary Removes the album art for a track.
     * @request DELETE:/station/{station_id}/art/{media_id}
     * @secure
     */
    deleteMediaArt: (
      stationId: number | string,
      mediaId: number | string,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/art/${mediaId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Media
     * @name GetStationBulkMediaDownload
     * @summary Download a CSV containing details about all station media.
     * @request GET:/station/{station_id}/files/bulk
     * @secure
     */
    getStationBulkMediaDownload: (
      stationId: number | string,
      params: RequestParams = {},
    ) =>
      this.request<File, ApiError>({
        path: `/station/${stationId}/files/bulk`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Media
     * @name PostStationBulkMediaUpload
     * @summary Upload a CSV containing details about all station media.
     * @request POST:/station/{station_id}/files/bulk
     * @secure
     */
    postStationBulkMediaUpload: (
      stationId: number | string,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/files/bulk`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Media
     * @name PostStationBulkMediaPreview
     * @summary Preview changes from a CSV containing details about all station media.
     * @request POST:/station/{station_id}/files/bulk/preview
     * @secure
     */
    postStationBulkMediaPreview: (
      stationId: number | string,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/files/bulk/preview`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: General
     * @name GetStationCustomAsset
     * @summary Get the details of the custom asset of the specified type.
     * @request GET:/station/{station_id}/custom_assets/{type}
     * @secure
     */
    getStationCustomAsset: (
      stationId: number | string,
      type: "album_art" | "background" | "browser_icon",
      params: RequestParams = {},
    ) =>
      this.request<ApiUploadedRecordStatus, ApiError>({
        path: `/station/${stationId}/custom_assets/${type}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: General
     * @name PostStationCustomAsset
     * @summary Upload a new custom asset of the specified type.
     * @request POST:/station/{station_id}/custom_assets/{type}
     * @secure
     */
    postStationCustomAsset: (
      stationId: number | string,
      type: "album_art" | "background" | "browser_icon",
      data: {
        /**
         * The body of the file to upload.
         * @format binary
         */
        file?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/custom_assets/${type}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: General
     * @name DeleteStationCustomAsset
     * @summary Removes the custom asset of the specified type.
     * @request DELETE:/station/{station_id}/custom_assets/{type}
     * @secure
     */
    deleteStationCustomAsset: (
      stationId: number | string,
      type: "album_art" | "background" | "browser_icon",
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/custom_assets/${type}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: General
     * @name GetStationFallback
     * @summary Get the custom fallback track for a station.
     * @request GET:/station/{station_id}/fallback
     * @secure
     */
    getStationFallback: (
      stationId: number | string,
      params: RequestParams = {},
    ) =>
      this.request<ApiUploadedRecordStatus, ApiError>({
        path: `/station/${stationId}/fallback`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: General
     * @name PostStationFallback
     * @summary Update the custom fallback track for the station.
     * @request POST:/station/{station_id}/fallback
     * @secure
     */
    postStationFallback: (
      stationId: number | string,
      data: {
        /**
         * The body of the file to upload.
         * @format binary
         */
        file?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/fallback`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: General
     * @name DeleteStationFallback
     * @summary Removes the custom fallback track for a station.
     * @request DELETE:/station/{station_id}/fallback
     * @secure
     */
    deleteStationFallback: (
      stationId: number | string,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/fallback`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Media
     * @name PutStationFileBatchAction
     * @summary Perform a batch action on a collection of files/directories.
     * @request PUT:/station/{station_id}/files/batch
     * @secure
     */
    putStationFileBatchAction: (
      stationId: number | string,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/files/batch`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Media
     * @name GetStationFileDownload
     * @summary Download a file by relative path.
     * @request GET:/station/{station_id}/files/download
     * @secure
     */
    getStationFileDownload: (
      stationId: number | string,
      query?: {
        /** The relative path of the file in the Media filesystem. */
        file?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, ApiError>({
        path: `/station/${stationId}/files/download`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Media
     * @name PostUploadFile
     * @summary Upload and process a new media file.
     * @request POST:/station/{station_id}/files/upload
     * @secure
     */
    postUploadFile: (
      stationId: number | string,
      data: {
        /**
         * The body of the file to upload.
         * @format binary
         */
        file?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/files/upload`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Media
     * @name GetStationFileList
     * @summary List files in the media directory by path.
     * @request GET:/station/{station_id}/files/list
     * @secure
     */
    getStationFileList: (
      stationId: number | string,
      query: {
        currentDirectory: string;
        searchPhrase?: string | null;
        /** @default false */
        flushCache?: boolean | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiFileList[], ApiError>({
        path: `/station/${stationId}/files/list`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Media
     * @name GetStationFileDirectories
     * @summary List directories in a station media library for moving/renaming.
     * @request GET:/station/{station_id}/files/directories
     * @secure
     */
    getStationFileDirectories: (
      stationId: number | string,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/files/directories`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Media
     * @name PostStationFilesMkdir
     * @summary Create a directory in a station media directory.
     * @request POST:/station/{station_id}/files/mkdir
     * @secure
     */
    postStationFilesMkdir: (
      stationId: number | string,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/files/mkdir`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Media
     * @name GetPlayFile
     * @summary Download or play a given file by ID.
     * @request GET:/station/{station_id}/file/{id}/play
     * @secure
     */
    getPlayFile: (
      stationId: number | string,
      mediaId: number,
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<File, ApiError>({
        path: `/station/${stationId}/file/${id}/play`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Media
     * @name GetPlayFileSongId
     * @summary Download or play a given file by song_id.
     * @request GET:/station/{station_id}/file/{song_id}/play
     * @secure
     */
    getPlayFileSongId: (
      stationId: number | string,
      songId: string,
      params: RequestParams = {},
    ) =>
      this.request<File, ApiError>({
        path: `/station/${stationId}/file/${songId}/play`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Media
     * @name PostStationFilesRename
     * @summary Rename the specified files in the station media directory.
     * @request PUT:/station/{station_id}/files/rename
     * @secure
     */
    postStationFilesRename: (
      stationId: number | string,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/files/rename`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Media
     * @name GetFiles
     * @summary List all current uploaded files.
     * @request GET:/station/{station_id}/files
     * @secure
     */
    getFiles: (stationId: number | string, params: RequestParams = {}) =>
      this.request<ApiStationMedia[], ApiError>({
        path: `/station/${stationId}/files`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Media
     * @name AddFile
     * @summary Upload a new file.
     * @request POST:/station/{station_id}/files
     * @secure
     */
    addFile: (
      stationId: number | string,
      data: ApiUploadFile,
      params: RequestParams = {},
    ) =>
      this.request<ApiStationMedia, ApiError>({
        path: `/station/${stationId}/files`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Media
     * @name GetFile
     * @summary Retrieve details for a single file.
     * @request GET:/station/{station_id}/file/{id}
     * @secure
     */
    getFile: (
      stationId: number | string,
      mediaId: number,
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<ApiStationMedia, ApiError>({
        path: `/station/${stationId}/file/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Media
     * @name EditFile
     * @summary Update details of a single file.
     * @request PUT:/station/{station_id}/file/{id}
     * @secure
     */
    editFile: (
      stationId: number | string,
      mediaId: number,
      id: string,
      data: ApiStationMedia,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/file/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Media
     * @name DeleteFile
     * @summary Delete a single file.
     * @request DELETE:/station/{station_id}/file/{id}
     * @secure
     */
    deleteFile: (
      stationId: number | string,
      mediaId: number,
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/file/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: General
     * @name GetQuota
     * @summary Get the current usage and quota for a given station storage location.
     * @request GET:/station/{station_id}/quota
     * @secure
     */
    getQuota: (stationId: number | string, params: RequestParams = {}) =>
      this.request<ApiStationQuota, ApiError>({
        path: `/station/${stationId}/quota`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: General
     * @name GetQuotaOfType
     * @summary Get the current usage and quota for a given station storage location.
     * @request GET:/station/{station_id}/quota/{type}
     * @secure
     */
    getQuotaOfType: (
      stationId: number | string,
      type: string,
      params: RequestParams = {},
    ) =>
      this.request<ApiStationQuota, ApiError>({
        path: `/station/${stationId}/quota/${type}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Reports
     * @name GetStationHistory
     * @summary Return song playback history items for a given station.
     * @request GET:/station/{station_id}/history
     * @secure
     */
    getStationHistory: (
      stationId: number | string,
      query?: {
        /** The start date for records, in PHP-supported date/time format. (https://www.php.net/manual/en/datetime.formats.php) */
        start?: string;
        /** The end date for records, in PHP-supported date/time format. (https://www.php.net/manual/en/datetime.formats.php) */
        end?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiDetailedSongHistory[], ApiError>({
        path: `/station/${stationId}/history`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: HLS Streams
     * @name GetHlsStreams
     * @summary List all current HLS streams.
     * @request GET:/station/{station_id}/hls_streams
     * @secure
     */
    getHlsStreams: (stationId: number | string, params: RequestParams = {}) =>
      this.request<StationHlsStream[], ApiError>({
        path: `/station/${stationId}/hls_streams`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: HLS Streams
     * @name AddHlsStream
     * @summary Create a new HLS stream.
     * @request POST:/station/{station_id}/hls_streams
     * @secure
     */
    addHlsStream: (
      stationId: number | string,
      data: StationHlsStream,
      params: RequestParams = {},
    ) =>
      this.request<StationHlsStream, ApiError>({
        path: `/station/${stationId}/hls_streams`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: HLS Streams
     * @name GetHlsStream
     * @summary Retrieve details for a single HLS stream.
     * @request GET:/station/{station_id}/hls_stream/{id}
     * @secure
     */
    getHlsStream: (
      stationId: number | string,
      id: number,
      params: RequestParams = {},
    ) =>
      this.request<StationHlsStream, ApiError>({
        path: `/station/${stationId}/hls_stream/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: HLS Streams
     * @name EditHlsStream
     * @summary Update details of a single HLS stream.
     * @request PUT:/station/{station_id}/hls_stream/{id}
     * @secure
     */
    editHlsStream: (
      stationId: number | string,
      id: number,
      data: StationHlsStream,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/hls_stream/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: HLS Streams
     * @name DeleteHlsStream
     * @summary Delete a single HLS stream.
     * @request DELETE:/station/{station_id}/hls_stream/{id}
     * @secure
     */
    deleteHlsStream: (
      stationId: number | string,
      id: number,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/hls_stream/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Public: Stations
     * @name GetStation
     * @summary Return information about a single station.
     * @request GET:/station/{station_id}
     */
    getStation: (stationId: number | string, params: RequestParams = {}) =>
      this.request<ApiNowPlayingStation, ApiError>({
        path: `/station/${stationId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Broadcasting
     * @name ExportStationLiquidsoapConfig
     * @summary Generate an archive of all Liquidsoap configuration on your station, including custom config.
     * @request GET:/station/{station_id}/liquidsoap-config/export
     * @secure
     */
    exportStationLiquidsoapConfig: (
      stationId: number | string,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/liquidsoap-config/export`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Broadcasting
     * @name GetStationLiquidsoapConfig
     * @summary Get the generated and editable sections of the station Liquidsoap configuration.
     * @request GET:/station/{station_id}/liquidsoap-config
     * @secure
     */
    getStationLiquidsoapConfig: (
      stationId: number | string,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/liquidsoap-config`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Broadcasting
     * @name PutStationLiquidsoapConfig
     * @summary Save the editable sections of the station Liquidsoap configuration.
     * @request PUT:/station/{station_id}/liquidsoap-config
     * @secure
     */
    putStationLiquidsoapConfig: (
      stationId: number | string,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/liquidsoap-config`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Broadcasting
     * @name ImportStationLiquidsoapConfig
     * @summary Import a previously exported Liquidsoap configuration archive and replace custom config sections.
     * @request POST:/station/{station_id}/liquidsoap-config/import
     * @secure
     */
    importStationLiquidsoapConfig: (
      stationId: number | string,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/liquidsoap-config/import`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Reports
     * @name GetStationListeners
     * @summary Return detailed information about current listeners.
     * @request GET:/station/{station_id}/listeners
     * @secure
     */
    getStationListeners: (
      stationId: number | string,
      params: RequestParams = {},
    ) =>
      this.request<ApiListener[], ApiError>({
        path: `/station/${stationId}/listeners`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: General
     * @name GetStationLogs
     * @summary Return a list of available logs for the given station.
     * @request GET:/station/{station_id}/logs
     * @secure
     */
    getStationLogs: (stationId: number | string, params: RequestParams = {}) =>
      this.request<ApiLogType[], ApiError>({
        path: `/station/${stationId}/logs`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: General
     * @name GetStationLog
     * @summary View a specific log contents for the given station.
     * @request GET:/station/{station_id}/log/{key}
     * @secure
     */
    getStationLog: (
      stationId: number | string,
      key: string,
      params: RequestParams = {},
    ) =>
      this.request<ApiLogContents, ApiError>({
        path: `/station/${stationId}/log/${key}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Mount Points
     * @name GetMountIntro
     * @summary Get the intro track for a mount point.
     * @request GET:/station/{station_id}/mount/{id}/intro
     * @secure
     */
    getMountIntro: (
      stationId: number | string,
      id: number,
      params: RequestParams = {},
    ) =>
      this.request<File, ApiError>({
        path: `/station/${stationId}/mount/${id}/intro`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Mount Points
     * @name PostMountIntro
     * @summary Update the intro track for a mount point.
     * @request POST:/station/{station_id}/mount/{id}/intro
     * @secure
     */
    postMountIntro: (
      stationId: number | string,
      id: number,
      data: {
        /**
         * The body of the file to upload.
         * @format binary
         */
        file?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/mount/${id}/intro`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Mount Points
     * @name DeleteMountIntro
     * @summary Removes the intro track for a mount point.
     * @request DELETE:/station/{station_id}/mount/{id}/intro
     * @secure
     */
    deleteMountIntro: (
      stationId: number | string,
      id: number,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/mount/${id}/intro`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Mount Points
     * @name GetStationMounts
     * @summary List all current mount points.
     * @request GET:/station/{station_id}/mounts
     * @secure
     */
    getStationMounts: (
      stationId: number | string,
      params: RequestParams = {},
    ) =>
      this.request<StationMount[], ApiError>({
        path: `/station/${stationId}/mounts`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Mount Points
     * @name AddMount
     * @summary Create a new mount point.
     * @request POST:/station/{station_id}/mounts
     * @secure
     */
    addMount: (
      stationId: number | string,
      data: StationMount,
      params: RequestParams = {},
    ) =>
      this.request<StationMount, ApiError>({
        path: `/station/${stationId}/mounts`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Mount Points
     * @name GetMount
     * @summary Retrieve details for a single mount point.
     * @request GET:/station/{station_id}/mount/{id}
     * @secure
     */
    getMount: (
      stationId: number | string,
      id: number,
      params: RequestParams = {},
    ) =>
      this.request<StationMount, ApiError>({
        path: `/station/${stationId}/mount/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Mount Points
     * @name EditMount
     * @summary Update details of a single mount point.
     * @request PUT:/station/{station_id}/mount/{id}
     * @secure
     */
    editMount: (
      stationId: number | string,
      id: number,
      data: StationMount,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/mount/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Mount Points
     * @name DeleteMount
     * @summary Delete a single mount point.
     * @request DELETE:/station/{station_id}/mount/{id}
     * @secure
     */
    deleteMount: (
      stationId: number | string,
      id: number,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/mount/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Public: Stations
     * @name GetStationOnDemandDownload
     * @summary Download an on-demand playlist file by media unique ID.
     * @request GET:/station/{station_id}/ondemand/download/{media_id}
     */
    getStationOnDemandDownload: (
      stationId: number | string,
      mediaId: string,
      params: RequestParams = {},
    ) =>
      this.request<File, ApiError>({
        path: `/station/${stationId}/ondemand/download/${mediaId}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Public: Stations
     * @name GetStationOnDemand
     * @summary List all tracks available on-demand for this station.
     * @request GET:/station/{station_id}/ondemand
     */
    getStationOnDemand: (
      stationId: number | string,
      params: RequestParams = {},
    ) =>
      this.request<ApiStationOnDemand[], ApiError>({
        path: `/station/${stationId}/ondemand`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Playlists
     * @name PostStationPlaylistClone
     * @summary Create a copy of the specified playlist.
     * @request POST:/station/{station_id}/playlist/{id}/clone
     * @secure
     */
    postStationPlaylistClone: (
      stationId: number | string,
      id: number,
      data: {
        /** The name of the newly cloned playlist. */
        name?: string;
        /** Which parts of the original playlist to clone. */
        clone?: ("schedule" | "media" | "members")[];
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/playlist/${id}/clone`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Playlists
     * @name GetStationPlaylistQueue
     * @summary Get the current playback queue for the specified playlist.
     * @request GET:/station/{station_id}/playlist/{id}/queue
     * @secure
     */
    getStationPlaylistQueue: (
      stationId: number | string,
      id: number,
      params: RequestParams = {},
    ) =>
      this.request<ApiStationPlaylistQueue[], ApiError>({
        path: `/station/${stationId}/playlist/${id}/queue`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Playlists
     * @name DeletePlaylistQueue
     * @summary Reset the internal playback queue of a shuffled, song-based playlist.
     * @request DELETE:/station/{station_id}/playlist/{id}/queue
     * @secure
     */
    deletePlaylistQueue: (
      stationId: number | string,
      id: number,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/playlist/${id}/queue`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Playlists
     * @name DeleteEmptyPlaylist
     * @summary Empty the contents of a song-based playlist.
     * @request DELETE:/station/{station_id}/playlist/{id}/empty
     * @secure
     */
    deleteEmptyPlaylist: (
      stationId: number | string,
      id: number,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/playlist/${id}/empty`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Playlists
     * @name GetExportPlaylist
     * @summary Export a playlist contents in standard media player playlist format.
     * @request GET:/station/{station_id}/playlist/{id}/export/{format}
     * @secure
     */
    getExportPlaylist: (
      stationId: number | string,
      id: number,
      format: "pls" | "m3u",
      params: RequestParams = {},
    ) =>
      this.request<File, ApiError>({
        path: `/station/${stationId}/playlist/${id}/export/${format}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Playlists
     * @name GetStationPlaylistsExportConfig
     * @summary Export all of a station's playlists as a JSON configuration dump.
     * @request GET:/station/{station_id}/playlists/export-config
     * @secure
     */
    getStationPlaylistsExportConfig: (
      stationId: number | string,
      params: RequestParams = {},
    ) =>
      this.request<File, ApiError>({
        path: `/station/${stationId}/playlists/export-config`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Playlists
     * @name GetStationPlaylistExportConfig
     * @summary Export a single playlist (and any group members) as a JSON configuration dump.
     * @request GET:/station/{station_id}/playlist/{id}/export-config
     * @secure
     */
    getStationPlaylistExportConfig: (
      stationId: number | string,
      id: number,
      params: RequestParams = {},
    ) =>
      this.request<File, ApiError>({
        path: `/station/${stationId}/playlist/${id}/export-config`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Playlists
     * @name GetStationPlaylistApplyTo
     * @summary Get a list of directories that the given playlist can apply to.
     * @request GET:/station/{station_id}/playlist/{id}/apply-to
     * @secure
     */
    getStationPlaylistApplyTo: (
      stationId: number | string,
      id: number,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/playlist/${id}/apply-to`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Playlists
     * @name PutStationPlaylistApplyTo
     * @summary Apply the specified playlist to the specified directories.
     * @request PUT:/station/{station_id}/playlist/{id}/apply-to
     * @secure
     */
    putStationPlaylistApplyTo: (
      stationId: number | string,
      id: number,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/playlist/${id}/apply-to`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Playlists
     * @name GetStationPlaylistOrder
     * @summary Get the current order of sequential tracks in the specified playlist.
     * @request GET:/station/{station_id}/playlist/{id}/order
     * @secure
     */
    getStationPlaylistOrder: (
      stationId: number | string,
      id: number,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/playlist/${id}/order`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Playlists
     * @name PutStationPlaylistOrder
     * @summary Set the order of sequential tracks in the specified playlist.
     * @request PUT:/station/{station_id}/playlist/{id}/order
     * @secure
     */
    putStationPlaylistOrder: (
      stationId: number | string,
      id: number,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/playlist/${id}/order`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Playlists
     * @name PostStationPlaylistImport
     * @summary Import the contents of an uploaded playlist (PLS/M3U) file into the specified playlist.
     * @request POST:/station/{station_id}/playlist/{id}/import
     * @secure
     */
    postStationPlaylistImport: (
      stationId: number | string,
      id: number,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/playlist/${id}/import`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Playlists
     * @name PostStationPlaylistsImportConfig
     * @summary Import playlists from a JSON configuration dump, creating new playlists on the station.
     * @request POST:/station/{station_id}/playlists/import-config
     * @secure
     */
    postStationPlaylistsImportConfig: (
      stationId: number | string,
      data: {
        /**
         * The JSON configuration dump to import.
         * @format binary
         */
        config_file?: File;
        /** Optional prefix prepended to every imported playlist name. */
        name_prefix?: string | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/playlists/import-config`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Playlists
     * @name PutStationPlaylistMembers
     * @summary Set the member playlists of the specified playlist group.
     * @request PUT:/station/{station_id}/playlist/{id}/members
     * @secure
     */
    putStationPlaylistMembers: (
      stationId: number | string,
      id: number,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/playlist/${id}/members`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Playlists
     * @name PutReshufflePlaylist
     * @summary Re-shuffle a playlist whose playback order is "shuffled".
     * @request PUT:/station/{station_id}/playlist/{id}/reshuffle
     * @secure
     */
    putReshufflePlaylist: (
      stationId: number | string,
      id: number,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/playlist/${id}/reshuffle`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Playlists
     * @name PutTogglePlaylist
     * @summary Toggle a playlist between enabled and disabled status.
     * @request PUT:/station/{station_id}/playlist/{id}/toggle
     * @secure
     */
    putTogglePlaylist: (
      stationId: number | string,
      id: number,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/playlist/${id}/toggle`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Playlists
     * @name GetPlaylists
     * @summary List all current playlists.
     * @request GET:/station/{station_id}/playlists
     * @secure
     */
    getPlaylists: (
      stationId: number | string,
      query?: {
        /** Filter by playlist source. Repeat as filter[source][] to match several values. */
        "filter[source]"?: PlaylistSources;
        /** Filter by playlist type. Repeat as filter[type][] to match several values. */
        "filter[type]"?: PlaylistTypes;
        /** Filter by playback order. Repeat as filter[order][] to match several values. */
        "filter[order]"?: PlaylistOrders;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        (StationPlaylist & HasLinks & ApiStationPlaylistComputedFields)[],
        ApiError
      >({
        path: `/station/${stationId}/playlists`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Playlists
     * @name AddPlaylist
     * @summary Create a new playlist.
     * @request POST:/station/{station_id}/playlists
     * @secure
     */
    addPlaylist: (
      stationId: number | string,
      data: StationPlaylist,
      params: RequestParams = {},
    ) =>
      this.request<
        StationPlaylist & HasLinks & ApiStationPlaylistComputedFields,
        ApiError
      >({
        path: `/station/${stationId}/playlists`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Playlists
     * @name GetPlaylist
     * @summary Retrieve details for a single playlist.
     * @request GET:/station/{station_id}/playlist/{id}
     * @secure
     */
    getPlaylist: (
      stationId: number | string,
      id: number,
      params: RequestParams = {},
    ) =>
      this.request<
        StationPlaylist & HasLinks & ApiStationPlaylistComputedFields,
        ApiError
      >({
        path: `/station/${stationId}/playlist/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Playlists
     * @name EditPlaylist
     * @summary Update details of a single playlist.
     * @request PUT:/station/{station_id}/playlist/{id}
     * @secure
     */
    editPlaylist: (
      stationId: number | string,
      id: number,
      data: StationPlaylist,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/playlist/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Playlists
     * @name DeletePlaylist
     * @summary Delete a single playlist.
     * @request DELETE:/station/{station_id}/playlist/{id}
     * @secure
     */
    deletePlaylist: (
      stationId: number | string,
      id: number,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/playlist/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Controller used to respond to AJAX requests from the playlist "Schedule View".
     *
     * @tags Stations: Playlists
     * @name GetStationPlaylistsSchedule
     * @summary Return calendar events for the station's playlist schedule.
     * @request GET:/station/{station_id}/playlists/schedule
     * @secure
     */
    getStationPlaylistsSchedule: (
      stationId: number | string,
      params: RequestParams = {},
    ) =>
      this.request<ApiStationSchedulePlaylistEvent[], ApiError>({
        path: `/station/${stationId}/playlists/schedule`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Podcasts
     * @name GetEpisodes
     * @summary List all current episodes for a given podcast ID.
     * @request GET:/station/{station_id}/podcast/{podcast_id}/episodes
     * @secure
     */
    getEpisodes: (
      stationId: number | string,
      podcastId: string,
      params: RequestParams = {},
    ) =>
      this.request<ApiPodcastEpisode[], ApiError>({
        path: `/station/${stationId}/podcast/${podcastId}/episodes`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Podcasts
     * @name AddEpisode
     * @summary Create a new podcast episode.
     * @request POST:/station/{station_id}/podcast/{podcast_id}/episodes
     * @secure
     */
    addEpisode: (
      stationId: number | string,
      podcastId: string,
      data: ApiPodcastEpisode,
      params: RequestParams = {},
    ) =>
      this.request<ApiPodcastEpisode, ApiError>({
        path: `/station/${stationId}/podcast/${podcastId}/episodes`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Podcasts
     * @name GetEpisode
     * @summary Retrieve details for a single podcast episode.
     * @request GET:/station/{station_id}/podcast/{podcast_id}/episode/{id}
     * @secure
     */
    getEpisode: (
      stationId: number | string,
      podcastId: string,
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<ApiPodcastEpisode, ApiError>({
        path: `/station/${stationId}/podcast/${podcastId}/episode/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Podcasts
     * @name EditEpisode
     * @summary Update details of a single podcast episode.
     * @request PUT:/station/{station_id}/podcast/{podcast_id}/episode/{id}
     * @secure
     */
    editEpisode: (
      stationId: number | string,
      podcastId: string,
      id: string,
      data: ApiPodcastEpisode,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/podcast/${podcastId}/episode/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Podcasts
     * @name DeleteEpisode
     * @summary Delete a single podcast episode.
     * @request DELETE:/station/{station_id}/podcast/{podcast_id}/episode/{id}
     * @secure
     */
    deleteEpisode: (
      stationId: number | string,
      podcastId: string,
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/podcast/${podcastId}/episode/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Public: Stations
     * @name GetPodcastArt
     * @summary Gets the album art for a podcast.
     * @request GET:/station/{station_id}/podcast/{podcast_id}/art
     */
    getPodcastArt: (
      stationId: number | string,
      podcastId: string,
      params: RequestParams = {},
    ) =>
      this.request<File, void | ApiError>({
        path: `/station/${stationId}/podcast/${podcastId}/art`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Podcasts
     * @name PostPodcastArt
     * @summary Sets the album art for a podcast.
     * @request POST:/station/{station_id}/podcast/{podcast_id}/art
     * @secure
     */
    postPodcastArt: (
      stationId: number | string,
      podcastId: string,
      data: {
        /**
         * The body of the file to upload.
         * @format binary
         */
        file?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/podcast/${podcastId}/art`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Podcasts
     * @name DeletePodcastArt
     * @summary Removes the album art for a podcast.
     * @request DELETE:/station/{station_id}/podcast/{podcast_id}/art
     * @secure
     */
    deletePodcastArt: (
      stationId: number | string,
      podcastId: string,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/podcast/${podcastId}/art`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Playlists
     * @name PostStationPodcastBatch
     * @summary Import the contents of an uploaded playlist (PLS/M3U) file into the specified playlist.
     * @request POST:/station/{station_id}/podcast/{podcast_id}/batch
     * @secure
     */
    postStationPodcastBatch: (
      stationId: number | string,
      podcastId: string,
      data: {
        /** The action to take with the specified rows. */
        do?: "list" | "delete" | "edit";
        /** The IDs to perform batch actions on. */
        episodes?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiPodcastBatchResult[], ApiError>({
        path: `/station/${stationId}/podcast/${podcastId}/batch`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Public: Stations
     * @name GetPodcastEpisodeArt
     * @summary Gets the album art for a podcast episode.
     * @request GET:/station/{station_id}/podcast/{podcast_id}/episode/{episode_id}/art
     */
    getPodcastEpisodeArt: (
      stationId: number | string,
      podcastId: string,
      episodeId: string,
      params: RequestParams = {},
    ) =>
      this.request<File, void | ApiError>({
        path: `/station/${stationId}/podcast/${podcastId}/episode/${episodeId}/art`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Podcasts
     * @name PostPodcastEpisodeArt
     * @summary Sets the album art for a podcast episode.
     * @request POST:/station/{station_id}/podcast/{podcast_id}/episode/{episode_id}/art
     * @secure
     */
    postPodcastEpisodeArt: (
      stationId: number | string,
      podcastId: string,
      episodeId: string,
      data: {
        /**
         * The body of the file to upload.
         * @format binary
         */
        file?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/podcast/${podcastId}/episode/${episodeId}/art`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Podcasts
     * @name DeletePodcastEpisodeArt
     * @summary Removes the album art for a podcast episode.
     * @request DELETE:/station/{station_id}/podcast/{podcast_id}/episode/{episode_id}/art
     * @secure
     */
    deletePodcastEpisodeArt: (
      stationId: number | string,
      podcastId: string,
      episodeId: string,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/podcast/${podcastId}/episode/${episodeId}/art`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Public: Stations
     * @name GetStationPublicPodcastEpisode
     * @summary Get information for a public episode of a public podcast.
     * @request GET:/station/{station_id}/public/podcast/{podcast_id}/episode/{episode_id}
     */
    getStationPublicPodcastEpisode: (
      stationId: number | string,
      podcastId: string,
      episodeId: string,
      params: RequestParams = {},
    ) =>
      this.request<ApiPodcastEpisode, ApiError>({
        path: `/station/${stationId}/public/podcast/${podcastId}/episode/${episodeId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Public: Stations
     * @name GetStationPublicPodcastEpisodes
     * @summary List all visible episodes for a given podcast.
     * @request GET:/station/{station_id}/public/podcast/{podcast_id}/episodes
     */
    getStationPublicPodcastEpisodes: (
      stationId: number | string,
      podcastId: string,
      params: RequestParams = {},
    ) =>
      this.request<ApiPodcastEpisode[], ApiError>({
        path: `/station/${stationId}/public/podcast/${podcastId}/episodes`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Public: Stations
     * @name GetPodcastEpisodeMedia
     * @summary Gets the media for a podcast episode.
     * @request GET:/station/{station_id}/podcast/{podcast_id}/episode/{episode_id}/media
     */
    getPodcastEpisodeMedia: (
      stationId: number | string,
      podcastId: string,
      episodeId: string,
      params: RequestParams = {},
    ) =>
      this.request<File, ApiError>({
        path: `/station/${stationId}/podcast/${podcastId}/episode/${episodeId}/media`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Podcasts
     * @name PostPodcastEpisodeMedia
     * @summary Sets the media for a podcast episode.
     * @request POST:/station/{station_id}/podcast/{podcast_id}/episode/{episode_id}/media
     * @secure
     */
    postPodcastEpisodeMedia: (
      stationId: number | string,
      podcastId: string,
      episodeId: string,
      data: {
        /**
         * The body of the file to upload.
         * @format binary
         */
        file?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/podcast/${podcastId}/episode/${episodeId}/media`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Podcasts
     * @name DeletePodcastEpisodeMedia
     * @summary Removes the media for a podcast episode.
     * @request DELETE:/station/{station_id}/podcast/{podcast_id}/episode/{episode_id}/media
     * @secure
     */
    deletePodcastEpisodeMedia: (
      stationId: number | string,
      podcastId: string,
      episodeId: string,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/podcast/${podcastId}/episode/${episodeId}/media`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Public: Stations
     * @name GetStationPublicPodcast
     * @summary Get the public information for a given podcast.
     * @request GET:/station/{station_id}/public/podcast/{podcast_id}
     */
    getStationPublicPodcast: (
      stationId: number | string,
      podcastId: string,
      params: RequestParams = {},
    ) =>
      this.request<ApiPodcast, ApiError>({
        path: `/station/${stationId}/public/podcast/${podcastId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Public: Stations
     * @name GetStationPublicPodcasts
     * @summary List all visible public podcasts.
     * @request GET:/station/{station_id}/public/podcasts
     */
    getStationPublicPodcasts: (
      stationId: number | string,
      podcastId: string,
      params: RequestParams = {},
    ) =>
      this.request<ApiPodcast[], ApiError>({
        path: `/station/${stationId}/public/podcasts`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Podcasts
     * @name GetStationPodcastPlaylists
     * @summary Get a list of playlists that can be associated with a podcast.
     * @request GET:/station/{station_id}/podcasts/playlists
     * @secure
     */
    getStationPodcastPlaylists: (
      stationId: number | string,
      params: RequestParams = {},
    ) =>
      this.request<ApiFormSimpleOptions, ApiError>({
        path: `/station/${stationId}/podcasts/playlists`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Podcasts
     * @name GetPodcasts
     * @summary List all current podcasts.
     * @request GET:/station/{station_id}/podcasts
     * @secure
     */
    getPodcasts: (stationId: number | string, params: RequestParams = {}) =>
      this.request<ApiPodcast[], ApiError>({
        path: `/station/${stationId}/podcasts`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Podcasts
     * @name AddPodcast
     * @summary Create a new podcast.
     * @request POST:/station/{station_id}/podcasts
     * @secure
     */
    addPodcast: (
      stationId: number | string,
      data: ApiPodcast,
      params: RequestParams = {},
    ) =>
      this.request<ApiPodcast, ApiError>({
        path: `/station/${stationId}/podcasts`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Podcasts
     * @name GetPodcast
     * @summary Retrieve details for a single podcast.
     * @request GET:/station/{station_id}/podcast/{id}
     * @secure
     */
    getPodcast: (
      stationId: number | string,
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<ApiPodcast, ApiError>({
        path: `/station/${stationId}/podcast/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Podcasts
     * @name EditPodcast
     * @summary Update details of a single podcast.
     * @request PUT:/station/{station_id}/podcast/{id}
     * @secure
     */
    editPodcast: (
      stationId: number | string,
      id: string,
      data: ApiPodcast,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/podcast/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Podcasts
     * @name DeletePodcast
     * @summary Delete a single podcast.
     * @request DELETE:/station/{station_id}/podcast/{id}
     * @secure
     */
    deletePodcast: (
      stationId: number | string,
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/podcast/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: General
     * @name GetStationProfile
     * @summary Retrieve the profile of the given station.
     * @request GET:/station/{station_id}/profile
     * @secure
     */
    getStationProfile: (
      stationId: number | string,
      params: RequestParams = {},
    ) =>
      this.request<ApiStationProfile, ApiError>({
        path: `/station/${stationId}/profile`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This controller handles the specific "Edit Profile" function on a station's profile, which has different permissions and possible actions than the Admin Station Edit function.
     *
     * @tags Stations: General
     * @name GetStationProfileEdit
     * @summary Get the editable profile for the current station.
     * @request GET:/station/{station_id}/profile/edit
     * @secure
     */
    getStationProfileEdit: (
      stationId: number | string,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/profile/edit`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: General
     * @name PutStationProfileEdit
     * @summary Save the station profile for the current station.
     * @request PUT:/station/{station_id}/profile/edit
     * @secure
     */
    putStationProfileEdit: (
      stationId: number | string,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/profile/edit`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Queue
     * @name GetQueue
     * @summary Return information about the upcoming song playback queue.
     * @request GET:/station/{station_id}/queue
     * @secure
     */
    getQueue: (stationId: number | string, params: RequestParams = {}) =>
      this.request<ApiStationQueueDetailed[], ApiError>({
        path: `/station/${stationId}/queue`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Queue
     * @name GetQueueItem
     * @summary Retrieve details of a single queued item.
     * @request GET:/station/{station_id}/queue/{id}
     * @secure
     */
    getQueueItem: (
      stationId: number | string,
      id: number,
      params: RequestParams = {},
    ) =>
      this.request<ApiStationQueueDetailed, ApiError>({
        path: `/station/${stationId}/queue/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Queue
     * @name DeleteQueueItem
     * @summary Delete a single queued item.
     * @request DELETE:/station/{station_id}/queue/{id}
     * @secure
     */
    deleteQueueItem: (
      stationId: number | string,
      id: number,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/queue/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Remote Relays
     * @name GetRelays
     * @summary List all current remote relays.
     * @request GET:/station/{station_id}/remotes
     * @secure
     */
    getRelays: (stationId: number | string, params: RequestParams = {}) =>
      this.request<(StationRemote & HasLinks)[], ApiError>({
        path: `/station/${stationId}/remotes`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Remote Relays
     * @name AddRelay
     * @summary Create a new remote relay.
     * @request POST:/station/{station_id}/remotes
     * @secure
     */
    addRelay: (
      stationId: number | string,
      data: StationRemote,
      params: RequestParams = {},
    ) =>
      this.request<StationRemote & HasLinks, ApiError>({
        path: `/station/${stationId}/remotes`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Remote Relays
     * @name GetRelay
     * @summary Retrieve details for a single remote relay.
     * @request GET:/station/{station_id}/remote/{id}
     * @secure
     */
    getRelay: (
      stationId: number | string,
      id: number,
      params: RequestParams = {},
    ) =>
      this.request<StationRemote & HasLinks, ApiError>({
        path: `/station/${stationId}/remote/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Remote Relays
     * @name EditRelay
     * @summary Update details of a single remote relay.
     * @request PUT:/station/{station_id}/remote/{id}
     * @secure
     */
    editRelay: (
      stationId: number | string,
      id: number,
      data: StationRemote,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/remote/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Remote Relays
     * @name DeleteRelay
     * @summary Delete a single remote relay.
     * @request DELETE:/station/{station_id}/remote/{id}
     * @secure
     */
    deleteRelay: (
      stationId: number | string,
      id: number,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/remote/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Reports
     * @name GetStationReportBestAndWorst
     * @summary Get the "Best and Worst Performing Songs" report for a station.
     * @request GET:/station/{station_id}/reports/overview/best-and-worst
     * @secure
     */
    getStationReportBestAndWorst: (
      stationId: number | string,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/reports/overview/best-and-worst`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Reports
     * @name GetStationReportByBrowser
     * @summary Get the "Listeners by Browser" report for a station.
     * @request GET:/station/{station_id}/reports/overview/by-browser
     * @secure
     */
    getStationReportByBrowser: (
      stationId: number | string,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/reports/overview/by-browser`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Reports
     * @name GetStationReportByClient
     * @summary Get the "Listeners by Client" report for a station.
     * @request GET:/station/{station_id}/reports/overview/by-client
     * @secure
     */
    getStationReportByClient: (
      stationId: number | string,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/reports/overview/by-client`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Reports
     * @name GetStationReportByCountry
     * @summary Get the "Listeners by Country" report for a station.
     * @request GET:/station/{station_id}/reports/overview/by-country
     * @secure
     */
    getStationReportByCountry: (
      stationId: number | string,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/reports/overview/by-country`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Reports
     * @name GetStationReportByListeningTime
     * @summary Get the "Listeners by Listening Time" report for a station.
     * @request GET:/station/{station_id}/reports/overview/by-listening-time
     * @secure
     */
    getStationReportByListeningTime: (
      stationId: number | string,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/reports/overview/by-listening-time`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Reports
     * @name GetStationReportByStream
     * @summary Get the "Listeners by Stream" report for a station.
     * @request GET:/station/{station_id}/reports/overview/by-stream
     * @secure
     */
    getStationReportByStream: (
      stationId: number | string,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/reports/overview/by-stream`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Reports
     * @name GetStationReportCharts
     * @summary Get chart data for the station reports.
     * @request GET:/station/{station_id}/reports/overview/charts
     * @secure
     */
    getStationReportCharts: (
      stationId: number | string,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/reports/overview/charts`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Reports
     * @name GetStationRequestsReport
     * @summary List station requests.
     * @request GET:/station/{station_id}/reports/requests
     * @secure
     */
    getStationRequestsReport: (
      stationId: number | string,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/reports/requests`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Reports
     * @name PostStationRequestsClear
     * @summary Clear all unplayed station requests.
     * @request POST:/station/{station_id}/reports/requests/clear
     * @secure
     */
    postStationRequestsClear: (
      stationId: number | string,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/reports/requests/clear`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Reports
     * @name DeleteStationRequest
     * @summary Delete an individual station request.
     * @request DELETE:/station/{station_id}/reports/requests/{request_id}
     * @secure
     */
    deleteStationRequest: (
      stationId: number | string,
      requestId: number,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/reports/requests/${requestId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Produce a report in SoundExchange (the US webcaster licensing agency) format.
     *
     * @tags Stations: Reports
     * @name GetStationSoundExchangeReport
     * @summary Generate a SoundExchange royalty report.
     * @request GET:/station/{station_id}/reports/soundexchange
     * @secure
     */
    getStationSoundExchangeReport: (
      stationId: number | string,
      query?: {
        /** @format date */
        start_date?: string;
        /** @format date */
        end_date?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, ApiError>({
        path: `/station/${stationId}/reports/soundexchange`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Public: Stations
     * @name GetRequestableSongs
     * @summary Return a list of requestable songs.
     * @request GET:/station/{station_id}/requests
     */
    getRequestableSongs: (
      stationId: number | string,
      params: RequestParams = {},
    ) =>
      this.request<ApiStationRequest[], ApiError>({
        path: `/station/${stationId}/requests`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Public: Stations
     * @name SubmitSongRequest
     * @summary Submit a song request.
     * @request POST:/station/{station_id}/request/{request_id}
     */
    submitSongRequest: (
      stationId: number | string,
      requestId: string,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/request/${requestId}`,
        method: "POST",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Public: Stations
     * @name GetSchedule
     * @summary Return upcoming and currently ongoing schedule entries.
     * @request GET:/station/{station_id}/schedule
     */
    getSchedule: (
      stationId: number | string,
      query?: {
        /** The date/time to compare schedule items to. Defaults to the current date and time. */
        now?: string;
        /** The number of upcoming/ongoing schedule entries to return. Defaults to 5. */
        rows?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiStationSchedule[], ApiError>({
        path: `/station/${stationId}/schedule`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Broadcasting
     * @name GetServiceStatus
     * @summary Retrieve the current status of all serivces associated with the radio broadcast.
     * @request GET:/station/{station_id}/status
     * @secure
     */
    getServiceStatus: (
      stationId: number | string,
      params: RequestParams = {},
    ) =>
      this.request<ApiStationServiceStatus, ApiError>({
        path: `/station/${stationId}/status`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Broadcasting
     * @name RestartServices
     * @summary Restart all services associated with the radio broadcast.
     * @request POST:/station/{station_id}/restart
     * @secure
     */
    restartServices: (stationId: number | string, params: RequestParams = {}) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/restart`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Broadcasting
     * @name DoFrontendServiceAction
     * @summary Perform service control actions on the radio frontend (Icecast, Shoutcast, etc.)
     * @request POST:/station/{station_id}/frontend/{action}
     * @secure
     */
    doFrontendServiceAction: (
      stationId: number | string,
      action: "start" | "stop" | "reload" | "restart",
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/frontend/${action}`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Broadcasting
     * @name DoBackendServiceAction
     * @summary Perform service control actions on the radio backend (Liquidsoap)
     * @request POST:/station/{station_id}/backend/{action}
     * @secure
     */
    doBackendServiceAction: (
      stationId: number | string,
      action: "skip" | "disconnect" | "start" | "stop" | "reload" | "restart",
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/backend/${action}`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: SFTP Users
     * @name GetSftpUsers
     * @summary List all current SFTP users.
     * @request GET:/station/{station_id}/sftp-users
     * @secure
     */
    getSftpUsers: (stationId: number | string, params: RequestParams = {}) =>
      this.request<SftpUser[], ApiError>({
        path: `/station/${stationId}/sftp-users`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: SFTP Users
     * @name AddSftpUser
     * @summary Create a new SFTP user.
     * @request POST:/station/{station_id}/sftp-users
     * @secure
     */
    addSftpUser: (
      stationId: number | string,
      data: SftpUser,
      params: RequestParams = {},
    ) =>
      this.request<SftpUser, ApiError>({
        path: `/station/${stationId}/sftp-users`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: SFTP Users
     * @name GetSftpUser
     * @summary Retrieve details for a single SFTP user.
     * @request GET:/station/{station_id}/sftp-user/{id}
     * @secure
     */
    getSftpUser: (
      stationId: number | string,
      id: number,
      params: RequestParams = {},
    ) =>
      this.request<SftpUser, ApiError>({
        path: `/station/${stationId}/sftp-user/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: SFTP Users
     * @name EditSftpUser
     * @summary Update details of a single SFTP user.
     * @request PUT:/station/{station_id}/sftp-user/{id}
     * @secure
     */
    editSftpUser: (
      stationId: number | string,
      id: number,
      data: SftpUser,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/sftp-user/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: SFTP Users
     * @name DeleteSftpUser
     * @summary Delete a single SFTP user.
     * @request DELETE:/station/{station_id}/sftp-user/{id}
     * @secure
     */
    deleteSftpUser: (
      stationId: number | string,
      id: number,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/sftp-user/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Broadcasting
     * @name GetStereoToolConfiguration
     * @summary Get the Stereo Tool configuration file for a station.
     * @request GET:/station/{station_id}/stereo-tool-configuration
     * @secure
     */
    getStereoToolConfiguration: (
      stationId: number | string,
      params: RequestParams = {},
    ) =>
      this.request<ApiUploadedRecordStatus, ApiError>({
        path: `/station/${stationId}/stereo-tool-configuration`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Broadcasting
     * @name PostStereoToolConfiguration
     * @summary Update the Stereo Tool configuration file for a station.
     * @request POST:/station/{station_id}/stereo-tool-configuration
     * @secure
     */
    postStereoToolConfiguration: (
      stationId: number | string,
      data: {
        /**
         * The body of the file to upload.
         * @format binary
         */
        file?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/stereo-tool-configuration`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Broadcasting
     * @name DeleteStereoToolConfiguration
     * @summary Removes the Stereo Tool configuration file for a station.
     * @request DELETE:/station/{station_id}/stereo-tool-configuration
     * @secure
     */
    deleteStereoToolConfiguration: (
      stationId: number | string,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/stereo-tool-configuration`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Public: Stations
     * @name GetStreamerArt
     * @summary Gets the default album art for a streamer.
     * @request GET:/station/{station_id}/streamer/{id}/art
     */
    getStreamerArt: (
      stationId: number | string,
      id: number,
      params: RequestParams = {},
    ) =>
      this.request<File, void | ApiError>({
        path: `/station/${stationId}/streamer/${id}/art`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Streamers/DJs
     * @name PostStreamerArt
     * @summary Sets the default album art for a streamer.
     * @request POST:/station/{station_id}/streamer/{id}/art
     * @secure
     */
    postStreamerArt: (
      stationId: number | string,
      id: number,
      data: {
        /**
         * The body of the file to upload.
         * @format binary
         */
        file?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/streamer/${id}/art`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Streamers/DJs
     * @name DeleteStreamerArt
     * @summary Removes the default album art for a streamer.
     * @request DELETE:/station/{station_id}/streamer/{id}/art
     * @secure
     */
    deleteStreamerArt: (
      stationId: number | string,
      id: number,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/streamer/${id}/art`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Streamers/DJs
     * @name PostStationStreamerBroadcastsBatch
     * @summary Perform batch actions on the specified broadcasts.
     * @request POST:/station/{station_id}/streamer/{id}/broadcasts/batch
     * @secure
     */
    postStationStreamerBroadcastsBatch: (
      stationId: number | string,
      id: number,
      data: {
        /** The action to take with the specified rows. */
        do?: "delete";
        /** The IDs to perform batch actions on. */
        rows?: number[];
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiGenericBatchResult, ApiError>({
        path: `/station/${stationId}/streamer/${id}/broadcasts/batch`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Streamers/DJs
     * @name GetStationAllBroadcasts
     * @summary List all broadcasts associated with the station.
     * @request GET:/station/{station_id}/streamers/broadcasts
     * @secure
     */
    getStationAllBroadcasts: (
      stationId: number | string,
      params: RequestParams = {},
    ) =>
      this.request<ApiStationStreamerBroadcast[], ApiError>({
        path: `/station/${stationId}/streamers/broadcasts`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Streamers/DJs
     * @name GetStationStreamerBroadcasts
     * @summary List all broadcasts associated with the specified streamer.
     * @request GET:/station/{station_id}/streamer/{id}/broadcasts
     * @secure
     */
    getStationStreamerBroadcasts: (
      stationId: number | string,
      id: number,
      params: RequestParams = {},
    ) =>
      this.request<ApiStationStreamerBroadcast[], ApiError>({
        path: `/station/${stationId}/streamer/${id}/broadcasts`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Streamers/DJs
     * @name GetStationStreamerDownloadBroadcast
     * @summary Download a single broadcast from a streamer.
     * @request GET:/station/{station_id}/streamer/{id}/broadcast/{broadcast_id}/download
     * @secure
     */
    getStationStreamerDownloadBroadcast: (
      stationId: number | string,
      id: number,
      broadcastId: number,
      params: RequestParams = {},
    ) =>
      this.request<File, ApiError>({
        path: `/station/${stationId}/streamer/${id}/broadcast/${broadcastId}/download`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Streamers/DJs
     * @name GetStationStreamerDeleteBroadcast
     * @summary Remove a single broadcast from a streamer.
     * @request DELETE:/station/{station_id}/streamer/{id}/broadcast/{broadcast_id}
     * @secure
     */
    getStationStreamerDeleteBroadcast: (
      stationId: number | string,
      id: number,
      broadcastId: number,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/streamer/${id}/broadcast/${broadcastId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Streamers/DJs
     * @name GetStreamers
     * @summary List all current Streamer/DJ accounts for the specified station.
     * @request GET:/station/{station_id}/streamers
     * @secure
     */
    getStreamers: (stationId: number | string, params: RequestParams = {}) =>
      this.request<StationStreamer[], ApiError>({
        path: `/station/${stationId}/streamers`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Streamers/DJs
     * @name AddStreamer
     * @summary Create a new Streamer/DJ account.
     * @request POST:/station/{station_id}/streamers
     * @secure
     */
    addStreamer: (
      stationId: number | string,
      data: StationStreamer,
      params: RequestParams = {},
    ) =>
      this.request<StationStreamer, ApiError>({
        path: `/station/${stationId}/streamers`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Streamers/DJs
     * @name GetStreamer
     * @summary Retrieve details for a single Streamer/DJ account.
     * @request GET:/station/{station_id}/streamer/{id}
     * @secure
     */
    getStreamer: (
      stationId: number | string,
      id: number,
      params: RequestParams = {},
    ) =>
      this.request<StationStreamer, ApiError>({
        path: `/station/${stationId}/streamer/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Streamers/DJs
     * @name EditStreamer
     * @summary Update details of a single Streamer/DJ account.
     * @request PUT:/station/{station_id}/streamer/{id}
     * @secure
     */
    editStreamer: (
      stationId: number | string,
      id: number,
      data: StationStreamer,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/streamer/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Streamers/DJs
     * @name DeleteStreamer
     * @summary Delete a single Streamer/DJ account.
     * @request DELETE:/station/{station_id}/streamer/{id}
     * @secure
     */
    deleteStreamer: (
      stationId: number | string,
      id: number,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/streamer/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Streamers/DJs
     * @name GetStationStreamersSchedule
     * @summary Return calendar events for the station's streamer/DJ schedule.
     * @request GET:/station/{station_id}/streamers/schedule
     * @secure
     */
    getStationStreamersSchedule: (
      stationId: number | string,
      params: RequestParams = {},
    ) =>
      this.request<ApiStationScheduleStreamerEvent[], ApiError>({
        path: `/station/${stationId}/streamers/schedule`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: General
     * @name PostStationNowPlayingUpdate
     * @summary Manually update the Now Playing metadata for the station.
     * @request POST:/station/{station_id}/nowplaying/update
     * @secure
     */
    postStationNowPlayingUpdate: (
      stationId: number | string,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/nowplaying/update`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Media
     * @name GetStationMediaWaveform
     * @summary Get waveform data for a media ID (for the Visual Cue Editor).
     * @request GET:/station/{station_id}/waveform/{media_id}
     * @secure
     */
    getStationMediaWaveform: (
      stationId: number | string,
      id: number,
      mediaId: string,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/waveform/${mediaId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Media
     * @name PostStationMediaWaveform
     * @summary Save cached waveform data for a media ID (for the Visual Cue Editor).
     * @request POST:/station/{station_id}/waveform/{media_id}
     * @secure
     */
    postStationMediaWaveform: (
      stationId: number | string,
      id: number,
      mediaId: string,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/waveform/${mediaId}`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Web Hooks
     * @name PutStationWebhookTest
     * @summary Send a test dispatch of a webhook with the current Now Playing data for the station.
     * @request PUT:/station/{station_id}/webhook/{id}/test
     * @secure
     */
    putStationWebhookTest: (
      stationId: number | string,
      id: number,
      params: RequestParams = {},
    ) =>
      this.request<ApiTaskWithLog, ApiError>({
        path: `/station/${stationId}/webhook/${id}/test`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Web Hooks
     * @name GetWebhookTestLog
     * @summary View a specific webhook test dispatch log contents.
     * @request GET:/station/{station_id}/webhooks/{id}/test-log/{path}
     * @secure
     */
    getWebhookTestLog: (
      stationId: number | string,
      id: number,
      path: string,
      params: RequestParams = {},
    ) =>
      this.request<ApiLogContents, ApiError>({
        path: `/station/${stationId}/webhooks/${id}/test-log/${path}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Web Hooks
     * @name PutStationWebhookToggle
     * @summary Toggle the enabled/disabled status of a webhook.
     * @request PUT:/station/{station_id}/webhook/{id}/toggle
     * @secure
     */
    putStationWebhookToggle: (
      stationId: number | string,
      id: number,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/webhook/${id}/toggle`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Web Hooks
     * @name GetWebhooks
     * @summary List all current web hooks.
     * @request GET:/station/{station_id}/webhooks
     * @secure
     */
    getWebhooks: (stationId: number | string, params: RequestParams = {}) =>
      this.request<StationWebhook[], ApiError>({
        path: `/station/${stationId}/webhooks`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Web Hooks
     * @name AddWebhook
     * @summary Create a new web hook.
     * @request POST:/station/{station_id}/webhooks
     * @secure
     */
    addWebhook: (
      stationId: number | string,
      data: StationWebhook,
      params: RequestParams = {},
    ) =>
      this.request<StationWebhook, ApiError>({
        path: `/station/${stationId}/webhooks`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Web Hooks
     * @name GetWebhook
     * @summary Retrieve details for a single web hook.
     * @request GET:/station/{station_id}/webhook/{id}
     * @secure
     */
    getWebhook: (
      stationId: number | string,
      id: number,
      params: RequestParams = {},
    ) =>
      this.request<StationWebhook, ApiError>({
        path: `/station/${stationId}/webhook/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Web Hooks
     * @name EditWebhook
     * @summary Update details of a single web hook.
     * @request PUT:/station/{station_id}/webhook/{id}
     * @secure
     */
    editWebhook: (
      stationId: number | string,
      id: number,
      data: StationWebhook,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/webhook/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Web Hooks
     * @name DeleteWebhook
     * @summary Delete a single web hook.
     * @request DELETE:/station/{station_id}/webhook/{id}
     * @secure
     */
    deleteWebhook: (
      stationId: number | string,
      id: number,
      params: RequestParams = {},
    ) =>
      this.request<ApiStatus, ApiError>({
        path: `/station/${stationId}/webhook/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stations: Web Hooks
     * @name CloneWebhook
     * @summary Duplicate a single web hook.
     * @request POST:/station/{station_id}/webhook/{id}/clone
     * @secure
     */
    cloneWebhook: (
      stationId: number | string,
      id: number,
      params: RequestParams = {},
    ) =>
      this.request<StationWebhook, ApiError>({
        path: `/station/${stationId}/webhook/${id}/clone`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  stations = {
    /**
     * No description
     *
     * @tags Public: Stations
     * @name GetStations
     * @summary Returns a list of stations.
     * @request GET:/stations
     */
    getStations: (params: RequestParams = {}) =>
      this.request<ApiNowPlayingStation[], any>({
        path: `/stations`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
}
