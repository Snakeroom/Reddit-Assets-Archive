// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8.31ff06e329f844f6e6e9.js
// Retrieved at 1/4/2023, 2:50:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"], {
		"./src/lib/colors/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "e", (function() {
				return o
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "a", (function() {
				return n
			})), s.d(t, "d", (function() {
				return r
			})), s.d(t, "f", (function() {
				return l
			})), s.d(t, "g", (function() {
				return c
			}));
			const i = "#000",
				o = "#FFF",
				a = "#FF4500",
				n = "#0079D3",
				r = "#46D160",
				l = {
					black: i,
					white: o,
					orangered: a,
					alienblue: n,
					tone1: "#1A1A1B",
					tone2: "#6A6D6F",
					tone3: "#878A8C",
					tone4: "#D3D6DA",
					tone5: "#EDEFF1",
					tone6: "#F6F7F8",
					tone7: "#FFFFFF",
					primary: "#24A0ED",
					secondary: "#006CBF",
					upvote: a,
					downvote: "#7193FF",
					positive: r,
					negative: "#EA0027",
					caution: "#FFB000",
					admin: a,
					moderator: "#46D160",
					self: "#0DD3BB",
					coins: "#DDBD37",
					live: a,
					nsfw: "#FF585B",
					spoiler: "#1A1A1B"
				},
				c = {
					...l,
					tone1: "#D7DADC",
					tone2: "#818384",
					tone3: "#565758",
					tone4: "#3A3A3C",
					tone5: "#272729",
					tone6: "#1A1A1B",
					tone7: "#121213",
					primary: "#006CBF",
					secondary: "#24A0ED",
					coins: "#FFE600",
					spoiler: "#D7DADC"
				}
		},
		"./src/lib/getMobileOperatingSystem/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return a
			}));
			const i = "Android",
				o = () => {
					const e = navigator.userAgent || navigator.vendor || window.opera;
					return /android/i.test(e) ? i : /iPad|iPhone|iPod/.test(e) && !window.MSStream ? "iOS" : "unknown"
				},
				a = () => o() === i || "iOS" === o()
		},
		"./src/lib/unicodeUtils/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return o
			}));
			const i = e => {
					let t = 0,
						s = 0;
					const i = [0];
					for (const o of e) t++, s += o.length, i[t] = s;
					return i
				},
				o = e => {
					let t = 0,
						s = 0;
					const i = [];
					for (const o of e) {
						for (let e = 0; e < o.length; e++) i[s] = t, s++;
						t++
					}
					return i[s] = t, i
				}
		},
		"./src/reddit/components/HTML5StreamPlayer/BlurImage/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_1chxf6wi6yizUXVYKuz67P",
				component: "_1chxf6wi6yizUXVYKuz67P"
			}
		},
		"./src/reddit/components/HTML5StreamPlayer/ControlBar/index.m.less": function(e, t, s) {
			e.exports = {
				baseControlStyles: "_2rtFq5-gNnsnqTzEcTSmVx",
				NormalControl: "_3MU1RfVON0x2Jtnz9Zq3FA",
				normalControl: "_3MU1RfVON0x2Jtnz9Zq3FA",
				TooltipControl: "_1mDDkogVo82R5-IFxvyPRX",
				tooltipControl: "_1mDDkogVo82R5-IFxvyPRX",
				AnimatedSettingIconParent: "_3KjMjt45Pg4_LoShJNFMEf",
				animatedSettingIconParent: "_3KjMjt45Pg4_LoShJNFMEf",
				baseIconStyles: "_2c7UOdkceyJz77qZPoGPAL",
				ControlCollapse: "_3uhleNVV7YkJm0tszcz4z9",
				controlCollapse: "_3uhleNVV7YkJm0tszcz4z9",
				ControlExpand: "_3ly5pJnuzH6jga1JGXpOXD",
				controlExpand: "_3ly5pJnuzH6jga1JGXpOXD",
				ControlPlay: "fqsG3oqeIwcEC-HTRf23d",
				controlPlay: "fqsG3oqeIwcEC-HTRf23d",
				ControlSnoo: "_2Zt53GmI1y_S0N7pA0jMc0",
				controlSnoo: "_2Zt53GmI1y_S0N7pA0jMc0",
				ControlVolume: "_2W9KLflUho3xU7KURAaHwH",
				controlVolume: "_2W9KLflUho3xU7KURAaHwH",
				Time: "_1z-qg2gzYKkI37gkYYJCi0",
				time: "_1z-qg2gzYKkI37gkYYJCi0",
				LiveLabel: "_1s8L9kNAgwvsmhnrpHl4Ef",
				liveLabel: "_1s8L9kNAgwvsmhnrpHl4Ef",
				ControlScrubber: "_3YQsKErciDXsBNWhb0bzul",
				controlScrubber: "_3YQsKErciDXsBNWhb0bzul",
				VolumeControl: "_3nTkqMMtsoqxVmhplDRef3",
				volumeControl: "_3nTkqMMtsoqxVmhplDRef3",
				SettingIcon: "X3KvZpgZg_2f0etJY2Ba7",
				settingIcon: "X3KvZpgZg_2f0etJY2Ba7",
				VideoSettingContainer: "_1s7GuSZPqjgn0QP60a6asr",
				videoSettingContainer: "_1s7GuSZPqjgn0QP60a6asr",
				ControlBarContainer: "gUpEQXQu8G8UvISmBIPsj",
				controlBarContainer: "gUpEQXQu8G8UvISmBIPsj",
				AudioOnlyControlBar: "_35yCa6dYJNzUGsRDLtEoWU",
				audioOnlyControlBar: "_35yCa6dYJNzUGsRDLtEoWU",
				mHasZeroOpacity: "_1RZSSlyqzokrcxh0ESwE2e",
				button: "_15cvJJTKClcHJuPN2mcpY4"
			}
		},
		"./src/reddit/components/HTML5StreamPlayer/ControlGradient/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_3YDPJHFl8YQG4TIAGQwHwK",
				component: "_3YDPJHFl8YQG4TIAGQwHwK"
			}
		},
		"./src/reddit/components/HTML5StreamPlayer/CreditPill/index.m.less": function(e, t, s) {
			e.exports = {
				creditPillStyles: "_20iR16Ub7Vl1C-DCuvSdMB",
				stitchIcon: "_1zWeP05d23MUl79DcPqjpV"
			}
		},
		"./src/reddit/components/HTML5StreamPlayer/ErrorMessage/index.m.less": function(e, t, s) {
			e.exports = {
				ErrorMessageContainer: "_2g633AWSIbFBLBxPXC882A",
				errorMessageContainer: "_2g633AWSIbFBLBxPXC882A"
			}
		},
		"./src/reddit/components/HTML5StreamPlayer/ReplayVideo/index.m.less": function(e, t, s) {
			e.exports = {
				Centered: "_241TIL5Gnyx3yLobU95FlI",
				centered: "_241TIL5Gnyx3yLobU95FlI",
				EndedOverlay: "_3G7xHJZQMrQlpjhNDQI2fe",
				endedOverlay: "_3G7xHJZQMrQlpjhNDQI2fe",
				ReplayText: "qDCxOHuaGNjcgDp5-rvJr",
				replayText: "qDCxOHuaGNjcgDp5-rvJr",
				ReplayButton: "_2KpvSaYm8FNb5KzZzf4-TO",
				replayButton: "_2KpvSaYm8FNb5KzZzf4-TO"
			}
		},
		"./src/reddit/components/HTML5StreamPlayer/SeekBar/index.m.less": function(e, t, s) {
			e.exports = {
				Thumb: "_2MDmJfq0z5K-d2xH--GnRU",
				thumb: "_2MDmJfq0z5K-d2xH--GnRU",
				ProgressBar: "_3fnsfWuIyofBJBBCbeOZzM",
				progressBar: "_3fnsfWuIyofBJBBCbeOZzM",
				Floating: "AZ2rAoFxu6aiCBbBq02Sr",
				floating: "AZ2rAoFxu6aiCBbBq02Sr",
				PreviewVideo: "V26VfIGfGxnmQGCoWYGY7",
				previewVideo: "V26VfIGfGxnmQGCoWYGY7",
				PreviewTime: "_2PInUKITfsesytaTfWfG42",
				previewTime: "_2PInUKITfsesytaTfWfG42",
				VideoSeekbar: "_3-Dc7BBLD7JWsyF3pV-rsH",
				videoSeekbar: "_3-Dc7BBLD7JWsyF3pV-rsH",
				Mainbar: "_2uVDwsKlmWPhYjwe_hYwKZ",
				mainbar: "_2uVDwsKlmWPhYjwe_hYwKZ",
				Bar: "_4UI_04IgDx06P4biEkiF3",
				bar: "_4UI_04IgDx06P4biEkiF3",
				Background: "_2uPlpBWBrO4n82P3YvBGF_",
				background: "_2uPlpBWBrO4n82P3YvBGF_",
				Lookahead: "l8jnP9bxmZRCAmhfPBTa1",
				lookahead: "l8jnP9bxmZRCAmhfPBTa1",
				Buffered: "_169ZVSyFxp9z4y1H0OYA7w",
				buffered: "_169ZVSyFxp9z4y1H0OYA7w",
				Progress: "_3LxsYVQvMOr6phpuWaScdt",
				progress: "_3LxsYVQvMOr6phpuWaScdt",
				Live: "YTPNvBfuKbdKUEJL6hPJT",
				live: "YTPNvBfuKbdKUEJL6hPJT"
			}
		},
		"./src/reddit/components/HTML5StreamPlayer/SettingControl/index.m.less": function(e, t, s) {
			e.exports = {
				SettingControlContainer: "_2XC4hSYLNzvTJ9n8Qx5t2E",
				settingControlContainer: "_2XC4hSYLNzvTJ9n8Qx5t2E",
				mIsActive: "KE4seaOPBFBF1jhkJyWzD",
				VideoSettingContainer: "C_R5GVVZDJEPfB_2ZVw_j",
				videoSettingContainer: "C_R5GVVZDJEPfB_2ZVw_j",
				AutoplayContainer: "_2BOpKj2--T_MqNo_ZMRxNG",
				autoplayContainer: "_2BOpKj2--T_MqNo_ZMRxNG",
				SetAutoplayButton: "_3FgC5gbpQJUntY23YtQ89Z",
				setAutoplayButton: "_3FgC5gbpQJUntY23YtQ89Z",
				VideoResolutionButton: "bAXkjkzl_SYFOHtU-04DK",
				videoResolutionButton: "bAXkjkzl_SYFOHtU-04DK",
				VideoResolutionContainer: "_3IZDbV1r5OQ2PtnsjF02A",
				videoResolutionContainer: "_3IZDbV1r5OQ2PtnsjF02A",
				AutoplayDescription: "_2NY4rl5z4S5VUOfEs8PdJ_",
				autoplayDescription: "_2NY4rl5z4S5VUOfEs8PdJ_",
				VideoResolutionDescription: "_1n_g7VROCpBaLnT_3bzFIL",
				videoResolutionDescription: "_1n_g7VROCpBaLnT_3bzFIL",
				VideoHd: "UyJedjQe5dUxEFYt6pF_G",
				videoHd: "UyJedjQe5dUxEFYt6pF_G"
			}
		},
		"./src/reddit/components/HTML5StreamPlayer/SnooButton/index.m.less": function(e, t, s) {
			e.exports = {
				button: "sm5fCodJsfJ3dJgv8LoJU",
				icon: "_1JylLL_Ux6Orq3W6Gpj0I5"
			}
		},
		"./src/reddit/components/HTML5StreamPlayer/Tooltip/index.m.less": function(e, t, s) {
			e.exports = {
				TooltipPopup: "_1BLNYd_poiSXsApjISxu_9",
				tooltipPopup: "_1BLNYd_poiSXsApjISxu_9",
				TooltipControl: "_7xWC34a6DkOCXgS96vOSO",
				tooltipControl: "_7xWC34a6DkOCXgS96vOSO",
				mNotDisable: "_2BgDJndeb40Gp_YvmIR_81"
			}
		},
		"./src/reddit/components/HTML5StreamPlayer/VideoContainer/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_2UrTEvz_DRsDezLCxNpGnZ",
				component: "_2UrTEvz_DRsDezLCxNpGnZ",
				mIsNotVisible: "ziid7jHsA37M8sq6Set2x"
			}
		},
		"./src/reddit/components/HTML5StreamPlayer/VideoOverlay/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_3UEq__yL-82zX4EyuluREz",
				component: "_3UEq__yL-82zX4EyuluREz"
			}
		},
		"./src/reddit/components/HTML5StreamPlayer/VolumeControl/index.m.less": function(e, t, s) {
			e.exports = {
				VolumeControl: "_3IYkqm44eWg992tFnELzuW",
				volumeControl: "_3IYkqm44eWg992tFnELzuW",
				SliderBar: "_1iy-RNoDbjuTYxfwaLdPRO",
				sliderBar: "_1iy-RNoDbjuTYxfwaLdPRO",
				SliderTrack: "gzyVgIvE9b8wMmHefFf6i",
				sliderTrack: "gzyVgIvE9b8wMmHefFf6i",
				SliderProgress: "_2mdWr-OXgnLh-fdDgEEb6E",
				sliderProgress: "_2mdWr-OXgnLh-fdDgEEb6E",
				Live: "_2GyJbEWZL04QA2bbVtv_Qu",
				live: "_2GyJbEWZL04QA2bbVtv_Qu",
				SliderThumb: "_320cReGqgLhY1pPA-fM8Z7",
				sliderThumb: "_320cReGqgLhY1pPA-fM8Z7"
			}
		},
		"./src/reddit/components/HTML5StreamPlayer/index.m.less": function(e, t, s) {
			e.exports = {
				RedditVideoPlayerRoot: "_3QOPLw8PZipW3i8kDxod81",
				redditVideoPlayerRoot: "_3QOPLw8PZipW3i8kDxod81",
				RedditVideoPlayerRoot__Fullscreen: "_1znUHTb50VqdFqfWmai1ts",
				redditVideoPlayerRootFullscreen: "_1znUHTb50VqdFqfWmai1ts",
				HTML5StreamPlayer__VideoFullscreen: "_6p8buRs-LijHSXx1H4MGe",
				html5StreamPlayerVideoFullscreen: "_6p8buRs-LijHSXx1H4MGe",
				HTML5StreamPlayer: "zRGpGBNtA_hojI_RK9ouQ",
				html5StreamPlayer: "zRGpGBNtA_hojI_RK9ouQ",
				HTML5StreamPlayer__VideoRegular: "_1EQJpXY7ExS04odI1YBBlj",
				html5StreamPlayerVideoRegular: "_1EQJpXY7ExS04odI1YBBlj",
				VideoBackgroundStyles: "_14LIEiRn-naKqUT7DJ8vwV",
				videoBackgroundStyles: "_14LIEiRn-naKqUT7DJ8vwV"
			}
		},
		"./src/reddit/components/HTML5StreamPlayer/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return Kt
			}));
			var i = s("./node_modules/bowser/src/bowser.js"),
				o = s.n(i),
				a = s("./src/config.ts"),
				n = s("./node_modules/lodash/debounce.js"),
				r = s.n(n),
				l = s("./node_modules/react/index.js"),
				c = s.n(l),
				d = s("./node_modules/react-redux/es/index.js"),
				h = s("./node_modules/reselect/es/index.js"),
				u = s("./src/lib/classNames/index.ts"),
				p = s("./src/lib/colors/constants.ts"),
				m = s("./src/lib/combineRefs/index.tsx"),
				v = s("./src/lib/domUtils/index.ts"),
				g = s("./src/lib/getMobileOperatingSystem/index.ts"),
				f = s("./src/lib/loadWithRetries/index.ts"),
				x = s("./src/lib/sentry/index.ts"),
				y = s("./src/reddit/actions/media.ts"),
				S = s("./src/reddit/actions/preferences.ts"),
				b = s("./src/reddit/actions/video.ts"),
				C = s("./node_modules/fbt/lib/FbtPublic.js");
			var P = e => c.a.createElement("svg", {
					className: e.className,
					width: "16",
					height: "16",
					viewBox: "0 0 24 24",
					fill: "white",
					xmlns: "http://www.w3.org/2000/svg"
				}, c.a.createElement("path", {
					d: "M17 0C18.5977 0 19.9037 1.24892 19.9949 2.82373L20 3V21C20 22.5977 18.7511 23.9037 17.1763 23.9949L17 24H13V22H17C17.5128 22 17.9355 21.614 17.9933 21.1166L18 21V3C18 2.48716 17.614 2.06449 17.1166 2.00673L17 2H13V0H17ZM11 22V24H9V22H11ZM6 21C6 21.5128 6.38604 21.9355 6.88338 21.9933L7 22V24C5.40232 24 4.09634 22.7511 4.00509 21.1763L4 21H6ZM6 17V19H4V17H6ZM6 13V15H4V13H6ZM6 9V11H4V9H6ZM6 5V7H4V5H6ZM7 0V2C6.48716 2 6.06449 2.38604 6.00673 2.88338L6 3H4C4 1.34315 5.34315 0 7 0ZM11 0V2H9V0H11Z",
					fill: "inherit"
				})),
				V = s("./src/reddit/components/HTML5StreamPlayer/CreditPill/index.m.less"),
				E = s.n(V);
			var w = e => {
					let {
						reactPostInfo: t,
						handleClick: s
					} = e;
					return c.a.createElement("a", {
						className: E.a.creditPillStyles,
						onClick: s
					}, c.a.createElement(P, {
						className: E.a.stitchIcon
					}), C.fbt._("Thread with {Name of original author}", [C.fbt._param("Name of original author", t.attributionInfo.displayName)], {
						hk: "1XkWro"
					}))
				},
				M = s("./src/reddit/components/Media/LoadingIcon/index.tsx"),
				T = s("./src/reddit/components/PlayButton/index.tsx"),
				F = s("./src/reddit/components/TrackingHelper/index.tsx"),
				_ = s("./src/reddit/constants/video.ts"),
				k = s("./src/reddit/contexts/InsideOverlay.tsx"),
				L = s("./src/reddit/helpers/overlay/index.ts"),
				B = s("./src/reddit/helpers/trackers/media.ts"),
				N = s("./src/reddit/helpers/trackers/react.ts"),
				R = s("./src/reddit/constants/experiments.ts"),
				I = s("./src/reddit/helpers/chooseVariant/index.ts");
			const H = e => Object(I.c)(e, {
				experimentEligibilitySelector: I.a,
				experimentName: R.Tc
			}) === R.Od;
			var A = s("./src/reddit/selectors/experiments/videoReactions.ts"),
				O = s("./src/reddit/selectors/media.ts"),
				j = s("./src/reddit/selectors/platform.ts"),
				D = s("./src/reddit/selectors/posts.ts"),
				U = s("./src/reddit/selectors/user.ts"),
				W = s("./src/reddit/selectors/video.ts"),
				z = s("./src/reddit/components/HTML5StreamPlayer/BlurImage/index.m.less"),
				G = s.n(z),
				Y = s("./src/lib/lessComponent.tsx"),
				Z = Y.a.img("Component", G.a),
				K = s("./src/reddit/icons/svgs/VideoCollapse/index.tsx"),
				J = s("./src/reddit/icons/svgs/VideoExpand/index.tsx"),
				Q = s("./src/reddit/icons/svgs/VideoMute/index.tsx"),
				q = s("./src/reddit/icons/svgs/VideoPause/index.tsx"),
				X = s("./src/reddit/icons/svgs/VideoPlay/index.tsx"),
				$ = s("./src/reddit/icons/svgs/VideoVolume/index.tsx"),
				ee = s("./src/reddit/components/HTML5StreamPlayer/ControlGradient/index.m.less"),
				te = s.n(ee),
				se = Y.a.div("Component", te.a),
				ie = s("./node_modules/lodash/clamp.js"),
				oe = s.n(ie),
				ae = s("./node_modules/react-dom/index.js"),
				ne = s.n(ae),
				re = s("./src/lib/fastdom/index.ts");
			const le = e => {
					const t = Math.floor(e / 60).toString();
					let s = Math.trunc(e % 60).toString();
					return `${t}:${s=`0${s}`.slice(-2)}`
				},
				ce = (e, t) => {
					let s = Math.floor(e / 60).toString(),
						i = Math.trunc(e % 60).toString();
					const o = Math.floor(t / 60).toString();
					return s.length < o.length && (s = `0${s}`.slice(-2)), `${s}:${i=`0${i}`.slice(-2)}`
				};
			var de = s("./src/reddit/constants/keycodes.ts"),
				he = s("./src/reddit/components/HTML5StreamPlayer/SeekBar/index.m.less"),
				ue = s.n(he);
			const pe = Y.a.div("Thumb", ue.a),
				me = Y.a.div("ProgressBar", ue.a),
				ve = Y.a.div("Floating", ue.a),
				ge = Y.a.video("PreviewVideo", ue.a),
				fe = Y.a.div("PreviewTime", ue.a),
				xe = Y.a.div("VideoSeekbar", ue.a);
			class ye extends c.a.PureComponent {
				constructor(e) {
					super(e), this.setParentRect = e => this.parentRect = e, this.setPreviewThumbnailContainer = e => this.previewThumbnailContainer = e, this.setPreviewThumbnailVideo = e => this.previewThumbnailVideo = e, this.setPreviewThumbnailTime = e => this.previewThumbnailTime = e, this.setProgressBar = e => this.progressBar = e, this.handleMouseDown = e => {
						if (0 === e.button && this.parentRect) {
							const t = this.parentRect.getBoundingClientRect();
							let s = (e.clientX - t.left) / t.width * 100;
							s = Math.min(Math.max(s, 0), 100), this.setProgress(s, !0)
						}
					}, this.handleMouseMove = e => {
						if (e.stopPropagation(), this.parentRect) {
							const t = this.parentRect.getBoundingClientRect();
							let s = (e.clientX - t.left) / t.width * 100;
							s = Math.min(Math.max(s, 0), 100), this.setLookahead(s), this.props.active && this.setProgress(s, !0)
						}
					}, this.handleMouseUp = e => {
						if (this.props.active) {
							const e = this.state.progressPercent * this.props.totalTime / 100;
							this.props.updatePosition(e), this.progressBar && this.progressThumb && (this.progressBar.style.width = "", this.progressThumb.style.marginLeft = "")
						}
					}, this.handleMouseLeave = e => {
						this.setLookahead(0)
					}, this.handleKeyDown = e => {
						switch (e.key) {
							case de.b.ArrowRight:
								return void this.jumpPlayback(5);
							case de.b.ArrowLeft:
								return void this.jumpPlayback(-5);
							case de.b.Space:
								return this.props.playPauseVideo(), void e.preventDefault()
						}
					}, this.setProgressThumbRef = e => {
						this.progressThumb = e, e && re.a.read(() => {
							const t = e.getBoundingClientRect().width / 2;
							re.a.write(() => {
								this.setState({
									thumbOffset: t
								})
							})
						})
					}, this.state = {
						thumbMargin: "",
						thumbOffset: null,
						isMouseDown: !1,
						progressPercent: 0,
						percent: 0
					}
				}
				jumpPlayback(e) {
					const {
						currentTime: t,
						totalTime: s
					} = this.props, i = oe()(t + e, 0, s);
					i !== t && this.props.updatePosition(i)
				}
				getCurrentPercent() {
					const {
						currentTime: e,
						totalTime: t
					} = this.props;
					return e && t ? 100 * e / t : 0
				}
				setProgress(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					this.progressBar && this.progressThumb && (!this.props.active || t) && (this.progressBar.style.width = "calc(" + e + "% + " + this.state.thumbOffset + "px)", this.progressThumb.style.marginLeft = "calc(" + e + "% - " + this.state.thumbOffset + "px)", this.setState({
						progressPercent: e
					}), this.props.updateContinuousStartTime && this.props.updateContinuousStartTime(1e3 * this.props.currentTime))
				}
				getThumbMargin(e) {
					return this.props.active && this.progressThumb ? this.progressThumb.style.marginLeft || "0" : `calc(${e}% - ${this.state.thumbOffset||0}px)`
				}
				getProgressWidth(e) {
					return this.props.active && this.progressBar ? this.progressBar.style.width : `${e}%`
				}
				setLookahead(e) {
					if (this.lookaheadBar && this.previewThumbnailContainer && this.previewThumbnailTime && this.parentRect) {
						this.lookaheadBar.style.width = e + "%";
						const {
							totalTime: t
						} = this.props, s = t * (e / 100);
						isNaN(s) || (this.previewThumbnailVideo && (this.previewThumbnailVideo.currentTime = s), this.previewThumbnailTime.innerHTML = ce(s, t));
						const i = ne.a.findDOMNode(this);
						if (!i || !i.parentNode) return;
						const o = i.parentNode;
						if (!(o instanceof Element)) return;
						const a = o.getBoundingClientRect(),
							n = this.parentRect.getBoundingClientRect(),
							r = this.previewThumbnailContainer.getBoundingClientRect(),
							l = a.left - n.left,
							c = a.right - n.left - r.width,
							d = e / 100 * n.width - r.width / 2;
						this.previewThumbnailContainer.style.left = Math.max(l, Math.min(d, c)) + "px"
					}
				}
				getBufferedStyle() {
					const {
						bufferedRanges: e
					} = this.props, {
						progressPercent: t
					} = this.state, s = this.getCurrentPercent();
					let i = t;
					for (let o = 0; o < e.length; o++) e[o].start <= s && (i = e[o].end);
					return {
						width: `${i=oe()(i,0,100)}%`
					}
				}
				render() {
					const {
						active: e
					} = this.props, {
						progressPercent: t
					} = this.state, s = this.getCurrentPercent();
					let i = e ? t : s;
					i = oe()(i, 0, 100);
					const o = {
							width: this.getProgressWidth(i) || "0"
						},
						a = {
							marginLeft: this.getThumbMargin(i),
							opacity: e ? 1 : 0
						};
					return c.a.createElement(xe, {
						innerRef: this.setParentRect,
						onKeyDown: this.handleKeyDown,
						onMouseLeave: this.handleMouseLeave,
						onMouseMove: this.handleMouseMove
					}, c.a.createElement("div", {
						"aria-label": C.fbt._("Seek Slider", null, {
							hk: "1fNTBw"
						}),
						"aria-valuemax": Math.round(this.props.totalTime),
						"aria-valuemin": 0,
						"aria-valuenow": this.props.currentTime,
						className: ue.a.Mainbar,
						role: "slider",
						tabIndex: 0
					}, c.a.createElement("div", {
						className: Object(u.a)(ue.a.Bar, ue.a.Background)
					}), c.a.createElement("div", {
						className: Object(u.a)(ue.a.Bar, ue.a.Lookahead),
						ref: e => this.lookaheadBar = e
					}), c.a.createElement("div", {
						className: Object(u.a)(ue.a.Bar, ue.a.Buffered),
						style: this.getBufferedStyle()
					}), c.a.createElement(me, {
						className: Object(u.a)(this.props.isLive && ue.a.Live),
						innerRef: this.setProgressBar,
						style: o
					})), c.a.createElement(pe, {
						className: Object(u.a)(this.props.isLive && ue.a.Live),
						innerRef: this.setProgressThumbRef,
						style: a
					}), !this.props.controlBarIsHidden && c.a.createElement(ve, {
						innerRef: this.setPreviewThumbnailContainer
					}, this.props.thumbSource && c.a.createElement(ge, {
						innerRef: this.setPreviewThumbnailVideo,
						src: this.props.thumbSource
					}), c.a.createElement(fe, {
						innerRef: this.setPreviewThumbnailTime
					})))
				}
			}
			var Se = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				be = s("./src/reddit/icons/svgs/VideoSnoo/index.tsx"),
				Ce = s("./src/reddit/components/HTML5StreamPlayer/SnooButton/index.m.less"),
				Pe = s.n(Ce);
			const Ve = () => c.a.createElement("div", {
				className: Pe.a.icon
			}, c.a.createElement(be.a, null));
			var Ee = e => "string" == typeof e.postUrl ? c.a.createElement("a", {
					href: e.postUrl,
					className: Pe.a.button
				}, c.a.createElement(Ve, null)) : c.a.createElement(Se.a, {
					to: e.postUrl,
					className: Pe.a.button
				}, c.a.createElement(Ve, null)),
				we = s("./src/reddit/components/HTML5StreamPlayer/Tooltip/index.m.less"),
				Me = s.n(we);

			function Te() {
				return (Te = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const Fe = 8,
				_e = Y.a.span("TooltipPopup", Me.a),
				ke = e => {
					let {
						className: t,
						setRef: s,
						disable: i,
						...o
					} = e;
					return c.a.createElement("div", Te({
						className: Object(u.a)(Me.a.TooltipControl, t, {
							[Me.a.mNotDisable]: !i
						}),
						ref: s
					}, o))
				};
			class Le extends l.Component {
				constructor() {
					super(...arguments), this.onMouseEnter = () => {
						re.a.read(this.setPosition)
					}, this.setPosition = () => {
						const {
							container: e,
							tooltipContainer: t
						} = this;
						if (e && t && this.props.tooltip) {
							const s = t.getBoundingClientRect(),
								i = e.getBoundingClientRect(),
								o = e.parentNode.getBoundingClientRect(),
								a = o.left - i.left + Fe,
								n = o.right - i.left - s.width - Fe,
								r = i.width / 2 - s.width / 2;
							re.a.write(() => {
								t.style.left = Math.max(a, Math.min(r, n)) + "px"
							})
						}
					}
				}
				componentDidMount() {
					this.container && this.container.addEventListener("focusin", this.setPosition)
				}
				componentWillUnmount() {
					this.container && this.container.removeEventListener("focusin", this.setPosition)
				}
				render() {
					const {
						className: e,
						children: t,
						disable: s,
						tooltip: i
					} = this.props;
					return c.a.createElement(ke, {
						onMouseEnter: this.onMouseEnter,
						setRef: e => this.container = e,
						className: e,
						disable: s
					}, c.a.createElement(_e, {
						className: Me.a.TooltipPopup,
						innerRef: e => this.tooltipContainer = e
					}, i), t)
				}
			}
			var Be = s("./src/reddit/components/HTML5StreamPlayer/VolumeControl/index.m.less"),
				Ne = s.n(Be);
			class Re extends l.Component {
				constructor(e) {
					super(e), this.step = .1, this.max = 1, this.min = 0, this.handleMouseDown = e => {
						if (0 === e.button && this.track) {
							e.preventDefault(), this.setState({
								isMouseDown: !0
							});
							const t = this.track.getBoundingClientRect(),
								s = 100 - (e.clientY - t.top) / t.height * 100,
								i = (this.max - this.min) * (s / 100);
							this.setState({
								value: this.adjustValue(i)
							})
						}
					}, this.handleMouseMove = e => {
						if (this.state.isMouseDown && this.track) {
							const t = this.track.getBoundingClientRect(),
								s = 100 - (e.clientY - t.top) / t.height * 100,
								i = (this.max - this.min) * (s / 100);
							this.setState({
								value: this.adjustValue(i)
							})
						}
					}, this.handleMouseUp = e => {
						this.state.isMouseDown && this.setState({
							isMouseDown: !1
						}), this.props.setVolume(this.state.value, !0)
					}, this.state = {
						isMouseDown: !1,
						value: 0
					}
				}
				convertVolumeToPercent(e) {
					if ("number" != typeof e) return 100;
					const t = oe()(e, this.min, this.max);
					let s = 0;
					if (t) {
						s = 20 * Math.log10(t) / 40 + 1
					}
					return this.calculatePercent(s)
				}
				calculatePercent(e) {
					return (e - this.min) / (this.max - this.min) * 100
				}
				adjustValue(e) {
					const t = oe()(e, this.min, this.max);
					let s;
					if (1 === t || 0 === t) s = t;
					else {
						const e = 40 * (t - 1);
						s = Math.pow(10, e / 20)
					}
					return this.props.setVolume(s, !1), s
				}
				render() {
					const {
						active: e,
						className: t,
						isLive: s,
						isMuted: i,
						volume: o
					} = this.props, {
						value: a
					} = this.state, n = i ? 0 : e ? a : o, r = this.convertVolumeToPercent(n);
					return c.a.createElement("div", {
						className: Object(u.a)(Ne.a.VolumeControl, t),
						ref: e => this.container = e
					}, c.a.createElement("div", {
						className: Object(u.a)(Ne.a.SliderTrack, Ne.a.SliderBar),
						ref: e => this.track = e
					}, c.a.createElement("div", {
						className: Object(u.a)(Ne.a.SliderProgress, Ne.a.SliderBar, {
							[Ne.a.Live]: s
						}),
						ref: e => this.progress = e,
						style: {
							height: `${r}%`
						}
					}, c.a.createElement("div", {
						className: Ne.a.SliderThumb
					}))))
				}
			}
			var Ie = s("./src/reddit/components/HTML5StreamPlayer/ControlBar/index.m.less"),
				He = s.n(Ie);

			function Ae() {
				return (Ae = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const Oe = Y.a.wrapped(Le, "TooltipControl", He.a),
				je = Y.a.div("NormalControl", He.a),
				De = Y.a.wrapped(Oe, "ControlSnoo", He.a),
				Ue = Y.a.wrapped(Oe, "ControlPlay", He.a),
				We = Y.a.wrapped(je, "Time", He.a),
				ze = Y.a.wrapped(We, "LeftTime", He.a),
				Ge = Y.a.wrapped(We, "RightTime", He.a),
				Ye = Y.a.div("LiveLabel", He.a),
				Ze = Y.a.wrapped(je, "ControlScrubber", He.a),
				Ke = Y.a.wrapped(je, "ControlVolume", He.a),
				Je = Y.a.wrapped(Oe, "ControlExpand", He.a),
				Qe = Y.a.wrapped(Oe, "ControlCollapse", He.a),
				qe = e => {
					let {
						className: t,
						isFullScreen: s,
						zeroOpacity: i,
						innerRef: o,
						...a
					} = e;
					return c.a.createElement("div", Ae({
						className: Object(u.a)(He.a.ControlBarContainer, t, {
							[He.a.mHasZeroOpacity]: i
						}),
						ref: o
					}, a))
				};
			class Xe extends c.a.Component {
				constructor(e) {
					super(e), this.state = {
						currentTime: e.currentTime,
						totalTime: e.totalTime,
						bufferedRanges: []
					}
				}
				setCurrentTime(e) {
					this.setState({
						currentTime: e
					})
				}
				setTotalTime(e) {
					this.setState({
						totalTime: e
					})
				}
				setBufferedRanges(e) {
					this.setState({
						bufferedRanges: e
					})
				}
				renderContent() {
					const {
						hideFullScreenButton: e,
						hideGradient: t,
						postUrl: s,
						isListing: i,
						isLive: o,
						settingsButton: a,
						settingChange: n,
						hideLiveLabel: r,
						showSettingsIcon: l
					} = this.props, d = C.fbt._("View Comments", null, {
						hk: "2Vf8xl"
					}), h = C.fbt._("Play", null, {
						hk: "2cQV3h"
					}), u = C.fbt._("Pause", null, {
						hk: "2YnRgT"
					}), p = C.fbt._("Exit Fullscreen", null, {
						hk: "LnrWa"
					}), m = C.fbt._("Fullscreen", null, {
						hk: "3JvSdn"
					}), {
						currentTime: v
					} = this.state, {
						totalTime: g
					} = o ? this.state : this.props, f = this.props.isPaused ? h : u;
					return c.a.createElement(c.a.Fragment, null, !t && c.a.createElement(se, null), s && i && c.a.createElement(De, {
						tooltip: d
					}, c.a.createElement("div", {
						onClick: this.props.clickSnoo
					}, c.a.createElement(Ee, {
						postUrl: s
					}))), c.a.createElement(Ue, {
						tooltip: f
					}, c.a.createElement("button", {
						"aria-label": f,
						className: He.a.button,
						onClick: this.props.playPauseVideo
					}, this.props.isPaused ? c.a.createElement(X.a, null) : c.a.createElement(q.a, null))), c.a.createElement(ze, null, ce(v, g)), c.a.createElement(Ze, null, c.a.createElement(ye, {
						active: n === Kt.SeekBar,
						bufferedRanges: this.state.bufferedRanges,
						controlBarIsHidden: this.props.hideControlBar,
						currentTime: v,
						isLive: o,
						ref: this.props.seekBarRef,
						thumbSource: this.props.scrubberThumbSource,
						totalTime: g,
						playPauseVideo: this.props.playPauseVideo,
						updatePosition: this.props.setVideoPosition,
						updateContinuousStartTime: this.props.updateContinuousStartTime
					})), o ? r ? null : c.a.createElement(Ye, {
						"aria-label": C.fbt._("live", null, {
							hk: "1rkHRc"
						}),
						onClick: () => this.props.setVideoPosition(g)
					}, C.fbt._("Live", null, {
						hk: "3bCYlO"
					})) : c.a.createElement(Ge, null, le(g)), l && a, !e && (this.props.isFullScreen ? c.a.createElement(Qe, {
						tooltip: p
					}, c.a.createElement("button", {
						"aria-label": p,
						className: He.a.button,
						onClick: this.props.exitFullScreen
					}, c.a.createElement(K.a, null))) : c.a.createElement(Je, {
						tooltip: m
					}, c.a.createElement("button", {
						"aria-label": m,
						className: He.a.button,
						onClick: this.props.enterFullScreen
					}, c.a.createElement(J.a, null)))))
				}
				render() {
					const {
						controlBarRef: e,
						isLive: t
					} = this.props;
					return c.a.createElement(qe, {
						className: this.props.className,
						innerRef: t => e && e(t),
						isFullScreen: this.props.isFullScreen,
						zeroOpacity: this.props.hideControlBar
					}, this.renderContent(), this.props.hasAudio && c.a.createElement(Ke, {
						className: this.props.showVolumeIcon ? "disableHide" : ""
					}, c.a.createElement(Re, {
						className: He.a.VolumeControl,
						ref: e => this.props.volumeRef(e),
						active: this.props.settingChange === Kt.Volume,
						isMuted: this.props.isMuted,
						isLive: t,
						setVolume: this.props.setVolume,
						volume: this.props.volume
					}), c.a.createElement("button", {
						className: He.a.button,
						onClick: this.props.toggleMute
					}, this.props.isMuted ? c.a.createElement(Q.a, null) : c.a.createElement($.a, null))))
				}
			}
			var $e = Xe;
			var et = s("./src/reddit/icons/svgs/VideoCheckmark/index.tsx"),
				tt = s("./src/reddit/components/HTML5StreamPlayer/SettingControl/index.m.less"),
				st = s.n(tt);

			function it() {
				return (it = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const ot = 0,
				at = [1080, 720],
				nt = [...at, 480, 360, 240, ot],
				rt = e => c.a.createElement("button", {
					"aria-checked": e.isChecked,
					className: st.a.SetAutoplayButton,
					onClick: e.onClick,
					role: "checkbox",
					tabIndex: 0
				}, c.a.createElement(et.a, null), c.a.createElement("div", {
					className: st.a.AutoplayDescription
				}, C.fbt._("Autoplay", null, {
					hk: "1x30w1"
				}))),
				lt = e => {
					const {
						resolution: t,
						onClick: s,
						isChecked: i
					} = e;
					return c.a.createElement("button", {
						"aria-checked": i,
						className: st.a.VideoResolutionButton,
						onClick: s,
						role: "radio",
						tabIndex: 0
					}, c.a.createElement(et.a, null), c.a.createElement("div", {
						className: st.a.VideoResolutionDescription
					}, t === ot ? C.fbt._("Auto", null, {
						hk: "6zgZT"
					}) : c.a.createElement(c.a.Fragment, null, c.a.createElement("span", null, t, "p"), at.includes(t) && c.a.createElement("span", {
						className: st.a.VideoHd
					}, " ", C.fbt._("HD", null, {
						hk: "2KjxjH"
					})))))
				},
				ct = e => {
					let {
						isActive: t,
						className: s,
						innerRef: i,
						...o
					} = e;
					return c.a.createElement("div", it({
						className: Object(u.a)(st.a.SettingControlContainer, s, {
							[st.a.mIsActive]: t
						}),
						ref: i
					}, o))
				};
			class dt extends l.Component {
				constructor() {
					super(...arguments), this.container = null, this.state = {
						autoplayPref: this.props.autoplayPref
					}, this.setContainerRef = e => this.container = e, this.setResolution = e => {
						this.props.setResolution(e)
					}, this.setAutoplay = e => {
						const t = !this.state.autoplayPref;
						this.setState({
							autoplayPref: t
						}), this.props.setAutoplay(t)
					}
				}
				componentDidMount() {
					if (this.container) {
						const e = this.container.querySelector("[tabindex]");
						e && e.focus()
					}
				}
				render() {
					const {
						active: e,
						bitrateInfo: t,
						className: s,
						isLoggedIn: i,
						resolution: o
					} = this.props, a = [...t.map(e => e.height), ot];
					return c.a.createElement(ct, {
						innerRef: this.setContainerRef,
						className: Object(u.a)(st.a.VideoSettingContainer, s),
						isActive: e
					}, i && c.a.createElement("div", {
						className: st.a.AutoplayContainer
					}, c.a.createElement(rt, {
						isChecked: this.state.autoplayPref,
						onClick: this.setAutoplay
					})), c.a.createElement("div", {
						className: st.a.VideoResolutionContainer,
						role: "radiogroup"
					}, nt.map((e, t) => a.includes(e) ? c.a.createElement(lt, {
						key: t,
						resolution: e,
						onClick: () => this.setResolution(e),
						isChecked: o === e
					}) : null)))
				}
			}
			var ht = s("./src/reddit/icons/svgs/VideoSetting/index.tsx");
			const ut = Y.a.wrapped(Le, "TooltipControl", He.a),
				pt = Y.a.wrapped(ut, "ControlSetting", He.a);
			class mt extends l.Component {
				render() {
					const {
						autoplayPref: e,
						bitrateInfo: t,
						isLoggedIn: s,
						resolution: i,
						setAutoplay: o,
						setResolution: a,
						settingChange: n,
						settingRef: r,
						toggleSetting: l
					} = this.props;
					return c.a.createElement(pt, {
						key: "setting",
						className: He.a.AnimatedSettingIconParent,
						tooltip: C.fbt._("Settings", null, {
							hk: "1AhVBJ"
						}),
						disable: n === Kt.Settings
					}, n === Kt.Settings && c.a.createElement(dt, {
						className: He.a.VideoSettingContainer,
						isLoggedIn: s,
						autoplayPref: e,
						active: n === Kt.Settings,
						ref: e => r(e),
						resolution: i,
						setResolution: a,
						setAutoplay: o,
						bitrateInfo: t
					}), c.a.createElement("button", {
						"aria-expanded": n === Kt.Settings,
						"aria-haspopup": !0,
						"aria-label": C.fbt._("Settings", null, {
							hk: "4jfIa6"
						}),
						className: He.a.button,
						onClick: l
					}, c.a.createElement(ht.a, {
						className: He.a.SettingIcon
					})))
				}
			}
			var vt = s("./src/reddit/components/HTML5StreamPlayer/ErrorMessage/index.m.less"),
				gt = s.n(vt);
			const {
				fbt: ft
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var xt = e => {
					let {
						error: t
					} = e;
					var s, i, o;
					const a = 403 === (null === (i = null === (s = null == t ? void 0 : t.data) || void 0 === s ? void 0 : s.response) || void 0 === i ? void 0 : i.status) || (null === (o = null == t ? void 0 : t.message) || void 0 === o ? void 0 : o.includes("is not available"));
					return c.a.createElement("div", {
						className: gt.a.ErrorMessageContainer
					}, a ? ft._("{=This video is no longer available.}", [ft._param("=This video is no longer available.", c.a.createElement("p", null, ft._("This video is no longer available.", null, {
						hk: "1MQKKd"
					})))], {
						hk: "27iQCQ"
					}) : ft._("{=This video cannot be played.}", [ft._param("=This video cannot be played.", c.a.createElement("p", null, ft._("This video cannot be played.", null, {
						hk: "1GIRyn"
					})))], {
						hk: "1Ol01w"
					}))
				},
				yt = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				St = s("./src/reddit/selectors/telemetry.ts"),
				bt = s("./src/reddit/icons/svgs/VideoApplyNow/index.tsx"),
				Ct = s("./src/reddit/icons/svgs/VideoContactUs/index.tsx"),
				Pt = s("./src/reddit/icons/svgs/VideoGetAQuote/index.tsx"),
				Vt = s("./src/reddit/icons/svgs/VideoGetShowtimes/index.tsx"),
				Et = s("./src/reddit/icons/svgs/VideoInstall/index.tsx"),
				wt = s("./src/reddit/icons/svgs/VideoLearnMore/index.tsx"),
				Mt = s("./src/reddit/icons/svgs/VideoPlayNow/index.tsx"),
				Tt = s("./src/reddit/icons/svgs/VideoSeeMenu/index.tsx"),
				Ft = s("./src/reddit/icons/svgs/VideoShopNow/index.tsx"),
				_t = s("./src/reddit/icons/svgs/VideoSignUp/index.tsx"),
				kt = s("./src/reddit/icons/svgs/VideoViewMore/index.tsx"),
				Lt = s("./src/reddit/icons/svgs/VideoWatchNow/index.tsx"),
				Bt = s("./src/reddit/components/VideoCTA/index.m.less"),
				Nt = s.n(Bt);
			const Rt = {
				"Apply Now": c.a.createElement(bt.a, null),
				"Contact Us": c.a.createElement(Ct.a, null),
				"Learn More": c.a.createElement(wt.a, null),
				"Get a Quote": c.a.createElement(Pt.a, null),
				"Get Showtimes": c.a.createElement(Vt.a, null),
				Install: c.a.createElement(Et.a, null),
				Download: c.a.createElement(Et.a, null),
				"Learn More": c.a.createElement(wt.a, null),
				"Play Now": c.a.createElement(Mt.a, null),
				"See Menu": c.a.createElement(Tt.a, null),
				"Shop Now": c.a.createElement(Ft.a, null),
				"Sign Up": c.a.createElement(_t.a, null),
				"View More": c.a.createElement(kt.a, null),
				"Watch Now": c.a.createElement(Lt.a, null)
			};
			var It = Object(F.c)(e => {
					const {
						callToAction: t,
						postId: s,
						sendEvent: i,
						source: o
					} = e;
					return c.a.createElement(yt.a, {
						className: Nt.a.ctaLink,
						onClick: e => i(e => ({
							...Object(St.o)(e),
							source: "videoplayer",
							action: "click",
							noun: "callToAction"
						})),
						href: o.url,
						isSponsored: !0,
						postId: s,
						source: o
					}, c.a.createElement("div", {
						className: Nt.a.ctaWrapper
					}, (e => Rt[e = e || "Learn More"])(t), c.a.createElement("span", {
						className: Nt.a.ctaText
					}, t || "Learn More")))
				}),
				Ht = s("./src/reddit/icons/svgs/VideoReplay/index.tsx"),
				At = s("./src/reddit/components/HTML5StreamPlayer/ReplayVideo/index.m.less"),
				Ot = s.n(At);
			const jt = Y.a.div("Centered", Ot.a),
				Dt = Y.a.div("EndedOverlay", Ot.a),
				Ut = Y.a.span("ReplayText", Ot.a),
				Wt = Y.a.button("ReplayButton", Ot.a);
			var zt = e => {
					const {
						onClick: t,
						source: s,
						callToAction: i,
						postId: o
					} = e;
					return c.a.createElement(Dt, {
						onClick: t
					}, c.a.createElement(jt, null, c.a.createElement(Wt, null, c.a.createElement(Ht.a, null), c.a.createElement(Ut, {
						className: "replay-video"
					}, C.fbt._("Replay Video", null, {
						hk: "1iD2Wj"
					}))), s && i && c.a.createElement(It, {
						callToAction: i,
						postId: o,
						source: s
					})))
				},
				Gt = s("./src/reddit/components/HTML5StreamPlayer/VideoContainer/index.m.less"),
				Yt = s.n(Gt);

			function Zt() {
				return (Zt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			var Kt, Jt = e => {
					let {
						className: t,
						isVisible: s,
						setRef: i,
						...o
					} = e;
					return c.a.createElement("div", Zt({
						className: Object(u.a)(Yt.a.Component, t, {
							[Yt.a.mIsNotVisible]: !s
						}),
						ref: i
					}, o))
				},
				Qt = s("./src/reddit/components/HTML5StreamPlayer/VideoOverlay/index.m.less"),
				qt = s.n(Qt),
				Xt = Y.a.div("Component", qt.a),
				$t = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				es = s("./node_modules/@reddit/adblock-detection/browser.js"),
				ts = s("./src/reddit/components/HTML5StreamPlayer/index.m.less"),
				ss = s.n(ts);
			! function(e) {
				e[e.SeekBar = 0] = "SeekBar", e[e.Settings = 1] = "Settings", e[e.Volume = 2] = "Volume"
			}(Kt || (Kt = {}));
			const is = 3e3,
				os = 6e3,
				as = 100,
				ns = e => !!e.autoPlay && (e => e.autoplayPref || e.isExpando || !!e.shouldIgnoreAutoplayPref)(e) && (e.isCommentsPage || !(e.isSponsored && Object(es.hasAcceptableAds)())),
				rs = Object(d.b)(() => Object(h.c)({
					isLoggedIn: U.S,
					autoplayPref: U.d,
					currentTime: W.c,
					currentUser: U.m,
					isOverlayOpen: j.j,
					loadTimes: W.f,
					metadata: W.h,
					mutedInFeed: W.i,
					postUrl: D.I,
					started: W.k,
					volume: O.f,
					isReactionPillKillswitchEnabled: A.b,
					isVideoCorrelationIdFix: H
				}), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						exitVideoFullscreen: () => e(b.F()),
						onBackgroundVideo: () => {
							s && e(b.q(s))
						},
						onClickAutoplay: t => {
							s && e(b.u(s, t))
						},
						onClickFullscreen: () => {
							s && e(b.v(s))
						},
						onClickMute: t => {
							s && e(b.w(s, t))
						},
						onClickReplay: () => {
							s && e(b.z(s))
						},
						onClickSeek: () => {
							s && e(b.A(s))
						},
						onClickSnoo: () => {
							s && e(b.B(s))
						},
						onClickVolume: () => {
							s && e(b.C(s))
						},
						onClickPause: () => {
							s && e(b.x(s))
						},
						onClickPlay: () => {
							s && e(b.y(s))
						},
						onChangePagetype: () => {
							s && e(b.t(s))
						},
						onErrorVideo: () => {
							s && e(b.E(s))
						},
						onLoadStarted: t => {
							s && e(b.r(s, t))
						},
						onMetadataReceived: t => e(b.P({
							metadata: t,
							postId: t.id
						})),
						onPlayable: t => {
							s && e(b.M(s, t))
						},
						onScrollPause: () => {
							s && e(b.R(s))
						},
						onUpdateVideoTime: r()(t => {
							s && e(b.V({
								postId: s,
								time: t
							}))
						}, _.m, {
							maxWait: _.n
						}),
						openLightbox: t => {
							t ? e(Object(L.a)(t)) : x.c.withScope(e => {
								e.setExtra("info", {
									postId: s,
									postUrl: t
								}), x.c.captureMessage("Post lightbox cannot be opened with a falsy postUrl")
							})
						},
						setPlaying: t => {
							s && e(b.U({
								postId: s,
								isPlaying: t
							}))
						},
						setAutoplayPref: t => e(S.s(t)),
						setVideoFullscreen: () => {
							s && e(b.S(s))
						},
						setVideoMuted: (t, i) => e(y.g(t, i, s)),
						setVideoVolume: t => e(y.h(t)),
						onWatchedPercent: t => {
							s && e(b.cb(t, s))
						},
						onWatchedSeconds: t => {
							s && e(b.db(t, s))
						},
						onUpdateContinuousViewStartTime: t => {
							s && e(b.X(s, t))
						},
						onViewAutoplay: () => {
							s && e(b.bb(s))
						},
						onVideoServed: () => {
							s && e(b.Z(s))
						},
						onVideoStarted: () => {
							s && e(b.ab(s))
						},
						onVideoReset: () => {
							s && e(b.Y(s))
						},
						setMutedInFeed: t => e(b.T(t))
					}
				});
			class ls extends l.Component {
				constructor(e) {
					var t;
					super(e), t = this, this.percentagePixelsFired = {
						[_.b]: !1,
						[_.c]: !1,
						[_.d]: !1,
						[_.e]: !1,
						[_.a]: !1
					}, this.timePixelsFired = {
						[_.g]: !1,
						[_.h]: !1,
						[_.i]: !1,
						[_.f]: !1
					}, this.sendEvent = function(e, s) {
						let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
						const o = t.HTML5StreamPlayerVideo;
						if (o && null != t.props.postId) {
							const o = i ? B.c(t.props.postId, e, s) : B.a(t.props.postId, e, s);
							t.props.sendEvent(o)
						}
					}, this.resetMediaPlayer = () => {
						const e = this.HTML5StreamPlayerVideo,
							t = this.props.mpegDashSource;
						if (!e || !t) return;
						const {
							currentTime: s
						} = e;
						this.setState({
							isRecovering: !0,
							videoHasError: !1,
							error: void 0
						}), e.addEventListener("loadedmetadata", async () => {
							e.currentTime = s, await e.play(), this.setState({
								isRecovering: !1
							})
						}, {
							once: !0
						}), this.dashPlayer.attachSource(t)
					}, this.getVideoQualityList = () => {
						if (this.dashPlayer) {
							const e = this.dashPlayer.getBitrateInfoListFor("video"),
								t = !e || 0 === e.length;
							this.setState({
								bitrateInfo: e,
								videoHasError: t
							}), t && (x.c.captureMessage(`Error detecting bitrate info for video postId: ${this.props.postId}`), this.props.isVideoCorrelationIdFix ? this.props.onErrorVideo() : this.sendEvent("error", "video"))
						}
					}, this.getAudioInfo = () => {
						if (this.props.isGif) this.setState({
							hasAudio: !1
						});
						else if (this.dashPlayer) {
							const e = this.dashPlayer.getActiveStream(),
								t = !!e && e.getHasAudioTrack();
							this.setState({
								hasAudio: t
							})
						}
					}, this.handleKeyDown = e => {
						this.updateUsingKeyStatus(e)
					}, this.handleKeyUp = e => {
						this.updateUsingKeyStatus(e)
					}, this.handleMouseEnter = e => {
						const t = this.HTML5StreamPlayerVideo;
						t && this.controlBarApi && this.controlBarApi.setCurrentTime(t.currentTime), this.setState({
							isHovered: !0
						})
					}, this.handleMouseDown = e => {
						e.stopPropagation();
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						s && s.container && s.container.contains(e.target) ? (this.setState({
							settingChange: Kt.Volume
						}), s.handleMouseDown(e)) : t && t.parentRect && t.parentRect.contains(e.target) && (this.setState({
							settingChange: Kt.SeekBar
						}), t.handleMouseDown(e)), this.state.usingKeys && this.setState({
							usingKeys: !1
						})
					}, this.handleMouseMove = e => {
						const {
							controlBar: t,
							seekBar: s,
							volumeControl: i
						} = this;
						switch (this.setState({
							hasHovered: !0
						}), t && t.contains(e.target) ? (this.clearControlBarFadeTimer(), this.state.hideControlBar && this.setState({
							hideControlBar: !1
						})) : this.resetControlBarFadeTimer(), this.state.settingChange) {
							case Kt.SeekBar:
								s && s.handleMouseMove(e);
								break;
							case Kt.Volume:
								i && i.handleMouseMove(e);
								break;
							case Kt.Settings:
						}
					}, this.handleMouseUp = e => {
						e.stopPropagation();
						const {
							controlBar: t,
							seekBar: s,
							volumeControl: i
						} = this;
						switch (this.state.settingChange) {
							case Kt.SeekBar:
								if (s) {
									this.setState({
										ignoreUnderrunsUntil: Date.now() + as
									}), s.handleMouseUp(e), this.props.isVideoCorrelationIdFix ? this.props.onClickSeek() : this.sendEvent("click", "seek");
									const t = this.HTML5StreamPlayerVideo;
									this.state.videoEnded && t && t.currentTime < t.duration && this.playVideo()
								}
								break;
							case Kt.Volume:
								i && (i.handleMouseUp(e), this.props.isVideoCorrelationIdFix ? this.props.onClickVolume() : this.sendEvent("click", "volume"));
								break;
							case Kt.Settings:
								if (t && t.contains(e.target)) return;
								break;
							default:
								if (t && !t.contains(e.target)) {
									const {
										playerClickPlay: t = !0
									} = this.props;
									if (this.props.trackPostClick && this.props.trackPostClick("media")(), this.resetControlBarFadeTimer(), this.state.videoEnded) return;
									if (this.props.isGif && this.props.isListing && !this.state.videoPaused) {
										if (this.props.isSponsored && this.props.onAdPostClick) return void this.props.onAdPostClick(e);
										this.props.openLightbox(this.props.postUrl)
									} else !t && this.state.videoPaused || this.playPauseVideo(e)
								}
						}
						this.setState({
							settingChange: void 0
						})
					}, this.handleMouseLeave = e => {
						switch (this.clearControlBarFadeTimer(), this.setState({
							hideControlBar: !0
						}), this.hoverTimeout || this.setState({
							isHovered: !1
						}), this.state.settingChange) {
							case Kt.SeekBar:
							case Kt.Volume:
							case Kt.Settings:
							default:
								this.setState({
									settingChange: void 0
								})
						}
					}, this.handleClick = e => {
						e.stopPropagation()
					}, this.setContainerRef = e => this.HTML5StreamPlayerContainer = e, this.setControlBarRef = e => this.controlBar = e, this.setControlBarApi = e => this.controlBarApi = e, this.setVolumeRef = e => this.volumeControl = e, this.setSeekBarRef = e => this.seekBar = e, this.setSettingRef = e => this.settingControl = e, this.onCanPlay = () => {
						if (this.HTML5StreamPlayerVideo && !this.state.videoLoaded) {
							if (this.setState({
									videoLoaded: !0,
									videoWaiting: !1
								}), this.props.playFromStart) return this.setVideoPos(0), void(this.isUnobscured() && this.playVideo());
							this.autoplay() && this.playVideo()
						}
					}, this.clearControlBarFadeTimer = () => {
						const {
							controlBarFadeTimer: e
						} = this;
						e && clearTimeout(e)
					}, this.resetControlBarFadeTimer = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : is;
						t.clearControlBarFadeTimer(), t.setState({
							hideControlBar: !1
						}), t.controlBarFadeTimer = window.setTimeout(() => {
							t.setState({
								hideControlBar: !0
							})
						}, e)
					}, this.exitHandler = () => {
						this.state.videoFullScreen && !Object(v.b)() && this.exitFullScreen()
					}, this.createFakeThumbnail = async () => {
						const e = this.HTML5StreamPlayerVideo;
						if (e) try {
							this.setVideoMute(!0, !1), await e.play(), await e.pause()
						} catch (t) {
							x.c.captureMessage(`Error creating thumbnail: ${t}`)
						}
					}, this.playPauseVideo = e => {
						const t = this.HTML5StreamPlayerVideo;
						t && this.state.videoLoaded && (t.paused && this.state.videoPaused ? (this.playVideo(), this.props.isVideoCorrelationIdFix ? this.props.onClickPlay() : this.sendEvent("click", "play"), this.setState({
							videoManualPaused: !1
						})) : (this.pauseVideo(), this.props.isVideoCorrelationIdFix ? this.props.onClickPause() : this.sendEvent("click", "pause"), this.setState({
							videoManualPaused: !0
						})))
					}, this.playVideo = async function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
						if (t.state.videoScrollPaused) return;
						const s = t.HTML5StreamPlayerVideo;
						if (s) try {
							t.setVideoMute(t.state.isMuted, !1), await s.play(), s.currentTime < 1 && t.props.onVideoStarted(), t.setState({
								videoStarted: !0,
								videoEnded: !1,
								videoPaused: !1,
								isHovered: !0
							}), t.hoverTimeout = window.setTimeout(() => {
								t.setState({
									isHovered: !1
								}), window.clearTimeout(t.hoverTimeout), t.hoverTimeout = void 0
							}, 2e3)
						} catch (i) {
							e > 0 ? t.playVideo(e - 1) : (x.c.captureMessage(`Error playing video ${t.props.postId}: ${i}`), t.props.isVideoCorrelationIdFix ? t.props.onErrorVideo() : t.sendEvent("error", "video"))
						}
					}, this.pauseVideo = () => {
						const e = this.HTML5StreamPlayerVideo;
						e && (e.pause(), this.state.videoPaused || this.setState({
							videoPaused: !0
						}))
					}, this.resetVideo = e => {
						this.isUnobscured() && this.state.videoEnded && (this.restartVideo(), this.props.isVideoCorrelationIdFix ? this.props.onClickReplay() : this.sendEvent("click", "replay"), this.setState({
							ignoreUnderrunsUntil: Date.now() + as,
							videoEnded: !1,
							videoManualPaused: !1
						}), this.props.onVideoReset())
					}, this.exitFullScreen = () => {
						document.exitFullScreen ? document.exitFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen(), this.setState({
							videoFullScreen: !1
						}), null != this.props.postId && (this.props.isVideoCorrelationIdFix ? this.props.onChangePagetype() : this.sendEvent("change", "pagetype", !0), this.props.exitVideoFullscreen())
					}, this.enterFullScreen = () => {
						const e = this.HTML5StreamPlayerContainer;
						e && (e.requestFullscreen ? e.requestFullscreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.mozRequestFullScreen && e.mozRequestFullScreen()), this.setState({
							videoFullScreen: !0
						}), this.props.isVideoCorrelationIdFix ? this.props.onClickFullscreen() : this.sendEvent("click", "fullscreen"), null != this.props.postId && (this.props.isVideoCorrelationIdFix ? this.props.onChangePagetype() : this.sendEvent("change", "pagetype", !0), this.props.setVideoFullscreen())
					}, this.setVolume = (e, t) => {
						const s = this.HTML5StreamPlayerVideo;
						s && (s.volume = e);
						const i = !e,
							o = this.state.isMuted !== i,
							a = this.state.volume !== e;
						t ? (e && (a && this.setState({
							volume: e
						}), this.props.setVideoVolume(e)), this.props.setMutedInFeed(i)) : o && this.setState({
							isMuted: i
						})
					}, this.toggleMuteVideo = e => {
						e.stopPropagation();
						const t = !this.state.isMuted;
						if (this.setVideoMute(t, !0), this.props.isVideoCorrelationIdFix) this.props.onClickMute(t);
						else {
							const e = t ? "mute" : "unmute";
							this.sendEvent("click", e)
						}
					}, this.setVideoMute = (e, t) => {
						const s = this.HTML5StreamPlayerVideo;
						s && (e || (s.volume = this.state.volume), s.muted = e), this.setState({
							isMuted: e
						}), this.props.setVideoMuted(e, t), this.props.setMutedInFeed(e)
					}, this.clickSnoo = e => {
						this.state.videoFullScreen && this.exitFullScreen(), this.props.isVideoCorrelationIdFix ? this.props.onClickSnoo() : this.sendEvent("click", "snoo")
					}, this.setAutoplay = e => {
						this.props.setAutoplayPref(e), this.props.isVideoCorrelationIdFix ? this.props.onClickAutoplay(e) : e ? this.sendEvent("click", "video_autoplay_on") : this.sendEvent("click", "video_autoplay_off")
					}, this.setResolution = e => {
						const {
							bitrateInfo: t
						} = this.state;
						if (t && this.dashPlayer) {
							if (e === ot) this.dashPlayer.updateSettings({
								streaming: {
									abr: {
										autoSwitchBitrate: {
											video: !0
										}
									}
								}
							});
							else {
								const s = t.findIndex(t => t.height === e);
								this.dashPlayer.updateSettings({
									streaming: {
										abr: {
											autoSwitchBitrate: {
												video: !1
											}
										}
									}
								}), this.dashPlayer.setQualityFor("video", s)
							}
							this.setState({
								resolution: e
							})
						}
					}, this.toggleSetting = e => {
						this.state.settingChange === Kt.Settings ? this.setState({
							settingChange: void 0
						}) : this.setState({
							settingChange: Kt.Settings
						})
					}, this.setVideoPos = e => {
						const t = this.HTML5StreamPlayerVideo;
						t && (this.controlBarApi && !this.state.hideControlBar && this.controlBarApi.setCurrentTime(e), t.currentTime = e)
					}, this.updateTime = () => {
						const e = performance.now(),
							t = this.HTML5StreamPlayerVideo;
						if (t) {
							let s = this.state.maxTimeServed;
							if (this.state.lastUpdate && !this.state.videoPaused && (s += e - this.state.lastUpdate), t.currentTime && t.duration) {
								let i = !1;
								this.triggerAdWatchedPixels(t.currentTime, t.duration, s / 1e3), t.currentTime >= t.duration && (this.props.isGif || (i = !0, this.pauseVideo())), this.controlBarApi && !this.state.hideControlBar && this.controlBarApi.setCurrentTime(t.currentTime), this.setState({
									videoEnded: i,
									maxTimeServed: s,
									lastUpdate: e
								})
							}
							if (this.props.postId) {
								const e = {
									currentTime: 1e3 * t.currentTime,
									maxTimeServed: s
								};
								this.props.onUpdateVideoTime(e)
							}
						}
					}, this.triggerAdWatchedPixels = (e, t, s) => {
						const i = this.getWatchedPercentRange(e, t);
						this.triggerPercentagePixels(i);
						s / t >= .95 && this.triggerTimeWatchedPixels(_.f), this.triggerTimeWatchedPixels(s)
					}, this.updateContinuousStartTime = e => {
						this.props.onUpdateContinuousViewStartTime(e)
					}, this.onVideoPlayable = e => {
						this.props.metadata || this.sendTransformedMetadata(e)
					}, this.onPlay = e => {
						const t = performance.now();
						this.setState({
							videoPaused: !1,
							lastUpdate: t,
							videoStarted: !0
						}), this.props.setPlaying(!0)
					}, this.onPause = e => {
						this.setState({
							videoPaused: !0
						}), this.props.setPlaying(!1)
					}, this.onPlaying = e => {
						this.props.metadata || this.sendTransformedMetadata(e), this.setState({
							videoWaiting: !1,
							videoStarted: !0
						})
					}, this.onCreditPillClick = () => {
						const {
							reactPostInfo: e,
							postId: t
						} = this.props;
						if (e) {
							const s = e.reactedFrom.subreddit ? e.reactedFrom.subreddit.id : e.attributionInfo.id;
							this.props.sendEvent(Object(N.b)({
								subredditId: s,
								postId: t,
								reactSourceSubredditId: s,
								reactSourceMediaId: e.reactedFrom.id
							})), window.location.href = `${a.a.redditUrl}${e.reactedFrom.permalink}`
						}
					}, this.sendTransformedMetadata = e => {
						null != this.props.postId && this.props.onMetadataReceived({
							id: this.props.postId,
							length: 1e3 * e.target.duration,
							originalHeight: e.target.videoHeight,
							originalWidth: e.target.videoWidth
						}), this.setState({
							totalTime: e.target.duration
						})
					}, this.videoRef = e => {
						this.HTML5StreamPlayerVideo = e, this.HTML5StreamPlayerVideo && (this.HTML5StreamPlayerVideo.volume = this.state.volume)
					}, this.state = {
						bitrateInfo: [],
						error: void 0,
						hasAudio: !1,
						hasHovered: !1,
						hideControlBar: !0,
						isHovered: !0,
						isMuted: e.mutedInFeed,
						isRecovering: !1,
						lastUpdate: null,
						ignoreUnderrunsUntil: 0,
						maxTimeServed: 0,
						resolution: ot,
						scrubPosition: 0,
						settingChange: void 0,
						settingSeekBar: !1,
						settingVolume: !1,
						thumbPosition: 0,
						totalTime: 0,
						usingKeys: !1,
						videoEnded: !1,
						videoFullScreen: !1,
						videoHasError: !1,
						videoLoaded: !1,
						videoManualPaused: !1,
						videoPaused: !e.autoPlay,
						videoScrollPaused: !1,
						videoStarted: !1,
						videoWaiting: !0,
						volume: e.volume
					}, this.combinedVideoRefs = this.combineExternalVideoRef(e.videoRef)
				}
				isUnobscured() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
					return !e.isListing || e.isOverlay || !e.isOverlayOpen
				}
				isInViewport() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
						t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state;
					return !e.isListing || e.isOverlay || !!e.isExpando || !t.videoScrollPaused
				}
				autoplay() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
						t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state;
					return ns(e) && this.isUnobscured(e) && this.isInViewport(e, t)
				}
				componentDidMount() {
					ls.dashjs || (ls.dashjs = Object(f.a)(() => s.e("vendors~dashjs").then(s.t.bind(null, "./node_modules/dashjs/dist/dash.all.debug.js", 7)))), ls.dashjs.then(e => {
						var t, s;
						const i = this.HTML5StreamPlayerVideo,
							o = this.props.mpegDashSource;
						if (i && o) {
							this.dashPlayer = e.MediaPlayer().create(), this.dashPlayer.on(e.MediaPlayer.events.ERROR, e => {
								const t = null == e ? void 0 : e.error;
								(null == t ? void 0 : t.message) && x.c.captureException(`Error loading video url for post id ${this.props.postId}: ${t.message}`), this.props.isVideoCorrelationIdFix ? this.props.onErrorVideo() : this.sendEvent("error", "video"), this.setState({
									error: t,
									videoHasError: !0
								})
							});
							try {
								this.dashPlayer.initialize(i, o, i.autoplay || !i.paused), this.dashPlayer.updateSettings({
									streaming: {
										abr: {
											initialBitrate: {
												video: 999999999
											},
											useDefaultABRRules: !0,
											ABRStrategy: "abrThroughput",
											additionalAbrRules: {
												insufficientBufferRule: !1,
												switchHistoryRule: !1,
												droppedFramesRule: !1,
												abandonRequestsRule: !1
											}
										},
										buffer: {
											fastSwitchEnabled: !0,
											bufferTimeAtTopQuality: _.j,
											bufferTimeAtTopQualityLongForm: _.j,
											stableBufferTime: _.j
										}
									}
								})
							} catch (a) {
								return
							}
							null != this.props.postId && this.props.onLoadStarted(performance.now()), this.dashPlayer.on(e.MediaPlayer.events.STREAM_INITIALIZED, () => {
								this.getVideoQualityList(), this.getAudioInfo(), null != this.props.postId && this.props.onPlayable(performance.now()), this.controlBarApi && !this.state.hideControlBar && this.controlBarApi.setCurrentTime(0), this.props.shouldCreateFakeThumbnail && this.createFakeThumbnail()
							}), this.dashPlayer.on(e.MediaPlayer.events.BUFFER_EMPTY, e => {
								if (null != this.props.postId && Date.now() > this.state.ignoreUnderrunsUntil) {
									const e = B.d(this.props.postId);
									this.props.sendEvent(e), this.setState({
										ignoreUnderrunsUntil: Date.now() + as
									})
								}
							}), i.addEventListener("error", this.resetMediaPlayer), null === (s = (t = this.props).onDashCreate) || void 0 === s || s.call(t, this.dashPlayer)
						}
					});
					const e = this.HTML5StreamPlayerVideo;
					document.addEventListener("webkitfullscreenchange", this.exitHandler, !1), document.addEventListener("fullscreenchange", this.exitHandler, !1), document.addEventListener("mozfullscreenchange", this.exitHandler, !1), document.addEventListener("MSFullscreenChange", this.exitHandler, !1), e && (Object(g.c)() ? e.play() : o.a.safari && !this.props.mpegDashSource && setTimeout(async () => {
						try {
							await e.play()
						} catch (t) {} finally {
							e.pause()
						}
					}), e.oncanplay = () => this.onCanPlay(), e.onprogress = () => this.setBuffered(), e.onseeked = () => this.setState({
						videoWaiting: !1
					}), e.onwaiting = () => this.setState({
						videoWaiting: !0
					}), e.onplaying = e => this.onPlaying(e), e.onplay = e => this.onPlay(e), e.onpause = e => this.onPause(e), e.onloadeddata = e => this.onVideoPlayable(e), e.onloadedmetadata = e => this.sendTransformedMetadata(e), this.props.currentTime && (e.currentTime = this.props.currentTime))
				}
				componentDidUpdate(e) {
					const {
						isListing: t,
						mutedInFeed: s,
						videoRef: i,
						volume: o
					} = this.props;
					i !== e.videoRef && (this.combinedVideoRefs = this.combineExternalVideoRef(i)), t && this.state.videoPaused && (s !== e.mutedInFeed && s !== this.state.isMuted && this.setState({
						isMuted: s
					}), o !== e.volume && (this.HTML5StreamPlayerVideo && (this.HTML5StreamPlayerVideo.volume = o), o !== this.state.volume && this.setState({
						volume: o
					})))
				}
				async destroyMediaPlayer() {
					var e, t;
					this.dashPlayer && (await (null === (t = (e = this.props).onDashDestroy) || void 0 === t ? void 0 : t.call(e, this.dashPlayer)), this.dashPlayer.destroy(), this.dashPlayer = null)
				}
				componentWillUnmount() {
					document.removeEventListener("webkitfullscreenchange", this.exitHandler, !1), document.removeEventListener("fullscreenchange", this.exitHandler, !1), document.removeEventListener("mozfullscreenchange", this.exitHandler, !1), document.removeEventListener("MSFullscreenChange", this.exitHandler, !1), this.destroyMediaPlayer(), this.clearControlBarFadeTimer(), window.clearTimeout(this.hoverTimeout), null == this.props.postId || this.state.videoScrollPaused || (this.props.isVideoCorrelationIdFix ? this.props.onVideoServed() : this.sendEvent("served", "video", !0))
				}
				shouldComponentUpdate(e, t) {
					const s = !!this.props.isListing && !this.props.isOverlayOpen && e.isOverlayOpen,
						i = !!this.props.isListing && this.props.isOverlayOpen && !e.isOverlayOpen,
						o = this.props.isOverlayOpen !== e.isOverlayOpen,
						a = !!this.props.isListing && e.mutedInFeed !== this.props.mutedInFeed,
						n = e.volume !== this.props.volume;
					return t.videoFullScreen !== this.state.videoFullScreen || t.videoPaused !== this.state.videoPaused || t.isMuted !== this.state.isMuted || t.hideControlBar !== this.state.hideControlBar || t.settingChange !== this.state.settingChange || t.videoScrollPaused !== this.state.videoScrollPaused || t.videoWaiting !== this.state.videoWaiting || t.isRecovering !== this.state.isRecovering || t.videoHasError !== this.state.videoHasError || e.shouldPause !== this.props.shouldPause || e.shouldStop !== this.props.shouldStop || t.videoLoaded !== this.state.videoLoaded || t.usingKeys !== this.state.usingKeys || t.resolution !== this.state.resolution || t.videoStarted !== this.state.videoStarted || t.isHovered !== this.state.isHovered || s || i || o || a || n
				}
				UNSAFE_componentWillReceiveProps(e) {
					const t = this.HTML5StreamPlayerVideo,
						s = t && !t.paused,
						i = !e.shouldStop && this.props.shouldStop,
						o = e.shouldStop && !this.props.shouldStop,
						a = !e.shouldPause && this.props.shouldPause,
						n = e.shouldPause && !this.props.shouldPause,
						r = e.isBackgrounded && !this.props.isBackgrounded,
						l = !this.props.shouldPause && !this.props.shouldStop,
						c = !e.isOverlay && !this.props.isOverlay,
						d = e.isOverlayOpen && !this.props.isOverlayOpen,
						h = !e.isOverlayOpen && this.props.isOverlayOpen,
						u = (l || s) && c && d,
						p = l && c && h;
					(i || a) && (this.props.isVideoCorrelationIdFix ? this.props.onViewAutoplay() : this.sendEvent("view", "autoplay"), this.setState({
						videoScrollPaused: !1
					}, () => {
						a && !this.state.videoManualPaused && t && t.currentTime < t.duration && (e.currentTime && (t.currentTime = e.currentTime), this.autoplay(e, this.state) && this.playVideo())
					})), p && (this.props.isVideoCorrelationIdFix ? this.props.onChangePagetype() : this.sendEvent("change", "pagetype", !0)), (n || u) && (this.pauseVideo(), u && (this.props.isVideoCorrelationIdFix ? this.props.onChangePagetype() : this.sendEvent("change", "pagetype", !0)), r && (this.props.isVideoCorrelationIdFix ? this.props.onBackgroundVideo() : this.sendEvent("background", "video"))), o && (this.pauseVideo(), this.setState({
						videoScrollPaused: !0
					}), this.props.isVideoCorrelationIdFix ? this.props.onVideoServed() : this.sendEvent("served", "video", !0), this.state.videoEnded || (this.props.isVideoCorrelationIdFix ? this.props.onScrollPause() : this.sendEvent("scroll", "pause"), this.props.isListing || this.setVideoMute(!0, !1)))
				}
				updateUsingKeyStatus(e) {
					if (0 !== e.location) return;
					this.state.usingKeys || this.setState({
						usingKeys: !0
					});
					let t = os;
					this.state.settingChange === Kt.Settings && (t = 5 * os), this.resetControlBarFadeTimer(t)
				}
				setBuffered() {
					const e = this.HTML5StreamPlayerVideo;
					if (e && this.controlBarApi) {
						const t = [];
						for (let s = 0; s < e.buffered.length; s++) {
							const i = {
								start: e.buffered.start(s) / e.duration * 100,
								end: e.buffered.end(s) / e.duration * 100
							};
							t.push(i)
						}
						this.controlBarApi.setBufferedRanges(t)
					}
				}
				restartVideo() {
					this.setVideoPos(.001), this.playVideo()
				}
				getWatchedPercentRange(e, t) {
					const s = e / t;
					return s >= 1 ? _.a : s >= .95 ? _.e : s >= .75 ? _.d : s >= .5 ? _.c : s >= .25 ? _.b : 0
				}
				triggerPercentagePixels(e) {
					_.k.forEach(t => {
						t <= e && !this.percentagePixelsFired[t] && (this.props.onWatchedPercent(t), this.percentagePixelsFired[t] = !0)
					})
				}
				triggerTimeWatchedPixels(e) {
					_.l.forEach(t => {
						t <= e && !this.timePixelsFired[t] && (this.props.onWatchedSeconds(t), this.timePixelsFired[t] = !0)
					})
				}
				combineExternalVideoRef(e) {
					return e ? Object(m.a)(this.videoRef, e) : this.videoRef
				}
				render() {
					const {
						className: e,
						hideUntilLoaded: t,
						playerClickPlay: s = !0,
						showControlBar: i = !0,
						showSettingsIcon: o = !0,
						reactPostInfo: a
					} = this.props, {
						error: n,
						hasAudio: r,
						hasHovered: l,
						hideControlBar: d,
						isMuted: h,
						isRecovering: m,
						settingChange: v,
						videoEnded: g,
						videoHasError: f,
						videoLoaded: x,
						videoStarted: y
					} = this.state, S = this.HTML5StreamPlayerVideo, b = v === Kt.SeekBar, C = x || !t, P = !x, V = !l && h, E = g && !b, F = {
						...this.props,
						bitrateInfo: this.state.bitrateInfo,
						resolution: this.state.resolution,
						setAutoplay: this.setAutoplay,
						setResolution: this.setResolution,
						settingChange: v,
						settingRef: this.setSettingRef,
						toggleSetting: this.toggleSetting
					};
					return c.a.createElement(Jt, {
						setRef: this.setContainerRef,
						className: Object(u.a)(e, this.state.videoFullScreen ? ss.a.RedditVideoPlayerRoot__Fullscreen : ss.a.RedditVideoPlayerRoot, this.state.usingKeys ? "using-keys" : null),
						isVisible: C,
						onClick: this.handleClick,
						onKeyDown: this.handleKeyDown,
						onKeyUp: this.handleKeyUp,
						onMouseDown: this.handleMouseDown,
						onMouseEnter: this.handleMouseEnter,
						onMouseLeave: this.handleMouseLeave,
						onMouseMove: this.handleMouseMove,
						onMouseUp: this.handleMouseUp,
						"data-adclicklocation": $t.a.MEDIA,
						"data-isvideoplayer": 1
					}, this.props.blurImageSrc && c.a.createElement(Z, {
						src: this.props.blurImageSrc
					}), !y && !f && c.a.createElement("div", {
						style: {
							backgroundColor: p.b,
							backgroundImage: `url(${this.props.posterUrl})`,
							zIndex: 10
						},
						className: this.state.videoFullScreen ? ss.a.HTML5StreamPlayer__VideoFullscreen : ss.a.HTML5StreamPlayer__VideoRegular
					}), c.a.createElement("video", {
						style: {
							backgroundColor: p.b
						},
						loop: this.props.isGif,
						muted: h,
						onTimeUpdate: this.updateTime,
						preload: "metadata",
						ref: this.combinedVideoRefs,
						className: this.state.videoFullScreen ? ss.a.HTML5StreamPlayer__VideoFullscreen : ss.a.HTML5StreamPlayer__VideoRegular
					}, this.props.hlsSource && c.a.createElement("source", {
						src: this.props.hlsSource,
						type: "application/vnd.apple.mpegURL"
					}), this.props.otherSource && c.a.createElement("source", {
						src: this.props.otherSource
					})), this.props.postId && a && !this.props.isReactionPillKillswitchEnabled && this.state.isHovered && c.a.createElement(w, {
						reactPostInfo: a,
						handleClick: this.onCreditPillClick
					}), E ? c.a.createElement(zt, {
						onClick: this.resetVideo,
						postId: this.props.postId,
						source: this.props.callToActionSource,
						callToAction: this.props.callToActionText
					}) : c.a.createElement(Xt, null), m ? c.a.createElement(M.a, null) : f ? c.a.createElement(xt, {
						error: n
					}) : this.state.videoWaiting ? P && c.a.createElement(M.a, null) : this.state.videoPaused && !E && c.a.createElement(T.a, {
						onClick: s ? void 0 : this.playPauseVideo
					}), i && c.a.createElement($e, {
						clickSnoo: this.clickSnoo,
						controlBarRef: this.setControlBarRef,
						currentTime: S ? S.currentTime : 0,
						hasAudio: r,
						updateContinuousStartTime: this.updateContinuousStartTime,
						enterFullScreen: this.enterFullScreen,
						exitFullScreen: this.exitFullScreen,
						hideControlBar: d,
						isFullScreen: this.state.videoFullScreen,
						isListing: this.props.isListing,
						isMuted: this.state.isMuted,
						isPaused: this.state.videoPaused,
						playPauseVideo: this.playPauseVideo,
						postUrl: this.props.postUrl,
						ref: this.setControlBarApi,
						settingsButton: c.a.createElement(mt, F),
						scrubberThumbSource: this.props.scrubberThumbSource,
						seekBarRef: this.setSeekBarRef,
						settingChange: v,
						setVideoPosition: this.setVideoPos,
						setVolume: this.setVolume,
						showSettingsIcon: o,
						showVolumeIcon: V,
						toggleMute: this.toggleMuteVideo,
						totalTime: this.state.totalTime,
						volume: this.state.volume,
						volumeRef: this.setVolumeRef
					}))
				}
			}
			t.b = rs(Object(F.c)(Object(k.b)(ls)))
		},
		"./src/reddit/components/Media/LoadingIcon/index.m.less": function(e, t, s) {
			e.exports = {
				image: "_1Wd26c2ichqUxeZVJStEJT"
			}
		},
		"./src/reddit/components/Media/LoadingIcon/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				o = s.n(i),
				a = s("./src/config.ts"),
				n = s("./src/reddit/components/Media/LoadingIcon/index.m.less"),
				r = s.n(n);
			t.a = () => o.a.createElement("img", {
				className: r.a.image,
				src: `${a.a.assetPath}/img/loading.gif`
			})
		},
		"./src/reddit/components/PlayButton/index.m.less": function(e, t, s) {
			e.exports = {
				PlayIcon: "_2XQ3ZY6qCbEm9_WtvLLFru",
				playIcon: "_2XQ3ZY6qCbEm9_WtvLLFru",
				PlayContainer: "vLH0XV-l8Y4mNGUvw4HHy",
				playContainer: "vLH0XV-l8Y4mNGUvw4HHy"
			}
		},
		"./src/reddit/components/PlayButton/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				o = s.n(i),
				a = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/icons/svgs/VideoNewPlayButton/index.tsx"),
				r = s("./src/reddit/components/PlayButton/index.m.less"),
				l = s.n(r);
			const c = a.a.wrapped(n.a, "PlayIcon", l.a),
				d = a.a.div("PlayContainer", l.a);
			t.a = e => o.a.createElement(d, {
				className: e.className,
				onClick: e.onClick
			}, o.a.createElement(c, {
				className: e.playIconClassName
			}))
		},
		"./src/reddit/components/VideoCTA/index.m.less": function(e, t, s) {
			e.exports = {
				ctaLink: "_2FH_xFiDZCFtYKBJAmSpeD",
				ctaText: "_3uyGw8SwblJ37jvDUd-0Z_",
				ctaWrapper: "_267SSeon8aryjeoh4UclX8"
			}
		},
		"./src/reddit/endpoints/giphy/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return l
			}));
			var i = s("./src/config.ts"),
				o = s("./src/lib/addQueryParams/index.ts");
			const a = "pg";
			async function n(e) {
				return c(Object(o.a)("https://api.giphy.com/v1/gifs/search", {
					api_key: i.a.giphyApiKey,
					q: e.query,
					offset: e.offset || 0,
					rating: e.rating || a
				}))
			}
			async function r() {
				return c(Object(o.a)("https://api.giphy.com/v1/gifs/trending", {
					api_key: i.a.giphyApiKey,
					rating: a
				}))
			}
			async function l(e) {
				return c(Object(o.a)(`https://api.giphy.com/v1/gifs/${e}`, {
					api_key: i.a.giphyApiKey
				}))
			}
			async function c(e) {
				const t = await fetch(e),
					s = await t.json();
				if (200 !== s.meta.status) throw new Error(`${s.meta.status} ${s.meta.msg}`);
				return s
			}
		},
		"./src/reddit/helpers/trackers/react.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return a
			}));
			var i = s("./src/reddit/selectors/telemetry.ts");
			const o = e => {
					let {
						subredditId: t,
						postId: s,
						reactionsEnabled: o
					} = e;
					return e => {
						const a = s ? i.C(e, s) : void 0;
						return {
							source: "post_detail",
							action: "click",
							noun: "react_allow_reactions",
							subreddit: {
								id: t
							},
							media: {
								...a,
								reactionsEnabled: o
							},
							...i.o(e)
						}
					}
				},
				a = e => {
					let {
						subredditId: t,
						postId: s,
						reactSourceSubredditId: o,
						reactSourceMediaId: a
					} = e;
					return e => {
						const n = s ? i.C(e, s) : void 0;
						return {
							source: "post",
							action: "click",
							noun: "react_credit_pill",
							subreddit: {
								id: t
							},
							reactSource: {
								subredditId: o,
								mediaId: a
							},
							media: {
								...n
							},
							...i.o(e)
						}
					}
				}
		},
		"./src/reddit/icons/svgs/VideoApplyNow/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1x0QJr7iXMkiGpOnQbAvYN"
			}
		},
		"./src/reddit/icons/svgs/VideoApplyNow/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				o = s.n(i),
				a = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/icons/svgs/VideoApplyNow/index.m.less"),
				r = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: Object(a.a)(r.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(1 1)"
			}, o.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M27.7 20.4h-7.4c-.2 0-.4-.2-.4-.4s.2-.5.5-.5h7.3c.3 0 .5.2.5.5s-.3.4-.5.4m0 3.1h-7.4c-.2 0-.4-.3-.4-.5 0-.3.2-.5.5-.5h7.3c.3 0 .5.2.5.5-.1.2-.3.5-.5.5m0 3h-7.4c-.2 0-.4-.2-.4-.5s.2-.5.5-.5h7.3c.3 0 .5.2.5.5-.1.3-.3.5-.5.5m0 3h-7.4c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h7.3c.3 0 .5.2.5.5s-.2.5-.4.5m2-12.2h-2.2c-.3-.6-1-1-1.7-1h-3.6c-.7 0-1.4.4-1.7 1h-2.2c-.5 0-1 .4-1 1v12.5c0 .5.4 1 1 1h11.5c.5 0 1-.4 1-1V18.2c-.1-.5-.5-.9-1.1-.9"
			})))
		},
		"./src/reddit/icons/svgs/VideoCheckmark/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				o = s.n(i);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 77.06 60"
			}, o.a.createElement("g", {
				fill: "none"
			}, o.a.createElement("path", {
				d: "M75.17,11.35l-44.9,46.7a6.17,6.17,0,0,1-9,0L1.88,37.55a6.83,6.83,0,0,1,0-9.4,6.17,6.17,0,0,1,9,0l15,15.8L66.27,2a6.17,6.17,0,0,1,9,0A6.93,6.93,0,0,1,75.17,11.35Z",
				fill: "#FFFFFF"
			})))
		},
		"./src/reddit/icons/svgs/VideoCollapse/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				o = s.n(i);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				d: "M14.41,13H17a1,1,0,0,0,0-2H12a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V14.41l3.24,3.24a1,1,0,0,0,1.41-1.41Z",
				fill: "#FFFFFF"
			}), o.a.createElement("path", {
				d: "M8,2A1,1,0,0,0,7,3V5.59L3.76,2.34A1,1,0,0,0,2.34,3.76L5.59,7H3A1,1,0,0,0,3,9H8A1,1,0,0,0,9,8V3A1,1,0,0,0,8,2Z",
				fill: "#FFFFFF"
			}))
		},
		"./src/reddit/icons/svgs/VideoContactUs/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_11XLCF2uLCEj35_lDddpNT"
			}
		},
		"./src/reddit/icons/svgs/VideoContactUs/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				o = s.n(i),
				a = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/icons/svgs/VideoContactUs/index.m.less"),
				r = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: Object(a.a)(r.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(1 1)"
			}, o.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M34.5 23.7s-.1 0 0 0c-.1 0-.1 0 0 0-.1 0-.1 0 0 0-.1-.1-.1-.1-.2-.1l-15.4-7.2c-.1-.1-.3-.1-.5 0-.1.1-.2.2-.2.4v4.3c0 .2.2.4.4.5l10.3 1.9H18.2c-.1 0-.2 0-.2.1L15.6 25c-.2.1-.3.3-.2.6.1.2.2.3.5.3l2.4-.2v5.5c0 .2.1.3.2.4.1 0 .2.1.3.1h.2l15.4-7.2s.1 0 .1-.1c0 0 .1 0 .1-.1.1-.1.1-.2.1-.3-.1-.1-.2-.2-.2-.3"
			})))
		},
		"./src/reddit/icons/svgs/VideoExpand/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				o = s.n(i);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				d: "M9,3A1,1,0,0,0,8,2H3A1,1,0,0,0,2,3V8A1,1,0,0,0,4,8V5.41L7.24,8.66A1,1,0,0,0,8.66,7.24L5.41,4H8A1,1,0,0,0,9,3Z",
				fill: "#FFFFFF"
			}), o.a.createElement("path", {
				d: "M17,11a1,1,0,0,0-1,1v2.59l-3.24-3.24a1,1,0,0,0-1.41,1.41L14.59,16H12a1,1,0,0,0,0,2h5a1,1,0,0,0,1-1V12A1,1,0,0,0,17,11Z",
				fill: "#FFFFFF"
			}))
		},
		"./src/reddit/icons/svgs/VideoGetAQuote/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "Ui8OEQfWnkN9BO2o-qSXV"
			}
		},
		"./src/reddit/icons/svgs/VideoGetAQuote/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				o = s.n(i),
				a = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/icons/svgs/VideoGetAQuote/index.m.less"),
				r = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: Object(a.a)(r.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(1 1)"
			}, o.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M19.5 17.3h3.1l-1.8 5h2.3v6.5h-6.8v-6l3.2-5.5zm8.5 0h3.1l-1.8 5h2.3v6.5h-6.8v-6l3.2-5.5z"
			})))
		},
		"./src/reddit/icons/svgs/VideoGetShowtimes/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "o2NVVhdZrQ3VeGMHO8aA0"
			}
		},
		"./src/reddit/icons/svgs/VideoGetShowtimes/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				o = s.n(i),
				a = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/icons/svgs/VideoGetShowtimes/index.m.less"),
				r = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: Object(a.a)(r.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(1 1)"
			}, o.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M32.2 20.3c-.3-.2-.7-.2-1 0l-2.4 1.4v-1.5c0-1.1-.9-1.9-1.9-1.9h-7.7c-1.1 0-1.9.9-1.9 1.9v7.7c0 1.1.9 1.9 1.9 1.9h7.7c1.1 0 1.9-.9 1.9-1.9v-1.6l2.4 1.4c.2.1.3.1.5.1s.3 0 .5-.1c.3-.2.5-.5.5-.8v-5.8c-.1-.3-.2-.6-.5-.8"
			})))
		},
		"./src/reddit/icons/svgs/VideoInstall/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3DFi9BDKHWFWnty75sJhyJ"
			}
		},
		"./src/reddit/icons/svgs/VideoInstall/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				o = s.n(i),
				a = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/icons/svgs/VideoInstall/index.m.less"),
				r = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: Object(a.a)(r.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(1 1)"
			}, o.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M30.7 25c.5 0 1 .4 1 1v2.9c0 1.6-1.3 2.9-2.9 2.9h-9.6c-1.6 0-2.9-1.3-2.9-2.9v-3c0-.5.4-1 1-1s1 .4 1 1v2.9c0 .5.4 1 1 1h9.6c.5 0 1-.4 1-1v-2.9c-.1-.5.3-.9.8-.9zm-7.4 1.6l-2.9-2.9c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l1.2 1.3v-6.3c0-.5.4-1 1-1 .5 0 1 .4 1 1v6.3l1.2-1.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-2.9 2.8c-.1.1-.2.2-.3.2-.2.1-.3.1-.4.1-.1 0-.2 0-.4-.1-.1 0-.2-.1-.3-.2z"
			})))
		},
		"./src/reddit/icons/svgs/VideoLearnMore/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1PkP2GybP9Bh6mN4gmbPN4"
			}
		},
		"./src/reddit/icons/svgs/VideoLearnMore/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				o = s.n(i),
				a = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/icons/svgs/VideoLearnMore/index.m.less"),
				r = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: Object(a.a)(r.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(1 1)"
			}, o.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M25.4 24c0 .8-.6 1.4-1.4 1.4s-1.4-.6-1.4-1.4.6-1.4 1.4-1.4 1.4.6 1.4 1.4zm5.3 0c0 .8-.6 1.4-1.4 1.4-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4c.8 0 1.4.6 1.4 1.4zm-10.5 0c0 .8-.6 1.4-1.4 1.4s-1.5-.6-1.5-1.4.6-1.4 1.4-1.4 1.5.6 1.5 1.4z"
			})))
		},
		"./src/reddit/icons/svgs/VideoMute/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				o = s.n(i);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				d: "M16.41,10.5l1.79-1.79a1,1,0,0,0-1.41-1.41L15,9.09,13.21,7.29a1,1,0,0,0-1.41,1.41l1.79,1.79-1.79,1.79a1,1,0,1,0,1.41,1.41L15,11.91l1.79,1.79a1,1,0,0,0,1.41-1.41Z",
				fill: "#FFFFFF"
			}), o.a.createElement("path", {
				d: "M9.7,1.54a.5.5,0,0,0-.54.09L3.81,6.5H1.5A.5.5,0,0,0,1,7v6a.5.5,0,0,0,.5.5H3.81l5.36,4.87a.5.5,0,0,0,.34.13.49.49,0,0,0,.2,0A.5.5,0,0,0,10,18V2A.5.5,0,0,0,9.7,1.54Z",
				fill: "#FFFFFF"
			}))
		},
		"./src/reddit/icons/svgs/VideoNewPlayButton/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "eI6Ep6BNFA5DZjPWNVb4O"
			}
		},
		"./src/reddit/icons/svgs/VideoNewPlayButton/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				o = s.n(i),
				a = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/icons/svgs/VideoNewPlayButton/index.m.less"),
				r = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: Object(a.a)(r.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(1 1)"
			}, o.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M33.1 22.2l-11.5-6.7c-.3-.2-.7-.2-1 0-.3.2-.4.5-.4.8v13.4c0 .3.2.7.5.8.1.1.3.1.5.1s.3 0 .5-.1l11.5-6.7c.3-.2.5-.5.5-.8-.1-.3-.3-.6-.6-.8"
			})))
		},
		"./src/reddit/icons/svgs/VideoPause/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				o = s.n(i);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("rect", {
				x: "11",
				y: "2",
				width: "6",
				height: "16",
				rx: "1",
				ry: "1",
				fill: "#FFFFFF"
			}), o.a.createElement("rect", {
				x: "3",
				y: "2",
				width: "6",
				height: "16",
				rx: "1",
				ry: "1",
				fill: "#FFFFFF"
			}))
		},
		"./src/reddit/icons/svgs/VideoPlay/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				o = s.n(i);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				d: "M18.5,9.14l-12-7A1,1,0,0,0,5,3V17a1,1,0,0,0,1.5.86l12-7a1,1,0,0,0,0-1.73Z",
				fill: "#FFFFFF"
			}))
		},
		"./src/reddit/icons/svgs/VideoPlayNow/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1EfHCA6m0dIgLYzGW2aor1"
			}
		},
		"./src/reddit/icons/svgs/VideoPlayNow/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				o = s.n(i),
				a = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/icons/svgs/VideoPlayNow/index.m.less"),
				r = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: Object(a.a)(r.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(1 1)"
			}, o.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M32.5,23.5c-0.7,0-1.4-0.6-1.4-1.4c0-0.7,0.6-1.4,1.4-1.4s1.4,0.6,1.4,1.4 C33.8,22.8,33.2,23.5,32.5,23.5 M29.8,26.2c-0.7,0-1.4-0.6-1.4-1.4c0-0.7,0.6-1.4,1.4-1.4c0.7,0,1.4,0.6,1.4,1.4 C31.1,25.6,30.5,26.2,29.8,26.2 M27.1,23.5c-0.7,0-1.4-0.6-1.4-1.4c0-0.7,0.6-1.4,1.4-1.4c0.7,0,1.4,0.6,1.4,1.4 C28.4,22.8,27.8,23.5,27.1,23.5 M21.6,23.1H20v1.7c0,0.6-0.5,1-1,1s-1-0.5-1-1v-1.7h-1.7c-0.6,0-1-0.5-1-1c0-0.6,0.5-1,1-1H18 v-1.7c0-0.6,0.5-1,1-1s1,0.5,1,1v1.7h1.7c0.6,0,1,0.5,1,1C22.7,22.7,22.2,23.1,21.6,23.1 M29.8,18c0.7,0,1.4,0.6,1.4,1.4 c0,0.7-0.6,1.4-1.4,1.4c-0.7,0-1.4-0.6-1.4-1.4C28.4,18.6,29,18,29.8,18 M37.3,28.1l-1.7-9.5c-0.4-1.9-2-3.3-4-3.3H17.1 c-2,0-3.6,1.4-4,3.3l-1.7,9.5c-0.2,1.2,0.1,2.4,0.9,3.3c0.8,0.9,1.9,1.5,3.1,1.5h0.2c1.8,0,3.3-1.1,3.9-2.8l0.4-1.3h8.9 l0.4,1.3c0.6,1.7,2.1,2.8,3.9,2.8h0.2c1.2,0,2.3-0.5,3.1-1.5C37.2,30.5,37.5,29.3,37.3,28.1"
			})))
		},
		"./src/reddit/icons/svgs/VideoReplay/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3N5UJK0Os17icJ33e54tfY"
			}
		},
		"./src/reddit/icons/svgs/VideoReplay/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				o = s.n(i),
				a = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/icons/svgs/VideoReplay/index.m.less"),
				r = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: Object(a.a)(r.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(1 1)"
			}, o.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M32.5 23.3c-.7 0-1.2.5-1.2 1.2 0 4-3.2 7.2-7.2 7.2s-7.2-3.2-7.2-7.2c0-3.6 2.7-6.6 6.2-7.1v1.7c0 .2.1.4.3.5.1 0 .2.1.3.1.1 0 .3 0 .4-.1l3.6-3c.1-.1.2-.3.2-.5s-.1-.3-.2-.5l-3.7-3c-.2-.1-.4-.2-.6-.1-.2.1-.4.3-.4.6V15c-4.8.5-8.6 4.6-8.6 9.5 0 5.3 4.3 9.6 9.6 9.6s9.6-4.3 9.6-9.6c.1-.7-.5-1.2-1.1-1.2"
			})))
		},
		"./src/reddit/icons/svgs/VideoSeeMenu/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "G2_89gx6TwcALtRI4k7hc"
			}
		},
		"./src/reddit/icons/svgs/VideoSeeMenu/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				o = s.n(i),
				a = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/icons/svgs/VideoSeeMenu/index.m.less"),
				r = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: Object(a.a)(r.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(1 1)"
			}, o.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M29.3 20.2h-5.8c-.2 0-.5-.3-.5-.5 0-.3.2-.5.5-.5h5.8c.3 0 .5.2.5.5 0 .2-.3.5-.5.5zm0 4.3h-5.8c-.2 0-.5-.2-.5-.5s.2-.5.5-.5h5.8c.3 0 .5.2.5.5s-.3.5-.5.5zm0 4.3h-5.8c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h5.8c.3 0 .5.2.5.5s-.3.5-.5.5zm-8.2-8.2c0 .3-.2.5-.5.5h-1.9c-.3 0-.5-.2-.5-.5v-1.9c0-.3.2-.5.5-.5h1.9c.3 0 .5.2.5.5v1.9zm0 4.4c0 .3-.2.5-.5.5h-1.9c-.3 0-.5-.2-.5-.5v-2c0-.3.2-.5.5-.5h1.9c.3 0 .5.2.5.5v2zm0 4.3c0 .3-.2.5-.5.5h-1.9c-.3 0-.5-.2-.5-.5v-1.9c0-.3.2-.5.5-.5h1.9c.3 0 .5.2.5.5v1.9zm8.7-13H18.2c-1.1 0-1.9.9-1.9 1.9v11.5c0 1.1.9 1.9 1.9 1.9h11.5c1.1 0 1.9-.9 1.9-1.9V18.2c.1-1-.8-1.9-1.8-1.9z"
			})))
		},
		"./src/reddit/icons/svgs/VideoSetting/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				o = s.n(i);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				fill: "#fff",
				d: "M18.5,8.94,16.32,8.5h0a6.46,6.46,0,0,0-.79-1.9h0l1.23-1.85a1.08,1.08,0,0,0-1.5-1.5L13.41,4.47h0a6.45,6.45,0,0,0-1.9-.79h0L11.06,1.5a1.08,1.08,0,0,0-2.12,0L8.5,3.68h0a6.45,6.45,0,0,0-1.9.79h0L4.74,3.24a1.08,1.08,0,0,0-1.5,1.5L4.47,6.59h0a6.45,6.45,0,0,0-.79,1.9h0L1.5,8.94a1.08,1.08,0,0,0,0,2.12l2.18.44h0a6.45,6.45,0,0,0,.79,1.9h0L3.24,15.26a1.08,1.08,0,0,0,1.5,1.5l1.85-1.23h0a6.45,6.45,0,0,0,1.9.79h0l.44,2.18a1.08,1.08,0,0,0,2.12,0l.44-2.18h0a6.45,6.45,0,0,0,1.9-.79h0l1.85,1.23a1.08,1.08,0,0,0,1.5-1.5l-1.23-1.85h0a6.45,6.45,0,0,0,.79-1.9h0l2.18-.44a1.08,1.08,0,0,0,0-2.12ZM10,13.5A3.5,3.5,0,1,1,13.5,10,3.5,3.5,0,0,1,10,13.5Z"
			}))
		},
		"./src/reddit/icons/svgs/VideoShopNow/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_2kG3YOJULmYUC8YtVtNO9J"
			}
		},
		"./src/reddit/icons/svgs/VideoShopNow/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				o = s.n(i),
				a = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/icons/svgs/VideoShopNow/index.m.less"),
				r = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: Object(a.a)(r.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(1 1)"
			}, o.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M29 26c-.6 0-1-.4-1-1 0-.5.4-1 1-1s1 .4 1 1-.5 1-1 1zm-6.9-6c0-.5.4-1 1-1H27c.6 0 1 .4 1 1v2.1h-5.9V20zM21 26c-.6 0-1-.4-1-1 0-.5.4-1 1-1s1 .4 1 1-.5 1-1 1zm11.7-3.6c-.2-.2-.5-.3-.7-.3h-2V20c0-1.6-1.3-3-3-3h-3.9c-1.7 0-3 1.3-3 3v2.1H18c-.3 0-.6.1-.7.3-.2.2-.3.5-.2.8l1 9c.1.5.5.9 1 .9h12c.5 0 .9-.4 1-.9l1-9c-.1-.4-.2-.6-.4-.8z"
			})))
		},
		"./src/reddit/icons/svgs/VideoSignUp/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1NxifIlpri3Af8fEoxkaUr"
			}
		},
		"./src/reddit/icons/svgs/VideoSignUp/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				o = s.n(i),
				a = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/icons/svgs/VideoSignUp/index.m.less"),
				r = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: Object(a.a)(r.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(1 1)"
			}, o.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M27.7 20.4h-7.4c-.2 0-.4-.2-.4-.4s.2-.5.5-.5h7.3c.3 0 .5.2.5.5s-.3.4-.5.4m0 3.1h-7.4c-.2 0-.4-.3-.4-.5 0-.3.2-.5.5-.5h7.3c.3 0 .5.2.5.5-.1.2-.3.5-.5.5m0 3h-7.4c-.2 0-.4-.2-.4-.5s.2-.5.5-.5h7.3c.3 0 .5.2.5.5-.1.3-.3.5-.5.5m0 3h-7.4c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h7.3c.3 0 .5.2.5.5s-.2.5-.4.5m2-12.2h-2.2c-.3-.6-1-1-1.7-1h-3.6c-.7 0-1.4.4-1.7 1h-2.2c-.5 0-1 .4-1 1v12.5c0 .5.4 1 1 1h11.5c.5 0 1-.4 1-1V18.2c-.1-.5-.5-.9-1.1-.9"
			})))
		},
		"./src/reddit/icons/svgs/VideoSnoo/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				o = s.n(i);
			t.a = e => o.a.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				width: "16px",
				height: "16px",
				viewBox: "0 0 20 20"
			}, o.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, o.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M13.43,13.02125 C12.5683333,13.02125 11.8675,12.3204167 11.8675,11.45875 C11.8675,10.5970833 12.5683333,9.89583333 13.43,9.89583333 C14.2916667,9.89583333 14.9925,10.5970833 14.9925,11.45875 C14.9925,12.3204167 14.2916667,13.02125 13.43,13.02125 M13.705,15.5875 C12.63875,16.6525 10.595,16.735 9.99416667,16.735 C9.39333333,16.735 7.34958333,16.6525 6.28458333,15.5870833 C6.12625,15.4291667 6.12625,15.1725 6.28458333,15.0145833 C6.4425,14.8566667 6.69916667,14.85625 6.85708333,15.0145833 C7.52916667,15.6866667 8.96708333,15.9254167 9.99416667,15.9254167 C11.02125,15.9254167 12.4595833,15.6866667 13.1329167,15.0141667 C13.29125,14.85625 13.5475,14.8566667 13.7054167,15.0145833 C13.8633333,15.1729167 13.8633333,15.4291667 13.705,15.5875 M4.9925,11.45875 C4.9925,10.5970833 5.69375,9.89583333 6.55583333,9.89583333 C7.41666667,9.89583333 8.1175,10.5970833 8.1175,11.45875 C8.1175,12.32 7.41666667,13.0208333 6.55583333,13.0208333 C5.69375,13.0208333 4.9925,12.32 4.9925,11.45875 M19.99,9.89583333 C19.99,8.68791667 19.0108333,7.70833333 17.8025,7.70833333 C17.2129167,7.70833333 16.67875,7.94291667 16.2854167,8.32208333 C14.79,7.24333333 12.73,6.54625 10.4354167,6.46625 L11.4316667,1.77833333 L14.6875,2.47041667 C14.7270833,3.29791667 15.405,3.95833333 16.2425,3.95833333 C17.1054167,3.95833333 17.805,3.25875 17.805,2.39583333 C17.805,1.53291667 17.1054167,0.833333333 16.2425,0.833333333 C15.62875,0.833333333 15.1029167,1.19083333 14.8475,1.70541667 L11.2120833,0.932916667 C11.1108333,0.910833333 11.005,0.930833333 10.9183333,0.987083333 C10.83125,1.04375 10.7704167,1.1325 10.74875,1.23375 L9.65541667,6.37791667 C9.64916667,6.4075 9.65416667,6.43541667 9.65458333,6.46458333 C7.31875,6.52583333 5.21875,7.22458333 3.7,8.31833333 C3.30708333,7.94125 2.775,7.70833333 2.1875,7.70833333 C0.979166667,7.70833333 0,8.68791667 0,9.89583333 C0,10.785 0.530833333,11.5483333 1.29208333,11.8904167 C1.25833333,12.1079167 1.24,12.32875 1.24,12.5520833 C1.24,15.9179167 5.1575,18.6458333 9.99,18.6458333 C14.8225,18.6458333 18.74,15.9179167 18.74,12.5520833 C18.74,12.33 18.7220833,12.1108333 18.68875,11.895 C19.455,11.5545833 19.99,10.7883333 19.99,9.89583333"
			})))
		},
		"./src/reddit/icons/svgs/VideoViewMore/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_2X_GdgwreX3clU-MfCHx-Y"
			}
		},
		"./src/reddit/icons/svgs/VideoViewMore/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				o = s.n(i),
				a = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/icons/svgs/VideoViewMore/index.m.less"),
				r = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: Object(a.a)(r.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(1 1)"
			}, o.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M29.8 23H25v-4.8c0-.5-.4-1-1-1s-1 .4-1 1V23h-4.8c-.5 0-1 .4-1 1s.4 1 1 1H23v4.8c0 .5.4 1 1 1s1-.4 1-1V25h4.8c.5 0 1-.4 1-1s-.5-1-1-1"
			})))
		},
		"./src/reddit/icons/svgs/VideoVolume/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				o = s.n(i);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				d: "M12.67,3.1a1,1,0,0,0-.33,2,5,5,0,0,1,0,9.85,1,1,0,0,0,.17,2h.17a7,7,0,0,0,0-13.79Z",
				fill: "#FFFFFF"
			}), o.a.createElement("path", {
				d: "M9.7,1.54a.5.5,0,0,0-.54.09L3.81,6.5H1.5A.5.5,0,0,0,1,7v6a.5.5,0,0,0,.5.5H3.81l5.36,4.87a.5.5,0,0,0,.34.13.49.49,0,0,0,.2,0A.5.5,0,0,0,10,18V2A.5.5,0,0,0,9.7,1.54Z",
				fill: "#FFFFFF"
			}), o.a.createElement("path", {
				d: "M12,10.86a1,1,0,0,0,1,1.73,3,3,0,0,0,0-5.17,1,1,0,0,0-1,1.73,1,1,0,0,1,0,1.72Z",
				fill: "#FFFFFF"
			}))
		},
		"./src/reddit/icons/svgs/VideoWatchNow/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "egx9Z9oH6-wpjLKKhAEoM"
			}
		},
		"./src/reddit/icons/svgs/VideoWatchNow/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				o = s.n(i),
				a = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/icons/svgs/VideoWatchNow/index.m.less"),
				r = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: Object(a.a)(r.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(1 1)"
			}, o.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M32.2 20.3c-.3-.2-.7-.2-1 0l-2.4 1.4v-1.5c0-1.1-.9-1.9-1.9-1.9h-7.7c-1.1 0-1.9.9-1.9 1.9v7.7c0 1.1.9 1.9 1.9 1.9h7.7c1.1 0 1.9-.9 1.9-1.9v-1.6l2.4 1.4c.2.1.3.1.5.1s.3 0 .5-.1c.3-.2.5-.5.5-.8v-5.8c-.1-.3-.2-.6-.5-.8"
			})))
		},
		"./src/reddit/models/Product/index.ts": function(e, t, s) {
			"use strict";
			var i;

			function o(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			s.d(t, "a", (function() {
					return i
				})), s.d(t, "b", (function() {
					return o
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(i || (i = {}))
		},
		"./src/reddit/selectors/experiments/videoReactions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			}));
			var i = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				a = s("./src/reddit/selectors/experiments/index.ts");
			const n = e => Object(o.c)(e, {
					experimentName: i.mb,
					experimentEligibilitySelector: a.e
				}) === i.Od,
				r = e => Object(o.c)(e, {
					experimentName: i.xc,
					experimentEligibilitySelector: o.a
				}) === i.Od
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8.31ff06e329f844f6e6e9.js.map