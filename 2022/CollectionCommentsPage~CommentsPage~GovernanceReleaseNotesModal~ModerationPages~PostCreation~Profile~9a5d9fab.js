// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab.fbc61af8f901ef720ecf.js
// Retrieved at 7/19/2022, 10:40:16 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"], {
		"./src/higherOrderComponents/withClickTracking/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				o = s("./src/reddit/components/TrackingHelper/index.tsx"),
				r = s("./src/reddit/selectors/telemetry.ts");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const d = (e, t, s) => (function() {
				let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
				return n => {
					const o = m(n.target, n.currentTarget),
						a = p(n.target, n.currentTarget);
					o && s && t && (u(n.target, n.currentTarget, c.anchors) ? s(t(e, o, a)) : s(s => {
						const i = t(e, o, a)(s);
						let n;
						if (i && i.actionInfo) {
							const {
								pageType: e,
								...t
							} = i.actionInfo;
							n = t
						}
						return {
							...i,
							actionInfo: Object(r.Q)(s, n)
						}
					})), u(n.target, n.currentTarget, c.anchorsAndButtons) && i(n)
				}
			});

			function l(e) {
				const t = t => {
					const {
						sendEvent: s,
						eventFactory: o,
						clickTrackingId: r,
						...l
					} = t, c = Object(i.useCallback)(d(r, o, s), [r, o, s]);
					return n.a.createElement(e, a({}, l, {
						afterClickTracking: c
					}))
				};
				return t.displayName = `WithClickTracking(${e.displayName||e.name})`, Object(o.c)(t)
			}
			const c = {
					anchorsAndButtons: ["A", "BUTTON"],
					buttons: ["BUTTON"],
					anchors: ["A"]
				},
				u = (e, t, s) => !s.includes(e.tagName) && (e === t || !!e.parentElement && u(e.parentElement, t, s)),
				m = (e, t) => {
					const s = e.dataset.clickId;
					return s || (e === t ? null : !!e.parentElement && m(e.parentElement, t))
				},
				p = (e, t) => "true" === e.dataset.ignoreClick || e !== t && (!!e.parentElement && p(e.parentElement, t))
		},
		"./src/higherOrderComponents/withMux/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/cache/localStorage/index.ts"),
				d = s("./src/lib/combineRefs/index.tsx"),
				l = s("./src/lib/loadWithRetries/index.ts"),
				c = () => Object(l.a)(() => s.e("MuxEmbed").then(s.t.bind(null, "./node_modules/mux-embed/dist/mux.js", 7))),
				u = s("./src/reddit/constants/experiments.ts"),
				m = s("./src/reddit/helpers/chooseVariant/index.ts");
			const p = Object(r.a)(e => {
				const t = Object(m.c)(e, {
					experimentEligibilitySelector: m.a,
					experimentName: u.le
				});
				return Object(u.Xf)(t) ? void 0 : t
			}, e => {
				const t = Object(m.c)(e, {
					experimentEligibilitySelector: m.a,
					experimentName: u.me
				});
				return Object(u.Xf)(t) ? void 0 : t
			}, (e, t) => e === u.qe.Enabled && t === u.qe.Enabled);
			var h = s("./src/config.ts");
			var b = s("./src/reddit/selectors/user.ts");
			const g = e => {
					const t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
						s = t.length,
						i = new Uint32Array(e);
					return crypto.getRandomValues(i), Array.from(i).map(e => t.charAt(e % s)).join("")
				},
				x = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
					return new Date(e).toISOString().replace(/^(\d{4})-(\d{2})-(\d{2}).*/, "$1$2$3")
				},
				f = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
					return Math.trunc(e).toString(16).padStart(t, "0")
				};
			var E;
			! function(e) {
				e.SHA1 = "SHA-1", e.SHA256 = "SHA-256", e.SHA384 = "SHA-384", e.SHA512 = "SHA-512"
			}(E || (E = {}));
			const v = async e => (async (e, t) => {
				const s = (new TextEncoder).encode(t),
					i = await crypto.subtle.digest(e, s);
				return Array.from(new Uint8Array(i)).map(f).join("")
			})(E.SHA1, e);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const O = (e => t => ((e, t) => `${e}(${(e=>e.displayName||e.name||"Component")(t)})`)(e, t))("WithMux"),
				w = {
					anonymousUserId: "t2_anonymous",
					debug: !1,
					disableCookies: !0,
					envKey: h.a.muxApiKey,
					localStorageSaltKey: "muxSalt",
					localStorageViewerUserIdKey: "muxViewerUserId",
					playerVersion: `Reddit/Version Build ${h.a.buildNumber} ${h.a.appName}`,
					respectDoNotTrack: !0,
					saltLength: 20,
					saltTimeToLive: 2592e3,
					viewerUserIdLength: 20
				};
			t.a = function(e, t) {
				const {
					anonymousUserId: s,
					debug: l,
					disableCookies: u,
					envKey: m,
					localStorageSaltKey: f,
					localStorageViewerUserIdKey: E,
					playerName: C,
					playerVersion: I,
					respectDoNotTrack: T,
					saltLength: j,
					saltTimeToLive: S,
					viewerUserIdLength: M
				} = {
					...w,
					...t
				};
				class N extends i.Component {
					constructor(e) {
						super(e), this.dashInstance = null, this.hlsInstance = null, this.isMonitoring = !1, this.playerInitTime = Date.now(), this.videoRef = Object(i.createRef)(), this.handleDashCreate = e => this.setDashInstance(e), this.handleDashDestroy = () => this.setDashInstance(null), this.handleHlsCreate = e => this.setHlsInstance(e), this.handleHlsDestroy = () => this.setHlsInstance(null), this.combinedVideoRefs = this.combineExternalVideoRef(e.videoRef)
					}
					get experimentName() {
						return ""
					}
					get video() {
						return this.videoRef.current
					}
					componentDidMount() {
						this.doMuxThings()
					}
					componentDidUpdate(e) {
						this.props.sessionId !== e.sessionId && this.doMuxThings(), this.props.videoRef !== e.videoRef && (this.combinedVideoRefs = this.combineExternalVideoRef(this.props.videoRef))
					}
					componentWillUnmount() {
						this.handleDashDestroy(), this.handleHlsDestroy()
					}
					combineExternalVideoRef(e) {
						return e ? Object(d.a)(this.videoRef, e) : this.videoRef
					}
					render() {
						const {
							forwardedRef: t,
							...s
						} = this.props, i = s;
						return n.a.createElement(e, y({}, i, {
							onDashCreate: this.handleDashCreate,
							onDashDestroy: this.handleDashDestroy,
							onHlsCreate: this.handleHlsCreate,
							onHlsDestroy: this.handleHlsDestroy,
							ref: t,
							videoRef: this.combinedVideoRefs
						}))
					}
					async setDashInstance(e) {
						if (!this.props.isMuxEnabled) return;
						const t = e || null;
						if (t !== this.dashInstance && (this.dashInstance = t, this.isMonitoring)) try {
							const {
								video: e
							} = this, t = await c();
							e && t.removeDashJS(e), this.video && this.dashInstance && t.addDashJS(this.video, this.getDashInstanceData())
						} catch (s) {
							console.error(s)
						}
					}
					async setHlsInstance(e) {
						if (!this.props.isMuxEnabled) return;
						const t = e || null;
						if (t !== this.hlsInstance && (this.hlsInstance = t, this.isMonitoring)) try {
							const {
								video: e
							} = this, t = await c();
							e && t.removeHLSJS(e), this.video && this.hlsInstance && t.addHLSJS(this.video, this.getHlsInstanceData())
						} catch (s) {
							console.error(s)
						}
					}
					async doMuxThings() {
						if (this.props.isMuxEnabled) try {
							const e = await c();
							if (this.isMonitoring) {
								if (this.video) {
									const t = this.getVideoData();
									e.emit(this.video, "videochange", t)
								}
							} else {
								const t = await this.getMuxData();
								this.video && (e.monitor(this.video, t), this.isMonitoring = !0)
							}
						} catch (e) {
							console.error(e)
						}
					}
					async encryptViewerUserId() {
						const e = this.props.redditUserId || N.ANONYMOUS_USER_ID,
							t = this.getOrCreateSalt(),
							s = `${x()}${e}${t}`;
						return (await v(s)).substr(0, N.VIEWER_USER_ID_LENGTH)
					}
					getDashInstanceData() {
						const {
							dashInstance: e
						} = this;
						return e ? {
							dashjs: e
						} : null
					}
					getHlsInstanceData() {
						const {
							hlsInstance: e
						} = this;
						return e ? {
							hlsjs: e,
							Hls: e.constructor
						} : null
					}
					async getMuxData() {
						const e = await this.encryptViewerUserId(),
							t = this.getVideoData(),
							s = this.getThirdPartyLibData();
						return {
							debug: N.DEBUG,
							disableCookies: N.DISABLE_COOKIES,
							respectDoNotTrack: N.RESPECT_DO_NOT_TRACK,
							...s,
							data: {
								env_key: N.ENV_KEY,
								experiment_name: this.experimentName,
								player_init_time: this.playerInitTime,
								player_name: N.PLAYER_NAME,
								player_version: N.PLAYER_VERSION,
								...t,
								viewer_user_id: e
							}
						}
					}
					getOrCreateSalt() {
						const e = N.LOCAL_STORAGE_SALT_KEY;
						let t = Object(a.a)(e);
						return t || (t = g(N.SALT_LENGTH), Object(a.b)(e, t, N.SALT_TIME_TO_LIVE)), t
					}
					getThirdPartyLibData() {
						return {
							...this.getDashInstanceData(),
							...this.getHlsInstanceData()
						}
					}
					getVideoData() {
						const {
							muxVideoDuration: e,
							muxVideoId: t,
							muxVideoIsLive: s,
							muxVideoTitle: i
						} = this.props;
						return {
							video_duration: s ? N.DURATION_LIVE : e,
							video_id: t,
							video_stream_type: s ? N.STREAM_TYPE_LIVE : N.STREAM_TYPE_ON_DEMAND,
							video_title: i,
							view_session_id: this.props.sessionId,
							player_software_version: this.getDashInstanceData() ? h.a.dashVersion : this.getHlsInstanceData() ? h.a.hlsVersion : null
						}
					}
				}
				N.displayName = O(e), N.ANONYMOUS_USER_ID = s, N.DEBUG = l, N.DISABLE_COOKIES = u, N.DURATION_LIVE = 1 / 0, N.ENV_KEY = m, N.LOCAL_STORAGE_SALT_KEY = f, N.LOCAL_STORAGE_VIEWER_USER_ID_KEY = E, N.PLAYER_NAME = C, N.PLAYER_VERSION = I, N.RESPECT_DO_NOT_TRACK = T, N.SALT_LENGTH = j, N.SALT_TIME_TO_LIVE = S, N.STREAM_TYPE_LIVE = "live", N.STREAM_TYPE_ON_DEMAND = "on-demand", N.VIEWER_USER_ID_LENGTH = M;
				const L = Object(i.forwardRef)((e, t) => n.a.createElement(N, y({}, e, {
						forwardedRef: t
					}))),
					P = Object(r.c)({
						redditUserId: b.i,
						isMuxEnabled: p
					});
				return Object(o.b)(P, null, null, {
					forwardRef: !0
				})(L)
			}
		},
		"./src/lib/ads/utils.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			const i = (e, t, s) => `https://reddit.com/svc/shreddit/page/ads-rbl-survey/?p=desktop&u=${e}&i=${t}&a=${s}`
		},
		"./src/lib/truncateText/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const i = /\s*[,-:;\u2013\u2014]\s*$/;

			function n(e, t) {
				let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
				if (e.length <= t || t < 0) return e;
				if ((e = e.trim().replace(/\s+/g, " ")).length <= t) return e;
				t -= s.length;
				let n = e.lastIndexOf(" ", t);
				return n = n > 0 ? n : t, e.slice(0, n).replace(i, "").trimRight() + s
			}
		},
		"./src/reddit/components/Econ/Prediction/async.ts": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(i.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-Prediction",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("index~reddit-components-Econ-Prediction"), s.e("reddit-components-Econ-Prediction")]).then(s.bind(null, "./src/reddit/components/Econ/Prediction/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Prediction/index.tsx"
				}
			})
		},
		"./src/reddit/components/IntuitivePostTypes/OptionalText.m.less": function(e, t, s) {
			e.exports = {
				optionalText: "_1Bdk-WLPvP2xHwSSQ3qsHq"
			}
		},
		"./src/reddit/components/IntuitivePostTypes/OptionalText.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				o = s("./src/reddit/components/IntuitivePostTypes/OptionalText.m.less"),
				r = s.n(o),
				a = s("./src/reddit/components/RichTextJson/index.tsx");
			t.a = e => {
				let {
					content: t,
					rtJsonElementProps: s
				} = e;
				return n.a.createElement("div", {
					className: r.a.optionalText
				}, n.a.createElement(a.a, {
					content: t,
					rtJsonElementProps: s
				}))
			}
		},
		"./src/reddit/components/Media/GalleryBox/index.m.less": function(e, t, s) {
			e.exports = {
				outerContainer: "kcerW9lbT-se3SXd-wp2i",
				nextButton: "_38uXo2TofvhEuLKeH-rRcV",
				icon: "_32kofHIEwuARK_15MrzAuT",
				seeMore: "_3b8u2OJXaSDdBWoRB7zUoK",
				iconImage: "_3PkAZ5W4aDQ7cujQ426UiB",
				prevIcon: "CxV9u12DiN4nfOLEzaWGg",
				nextIcon: "Qfn6RihWXp6riuP88alpI",
				imageLink: "iUP9nbvcaxfwKrQTgt0sw",
				tallImage: "_1ti9kvv_PMZEF2phzAjsGW",
				commonImage: "_3BxRNDoASi9FbGX01ewiLg",
				navigationUnderlay: "_1fSFPkxZ9pToLETLQT2dmc",
				hasMoreSlides: "_3-JCOd-nY76g29C7ZVX_kl",
				slideshowContainer: "KVyBaj7FjzElWsqJDmw7v",
				slideImageMainDiv: "_35oEP5zLnhKEbj5BlkTBUA",
				slideImage: "_1dwExqTGJH2jnA-MYGkEL-",
				slide: "_28TEYBuEdOuE3kN6UyoKMa",
				imagesWrapper: "_2Ev7WJU0f45KxlmClce9t8",
				slideWrapper: "_1apobczT0TzIKMWpza0OhL",
				figure: "_3o5Vzct5tn9PE7e-emdDmf",
				imageMetaData: "_26daP6nhhW7BT-CMzL0ijs",
				imageUrl: "_1JvpVe-IA894KlEuAn5i9c",
				outboundUrlWrapper: "_2ZUcZqGYDSM0BMbiracglV",
				linkIcon: "_2pA6COv2OLOcG3Ma_ZAzLs",
				urlText: "G960looU9eqiZ1POYed8r",
				emptyCaptionBlock: "cKdLDCF6ney9RBLRzJt8j",
				imageCaption: "_15nNdGlBIgryHV04IfAfpA",
				slideIndicator: "_61i6grM3um1yuw4GrN97P",
				tilesWrapper: "bVildkms0x9XcY2qrG0Mr",
				tileImage: "_1ynfiEQPXyJqwL8az8sG71",
				blurredContent: "kYRcqD1CH-tXu0xGsAOLH",
				tilePlaceholder: "Qazqk11mIzZph1VMsNMtk",
				tileIcon: "_3VAoQueUjpnNBtHAZRjo_0"
			}
		},
		"./src/reddit/components/Media/GalleryBox/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/hooks/usePrevious.ts"),
				c = s("./src/lib/truncateText/index.ts"),
				u = s("./src/reddit/helpers/trackers/gallery.ts");
			var m = (e, t, s) => {
					const n = Object(i.useCallback)(t => {
						t.isComposing || e !== t.keyCode || s()
					}, [e, s]);
					Object(i.useEffect)(() => {
						if (t) return t.addEventListener("keydown", n), () => {
							t && t.removeEventListener("keydown", n)
						}
					}, [t, n])
				},
				p = s("./src/reddit/hooks/useTracking.ts"),
				h = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				b = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				g = s("./src/reddit/icons/svgs/Tile/index.tsx"),
				x = s("./src/reddit/actions/media.ts"),
				f = s("./src/reddit/actions/post.ts"),
				E = s("./src/reddit/components/Media/BlurredContent.tsx"),
				v = s("./src/reddit/constants/adEvents.ts"),
				y = s("./src/reddit/constants/keycodes.ts"),
				O = s("./src/reddit/helpers/mediaGallery/index.tsx"),
				w = s("./src/reddit/models/Media/index.ts"),
				C = s("./src/reddit/selectors/media.ts"),
				I = s("./src/reddit/components/Media/GalleryBox/index.m.less"),
				T = s.n(I);
			const {
				fbt: j
			} = s("./node_modules/fbt/lib/FbtPublic.js"), S = e => {
				const {
					displayImage: t,
					style: s,
					showSeeMore: i,
					isReadyToShow: o,
					imgAltText: r
				} = e, d = "u" in t ? t.u : t.gif;
				return n.a.createElement("div", {
					className: Object(a.a)({
						[T.a.slideImageMainDiv]: !i
					})
				}, o && n.a.createElement("img", {
					src: d,
					alt: r,
					className: T.a.slideImage,
					style: s
				}), i && n.a.createElement("div", {
					className: T.a.seeMore
				}, j._("see full image", null, {
					hk: "1Qygw5"
				})))
			}, M = e => {
				const {
					slideIndex: t,
					currentIndex: s,
					obfuscatedImage: i,
					optimalImage: o,
					originalImage: r,
					imgAltText: d,
					isListing: l,
					isNSFW: c,
					isNsfwBlockingModalEligible: u,
					isSpoiler: m,
					isSponsored: p,
					isReadyToShow: h,
					shouldBlur: b
				} = e, g = s === t ? {
					left: "0px"
				} : {
					left: s > t ? "-100%" : "100%"
				}, x = Object(O.c)(l), f = r.y > x && Object(w.L)(r.y, r.x), v = f ? {} : {
					maxHeight: "100%"
				};
				let y;
				return y = i || (f ? r : "gif" in r ? r : o), n.a.createElement("li", {
					style: g,
					className: T.a.slide
				}, n.a.createElement("figure", {
					className: Object(a.a)({
						[T.a.tallImage]: f,
						[T.a.commonImage]: !f
					}, T.a.figure)
				}, l || p ? n.a.createElement(S, {
					displayImage: y,
					style: v,
					showSeeMore: f,
					isReadyToShow: h,
					imgAltText: d
				}) : n.a.createElement("a", {
					href: "u" in r ? r.u : r.gif,
					rel: "noopener noreferrer",
					target: "_blank",
					className: Object(a.a)({
						[T.a.tallImage]: f,
						[T.a.commonImage]: !f
					}, T.a.imageLink)
				}, n.a.createElement(S, {
					displayImage: y,
					style: v,
					showSeeMore: f,
					isReadyToShow: h,
					imgAltText: d
				}), b && !u && n.a.createElement(E.a, {
					isNSFW: !!c,
					isSpoiler: !!m
				}))))
			}, N = e => n.a.createElement("a", {
				className: Object(a.a)(e.className, T.a.navigationUnderlay, {
					[T.a.hasMoreSlides]: e.hasMoreSlides
				}),
				onClick: t => {
					e.onClick(), t.stopPropagation()
				},
				onMouseDown: t => {
					e.setFocusTo.current && e.setFocusTo.current.focus({
						preventScroll: !0
					}), t.preventDefault()
				},
				title: e.hasMoreSlides ? e.title : void 0
			}, e.hasMoreSlides && n.a.createElement("i", {
				className: Object(a.a)(e.iconClassName, T.a.icon)
			}, n.a.createElement(h.a, {
				className: T.a.iconImage
			}))), L = e => n.a.createElement("div", {
				className: T.a.imageMetaData,
				style: {
					height: e.captionHeight,
					justifyContent: e.caption ? "space-between" : "flex-end"
				}
			}, e.caption && n.a.createElement("span", {
				className: T.a.imageCaption,
				title: e.caption
			}, e.caption), e.outboundUrl && n.a.createElement("span", {
				className: T.a.imageUrl
			}, n.a.createElement("a", {
				className: T.a.outboundUrlWrapper,
				href: e.outboundUrl,
				onClick: e.onClickEvent,
				rel: "noopener noreferrer",
				target: "'_blank'"
			}, n.a.createElement("span", {
				className: T.a.urlText
			}, Object(O.e)(e.outboundUrl)), n.a.createElement(b.a, {
				className: T.a.linkIcon
			})))), P = e => n.a.createElement("div", {
				className: T.a.slideIndicator,
				onClick: e.toggleTileLayout ? t => {
					t.preventDefault(), t.stopPropagation(), e.toggleTileLayout()
				} : void 0
			}, e.toggleTileLayout && n.a.createElement(g.a, {
				className: T.a.tileIcon
			}), e.currentSlide, "/", e.totalSlides), _ = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
					s = e - t;
				return s < 0 && (s = 0), s
			}, k = function(e, t) {
				let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
					i = e + s;
				return i > t - 1 && (i = t - 1), i
			};
			t.a = e => {
				const t = Object(o.d)(),
					{
						captionHeight: s,
						galleryItems: h,
						imageHeight: b,
						isListing: g,
						isSponsored: I,
						isTileLayout: S,
						mediaMetadata: D = {},
						post: R,
						postId: A,
						postTitle: B,
						shouldShowTileLayoutOption: V,
						showPromotedCTA: H,
						subredditName: W,
						isVisible: F
					} = e,
					U = Object(o.e)(e => Object(C.d)(e, A)),
					G = U > 0,
					$ = U < h.length - 1,
					J = Object(p.a)(),
					Q = Object(i.useRef)(null),
					K = Object(i.useRef)(null),
					[q, z] = Object(i.useState)(F ? U : -1),
					[Y, X] = Object(i.useState)(F ? U : -1),
					Z = Object(l.a)(F),
					ee = Object(l.a)(U);
				Object(i.useEffect)(() => {
					(void 0 !== Z && Z !== F && F && q < 0 && Y < 0 || void 0 !== ee && ee !== U && F && (q > U || Y < U)) && (z(_(U, 1)), X(k(U, h.length, 1)))
				}, [Z, U, F, q, Y, ee, h.length, A]);
				const te = Object(i.useRef)(),
					se = Object(i.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t
							} = e;
							t ? (q < 0 || Y - q == 0) && (te.current = setTimeout(() => {
								const e = k(Y, h.length);
								e !== Y && X(e)
							}, 1e3)) : (q < 0 || Y - q == 0) && clearTimeout(te.current)
						})
					}, [q, Y, h.length]);
				Object(r.a)(K, se);
				const ie = Object(i.useCallback)(e => {
						t(Object(x.f)({
							postId: A,
							index: e
						}))
					}, [t, A]),
					ne = Object(i.useCallback)(e => {
						t(Object(f.z)(R, v.a.GalleryItemImpression, `Slide${e}`))
					}, [t, R]),
					oe = Object(i.useCallback)(() => {
						t(Object(x.i)({
							postId: A,
							isTileLayout: !S
						}))
					}, [t, A, S]),
					re = Object(i.useCallback)(() => {
						if (!$) return;
						const e = U + 1;
						if (e + 1 >= Y) {
							const e = k(Y, h.length);
							e !== Y && X(e)
						}
						ie(e), J(u.b(A, e)), J(u.d(A, e + 1)), ne(e)
					}, [$, U, ne, ie, J, A, Y, h.length]),
					ae = Object(i.useCallback)(() => {
						if (!G) return;
						const e = U - 1;
						if (e - 1 <= q) {
							const e = _(q);
							e !== q && z(e)
						}
						const t = U + 1;
						ie(e), J(u.a(A, t)), J(u.d(A, t - 1)), ne(e)
					}, [G, U, ne, ie, J, A, q]),
					de = Object(i.useCallback)(() => {
						const e = h[U] && h[U].outboundUrl;
						e && J(u.c(A, e))
					}, [J, A, U, h]);
				m(y.a.ArrowLeft, Q.current, ae), m(y.a.ArrowRight, Q.current, re);
				const le = h[U] && h[U].caption,
					ce = h[U] && h[U].outboundUrl,
					ue = ((e, t, s) => {
						const i = Object(O.f)(e),
							n = Object(O.g)(i),
							o = n.x / n.y < 1,
							r = Object(O.h)(e),
							a = Object(O.i)(e || {}, Object(O.c)(s), w.p);
						return s || a || r || o ? {
							height: t
						} : {
							paddingBottom: `${Object(w.B)(n.y,n.x)}%`
						}
					})(D, b, g);
				return n.a.createElement("div", {
					className: Object(a.a)(T.a.outerContainer),
					ref: Q,
					tabIndex: 0
				}, S ? n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
					className: Object(a.a)(T.a.tilesWrapper, {
						[T.a.blurredContent]: e.shouldBlur
					}),
					onClick: e.onClickRevealBlurred
				}, h.map((t, s) => {
					const i = t.mediaId,
						o = D && D[i];
					if (!o || !o.s) return null;
					const r = [...o && o.s ? [o.s] : [], ...o && o.p ? o.p : []],
						a = Object(O.d)(w.y, r);
					if (!a) return null;
					const d = o.s;
					return n.a.createElement("div", {
						style: {
							backgroundImage: `url(${"gif"in d?d.gif:"u"in a&&a.u})`
						},
						className: T.a.tileImage,
						onClick: e.shouldBlur ? void 0 : e => {
							e.preventDefault(), e.stopPropagation(), oe(), ie(s)
						},
						key: i
					})
				}), [1, 2, 3].map(e => n.a.createElement("div", {
					key: e,
					className: T.a.tilePlaceholder
				}))), e.shouldBlur && !e.isNsfwBlockingModalEligible && n.a.createElement(E.a, {
					isNSFW: !!e.isNSFW,
					isSpoiler: !!e.isSpoiler
				})) : n.a.createElement("div", {
					className: T.a.slideshowContainer,
					tabIndex: -1,
					ref: K,
					onClick: e.onClickRevealBlurred,
					style: ue
				}, n.a.createElement("div", {
					className: T.a.imagesWrapper
				}, n.a.createElement("ul", {
					className: T.a.slideWrapper
				}, h.map((t, s) => {
					const i = t.mediaId,
						o = D && D[i];
					if (!o || !o.s) return null;
					const r = t.caption ? t.caption : B,
						a = Object(c.a)(W ? `${W} - ${r}` : r, 300, d.ib),
						l = [...o && o.s ? [o.s] : [], ...o && o.p ? o.p : []],
						u = Object(O.d)(b, l);
					if (!u) return null;
					const m = e.shouldBlur && Object(O.d)(b, o.o || []) || void 0,
						p = s >= q && s <= Y;
					return n.a.createElement(M, {
						slideIndex: s,
						currentIndex: U,
						obfuscatedImage: m,
						optimalImage: u,
						originalImage: o.s,
						isListing: e.isListing,
						isSponsored: I,
						key: i,
						isReadyToShow: p,
						imgAltText: a,
						shouldBlur: e.shouldBlur,
						isNSFW: e.isNSFW,
						isNsfwBlockingModalEligible: e.isNsfwBlockingModalEligible,
						isSpoiler: e.isSpoiler
					})
				})), !e.shouldBlur && n.a.createElement(n.a.Fragment, null, n.a.createElement(N, {
					onClick: ae,
					setFocusTo: K,
					hasMoreSlides: G,
					title: j._("Previous", null, {
						hk: "3dZcTi"
					}),
					iconClassName: T.a.prevIcon,
					className: T.a.prevButton
				}), n.a.createElement(N, {
					onClick: re,
					setFocusTo: K,
					hasMoreSlides: $,
					title: j._("Next", null, {
						hk: "3Ajk1H"
					}),
					iconClassName: T.a.nextIcon,
					className: T.a.nextButton
				}))), h.length > 1 ? n.a.createElement(P, {
					currentSlide: U + 1,
					totalSlides: h.length,
					toggleTileLayout: V && oe || void 0
				}) : ""), !le && !ce || S || H ? !!s && !S && !H && n.a.createElement("div", {
					className: T.a.emptyCaptionBlock,
					style: {
						height: s
					}
				}) : n.a.createElement(L, {
					caption: le,
					onClickEvent: de,
					outboundUrl: ce,
					captionHeight: s
				}))
			}
		},
		"./src/reddit/components/Media/PollContainer/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/models/Prediction/index.ts"),
				d = s("./src/reddit/selectors/poll/index.ts"),
				l = s("./src/reddit/components/Econ/Prediction/async.ts"),
				c = s("./src/reddit/components/Poll/async.ts");
			const u = Object(r.c)({
				poll: d.e
			});
			t.a = Object(o.b)(u)(e => {
				let {
					isCommentsPage: t,
					poll: s,
					postId: i
				} = e;
				return s ? Object(a.c)(s) ? n.a.createElement(l.a, {
					postId: i
				}) : n.a.createElement(c.a, {
					postId: i,
					isCommentsPage: t
				}) : null
			})
		},
		"./src/reddit/components/Media/RichTextContainer/index.m.less": function(e, t, s) {
			e.exports = {
				richTextContainer: "Chtkt3BCZQruf0LtmFg2c",
				richTextContainerTitleOnly: "_2XNPI46MXRfDdsSoDqaksI",
				richTextContainerFull: "_3xX726aBn29LDbsDtzr_6E",
				placeholder: "_1aLU7RPNLdvfcbaNdcN11x",
				placeholderParagraph: "Owi9iYzjyVpDq_0YbCdJY"
			}
		},
		"./src/reddit/components/Media/RichTextContainer/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/constants/componentSizes.ts"),
				a = s("./src/reddit/models/Media/index.ts"),
				d = s("./node_modules/react-redux/es/index.js"),
				l = s("./src/reddit/actions/post.ts"),
				c = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				u = s("./src/reddit/components/Media/RichTextContainer/index.m.less"),
				m = s.n(u);
			class p extends n.a.Component {
				componentDidMount() {
					this.loadRichTextContentIfNeeded()
				}
				loadRichTextContentIfNeeded() {
					this.props.canLoadContent && this.props.isExpando && this.props.onLoadRichTextContentIfNeeded(this.props.postId)
				}
				render() {
					const e = Object(c.a)({
						isLoading: !0
					});
					return n.a.createElement("div", {
						className: m.a.placeholder
					}, [1, 2, 3].map(t => n.a.createElement("div", {
						key: t,
						className: m.a.placeholderParagraph
					}, n.a.createElement("div", {
						className: e
					}), n.a.createElement("div", {
						className: e
					}), n.a.createElement("div", {
						className: e
					}))))
				}
			}
			var h = Object(d.b)(null, e => ({
				onLoadRichTextContentIfNeeded: t => e(Object(l.y)(t))
			}))(p);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				let {
					canLoadContent: t,
					children: s,
					className: i,
					isCommentsPage: d,
					isMediumHeight: l,
					isRichTextTruncated: c,
					isExpando: u,
					isTitleOnly: p,
					postId: g,
					showFull: x,
					...f
				} = e;
				const E = {
						[m.a.richTextContainerFull]: x,
						[m.a.richTextContainerTitleOnly]: p && !x,
						[m.a.richTextContainer]: !x && !p
					},
					v = {};
				x || (v.maxHeight = p ? `${a.m}px` : l ? `${a.l}px` : `${a.k}px`), d && (v.maxWidth = `${r.d}px`);
				const y = c && x;
				return n.a.createElement("div", b({
					className: Object(o.a)(E, i),
					style: v
				}, f), s, y && n.a.createElement(h, {
					canLoadContent: !!t,
					isExpando: u,
					postId: g
				}))
			}
		},
		"./src/reddit/components/Media/TwitterEmbed/index.m.less": function(e, t, s) {
			e.exports = {
				tweetPlaceholder: "q0jsD_ZcQRuuUQzXawr8J",
				tweetContainer: "_2yB7G9L-6O_6Lp6D0n7EAl",
				tweetEmbedBox: "_3pYTJO5FjsoQWRUsIFQASN",
				isInvisible: "_3xICr9rbunMOudN40P1GgI",
				tweetDeleted: "sIgL7k1Lz6YLL146KNk8k",
				seeMore: "_2f5uYHvlfzs2DngQsiCdvB"
			}
		},
		"./src/reddit/components/Media/TwitterEmbed/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return y
			}));
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/hooks/usePrevious.ts"),
				l = s("./src/lib/intersectionObserver/index.ts"),
				c = s("./src/reddit/components/Media/constants.ts"),
				u = s("./src/reddit/components/Media/EmbedBox/index.tsx"),
				m = s("./src/reddit/components/Media/MediaContainer/index.tsx"),
				p = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				h = s("./src/reddit/models/Media/index.ts"),
				b = s("./src/reddit/components/Media/TwitterEmbed/index.m.less"),
				g = s.n(b);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const f = 550,
				E = 100,
				v = 300;

			function y(e) {
				const {
					canLoadContent: t,
					mediaContainerProps: s,
					onIframeLoaded: b,
					embedBoxChildRef: y,
					source: O,
					title: w,
					postId: C
				} = e, [I, T] = Object(n.useState)(!1), j = Object(d.a)(t), S = Object(n.useRef)(), {
					height: M,
					isDeleted: N
				} = Object(r.e)(e => e.mediaEmbed[C] || {}), L = I ? N ? E : M : v;

				function P(e) {
					var t;
					I || (null === (t = null == S ? void 0 : S.current) || void 0 === t ? void 0 : t.contentWindow) !== e.source || "tweet-measured" !== e.data.action || T(!0)
				}
				return Object(n.useEffect)(() => (window.addEventListener("message", P), () => {
					S.current && Object(l.b)(S.current), window.removeEventListener("message", P)
				}), []), Object(n.useEffect)(() => {
					!t && j && T(!1)
				}, [j, t]), o.a.createElement(m.a, x({}, s, {
					alwaysWrapMedia: !0,
					height: L + 8,
					showFull: !s.isListing,
					width: f
				}), t && o.a.createElement("div", {
					className: g.a.tweetContainer,
					style: {
						height: L
					}
				}, !I && o.a.createElement("div", {
					className: Object(a.a)(Object(p.a)({
						isLoading: !0
					}), g.a.tweetPlaceholder)
				}), I && N && o.a.createElement("p", {
					className: g.a.tweetDeleted
				}, i.fbt._("This Tweet has been deleted.", null, {
					hk: "1LhcOw"
				})), o.a.createElement(u.a, {
					childRef: function(e) {
						S.current = e, e && Object(l.a)(e, (t, s) => {
							e && e.contentWindow && !M && s && (T(!1), e.contentWindow.postMessage("twitter-measure-requested", c.a))
						}), y(e)
					},
					className: Object(a.a)(g.a.tweetEmbedBox, {
						[g.a.isInvisible]: !I || N
					}),
					fullWidth: !0,
					height: L,
					isListing: s.isListing,
					isResponsive: !0,
					isTweet: !0,
					maxHeight: s.isListing ? h.j : null,
					onLoad: b,
					showCentered: s.showCentered,
					showFull: !0,
					source: O,
					title: w
				}), s.isListing && L > h.j && o.a.createElement("div", {
					className: g.a.seeMore
				}, i.fbt._("See full tweet", null, {
					hk: "1bxtrd"
				}))))
			}
		},
		"./src/reddit/components/Media/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			const i = "https://www.redditmedia.com"
		},
		"./src/reddit/components/Media/getResolution.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "a", (function() {
				return a
			}));
			var i = s("./src/reddit/models/Media/index.ts");
			const n = (e, t, s, i) => {
					const n = e / t,
						o = s / i;
					return Math.abs(n - o) < .03
				},
				o = (e, t) => {
					for (let s = 0; s < t.length; s++) {
						const i = t[s];
						if (i.width >= e) return i
					}
				},
				r = (e, t, s) => {
					for (let o = 0; o < s.length; o++) {
						const r = s[o];
						if (r.width >= i.e / 2 && n(e, t, r.height, r.width)) return r
					}
				},
				a = e => {
					for (let t = 0; t < e.length; t++) {
						const s = e[t];
						if (s.height >= i.e || s.width >= i.f) return s
					}
				}
		},
		"./src/reddit/components/Media/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return De
			}));
			var i = s("./node_modules/core-js/modules/web.dom.iterable.js"),
				n = s.n(i),
				o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./node_modules/lodash/debounce.js"),
				a = s.n(r),
				d = s("./node_modules/lodash/noop.js"),
				l = s.n(d),
				c = s("./node_modules/react/index.js"),
				u = s.n(c),
				m = s("./node_modules/react-redux/es/index.js"),
				p = s("./node_modules/reselect/es/index.js"),
				h = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				b = s("./src/higherOrderComponents/withMux/index.tsx"),
				g = s("./src/lib/ads/utils.ts"),
				x = s("./src/lib/classNames/index.ts"),
				f = s("./src/lib/constants/index.ts"),
				E = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				v = s("./src/lib/env/index.ts"),
				y = s("./src/lib/isUrl/index.ts"),
				O = s("./src/lib/objectSelector/index.ts"),
				w = s("./src/lib/onFocusAndVisibilityChange/index.ts"),
				C = s("./src/lib/sentry/index.ts"),
				I = s("./src/lib/truncateText/index.ts"),
				T = s("./src/reddit/actions/post.ts"),
				j = s("./src/reddit/components/AdViewability/index.tsx"),
				S = s("./src/reddit/components/Governance/VaultActionLink/async.ts"),
				M = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				N = s("./src/reddit/components/IntuitivePostTypes/OptionalText.tsx"),
				L = s("./src/reddit/components/Media/constants.ts"),
				P = s("./src/reddit/components/Media/EmbedBox/index.tsx"),
				_ = s("./src/reddit/components/Media/GalleryBox/index.tsx"),
				k = s("./src/reddit/components/Media/ImageBox/index.tsx"),
				D = s("./src/reddit/components/Media/MediaContainer/index.tsx"),
				R = s("./src/reddit/components/Media/PollContainer/index.tsx"),
				A = s("./src/reddit/components/Media/RichTextContainer/index.tsx"),
				B = s("./src/reddit/components/Media/TwitterEmbed/index.tsx"),
				V = s("./src/reddit/components/Media/VideoBox/index.tsx"),
				H = s("./src/reddit/components/PlayButton/index.tsx"),
				W = s("./src/reddit/components/PostList/index.tsx"),
				F = s("./src/reddit/components/RawHTMLDisplay/Media.tsx"),
				U = s("./src/reddit/components/RichTextJson/index.tsx"),
				G = s("./src/reddit/constants/componentSizes.ts"),
				$ = s("./src/reddit/constants/screenWidths.ts"),
				J = s("./src/reddit/contexts/PageLayer/index.tsx"),
				Q = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				K = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				q = s("./src/reddit/helpers/mediaGallery/index.tsx"),
				z = s("./src/reddit/helpers/path/index.ts"),
				Y = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				X = s("./src/reddit/helpers/stripMetaLinks/fromRawHtml.ts"),
				Z = s("./src/reddit/helpers/stripMetaLinks/fromRTJ.ts"),
				ee = s("./src/reddit/models/Media/index.ts"),
				te = s("./src/reddit/selectors/experiments/intuitivePostTypes.ts"),
				se = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				ie = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				ne = s("./src/reddit/selectors/experiments/postSeo.ts"),
				oe = s("./src/reddit/selectors/media.ts"),
				re = s("./src/reddit/selectors/meta.ts"),
				ae = s("./src/reddit/selectors/postCreations.ts"),
				de = s("./src/reddit/selectors/posts.ts"),
				le = s("./src/reddit/selectors/seo/index.ts"),
				ce = s("./src/reddit/selectors/telemetry.ts"),
				ue = s("./src/reddit/selectors/user.ts"),
				me = s("./src/reddit/components/Media/getResolution.ts"),
				pe = s("./src/reddit/components/Media/index.m.less"),
				he = s.n(pe);

			function be() {
				return (be = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const ge = Object(o.a)({
					resolved: {},
					chunkName: () => "LiveVideoPlayer",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), s.e("LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), s.e("LiveVideoPlayer")]).then(s.bind(null, "./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/index.tsx"
					}
				}, {
					ssr: !1
				}),
				xe = Object(b.a)(M.b, {
					playerName: "Reddit Player"
				}),
				fe = 300,
				Ee = " - ",
				ve = 1200,
				ye = 75,
				Oe = "player.js",
				we = G.q + G.p,
				Ce = e => u.a.createElement("div", {
					className: Object(x.a)(he.a.visibilityWrapper, {
						[he.a.displayNone]: !e.isVisible
					})
				}, e.children),
				Ie = new Set([ee.o.EMBED, ee.o.LIVEVIDEO, ee.o.VIDEO, ee.o.GIFVIDEO]),
				Te = e => !!e.media && Ie.has(e.media.type),
				je = new Set([ee.o.EMBED, ee.o.GALLERY, ee.o.GIFVIDEO, ee.o.IMAGE, ee.o.LIVEVIDEO, ee.o.VIDEO]),
				Se = e => {
					let {
						post: t
					} = e;
					return !!t.media && je.has(t.media.type)
				},
				Me = Object(J.u)(),
				Ne = Object(p.c)({
					canUseOCRAltText: (e, t) => Object(ne.b)(e, t.post),
					OCRAltText: (e, t) => {
						let {
							post: s
						} = t;
						return Object(ne.a)(e, s.id)
					},
					subredditOrProfileDisplayText: (e, t) => Object(ne.i)(e, t),
					subredditOrProfile: (e, t) => {
						let {
							post: s
						} = t;
						return Object(de.V)(e, {
							postId: s.id
						})
					},
					isEditing: (e, t) => {
						let {
							post: s
						} = t;
						return Object(ae.M)(e, {
							postId: s.id
						})
					},
					shouldShowAltText: (e, t) => Object(le.d)(e, t),
					isGalleryTileLayout: (e, t) => {
						let {
							shouldShowGalleryTileOption: s,
							post: i,
							isGalleryTileLayoutDefault: n
						} = t;
						if (!s) return !1;
						const o = Object(oe.e)(e, i.id);
						return !(void 0 !== o || !n) || !!o
					},
					pageType: e => Object(ce.d)(e).pageType,
					basePixelMetadata: (e, t) => {
						let {
							post: s
						} = t;
						return Object(de.b)(e, s.id)
					},
					isBlockingInterstitialEnabled: se.b,
					isBlockingInterstitialV2Enabled: se.c,
					currentUserId: ue.Cb,
					isNSFW: (e, t) => {
						let {
							post: s,
							crosspost: i
						} = t;
						return Object(oe.b)(e, s.isNSFW, Boolean(i && i.isNSFW))
					},
					isSpoiler: (e, t) => {
						let {
							post: s,
							crosspost: i
						} = t;
						return Object(oe.c)(e, s.isSpoiler, Boolean(i && i.isSpoiler))
					},
					isBot: re.d,
					isNsfwBlurSubreddit: ie.e,
					isOptionalTextExpEnabled: te.a
				}),
				Le = e => ({
					fireAdPixelsOfType: (t, s) => e(Object(T.z)(t, s)),
					openPost: t => e(Object(T.L)(t)),
					openPostLink: t => e(Object(T.bb)(Object(z.b)(t.permalink), t.id))
				}),
				Pe = Object(m.b)(Ne, Le),
				_e = Object(O.b)(e => ({
					renderingObjectInfo: e.post,
					pageLayer: e.pageLayer
				}));
			class ke extends u.a.Component {
				constructor(e) {
					super(e), this.pauseContent = () => {
						this.shouldFocusContentDebouncer(!1)
					}, this.stopContent = () => {
						const {
							media: e
						} = this.props.post;
						if (e && ee.d.has(e.type)) {
							if (this.pauseContent(), this.iframe) {
								const t = e.type === ee.o.EMBED ? e.provider : null;
								this.pauseEmbed(this.iframe, t)
							}
							this.setState(e => e.shouldStop ? null : {
								shouldStop: !0
							})
						}
					}, this.handleVisibilityChange = e => {
						const {
							shouldPause: t
						} = this.state, {
							autoplayPref: s
						} = this.props;
						this.iframe && (t || !s && e.documentInFocus || this.toggleEmbedAutoplay(this.iframe, !e.documentInFocus)), this.setState({
							forcePause: !e.documentInFocus
						})
					}, this.focusContent = () => {
						this.shouldFocusContentDebouncer(!0)
					}, this.loadContent = () => {
						this.setState(e => e.canLoadContent ? null : {
							canLoadContent: !0
						})
					}, this.unmountContent = () => {
						this.stopContent(), this.iframe && this.setState(e => {
							let {
								canLoadContent: t
							} = e;
							return t ? {
								canLoadContent: !1
							} : null
						})
					}, this.contentIsHeavyToMount = () => {
						const {
							media: e
						} = this.props.post;
						return !!e && ee.d.has(e.type)
					}, this.shouldFocusContentDebouncer = a()(e => {
						const {
							media: t
						} = this.props.post, {
							autoplayPref: s
						} = this.props;
						if (t && ee.d.has(t.type)) {
							if (this.iframe) {
								const i = t.type === ee.o.EMBED ? t.provider : null;
								i && !ee.s.has(i) ? !s && e || this.toggleEmbedAutoplay(this.iframe, !e) : e || this.pauseEmbed(this.iframe, i)
							}
							e ? this.setState(e => e.shouldPause || !e.canLoadContent ? {
								canLoadContent: !0,
								shouldPause: !1,
								shouldStop: !1
							} : null) : this.setState(e => e.shouldPause ? null : {
								shouldPause: !0
							})
						}
					}, 250, {
						leading: !0
					}), this.toggleEmbedAutoplay = (e, t) => {
						if (e.contentWindow) {
							const s = t ? ee.g.Pause : ee.g.Play;
							e.contentWindow.postMessage({
								context: Oe,
								method: s
							}, L.a), e.contentWindow.postMessage({
								context: Oe,
								method: ee.g.Mute
							}, L.a)
						}
					}, this.pauseEmbed = (e, t) => {
						e.contentWindow && (t === ee.v.YouTube ? e.contentWindow.postMessage(JSON.stringify({
							event: "command",
							func: ee.A.Pause
						}), L.a) : e.contentWindow.postMessage({
							context: Oe,
							method: ee.g.Pause
						}, L.a))
					}, this.onIframeLoaded = () => {
						const {
							media: e
						} = this.props.post, {
							autoplayPref: t
						} = this.props, s = e && e.type === ee.o.EMBED ? e.provider : null;
						if (this.iframe && s && !ee.s.has(s)) {
							const {
								shouldPause: e
							} = this.state;
							(t || e) && this.toggleEmbedAutoplay(this.iframe, e)
						}
					}, this.onClickRevealBlurred = e => {
						this.props.isListing && !this.props.isGalleryTileLayout || !this.shouldBlur() || this.state.isRevealed || (this.setState({
							isRevealed: !0
						}), e.preventDefault(), e.stopPropagation())
					}, this.storeChildRef = e => {
						this.iframe = e
					}, this.updateDimensions = () => {
						this.setState({
							viewportHeight: window.innerHeight,
							viewportWidth: window.innerWidth
						})
					}, this.handlePostMediaClick = e => {
						(this.props.isBlockingInterstitialEnabled || this.props.isBlockingInterstitialV2Enabled) && (e.preventDefault(), this.props.openPostLink(this.props.post))
					}, this.state = {
						canLoadContent: e.shouldLoad || !1,
						forcePause: !1,
						isRevealed: !1,
						shouldPause: void 0 === e.shouldPause || e.shouldPause,
						shouldStop: void 0 === e.shouldStop || e.shouldStop,
						viewportHeight: ee.e,
						viewportWidth: ee.f
					}
				}
				UNSAFE_componentWillMount() {
					"undefined" != typeof window && (this.updateDimensions(), window.addEventListener("resize", this.updateDimensions))
				}
				componentDidMount() {
					Te(this.props.post) && (this.visibilityChangeSubscriptionId = w.a.subscribe(e => {
						this.handleVisibilityChange(e)
					})), this.props.scrollerItemRef && Se(this.props) && this.props.scrollerItemRef(this, this.state.canLoadContent)
				}
				componentWillUnmount() {
					this.visibilityChangeSubscriptionId && w.a.unsubscribe(this.visibilityChangeSubscriptionId), this.props.scrollerItemRef && Se(this.props) && this.props.scrollerItemRef(void 0), window.removeEventListener("resize", this.updateDimensions)
				}
				UNSAFE_componentWillReceiveProps(e) {
					!this.state.canLoadContent && e.shouldLoad && this.setState({
						canLoadContent: !0
					}), void 0 !== e.shouldPause && e.shouldPause !== this.props.shouldPause && this.shouldFocusContentDebouncer(!e.shouldPause)
				}
				getAltText() {
					const {
						canUseOCRAltText: e,
						OCRAltText: t,
						post: s,
						subredditOrProfileDisplayText: i,
						shouldShowAltText: n
					} = this.props;
					if (!n) return;
					let o = "";
					return i && (o += i), t && e ? o += `${Ee}${t}` : s.title && (o += `${Ee}${s.title}`), o.length > fe ? Object(I.a)(o, fe, f.ib) : o
				}
				getVideoExpandoMaxDimensions() {
					let e, t = Math.max(ee.j, this.state.viewportHeight),
						s = Math.min(ve, 16 * t / 9);
					s === ve && (t = 9 * ve / 16), e = this.state.viewportWidth >= $.c ? this.state.viewportWidth < G.k ? this.state.viewportWidth - we - 2 * ye : this.state.viewportWidth - we - G.e - 2 * ye : this.state.viewportWidth - 2 * ye;
					const i = this.state.viewportHeight - 2 * ye;
					if (s > e) {
						t *= e / s, s = e
					} else if (t > i) {
						const e = i / t;
						t = i, s *= e
					}
					return {
						maxVideoHeight: t,
						maxVideoWidth: s
					}
				}
				getVideoMaxDimensions(e, t) {
					let s = ee.j,
						i = ee.n;
					return e.isExpando ? this.getVideoExpandoMaxDimensions() : (e.isPromotedTrend && (s = ee.t, i = ee.u), {
						maxVideoHeight: s,
						maxVideoWidth: i
					})
				}
				getMediaInfo(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state,
						s = arguments.length > 2 ? arguments[2] : void 0;
					const {
						availableWidth: i,
						isListing: n,
						post: o
					} = e;
					if (Object(ee.H)(o.media)) return {
						source: o.media.scrubberThumbSource,
						width: this.state.viewportWidth - 2 * ye,
						height: this.state.viewportHeight - 2 * ye
					};
					const r = o.media && o.media.obfuscated || "";
					let a = !o.media || Object(ee.N)(o.media) || Object(ee.G)(o.media) || Object(ee.E)(o.media) ? "" : o.media.content,
						[d, l] = !o.media || Object(ee.K)(o.media) || Object(ee.M)(o.media) || Object(ee.E)(o.media) ? [0, 0] : [o.media.height, o.media.width];
					if (i && o.media && Object(ee.E)(o.media)) {
						d = Object(q.b)(o.media.mediaMetadata || {}, Object(q.c)(n), ee.p, i) + ee.i, l = i
					}
					if (i && o.media && (o.media.type === ee.o.IMAGE || o.media.type === ee.o.GIFVIDEO)) {
						const e = me.b(i, o.media.resolutions);
						e && (a = e.url, l = e.width, d = e.height)
					} else if (o && o.media && (!e.isListing || e.isExpando) && (o.media.type === ee.o.IMAGE || o.media.type === ee.o.GIFVIDEO)) {
						let e;
						(e = Object(ee.L)(o.media.height, o.media.width) && Object(k.b)(o.media.height) ? me.c(o.media.height, o.media.width, o.media.resolutions) : me.a(o.media.resolutions)) && (a = e.url, l = e.width, d = e.height)
					}
					if (e.isExpando)
						if (l > t.viewportWidth) {
							d *= t.viewportWidth / l, l = t.viewportWidth
						} else if (d > t.viewportHeight) {
						const e = t.viewportHeight / d;
						d = t.viewportHeight, l *= e
					}
					const {
						maxVideoHeight: c,
						maxVideoWidth: u
					} = this.getVideoMaxDimensions(e, t);
					if (o.media && o.media.type === ee.o.VIDEO) {
						const t = d / l;
						e.isExpando ? (d = c, l = u) : t > ee.c ? (d = c, l = Math.min(Math.max(c / t, ee.r), u)) : (d = Math.min(Math.max(u * t, ee.q), c), l = u)
					}
					o.media && o.media.type === ee.o.EMBED && (o.isSurveyAd && (a = Object(g.a)(s, o.impressionId, o.postId), d = 450, l = 450), e.isExpando && o.media.provider !== ee.v.Twitter && (d = c, l = u));
					let m = !1;
					if (e.isMiniCard) {
						const e = d / l;
						m = Math.abs(e - ee.c) > .01
					}
					return {
						source: a,
						obfuscated: r,
						width: l,
						height: d,
						needsBackgroundBlur: m
					}
				}
				shouldBlur() {
					const {
						isBot: e,
						isExpando: t,
						isNsfwBlurSubreddit: s,
						isNSFW: i,
						isOverlay: n,
						isSpoiler: o,
						theme: r
					} = this.props;
					if (e || t || this.state.isRevealed || n) return !1;
					const a = s && i;
					return i && !r.subredditContext.shouldShowNSFWContent || o || a
				}
				render() {
					var e;
					const {
						autoplayPref: t,
						className: s,
						crosspost: i,
						currentUserId: n,
						fireAdPixelsOfType: o,
						flairStyleTemplate: r,
						forceAspectRatio: a,
						isCommentsPage: d,
						isExpando: c,
						isGalleryTileLayout: m,
						isListing: p,
						isMediumHeight: h,
						isNotCardView: b,
						isNsfwBlurSubreddit: g,
						isNSFW: x,
						isOptionalTextExpEnabled: f,
						isSpoiler: E,
						isTitleOnly: O,
						openPost: w,
						post: I,
						showCentered: T,
						showFull: M = !1,
						showPromotedCTA: L,
						subredditOrProfileDisplayText: G
					} = this.props, {
						canLoadContent: $,
						forcePause: J,
						shouldPause: z,
						shouldStop: te,
						viewportWidth: se
					} = this.state, ie = g && x;
					if (!I.media) return null;
					let ne;
					I.media.type !== ee.o.TEXT && (ne = I.media.richtextContent);
					const oe = f && ne,
						re = J || z,
						ae = te,
						{
							source: de,
							obfuscated: le,
							height: ue,
							width: me,
							needsBackgroundBlur: pe
						} = this.getMediaInfo(this.props, this.state, n),
						fe = {
							showCentered: T,
							isListing: p,
							showFull: M,
							height: ue,
							width: me
						},
						Ee = {
							...fe,
							className: s,
							forceAspectRatio: a,
							viewportWidth: se
						},
						ve = this.shouldBlur(),
						Oe = !((null === (e = I.pollData) || void 0 === e ? void 0 : e.isPrediction) && !d),
						we = !(!I.isSponsored || !I.source),
						Ie = Object(ce.sb)() || "",
						Te = I.isSponsored ? Object(W.b)(I.id, {
							fireAdPixelsOfType: o,
							openPost: w
						}) : l.a,
						je = e => {
							Te && Te(e, this.props.post, this.props.basePixelMetadata, void 0, this.props.pageType)
						};
					if (le && ve) return u.a.createElement(D.a, be({}, Ee, {
						blurSrc: le
					}), u.a.createElement(Ce, {
						isVisible: $
					}, u.a.createElement(k.a, be({}, fe, {
						altText: this.getAltText(),
						className: this.props.imageBoxClassName,
						contentImageClassName: this.props.imageBoxContentImageClassName,
						imageClassName: this.props.imageBoxClassName,
						isListing: p,
						isNSFW: x,
						isNsfwBlockingModalEligible: ie,
						isSpoiler: E,
						isVideoThumbnail: !!I.media && I.media.type === ee.o.VIDEO,
						onClick: this.onClickRevealBlurred,
						postId: I.id,
						shouldBlur: ve,
						source: le,
						outboundUrl: we && I.source.outboundUrl || void 0,
						originalSource: de,
						onPostMediaClick: this.handlePostMediaClick
					}))));
					if (!I.media) return null;
					switch (I.media.type) {
						case ee.o.RTJSON:
							const e = Object(K.a)(I, null);
							if (null === e) return null;
							if (!M && !Object(Q.a)(I)) return null;
							const n = I.isMeta ? Object(Z.a)(e, I.id) : e;
							return u.a.createElement(u.a.Fragment, null, Oe && u.a.createElement(A.a, {
								canLoadContent: $,
								className: s,
								"data-click-id": "text",
								isCommentsPage: d,
								isExpando: c,
								isMediumHeight: h,
								isRichTextTruncated: I.media.isRichtextPreview,
								isTitleOnly: O,
								postId: I.id,
								showFull: M
							}, u.a.createElement(U.b, {
								altText: this.getAltText(),
								content: n,
								flairStyleTemplate: r,
								isListing: p,
								isNSFW: x,
								isNsfwBlockingModalEligible: ie,
								isSpoiler: E,
								mediaMetadata: I.media.mediaMetadata,
								onClickRevealBlurred: this.onClickRevealBlurred,
								postId: I.id,
								rtJsonElementProps: _e(this.props),
								renderMediaAsLinks: p,
								shouldBlur: ve
							}), u.a.createElement(S.b, {
								content: n
							})), u.a.createElement(R.a, {
								postId: I.id,
								isCommentsPage: !!d
							}));
						case ee.o.TEXT:
							if (Object(Y.a)(I)) {
								const e = "Text post should not include body content";
								return C.c.withScope(t => {
									t.setExtra("info", {
										post: I,
										isListing: p,
										isCommentsPage: d
									}), C.c.captureMessage(e)
								}), Object(v.a)() && console.log(`${I.id}: ${e}`), u.a.createElement(u.a.Fragment, null, Oe && u.a.createElement(A.a, {
									postId: I.id,
									className: s,
									"data-click-id": "text",
									isCommentsPage: d,
									showFull: M
								}, u.a.createElement(F.a, {
									flairStyleTemplate: r,
									html: I.isMeta ? Object(X.a)(I.media.content, I.id, he.a.hiddenLink) : I.media.content
								})), u.a.createElement(R.a, {
									postId: I.id,
									isCommentsPage: !!d
								}))
							}
							return u.a.createElement(R.a, {
								postId: I.id,
								isCommentsPage: !!d
							});
						case ee.o.EMBED:
							return this.props.isMiniCard && I.preview && I.preview.url ? u.a.createElement(D.a, be({}, Ee, {
								alwaysWrapMedia: !0
							}), u.a.createElement(Ce, {
								isVisible: $
							}, u.a.createElement(u.a.Fragment, null, u.a.createElement(k.a, be({}, fe, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: c,
								isListing: p,
								isNSFW: x,
								isCrosspost: !!i,
								isSpoiler: E,
								postId: I.id,
								shouldBlur: ve,
								source: I.preview.url,
								originalSource: I.preview.url,
								onPostMediaClick: this.handlePostMediaClick
							})), u.a.createElement(H.a, null)))) : ee.h.has(I.media.provider) ? I.media.provider === ee.v.Twitter ? u.a.createElement(u.a.Fragment, null, u.a.createElement(B.a, {
								canLoadContent: $,
								embedBoxChildRef: this.storeChildRef,
								mediaContainerProps: Ee,
								onIframeLoaded: this.onIframeLoaded,
								source: de,
								title: I.title,
								postId: I.id
							}), oe && u.a.createElement(N.a, {
								content: ne,
								rtJsonElementProps: _e(this.props)
							})) : u.a.createElement(u.a.Fragment, null, u.a.createElement(D.a, be({}, Ee, {
								alwaysWrapMedia: !0,
								height: c ? ue : ee.j,
								width: c ? me : ee.j * (16 / 9)
							}), $ && u.a.createElement(P.a, {
								childRef: this.storeChildRef,
								height: c ? ue : ee.j,
								width: c ? me : void 0,
								isListing: p,
								isResponsive: !0,
								onLoad: this.onIframeLoaded,
								showCentered: T,
								showFull: M,
								source: de,
								title: I.title
							})), oe && u.a.createElement(N.a, {
								content: ne,
								rtJsonElementProps: _e(this.props)
							})) : u.a.createElement(u.a.Fragment, null, u.a.createElement(D.a, be({}, Ee, {
								alwaysWrapMedia: !0
							}), $ && u.a.createElement(P.a, be({}, fe, {
								isResponsive: c || I.media.provider === ee.v.IFrameEmbed,
								title: I.title,
								childRef: this.storeChildRef,
								onLoad: this.onIframeLoaded,
								source: de,
								fullWidth: I.media.provider === ee.v.IFrameEmbed
							}))), oe && u.a.createElement(N.a, {
								content: ne,
								rtJsonElementProps: _e(this.props)
							}));
						case ee.o.GIFVIDEO: {
							let e = ue,
								t = me;
							return e > ee.j && (t = me / ue * (e = ee.j)), u.a.createElement(D.a, be({}, Ee, {
								blurSrc: pe ? I.media.gifBackgroundImage : void 0
							}), u.a.createElement(Ce, {
								isVisible: $
							}, u.a.createElement(V.a, be({}, fe, {
								isNotCardView: b,
								height: c ? void 0 : e,
								width: c ? void 0 : t,
								postId: I.id,
								shouldLoad: !0,
								shouldPause: p && re,
								source: de,
								originalSource: I.media.content,
								isPromoted: I.isSponsored
							})), oe && u.a.createElement(N.a, {
								content: ne,
								rtJsonElementProps: _e(this.props)
							})))
						}
						case ee.o.VIDEO: {
							const e = I.media.posterUrl || I.preview && I.preview.url;
							if (this.props.isMiniCard && e) return u.a.createElement(u.a.Fragment, null, u.a.createElement(D.a, be({}, Ee, {
								alwaysWrapMedia: !0
							}), u.a.createElement(Ce, {
								isVisible: $
							}, u.a.createElement(u.a.Fragment, null, u.a.createElement(k.a, be({}, fe, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: c,
								isListing: p,
								isNSFW: x,
								isCrosspost: !!i,
								isSpoiler: E,
								postId: I.id,
								shouldBlur: ve,
								source: e,
								originalSource: e,
								onPostMediaClick: this.handlePostMediaClick
							})), u.a.createElement(H.a, null)))), oe && u.a.createElement(N.a, {
								content: ne,
								rtJsonElementProps: _e(this.props)
							}));
							const s = I.reactedFrom && I.attributionInfo ? {
									id: I.id,
									reactedFrom: {
										...I.reactedFrom
									},
									attributionInfo: {
										...I.attributionInfo
									},
									isReactAllowed: I.isReactAllowed
								} : void 0,
								n = u.a.createElement(D.a, be({}, Ee, {
									alwaysWrapMedia: !0,
									isVideo: !0
								}), $ && u.a.createElement(xe, {
									autoPlay: t && !1 === z,
									isExpando: c,
									shouldLoad: !0,
									shouldPause: re,
									shouldStop: ae,
									hlsSource: I.media.hlsUrl,
									mpegDashSource: I.media.dashUrl,
									isGif: I.media.isGif,
									scrubberThumbSource: I.media.scrubberThumbSource,
									postId: I.id,
									isSponsored: I.isSponsored,
									onAdPostClick: je,
									callToActionSource: I.source || void 0,
									callToActionText: I.callToAction,
									isListing: p,
									posterUrl: I.media.posterUrl,
									muxVideoDuration: void 0,
									muxVideoId: I.id,
									muxVideoIsLive: !1,
									muxVideoTitle: I.title,
									sessionId: Ie,
									reactPostInfo: s,
									isCommentsPage: d
								}));
							return I.isSponsored ? u.a.createElement(j.a, {
								post: I,
								trackVideo: !0
							}, n) : u.a.createElement(u.a.Fragment, null, n, oe && u.a.createElement(N.a, {
								content: ne,
								rtJsonElementProps: _e(this.props)
							}))
						}
						case ee.o.LIVEVIDEO:
							return u.a.createElement(Ce, {
								isVisible: $
							}, u.a.createElement(ge, {
								className: this.props.isMiniCard ? he.a.miniCardVideo : void 0,
								canLoad: $,
								postId: I.id,
								postTitle: I.title,
								shouldPause: re || ae,
								url: I.media.hlsUrl
							}));
						case ee.o.IMAGE:
							const o = this.state.viewportHeight - 2 * ye,
								a = this.state.viewportWidth - 2 * ye;
							let l = de;
							return this.props.isMiniCard && !this.props.isMiniCardHQPreviews && (I.thumbnail && Object(y.a)(I.thumbnail.url) ? l = I.thumbnail.url : I.preview && Object(y.a)(I.preview.url) && (l = I.preview.url)), u.a.createElement(u.a.Fragment, null, u.a.createElement(D.a, be({}, Ee, {
								blurSrc: pe ? l : void 0,
								isExpando: !!c
							}), u.a.createElement(Ce, {
								isVisible: $
							}, u.a.createElement(k.a, be({}, fe, {
								altText: this.getAltText(),
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: c,
								isListing: p,
								isNSFW: x,
								isCrosspost: !!i,
								isSpoiler: E,
								maxHeight: c ? o : void 0,
								maxWidth: c ? a : void 0,
								postId: I.id,
								shouldBlur: ve,
								source: l,
								outboundUrl: we && I.source.outboundUrl || void 0,
								isSponsored: I.isSponsored,
								originalSource: I.media.content,
								onPostMediaClick: this.handlePostMediaClick
							})))), oe && u.a.createElement(N.a, {
								content: ne,
								rtJsonElementProps: _e(this.props)
							}));
						case ee.o.GALLERY:
							const g = Object(q.b)(I.media.mediaMetadata || {}, Object(q.c)(p), ee.p, me),
								f = Object(q.a)(I.media.gallery, I.isSponsored);
							return u.a.createElement(D.a, be({}, Ee, {
								blurSrc: pe ? de : void 0,
								isExpando: !!c,
								maxGalleryHeight: g + f,
								className: he.a.galleryMediaContainer,
								isGalleryTileLayout: m
							}), u.a.createElement(Ce, {
								isVisible: $
							}, u.a.createElement(_.a, {
								post: I,
								postId: I.id,
								postTitle: I.title,
								subredditName: G,
								galleryItems: I.media.gallery ? I.media.gallery.items : [],
								mediaMetadata: I.media.mediaMetadata || {},
								imageHeight: g,
								captionHeight: f,
								isSponsored: I.isSponsored,
								showPromotedCTA: !!L,
								className: this.props.imageBoxClassName,
								isListing: p,
								isNSFW: x,
								isNsfwBlockingModalEligible: ie,
								isSpoiler: E,
								shouldBlur: ve,
								onClickRevealBlurred: this.onClickRevealBlurred,
								isTileLayout: !!m,
								shouldShowTileLayoutOption: this.props.shouldShowGalleryTileOption,
								isVisible: $
							}), oe && u.a.createElement(N.a, {
								content: ne,
								rtJsonElementProps: _e(this.props)
							})));
						default:
							return null
					}
				}
			}
			const De = Me(Pe(Object(h.a)(Object(E.a)(ke))))
		},
		"./src/reddit/components/ModQueueList/PostSortDropdown.m.less": function(e, t, s) {
			e.exports = {
				Row: "_3h6zBMaGJuwN_qOmhUyv7E",
				row: "_3h6zBMaGJuwN_qOmhUyv7E"
			}
		},
		"./src/reddit/components/ModQueueList/PostSortDropdown.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var i, n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/addQueryParams/index.ts"),
				c = s("./src/lib/filterQueryParams/index.ts"),
				u = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/controls/Dropdown/Row.tsx"),
				p = s("./src/reddit/controls/InternalLink/index.tsx"),
				h = s("./src/reddit/selectors/meta.ts"),
				b = s("./src/reddit/components/ModQueueList/PostSortDropdown.m.less"),
				g = s.n(b);
			! function(e) {
				e.NewestFirst = "newest", e.OldestFirst = "oldest", e.MostReportedFirst = "most_reported"
			}(i || (i = {}));
			const x = u.a.wrapped(m.b, "Row", g.a),
				f = Object(d.c)({
					currentPage: e => e.platform.currentPage,
					origin: h.k
				}),
				E = Object(a.b)(f);
			t.b = E(e => r.a.createElement("div", {
				className: e.className
			}, r.a.createElement(p.default, {
				onClick: e.sendEventWithName("modqueue_sort_newest"),
				to: Object(c.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page", "sort"])
			}, r.a.createElement(x, {
				displayText: n.fbt._("Newest first", null, {
					hk: "4buqk8"
				}),
				isSelected: !e.postSort
			})), r.a.createElement(p.default, {
				onClick: e.sendEventWithName("modqueue_sort_oldest"),
				to: Object(l.a)(Object(c.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
					sort: i.OldestFirst
				})
			}, r.a.createElement(x, {
				displayText: n.fbt._("Oldest first", null, {
					hk: "1x9Jdr"
				}),
				isSelected: e.postSort === i.OldestFirst
			})), r.a.createElement(p.default, {
				onClick: e.sendEventWithName("modqueue_sort_most_reports"),
				to: Object(l.a)(Object(c.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
					sort: i.MostReportedFirst
				})
			}, r.a.createElement(x, {
				displayText: n.fbt._("Most reported first", null, {
					hk: "2ac4Mt"
				}),
				isSelected: e.postSort === i.MostReportedFirst
			}))))
		},
		"./src/reddit/components/Poll/async.ts": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(i.a)({
				resolved: {},
				chunkName: () => "reddit-components-Poll",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-Poll").then(s.bind(null, "./src/reddit/components/Poll/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Poll/index.tsx"
				}
			})
		},
		"./src/reddit/components/RawHTMLDisplay/Media.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				o = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				r = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				a = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				d = s("./src/reddit/components/RawHTMLDisplay/index.tsx");

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(o.a)(e => {
				let {
					flairStyleTemplate: t,
					...s
				} = e;
				return n.a.createElement(d.a, l({
					style: {
						color: Object(a.a)(Object(r.a)({
							flairStyleTemplate: t,
							...s
						}))
					}
				}, s))
			})
		},
		"./src/reddit/helpers/canPreviewSelfText/index.ts": function(e, t, s) {
			"use strict";
			var i = s("./src/reddit/helpers/postHasSelfText/index.ts");
			t.a = e => (Object(i.a)(e) || !!e.pollData) && !e.isSpoiler && !e.isNSFW
		},
		"./src/reddit/helpers/makeModQueueListingKey/index.ts": function(e, t, s) {
			"use strict";
			var i = s("./src/reddit/components/ModQueueList/PostSortDropdown.tsx");
			t.a = e => {
				const {
					profile: t,
					subreddit: s
				} = e;
				let n = s && `r/${s}` || t && `u/${t}` || "all";
				return "comments" !== e.onlyOfType && "links" !== e.onlyOfType && "chat_comments" !== e.onlyOfType || (n += `--[${e.onlyOfType}]`), e.sort !== i.a.NewestFirst && (n += `--[${e.sort}]`), n
			}
		},
		"./src/reddit/helpers/mediaGallery/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return r
			})), s.d(t, "h", (function() {
				return a
			})), s.d(t, "i", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "f", (function() {
				return u
			})), s.d(t, "g", (function() {
				return m
			})), s.d(t, "a", (function() {
				return b
			})), s.d(t, "e", (function() {
				return g
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var i = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				n = s.n(i),
				o = s("./src/reddit/models/Media/index.ts");

			function r(e, t) {
				const s = t.sort((e, t) => e.y - t.y),
					i = s.find(t => t.y > e);
				if (i) return i;
				const n = s.pop();
				return n || null
			}

			function a(e) {
				const t = u(e),
					s = t.every(e => e.y > e.x),
					i = t.every(e => e.x > e.y);
				return !s && !i
			}

			function d(e, t, s) {
				const i = u(e);
				if (h(i, t)) return !0;
				const n = m(i).y;
				return !n || n < s
			}
			const l = e => e ? o.j : o.e;

			function c(e, t, s, i) {
				const n = u(e);
				if (h(n, t)) return t;
				const o = m(n);
				let r = o.y;
				return !r || r < s ? s : (i > 0 && (r = i * r / o.x), r > t ? t : r)
			}
			const u = e => Object.entries(e).reduce((e, t) => {
					let [s, i] = t;
					return i && i.s && e.push(i.s), e
				}, []),
				m = e => e.reduce((e, t) => p(e, t), e && e[0] || []),
				p = (e, t) => {
					const s = e.x / e.y + .005,
						i = e.x / e.y - .005;
					return t.x / t.y > s ? t : t.x / t.y > i ? e.y > t.y ? e : t : e
				},
				h = (e, t) => e.some(e => e.y > t && Object(o.L)(e.y, e.x));

			function b(e, t) {
				return e && e.items && !t && e.items.some(e => void 0 !== e.caption || void 0 !== e.outboundUrl) ? o.i : 0
			}
			const g = e => {
				const t = n.a.parse(e),
					s = t.path || "",
					i = s.length > 7 ? s.substring(0, 7) + "..." : s;
				return (t.hostname ? t.hostname.replace("www.", "") : "") + i.substring(i.lastIndexOf("/") + 1)
			}
		},
		"./src/reddit/helpers/postHasSelfText/index.ts": function(e, t, s) {
			"use strict";
			var i = s("./src/reddit/models/Media/index.ts"),
				n = s("./src/reddit/models/RichTextJson/index.ts");
			t.a = e => {
				const t = e && e.media;
				return !!t && (t.type === i.o.TEXT && !!t.content || t.type === i.o.RTJSON && !Object(n.G)(t.richtextContent))
			}
		},
		"./src/reddit/helpers/stripMetaLinks/fromRTJ.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var i = s("./src/lib/redditId/index.ts");

			function n(e, t) {
				const s = function e(t, s) {
					let i = !1;
					let n = [];
					try {
						for (const o of t)
							if ("link" === o.e && o.u && o.u.includes(`https://www.reddit.com/poll/${s}`)) i = !0;
							else if (o.c && "string" != typeof o.c) {
							const t = e(o.c, s);
							t.found ? (i = !0, ("par" !== o.e || t.updated.length) && n.push({
								...o,
								c: t.updated
							})) : n.push(o)
						} else n.push(o)
					} catch (o) {
						i = !1, n = []
					}
					return {
						found: i,
						updated: i ? n : t
					}
				}(e.document, Object(i.c)(t));
				return s.found ? {
					document: s.updated
				} : e
			}
		},
		"./src/reddit/helpers/stripMetaLinks/fromRawHtml.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var i = s("./src/lib/redditId/index.ts");

			function n(e, t, s) {
				return e.replace(`href="https://www.reddit.com/poll/${Object(i.c)(t)}`, `class="${s}" href="https://www.reddit.com/poll/${Object(i.c)(t)}`)
			}
		},
		"./src/reddit/helpers/trackers/gallery.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "a", (function() {
				return u
			}));
			var i = s("./src/reddit/constants/tracking.ts"),
				n = s("./src/reddit/helpers/parseUrl.ts"),
				o = s("./src/reddit/selectors/media.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const a = (e, t, s) => ({
					gallery: r.r(e, t, s),
					post: r.I(e, t),
					...r.n(e)
				}),
				d = (e, t) => s => ({
					...a(s, e, t),
					action: i.c.VIEW,
					noun: "media",
					source: "gallery",
					media: r.B(s, e)
				}),
				l = (e, t) => s => {
					const d = Object(n.a)(t),
						l = Object(o.d)(s, e) + 1;
					return {
						...a(s, e, l),
						action: i.c.CLICK,
						noun: "outbound_url",
						source: "gallery",
						media: {
							...r.B(s, e),
							outboundUrl: t,
							outboundDomain: d ? d.hostname : void 0
						}
					}
				},
				c = (e, t) => m(e, !0, t),
				u = (e, t) => m(e, !1, t),
				m = (e, t, s) => n => ({
					...a(n, e, s),
					action: i.c.CLICK,
					noun: t ? "forward" : "backward",
					source: "gallery"
				})
		},
		"./src/reddit/icons/svgs/OutboundLink/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("path", {
				d: "M16 10.77a1 1 0 0 0-1 1V14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.23a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.23a1 1 0 0 0-1-1z"
			}), n.a.createElement("path", {
				d: "M17.91 2.62A1 1 0 0 0 17 2h-4a1 1 0 0 0 0 2h1.59L9.38 9.19a1 1 0 1 0 1.41 1.41L16 5.41V7a1 1 0 0 0 2 0V3a1 1 0 0 0-.09-.38z"
			}))
		},
		"./src/reddit/icons/svgs/Tile/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("rect", {
				stroke: "inherit",
				fill: "none",
				x: "1.5",
				y: "1.5",
				width: "17",
				height: "17",
				rx: "4"
			}), n.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "4",
				y: "4",
				width: "5.5",
				height: "5.5"
			}), n.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "10.5",
				y: "4",
				width: "5.5",
				height: "5.5"
			}), n.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "4",
				y: "10",
				width: "5.5",
				height: "5.5"
			}), n.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "10.5",
				y: "10",
				width: "5.5",
				height: "5.5"
			})))
		},
		"./src/reddit/selectors/experiments/intuitivePostTypes.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var i = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/helpers/isCrosspost.ts"),
				r = s("./src/reddit/selectors/modQueue.ts"),
				a = s("./src/reddit/selectors/platform.ts");
			const d = (e, t) => {
				let {
					post: s
				} = t;
				if (Object(r.b)(e)) return !0;
				const d = Object(a.f)(e),
					l = Object(o.a)(s);
				return !(!d || l) && (e => {
					return Object(n.c)(e, {
						experimentEligibilitySelector: n.a,
						experimentName: i.Tb
					}) === i.xd
				})(e)
			}
		},
		"./src/reddit/selectors/modQueue.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return c
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "g", (function() {
				return p
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "f", (function() {
				return b
			})), s.d(t, "b", (function() {
				return g
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var i = s("./src/lib/constants/index.ts"),
				n = s("./src/reddit/helpers/makeModQueueListingKey/index.ts"),
				o = s("./src/lib/objectSelector/index.ts"),
				r = s("./src/lib/initializeClient/installReducer.ts"),
				a = s("./src/reddit/reducers/features/comments/index.ts"),
				d = s("./src/reddit/reducers/pages/modHub/index.ts");
			Object(r.a)({
				features: {
					comments: a.a
				},
				pages: {
					modHub: d.a
				}
			});
			const l = (e, t) => Object(n.a)({
					onlyOfType: t.queryParams.only,
					profile: t.profileName,
					sort: t.queryParams.sort,
					subreddit: t.subredditName
				}),
				c = Object(o.a)((e, t) => {
					var s, i, n;
					const {
						pageName: o,
						page: r
					} = t, a = l(0, t);
					if (!(null === (n = null === (i = null === (s = e.pages.modHub.modQueue[o]) || void 0 === s ? void 0 : s.itemOrder) || void 0 === i ? void 0 : i[a]) || void 0 === n ? void 0 : n[r])) return;
					const d = e.pages.modHub.modQueue[o].itemOrder[a][r];
					return d ? d.map(t => e.posts.models[t] || e.features.comments.models[t]) : []
				}),
				u = (e, t) => {
					var s;
					const {
						pageName: i
					} = t;
					return null === (s = e.pages.modHub.modQueue[i]) || void 0 === s || !s.api || e.pages.modHub.modQueue[i].api.pending
				},
				m = (e, t) => {
					var s;
					const i = l(0, t);
					return null === (s = e.pages.modHub.modQueue[t.pageName]) || void 0 === s ? void 0 : s.loadMore[i]
				},
				p = e => Object.keys(e.pages.modHub.modQueue.bulkAction.selectedItems),
				h = e => e.pages.modHub.modQueue.bulkAction.api.pending,
				b = e => e.pages.modHub.modQueue.moderatedCommunitiesOrder.data,
				g = e => {
					const t = e.platform && e.platform.currentPage;
					return t && t.meta && (t.meta.name === i.Nb.MODERATION_PAGES || t.meta.name === i.Nb.MODQUEUE_PAGES)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab.fbc61af8f901ef720ecf.js.map