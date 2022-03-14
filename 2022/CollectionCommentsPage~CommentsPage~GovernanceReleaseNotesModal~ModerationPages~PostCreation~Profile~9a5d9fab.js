// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab.af55313c8481847dd4c0.js
// Retrieved at 3/14/2022, 7:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"], {
		"./src/higherOrderComponents/withClickTracking/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				a = s("./src/reddit/components/TrackingHelper/index.tsx"),
				o = s("./src/reddit/selectors/telemetry.ts");

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const d = (e, t, s) => (i = (() => {})) => n => {
				const a = m(n.target, n.currentTarget),
					r = h(n.target, n.currentTarget);
				a && s && t && (u(n.target, n.currentTarget, c.anchors) ? s(t(e, a, r)) : s(s => {
					const i = t(e, a, r)(s);
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
						actionInfo: Object(o.Q)(s, n)
					}
				})), u(n.target, n.currentTarget, c.anchorsAndButtons) && i(n)
			};

			function l(e) {
				const t = t => {
					const {
						sendEvent: s,
						eventFactory: a,
						clickTrackingId: o,
						...l
					} = t, c = Object(i.useCallback)(d(o, a, s), [o, a, s]);
					return n.a.createElement(e, r({}, l, {
						afterClickTracking: c
					}))
				};
				return t.displayName = `WithClickTracking(${e.displayName||e.name})`, Object(a.c)(t)
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
				h = (e, t) => "true" === e.dataset.ignoreClick || e !== t && (!!e.parentElement && h(e.parentElement, t))
		},
		"./src/higherOrderComponents/withMux/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/cache/localStorage/index.ts"),
				d = s("./src/lib/combineRefs/index.tsx"),
				l = s("./src/lib/loadWithRetries/index.ts"),
				c = () => Object(l.a)(() => s.e("MuxEmbed").then(s.t.bind(null, "./node_modules/mux-embed/dist/mux.js", 7))),
				u = s("./src/reddit/constants/experiments.ts"),
				m = s("./src/reddit/helpers/chooseVariant/index.ts");
			const h = Object(o.a)(e => {
				const t = Object(m.c)(e, {
					experimentEligibilitySelector: m.a,
					experimentName: u.Ld
				});
				return Object(u.vf)(t) ? void 0 : t
			}, e => {
				const t = Object(m.c)(e, {
					experimentEligibilitySelector: m.a,
					experimentName: u.Md
				});
				return Object(u.vf)(t) ? void 0 : t
			}, (e, t) => e === u.Pd.Enabled && t === u.Pd.Enabled);
			var p = s("./src/config.ts");
			var b = s("./src/reddit/selectors/user.ts");
			const g = e => {
					const t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
						s = t.length,
						i = new Uint32Array(e);
					return crypto.getRandomValues(i), Array.from(i).map(e => t.charAt(e % s)).join("")
				},
				x = (e = new Date) => new Date(e).toISOString().replace(/^(\d{4})-(\d{2})-(\d{2}).*/, "$1$2$3"),
				f = (e, t = 0) => Math.trunc(e).toString(16).padStart(t, "0");
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
					envKey: p.a.muxApiKey,
					localStorageSaltKey: "muxSalt",
					localStorageViewerUserIdKey: "muxViewerUserId",
					playerVersion: `Reddit/Version Build ${p.a.buildNumber} ${p.a.appName}`,
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
					respectDoNotTrack: S,
					saltLength: j,
					saltTimeToLive: T,
					viewerUserIdLength: L
				} = {
					...w,
					...t
				};
				class M extends i.Component {
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
						const e = this.props.redditUserId || M.ANONYMOUS_USER_ID,
							t = this.getOrCreateSalt(),
							s = `${x()}${e}${t}`;
						return (await v(s)).substr(0, M.VIEWER_USER_ID_LENGTH)
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
							debug: M.DEBUG,
							disableCookies: M.DISABLE_COOKIES,
							respectDoNotTrack: M.RESPECT_DO_NOT_TRACK,
							...s,
							data: {
								env_key: M.ENV_KEY,
								experiment_name: this.experimentName,
								player_init_time: this.playerInitTime,
								player_name: M.PLAYER_NAME,
								player_version: M.PLAYER_VERSION,
								...t,
								viewer_user_id: e
							}
						}
					}
					getOrCreateSalt() {
						const e = M.LOCAL_STORAGE_SALT_KEY;
						let t = Object(r.a)(e);
						return t || (t = g(M.SALT_LENGTH), Object(r.b)(e, t, M.SALT_TIME_TO_LIVE)), t
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
							video_duration: s ? M.DURATION_LIVE : e,
							video_id: t,
							video_stream_type: s ? M.STREAM_TYPE_LIVE : M.STREAM_TYPE_ON_DEMAND,
							video_title: i,
							view_session_id: this.props.sessionId,
							player_software_version: this.getDashInstanceData() ? p.a.dashVersion : this.getHlsInstanceData() ? p.a.hlsVersion : null
						}
					}
				}
				M.displayName = O(e), M.ANONYMOUS_USER_ID = s, M.DEBUG = l, M.DISABLE_COOKIES = u, M.DURATION_LIVE = 1 / 0, M.ENV_KEY = m, M.LOCAL_STORAGE_SALT_KEY = f, M.LOCAL_STORAGE_VIEWER_USER_ID_KEY = E, M.PLAYER_NAME = C, M.PLAYER_VERSION = I, M.RESPECT_DO_NOT_TRACK = S, M.SALT_LENGTH = j, M.SALT_TIME_TO_LIVE = T, M.STREAM_TYPE_LIVE = "live", M.STREAM_TYPE_ON_DEMAND = "on-demand", M.VIEWER_USER_ID_LENGTH = L;
				const N = Object(i.forwardRef)((e, t) => n.a.createElement(M, y({}, e, {
						forwardedRef: t
					}))),
					P = Object(o.c)({
						redditUserId: b.i,
						isMuxEnabled: h
					});
				return Object(a.b)(P, null, null, {
					forwardRef: !0
				})(N)
			}
		},
		"./src/lib/ads/utils.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			const i = (e, t) => `https://sh.reddit.com/svc/shreddit/page/ads-rbl-survey/?p=desktop&u=${e}&i=${t}`
		},
		"./src/lib/truncateText/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const i = /\s*[,-:;\u2013\u2014]\s*$/;

			function n(e, t, s = "") {
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
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				r = s("./src/lib/classNames/index.ts"),
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
				h = s("./src/reddit/hooks/useTracking.ts"),
				p = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
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
				S = s.n(I);
			const {
				fbt: j
			} = s("./node_modules/fbt/lib/FbtPublic.js"), T = e => {
				const {
					displayImage: t,
					style: s,
					showSeeMore: i,
					isReadyToShow: a,
					imgAltText: o
				} = e, d = "u" in t ? t.u : t.gif;
				return n.a.createElement("div", {
					className: Object(r.a)({
						[S.a.slideImageMainDiv]: !i
					})
				}, a && n.a.createElement("img", {
					src: d,
					alt: o,
					className: S.a.slideImage,
					style: s
				}), i && n.a.createElement("div", {
					className: S.a.seeMore
				}, j._("see full image", null, {
					hk: "1Qygw5"
				})))
			}, L = e => {
				const {
					slideIndex: t,
					currentIndex: s,
					obfuscatedImage: i,
					optimalImage: a,
					originalImage: o,
					imgAltText: d,
					isListing: l,
					isNSFW: c,
					isSpoiler: u,
					isSponsored: m,
					isReadyToShow: h,
					shouldBlur: p
				} = e, b = s === t ? {
					left: "0px"
				} : {
					left: s > t ? "-100%" : "100%"
				}, g = Object(O.c)(l), x = o.y > g && Object(w.L)(o.y, o.x), f = x ? {} : {
					maxHeight: "100%"
				};
				let v;
				return v = i || (x ? o : "gif" in o ? o : a), n.a.createElement("li", {
					style: b,
					className: S.a.slide
				}, n.a.createElement("figure", {
					className: Object(r.a)({
						[S.a.tallImage]: x,
						[S.a.commonImage]: !x
					}, S.a.figure)
				}, l || m ? n.a.createElement(T, {
					displayImage: v,
					style: f,
					showSeeMore: x,
					isReadyToShow: h,
					imgAltText: d
				}) : n.a.createElement("a", {
					href: "u" in o ? o.u : o.gif,
					rel: "noopener noreferrer",
					target: "_blank",
					className: Object(r.a)({
						[S.a.tallImage]: x,
						[S.a.commonImage]: !x
					}, S.a.imageLink)
				}, n.a.createElement(T, {
					displayImage: v,
					style: f,
					showSeeMore: x,
					isReadyToShow: h,
					imgAltText: d
				}), p && n.a.createElement(E.a, {
					isNSFW: !!c,
					isSpoiler: !!u
				}))))
			}, M = e => n.a.createElement("a", {
				className: Object(r.a)(e.className, S.a.navigationUnderlay, {
					[S.a.hasMoreSlides]: e.hasMoreSlides
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
				className: Object(r.a)(e.iconClassName, S.a.icon)
			}, n.a.createElement(p.a, {
				className: S.a.iconImage
			}))), N = e => n.a.createElement("div", {
				className: S.a.imageMetaData,
				style: {
					height: e.captionHeight,
					justifyContent: e.caption ? "space-between" : "flex-end"
				}
			}, e.caption && n.a.createElement("span", {
				className: S.a.imageCaption,
				title: e.caption
			}, e.caption), e.outboundUrl && n.a.createElement("span", {
				className: S.a.imageUrl
			}, n.a.createElement("a", {
				className: S.a.outboundUrlWrapper,
				href: e.outboundUrl,
				onClick: e.onClickEvent,
				rel: "noopener noreferrer",
				target: "'_blank'"
			}, n.a.createElement("span", {
				className: S.a.urlText
			}, Object(O.e)(e.outboundUrl)), n.a.createElement(b.a, {
				className: S.a.linkIcon
			})))), P = e => n.a.createElement("div", {
				className: S.a.slideIndicator,
				onClick: e.toggleTileLayout ? t => {
					t.preventDefault(), t.stopPropagation(), e.toggleTileLayout()
				} : void 0
			}, e.toggleTileLayout && n.a.createElement(g.a, {
				className: S.a.tileIcon
			}), e.currentSlide, "/", e.totalSlides), _ = (e, t = 4) => {
				let s = e - t;
				return s < 0 && (s = 0), s
			}, D = (e, t, s = 4) => {
				let i = e + s;
				return i > t - 1 && (i = t - 1), i
			};
			t.a = e => {
				const t = Object(a.d)(),
					{
						captionHeight: s,
						galleryItems: p,
						imageHeight: b,
						isListing: g,
						isSponsored: I,
						isTileLayout: j,
						mediaMetadata: T = {},
						post: R,
						postId: k,
						postTitle: A,
						shouldShowTileLayoutOption: V,
						showPromotedCTA: B,
						subredditName: W,
						isVisible: H
					} = e,
					U = Object(a.e)(e => Object(C.b)(e, k)),
					F = U > 0,
					G = U < p.length - 1,
					K = Object(h.a)(),
					$ = Object(i.useRef)(null),
					Y = Object(i.useRef)(null),
					[z, J] = Object(i.useState)(H ? U : -1),
					[q, Q] = Object(i.useState)(H ? U : -1),
					X = Object(l.a)(H),
					Z = Object(l.a)(U);
				Object(i.useEffect)(() => {
					(void 0 !== X && X !== H && H && z < 0 && q < 0 || void 0 !== Z && Z !== U && H && (z > U || q < U)) && (J(_(U, 1)), Q(D(U, p.length, 1)))
				}, [X, U, H, z, q, Z, p.length, k]);
				const ee = Object(i.useRef)(),
					te = Object(i.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t
							} = e;
							t ? (z < 0 || q - z == 0) && (ee.current = setTimeout(() => {
								const e = D(q, p.length);
								e !== q && Q(e)
							}, 1e3)) : (z < 0 || q - z == 0) && clearTimeout(ee.current)
						})
					}, [z, q, p.length]);
				Object(o.a)(Y, te);
				const se = Object(i.useCallback)(e => {
						t(Object(x.f)({
							postId: k,
							index: e
						}))
					}, [t, k]),
					ie = Object(i.useCallback)(e => {
						t(Object(f.z)(R, v.a.GalleryItemImpression, `Slide${e}`))
					}, [t, R]),
					ne = Object(i.useCallback)(() => {
						t(Object(x.i)({
							postId: k,
							isTileLayout: !j
						}))
					}, [t, k, j]),
					ae = Object(i.useCallback)(() => {
						if (!G) return;
						const e = U + 1;
						if (e + 1 >= q) {
							const e = D(q, p.length);
							e !== q && Q(e)
						}
						se(e), K(u.b(k, e)), K(u.d(k, e + 1)), ie(e)
					}, [G, U, ie, se, K, k, q, p.length]),
					oe = Object(i.useCallback)(() => {
						if (!F) return;
						const e = U - 1;
						if (e - 1 <= z) {
							const e = _(z);
							e !== z && J(e)
						}
						const t = U + 1;
						se(e), K(u.a(k, t)), K(u.d(k, t - 1)), ie(e)
					}, [F, U, ie, se, K, k, z]),
					re = Object(i.useCallback)(() => {
						const e = p[U] && p[U].outboundUrl;
						e && K(u.c(k, e))
					}, [K, k, U, p]);
				m(y.a.ArrowLeft, $.current, oe), m(y.a.ArrowRight, $.current, ae);
				const de = p[U] && p[U].caption,
					le = p[U] && p[U].outboundUrl,
					ce = ((e, t, s) => {
						const i = Object(O.f)(e),
							n = Object(O.g)(i),
							a = n.x / n.y < 1,
							o = Object(O.h)(e),
							r = Object(O.i)(e || {}, Object(O.c)(s), w.p);
						return s || r || o || a ? {
							height: t
						} : {
							paddingBottom: `${Object(w.B)(n.y,n.x)}%`
						}
					})(T, b, g);
				return n.a.createElement("div", {
					className: Object(r.a)(S.a.outerContainer),
					ref: $,
					tabIndex: 0
				}, j ? n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
					className: Object(r.a)(S.a.tilesWrapper, {
						[S.a.blurredContent]: e.shouldBlur
					}),
					onClick: e.onClickRevealBlurred
				}, p.map((t, s) => {
					const i = t.mediaId,
						a = T && T[i];
					if (!a || !a.s) return null;
					const o = [...a && a.s ? [a.s] : [], ...a && a.p ? a.p : []],
						r = Object(O.d)(w.y, o);
					if (!r) return null;
					const d = a.s;
					return n.a.createElement("div", {
						style: {
							backgroundImage: `url(${"gif"in d?d.gif:"u"in r&&r.u})`
						},
						className: S.a.tileImage,
						onClick: e.shouldBlur ? void 0 : e => {
							e.preventDefault(), e.stopPropagation(), ne(), se(s)
						},
						key: i
					})
				}), [1, 2, 3].map(e => n.a.createElement("div", {
					key: e,
					className: S.a.tilePlaceholder
				}))), e.shouldBlur && n.a.createElement(E.a, {
					isNSFW: !!e.isNSFW,
					isSpoiler: !!e.isSpoiler
				})) : n.a.createElement("div", {
					className: S.a.slideshowContainer,
					tabIndex: -1,
					ref: Y,
					onClick: e.onClickRevealBlurred,
					style: ce
				}, n.a.createElement("div", {
					className: S.a.imagesWrapper
				}, n.a.createElement("ul", {
					className: S.a.slideWrapper
				}, p.map((t, s) => {
					const i = t.mediaId,
						a = T && T[i];
					if (!a || !a.s) return null;
					const o = t.caption ? t.caption : A,
						r = Object(c.a)(W ? `${W} - ${o}` : o, 300, d.ib),
						l = [...a && a.s ? [a.s] : [], ...a && a.p ? a.p : []],
						u = Object(O.d)(b, l);
					if (!u) return null;
					const m = e.shouldBlur && Object(O.d)(b, a.o || []) || void 0,
						h = s >= z && s <= q;
					return n.a.createElement(L, {
						slideIndex: s,
						currentIndex: U,
						obfuscatedImage: m,
						optimalImage: u,
						originalImage: a.s,
						isListing: e.isListing,
						isSponsored: I,
						key: i,
						isReadyToShow: h,
						imgAltText: r,
						shouldBlur: e.shouldBlur,
						isNSFW: e.isNSFW,
						isSpoiler: e.isSpoiler
					})
				})), !e.shouldBlur && n.a.createElement(n.a.Fragment, null, n.a.createElement(M, {
					onClick: oe,
					setFocusTo: Y,
					hasMoreSlides: F,
					title: "Previous",
					iconClassName: S.a.prevIcon,
					className: S.a.prevButton
				}), n.a.createElement(M, {
					onClick: ae,
					setFocusTo: Y,
					hasMoreSlides: G,
					title: "Next",
					iconClassName: S.a.nextIcon,
					className: S.a.nextButton
				}))), p.length > 1 ? n.a.createElement(P, {
					currentSlide: U + 1,
					totalSlides: p.length,
					toggleTileLayout: V && ne || void 0
				}) : ""), !de && !le || j || B ? !!s && !j && !B && n.a.createElement("div", {
					className: S.a.emptyCaptionBlock,
					style: {
						height: s
					}
				}) : n.a.createElement(N, {
					caption: de,
					onClickEvent: re,
					outboundUrl: le,
					captionHeight: s
				}))
			}
		},
		"./src/reddit/components/Media/PollContainer/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/models/Prediction/index.ts"),
				d = s("./src/reddit/selectors/poll/index.ts"),
				l = s("./src/reddit/components/Econ/Prediction/async.ts"),
				c = s("./src/reddit/components/Poll/async.ts");
			const u = Object(o.c)({
				poll: d.e
			});
			t.a = Object(a.b)(u)(({
				isCommentsPage: e,
				poll: t,
				postId: s
			}) => t ? Object(r.c)(t) ? n.a.createElement(l.a, {
				postId: s
			}) : n.a.createElement(c.a, {
				postId: s,
				isCommentsPage: e
			}) : null)
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
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/constants/componentSizes.ts"),
				r = s("./src/reddit/models/Media/index.ts"),
				d = s("./node_modules/react-redux/es/index.js"),
				l = s("./src/reddit/actions/post.ts"),
				c = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				u = s("./src/reddit/components/Media/RichTextContainer/index.m.less"),
				m = s.n(u);
			class h extends n.a.Component {
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
			var p = Object(d.b)(null, e => ({
				onLoadRichTextContentIfNeeded: t => e(Object(l.y)(t))
			}))(h);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = ({
				canLoadContent: e,
				children: t,
				className: s,
				isCommentsPage: i,
				isMediumHeight: d,
				isRichTextTruncated: l,
				isExpando: c,
				isTitleOnly: u,
				postId: h,
				showFull: g,
				...x
			}) => {
				const f = {
						[m.a.richTextContainerFull]: g,
						[m.a.richTextContainerTitleOnly]: u && !g,
						[m.a.richTextContainer]: !g && !u
					},
					E = {};
				g || (E.maxHeight = u ? `${r.m}px` : d ? `${r.l}px` : `${r.k}px`), i && (E.maxWidth = `${o.d}px`);
				const v = l && g;
				return n.a.createElement("div", b({
					className: Object(a.a)(f, s),
					style: E
				}, x), t, v && n.a.createElement(p, {
					canLoadContent: !!e,
					isExpando: c,
					postId: h
				}))
			}
		},
		"./src/reddit/components/Media/TwitterEmbed/index.m.less": function(e, t, s) {
			e.exports = {
				tweetPlaceholder: "q0jsD_ZcQRuuUQzXawr8J",
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
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/hooks/usePrevious.ts"),
				l = s("./src/lib/intersectionObserver/index.ts"),
				c = s("./src/reddit/components/Media/constants.ts"),
				u = s("./src/reddit/components/Media/EmbedBox/index.tsx"),
				m = s("./src/reddit/components/Media/MediaContainer/index.tsx"),
				h = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				p = s("./src/reddit/models/Media/index.ts"),
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
			const f = 350,
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
				} = e, [I, S] = Object(n.useState)(!1), j = Object(d.a)(t), T = Object(n.useRef)(), {
					height: L,
					isDeleted: M
				} = Object(o.e)(e => e.mediaEmbed[C] || {}), N = M ? E : L || v;

				function P(e) {
					var t;
					I || (null === (t = null == T ? void 0 : T.current) || void 0 === t ? void 0 : t.contentWindow) !== e.source || "tweet-measured" !== e.data.action || S(!0)
				}
				return Object(n.useEffect)(() => (window.addEventListener("message", P), () => {
					T.current && Object(l.b)(T.current), window.removeEventListener("message", P)
				}), []), Object(n.useEffect)(() => {
					!t && j && S(!1)
				}, [j, t]), a.a.createElement(m.a, x({}, s, {
					alwaysWrapMedia: !0,
					height: N,
					showFull: !s.isListing,
					width: f
				}), t && a.a.createElement(a.a.Fragment, null, M && a.a.createElement("p", {
					className: g.a.tweetDeleted
				}, i.fbt._("This Tweet has been deleted.", null, {
					hk: "1LhcOw"
				})), !M && a.a.createElement(a.a.Fragment, null, !I && a.a.createElement("div", {
					className: Object(r.a)(Object(h.a)({
						isLoading: !0
					}), g.a.tweetPlaceholder)
				}), a.a.createElement(u.a, {
					childRef: function(e) {
						T.current = e, e && Object(l.a)(e, (t, s) => {
							e && e.contentWindow && !L && s && e.contentWindow.postMessage("twitter-measure-requested", c.a)
						}), y(e)
					},
					className: Object(r.a)(g.a.tweetEmbedBox, {
						[g.a.isInvisible]: !I
					}),
					height: N,
					isListing: s.isListing,
					isResponsive: !0,
					maxHeight: s.isListing ? p.j : null,
					onLoad: b,
					showCentered: s.showCentered,
					showFull: !0,
					source: O,
					title: w,
					width: f
				}), s.isListing && N > p.j && a.a.createElement("div", {
					className: g.a.seeMore
				}, i.fbt._("See full tweet", null, {
					hk: "1bxtrd"
				})))))
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
				return a
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "a", (function() {
				return r
			}));
			var i = s("./src/reddit/models/Media/index.ts");
			const n = (e, t, s, i) => {
					const n = e / t,
						a = s / i;
					return Math.abs(n - a) < .03
				},
				a = (e, t) => {
					for (let s = 0; s < t.length; s++) {
						const i = t[s];
						if (i.width >= e) return i
					}
				},
				o = (e, t, s) => {
					for (let a = 0; a < s.length; a++) {
						const o = s[a];
						if (o.width >= i.e / 2 && n(e, t, o.height, o.width)) return o
					}
				},
				r = e => {
					for (let t = 0; t < e.length; t++) {
						const s = e[t];
						if (s.height >= i.e || s.width >= i.f) return s
					}
				}
		},
		"./src/reddit/components/Media/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return Ne
			}));
			var i = s("./node_modules/core-js/modules/web.dom.iterable.js"),
				n = s.n(i),
				a = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/lodash/debounce.js"),
				r = s.n(o),
				d = s("./node_modules/lodash/noop.js"),
				l = s.n(d),
				c = s("./node_modules/react/index.js"),
				u = s.n(c),
				m = s("./node_modules/react-redux/es/index.js"),
				h = s("./node_modules/reselect/es/index.js"),
				p = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
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
				S = s("./src/reddit/actions/post.ts"),
				j = s("./src/reddit/components/AdViewability/index.tsx"),
				T = s("./src/reddit/components/Governance/VaultActionLink/async.ts"),
				L = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				M = s("./src/reddit/components/Media/constants.ts"),
				N = s("./src/reddit/components/Media/EmbedBox/index.tsx"),
				P = s("./src/reddit/components/Media/GalleryBox/index.tsx"),
				_ = s("./src/reddit/components/Media/ImageBox/index.tsx"),
				D = s("./src/reddit/components/Media/MediaContainer/index.tsx"),
				R = s("./src/reddit/components/Media/PollContainer/index.tsx"),
				k = s("./src/reddit/components/Media/RichTextContainer/index.tsx"),
				A = s("./src/reddit/components/Media/TwitterEmbed/index.tsx"),
				V = s("./src/reddit/components/Media/VideoBox/index.tsx"),
				B = s("./src/reddit/components/PlayButton/index.tsx"),
				W = s("./src/reddit/components/PostList/index.tsx"),
				H = s("./src/reddit/components/RawHTMLDisplay/Media.tsx"),
				U = s("./src/reddit/components/RichTextJson/index.tsx"),
				F = s("./src/reddit/constants/componentSizes.ts"),
				G = s("./src/reddit/constants/screenWidths.ts"),
				K = s("./src/reddit/contexts/PageLayer/index.tsx"),
				$ = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				Y = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				z = s("./src/reddit/helpers/mediaGallery/index.tsx"),
				J = s("./src/reddit/helpers/path/index.ts"),
				q = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				Q = s("./src/reddit/helpers/stripMetaLinks/fromRawHtml.ts"),
				X = s("./src/reddit/helpers/stripMetaLinks/fromRTJ.ts"),
				Z = s("./src/reddit/models/Media/index.ts"),
				ee = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				te = s("./src/reddit/selectors/experiments/postSeo.ts"),
				se = s("./src/reddit/selectors/media.ts"),
				ie = s("./src/reddit/selectors/postCreations.ts"),
				ne = s("./src/reddit/selectors/posts.ts"),
				ae = s("./src/reddit/selectors/seo/index.ts"),
				oe = s("./src/reddit/selectors/telemetry.ts"),
				re = s("./src/reddit/selectors/user.ts"),
				de = s("./src/reddit/components/Media/getResolution.ts"),
				le = s("./src/reddit/components/Media/index.m.less"),
				ce = s.n(le);

			function ue() {
				return (ue = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const me = Object(a.a)({
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
				he = Object(b.a)(L.b, {
					playerName: "Reddit Player"
				}),
				pe = 300,
				be = " - ",
				ge = 1200,
				xe = 75,
				fe = "player.js",
				Ee = F.r + F.q,
				ve = e => u.a.createElement("div", {
					className: Object(x.a)(ce.a.visibilityWrapper, {
						[ce.a.displayNone]: !e.isVisible
					})
				}, e.children),
				ye = new Set([Z.o.EMBED, Z.o.LIVEVIDEO, Z.o.VIDEO, Z.o.GIFVIDEO]),
				Oe = e => !!e.media && ye.has(e.media.type),
				we = new Set([Z.o.EMBED, Z.o.GALLERY, Z.o.GIFVIDEO, Z.o.IMAGE, Z.o.LIVEVIDEO, Z.o.VIDEO]),
				Ce = ({
					post: e
				}) => !!e.media && we.has(e.media.type),
				Ie = Object(K.u)(),
				Se = Object(h.c)({
					canUseOCRAltText: (e, t) => Object(te.b)(e, t.post),
					OCRAltText: (e, {
						post: t
					}) => Object(te.a)(e, t.id),
					subredditOrProfileDisplayText: (e, t) => Object(te.i)(e, t),
					subredditOrProfile: (e, {
						post: t
					}) => Object(ne.U)(e, {
						postId: t.id
					}),
					isEditing: (e, {
						post: t
					}) => Object(ie.M)(e, {
						postId: t.id
					}),
					shouldShowAltText: (e, t) => Object(ae.d)(e, t),
					isGalleryTileLayout: (e, {
						shouldShowGalleryTileOption: t,
						post: s,
						isGalleryTileLayoutDefault: i
					}) => {
						if (!t) return !1;
						const n = Object(se.c)(e, s.id);
						return !(void 0 !== n || !i) || !!n
					},
					pageType: e => Object(oe.d)(e).pageType,
					basePixelMetadata: (e, {
						post: t
					}) => Object(ne.b)(e, t.id),
					isBlockingInterstitialEnabled: ee.b,
					currentUserId: re.yb
				}),
				je = e => ({
					fireAdPixelsOfType: (t, s) => e(Object(S.z)(t, s)),
					openPost: t => e(Object(S.L)(t)),
					openPostLink: t => e(Object(S.ab)(Object(J.b)(t.permalink), t.id))
				}),
				Te = Object(m.b)(Se, je),
				Le = Object(O.b)(e => ({
					renderingObjectInfo: e.post,
					pageLayer: e.pageLayer
				}));
			class Me extends u.a.Component {
				constructor(e) {
					super(e), this.pauseContent = () => {
						this.shouldFocusContentDebouncer(!1)
					}, this.stopContent = () => {
						const {
							media: e
						} = this.props.post;
						if (e && Z.d.has(e.type)) {
							if (this.pauseContent(), this.iframe) {
								const t = e.type === Z.o.EMBED ? e.provider : null;
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
						this.stopContent(), this.iframe && this.setState(({
							canLoadContent: e
						}) => e ? {
							canLoadContent: !1
						} : null)
					}, this.contentIsHeavyToMount = () => {
						const {
							media: e
						} = this.props.post;
						return !!e && Z.d.has(e.type)
					}, this.shouldFocusContentDebouncer = r()(e => {
						const {
							media: t
						} = this.props.post, {
							autoplayPref: s
						} = this.props;
						if (t && Z.d.has(t.type)) {
							if (this.iframe) {
								const i = t.type === Z.o.EMBED ? t.provider : null;
								i && !Z.s.has(i) ? !s && e || this.toggleEmbedAutoplay(this.iframe, !e) : e || this.pauseEmbed(this.iframe, i)
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
							const s = t ? Z.g.Pause : Z.g.Play;
							e.contentWindow.postMessage({
								context: fe,
								method: s
							}, M.a), e.contentWindow.postMessage({
								context: fe,
								method: Z.g.Mute
							}, M.a)
						}
					}, this.pauseEmbed = (e, t) => {
						e.contentWindow && (t === Z.v.YouTube ? e.contentWindow.postMessage(JSON.stringify({
							event: "command",
							func: Z.A.Pause
						}), M.a) : e.contentWindow.postMessage({
							context: fe,
							method: Z.g.Pause
						}, M.a))
					}, this.onIframeLoaded = () => {
						const {
							media: e
						} = this.props.post, {
							autoplayPref: t
						} = this.props, s = e && e.type === Z.o.EMBED ? e.provider : null;
						if (this.iframe && s && !Z.s.has(s)) {
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
					}, this.isSpoiler = () => this.props.post.isSpoiler || !(!this.props.crosspost || !this.props.crosspost.isSpoiler), this.isNSFW = () => this.props.post.isNSFW || !(!this.props.crosspost || !this.props.crosspost.isNSFW), this.handlePostMediaClick = e => {
						this.props.isBlockingInterstitialEnabled && (e.preventDefault(), this.props.openPostLink(this.props.post))
					}, this.state = {
						canLoadContent: e.shouldLoad || !1,
						forcePause: !1,
						isRevealed: !1,
						shouldPause: void 0 === e.shouldPause || e.shouldPause,
						shouldStop: void 0 === e.shouldStop || e.shouldStop,
						viewportHeight: Z.e,
						viewportWidth: Z.f
					}
				}
				UNSAFE_componentWillMount() {
					"undefined" != typeof window && (this.updateDimensions(), window.addEventListener("resize", this.updateDimensions))
				}
				componentDidMount() {
					Oe(this.props.post) && (this.visibilityChangeSubscriptionId = w.a.subscribe(e => {
						this.handleVisibilityChange(e)
					})), this.props.scrollerItemRef && Ce(this.props) && this.props.scrollerItemRef(this, this.state.canLoadContent)
				}
				componentWillUnmount() {
					this.visibilityChangeSubscriptionId && w.a.unsubscribe(this.visibilityChangeSubscriptionId), this.props.scrollerItemRef && Ce(this.props) && this.props.scrollerItemRef(void 0), window.removeEventListener("resize", this.updateDimensions)
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
					let a = "";
					return i && (a += i), t && e ? a += `${be}${t}` : s.title && (a += `${be}${s.title}`), a.length > pe ? Object(I.a)(a, pe, f.ib) : a
				}
				getVideoExpandoMaxDimensions() {
					let e, t = Math.max(Z.j, this.state.viewportHeight),
						s = Math.min(ge, 16 * t / 9);
					s === ge && (t = 9 * ge / 16), e = this.state.viewportWidth >= G.c ? this.state.viewportWidth < F.l ? this.state.viewportWidth - Ee - 2 * xe : this.state.viewportWidth - Ee - F.e - 2 * xe : this.state.viewportWidth - 2 * xe;
					const i = this.state.viewportHeight - 2 * xe;
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
					let s = Z.j,
						i = Z.n;
					return e.isExpando ? this.getVideoExpandoMaxDimensions() : (e.isPromotedTrend && (s = Z.t, i = Z.u), {
						maxVideoHeight: s,
						maxVideoWidth: i
					})
				}
				getMediaInfo(e, t = this.state) {
					const {
						availableWidth: s,
						isListing: i,
						post: n
					} = e;
					if (Object(Z.H)(n.media)) return {
						source: n.media.scrubberThumbSource,
						width: this.state.viewportWidth - 2 * xe,
						height: this.state.viewportHeight - 2 * xe
					};
					const a = n.media && n.media.obfuscated || "";
					let o = !n.media || Object(Z.N)(n.media) || Object(Z.G)(n.media) || Object(Z.E)(n.media) ? "" : n.media.content,
						[r, d] = !n.media || Object(Z.K)(n.media) || Object(Z.M)(n.media) || Object(Z.E)(n.media) ? [0, 0] : [n.media.height, n.media.width];
					if (s && n.media && Object(Z.E)(n.media)) {
						r = Object(z.b)(n.media.mediaMetadata || {}, Object(z.c)(i), Z.p, s) + Z.i, d = s
					}
					if (s && n.media && (n.media.type === Z.o.IMAGE || n.media.type === Z.o.GIFVIDEO)) {
						const e = de.b(s, n.media.resolutions);
						e && (o = e.url, d = e.width, r = e.height)
					} else if (n && n.media && (!e.isListing || e.isExpando) && (n.media.type === Z.o.IMAGE || n.media.type === Z.o.GIFVIDEO)) {
						let e;
						(e = Object(Z.L)(n.media.height, n.media.width) && Object(_.b)(n.media.height) ? de.c(n.media.height, n.media.width, n.media.resolutions) : de.a(n.media.resolutions)) && (o = e.url, d = e.width, r = e.height)
					}
					if (e.isExpando)
						if (d > t.viewportWidth) {
							r *= t.viewportWidth / d, d = t.viewportWidth
						} else if (r > t.viewportHeight) {
						const e = t.viewportHeight / r;
						r = t.viewportHeight, d *= e
					}
					const {
						maxVideoHeight: l,
						maxVideoWidth: c
					} = this.getVideoMaxDimensions(e, t);
					if (n.media && n.media.type === Z.o.VIDEO) {
						const t = r / d;
						e.isExpando ? (r = l, d = c) : t > Z.c ? (r = l, d = Math.min(Math.max(l / t, Z.r), c)) : (r = Math.min(Math.max(c * t, Z.q), l), d = c)
					}
					n.media && n.media.type === Z.o.EMBED && e.isExpando && n.media.provider !== Z.v.Twitter && (r = l, d = c);
					let u = !1;
					if (e.isMiniCard) {
						const e = r / d;
						u = Math.abs(e - Z.c) > .01
					}
					return {
						source: o,
						obfuscated: a,
						width: d,
						height: r,
						needsBackgroundBlur: u
					}
				}
				shouldBlur() {
					const {
						isExpando: e,
						isOverlay: t,
						theme: s
					} = this.props, i = this.isNSFW(), n = this.isSpoiler();
					return !(e || this.state.isRevealed || t) && (i && !s.subredditContext.shouldShowNSFWContent || n)
				}
				render() {
					var e;
					const {
						autoplayPref: t,
						className: s,
						crosspost: i,
						fireAdPixelsOfType: n,
						flairStyleTemplate: a,
						forceAspectRatio: o,
						isCommentsPage: r,
						isExpando: d,
						isGalleryTileLayout: c,
						isListing: m,
						isMediumHeight: h,
						isNotCardView: p,
						isTitleOnly: b,
						openPost: x,
						post: f,
						showCentered: E,
						showFull: O = !1,
						showPromotedCTA: w,
						subredditOrProfileDisplayText: I,
						currentUserId: S
					} = this.props, {
						canLoadContent: L,
						forcePause: M,
						shouldPause: F,
						shouldStop: G,
						viewportWidth: K
					} = this.state;
					if (!f.media) return null;
					const J = M || F,
						ee = G,
						{
							source: te,
							obfuscated: se,
							height: ie,
							width: ne,
							needsBackgroundBlur: ae
						} = this.getMediaInfo(this.props, this.state),
						re = {
							showCentered: E,
							isListing: m,
							showFull: O,
							height: ie,
							width: ne
						},
						de = {
							...re,
							className: s,
							forceAspectRatio: o,
							viewportWidth: K
						},
						le = this.shouldBlur(),
						pe = !((null === (e = f.pollData) || void 0 === e ? void 0 : e.isPrediction) && !r),
						be = !(!f.isSponsored || !f.source),
						ge = Object(oe.tb)() || "",
						fe = f.isSponsored ? Object(W.b)(f.id, {
							fireAdPixelsOfType: n,
							openPost: x
						}) : l.a,
						Ee = e => {
							fe && fe(e, this.props.post, this.props.basePixelMetadata, void 0, this.props.pageType)
						};
					if (se && le) return u.a.createElement(D.a, ue({}, de, {
						blurSrc: se
					}), u.a.createElement(ve, {
						isVisible: L
					}, u.a.createElement(_.a, ue({}, re, {
						altText: this.getAltText(),
						className: this.props.imageBoxClassName,
						contentImageClassName: this.props.imageBoxContentImageClassName,
						imageClassName: this.props.imageBoxClassName,
						isListing: m,
						isNSFW: this.isNSFW(),
						isSpoiler: this.isSpoiler(),
						isVideoThumbnail: !!f.media && f.media.type === Z.o.VIDEO,
						onClick: this.onClickRevealBlurred,
						postId: f.id,
						shouldBlur: le,
						source: se,
						outboundUrl: be && f.source.outboundUrl || void 0,
						originalSource: te,
						onPostMediaClick: this.handlePostMediaClick
					}))));
					if (!f.media) return null;
					switch (f.media.type) {
						case Z.o.RTJSON:
							const e = Object(Y.a)(f, null);
							if (null === e) return null;
							if (!O && !Object($.a)(f)) return null;
							const n = f.isMeta ? Object(X.a)(e, f.id) : e;
							return u.a.createElement(u.a.Fragment, null, pe && u.a.createElement(k.a, {
								canLoadContent: L,
								className: s,
								"data-click-id": "text",
								isCommentsPage: r,
								isExpando: d,
								isMediumHeight: h,
								isRichTextTruncated: f.media.isRichtextPreview,
								isTitleOnly: b,
								postId: f.id,
								showFull: O
							}, u.a.createElement(U.a, {
								altText: this.getAltText(),
								content: n,
								flairStyleTemplate: a,
								isListing: m,
								isNSFW: this.isNSFW(),
								isSpoiler: this.isSpoiler(),
								mediaMetadata: f.media.mediaMetadata,
								onClickRevealBlurred: this.onClickRevealBlurred,
								postId: f.id,
								rtJsonElementProps: Le(this.props),
								renderMediaAsLinks: m,
								shouldBlur: le
							}), u.a.createElement(T.b, {
								content: n
							})), u.a.createElement(R.a, {
								postId: f.id,
								isCommentsPage: !!r
							}));
						case Z.o.TEXT:
							if (Object(q.a)(f)) {
								const e = "Text post should not include body content";
								return C.c.withScope(t => {
									t.setExtra("info", {
										post: f,
										isListing: m,
										isCommentsPage: r
									}), C.c.captureMessage(e)
								}), Object(v.a)() && console.log(`${f.id}: ${e}`), u.a.createElement(u.a.Fragment, null, pe && u.a.createElement(k.a, {
									postId: f.id,
									className: s,
									"data-click-id": "text",
									isCommentsPage: r,
									showFull: O
								}, u.a.createElement(H.a, {
									flairStyleTemplate: a,
									html: f.isMeta ? Object(Q.a)(f.media.content, f.id, ce.a.hiddenLink) : f.media.content
								})), u.a.createElement(R.a, {
									postId: f.id,
									isCommentsPage: !!r
								}))
							}
							return u.a.createElement(R.a, {
								postId: f.id,
								isCommentsPage: !!r
							});
						case Z.o.EMBED:
							return this.props.isMiniCard && f.preview && f.preview.url ? u.a.createElement(D.a, ue({}, de, {
								alwaysWrapMedia: !0
							}), u.a.createElement(ve, {
								isVisible: L
							}, u.a.createElement(u.a.Fragment, null, u.a.createElement(_.a, ue({}, re, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: d,
								isListing: m,
								isNSFW: this.isNSFW(),
								isCrosspost: !!i,
								isSpoiler: this.isSpoiler(),
								postId: f.id,
								shouldBlur: le,
								source: f.isSurveyAd ? Object(g.a)(S, f.impressionId) : f.preview.url,
								originalSource: f.preview.url,
								onPostMediaClick: this.handlePostMediaClick
							})), u.a.createElement(B.a, null)))) : Z.h.has(f.media.provider) ? f.media.provider === Z.v.Twitter ? u.a.createElement(A.a, {
								canLoadContent: L,
								embedBoxChildRef: this.storeChildRef,
								mediaContainerProps: de,
								onIframeLoaded: this.onIframeLoaded,
								source: te,
								title: f.title,
								postId: f.id
							}) : u.a.createElement(D.a, ue({}, de, {
								alwaysWrapMedia: !0,
								height: d ? ie : Z.j,
								width: d ? ne : Z.j * (16 / 9)
							}), L && u.a.createElement(N.a, {
								childRef: this.storeChildRef,
								height: d ? ie : Z.j,
								width: d ? ne : void 0,
								isListing: m,
								isResponsive: !0,
								onLoad: this.onIframeLoaded,
								showCentered: E,
								showFull: O,
								source: f.isSurveyAd ? Object(g.a)(S, f.impressionId) : te,
								title: f.title
							})) : u.a.createElement(D.a, ue({}, de, {
								alwaysWrapMedia: !0
							}), L && u.a.createElement(N.a, ue({}, re, {
								isResponsive: d || f.media.provider === Z.v.IFrameEmbed,
								title: f.title,
								childRef: this.storeChildRef,
								onLoad: this.onIframeLoaded,
								source: f.isSurveyAd ? Object(g.a)(S, f.impressionId) : te,
								fullWidth: f.media.provider === Z.v.IFrameEmbed
							})));
						case Z.o.GIFVIDEO: {
							let e = ie,
								t = ne;
							return e > Z.j && (t = ne / ie * (e = Z.j)), u.a.createElement(D.a, ue({}, de, {
								blurSrc: ae ? f.media.gifBackgroundImage : void 0
							}), u.a.createElement(ve, {
								isVisible: L
							}, u.a.createElement(V.a, ue({}, re, {
								isNotCardView: p,
								height: d ? void 0 : e,
								width: d ? void 0 : t,
								postId: f.id,
								shouldLoad: !0,
								shouldPause: m && J,
								source: te,
								originalSource: f.media.content
							}))))
						}
						case Z.o.VIDEO: {
							const e = f.media.posterUrl || f.preview && f.preview.url;
							if (this.props.isMiniCard && e) return u.a.createElement(D.a, ue({}, de, {
								alwaysWrapMedia: !0
							}), u.a.createElement(ve, {
								isVisible: L
							}, u.a.createElement(u.a.Fragment, null, u.a.createElement(_.a, ue({}, re, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: d,
								isListing: m,
								isNSFW: this.isNSFW(),
								isCrosspost: !!i,
								isSpoiler: this.isSpoiler(),
								postId: f.id,
								shouldBlur: le,
								source: e,
								originalSource: e,
								onPostMediaClick: this.handlePostMediaClick
							})), u.a.createElement(B.a, null))));
							const s = u.a.createElement(D.a, ue({}, de, {
								alwaysWrapMedia: !0,
								isVideo: !0
							}), L && u.a.createElement(he, {
								autoPlay: t && !1 === F,
								isExpando: d,
								shouldLoad: !0,
								shouldPause: J,
								shouldStop: ee,
								hlsSource: f.media.hlsUrl,
								mpegDashSource: f.media.dashUrl,
								isGif: f.media.isGif,
								scrubberThumbSource: f.media.scrubberThumbSource,
								postId: f.id,
								isSponsored: f.isSponsored,
								onAdPostClick: Ee,
								callToActionSource: f.source || void 0,
								callToActionText: f.callToAction,
								isListing: m,
								posterUrl: f.media.posterUrl,
								muxVideoDuration: void 0,
								muxVideoId: f.id,
								muxVideoIsLive: !1,
								muxVideoTitle: f.title,
								sessionId: ge
							}));
							return f.isSponsored ? u.a.createElement(j.a, {
								post: f,
								trackVideo: !0
							}, s) : s
						}
						case Z.o.LIVEVIDEO:
							return u.a.createElement(ve, {
								isVisible: L
							}, u.a.createElement(me, {
								className: this.props.isMiniCard ? ce.a.miniCardVideo : void 0,
								canLoad: L,
								postId: f.id,
								postTitle: f.title,
								shouldPause: J || ee,
								url: f.media.hlsUrl
							}));
						case Z.o.IMAGE:
							const o = this.state.viewportHeight - 2 * xe,
								l = this.state.viewportWidth - 2 * xe;
							let x = te;
							return this.props.isMiniCard && !this.props.isMiniCardHQPreviews && (f.thumbnail && Object(y.a)(f.thumbnail.url) ? x = f.thumbnail.url : f.preview && Object(y.a)(f.preview.url) && (x = f.preview.url)), u.a.createElement(D.a, ue({}, de, {
								blurSrc: ae ? x : void 0,
								isExpando: !!d
							}), u.a.createElement(ve, {
								isVisible: L
							}, u.a.createElement(_.a, ue({}, re, {
								altText: this.getAltText(),
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: d,
								isListing: m,
								isNSFW: this.isNSFW(),
								isCrosspost: !!i,
								isSpoiler: this.isSpoiler(),
								maxHeight: d ? o : void 0,
								maxWidth: d ? l : void 0,
								postId: f.id,
								shouldBlur: le,
								source: x,
								outboundUrl: be && f.source.outboundUrl || void 0,
								isSponsored: f.isSponsored,
								originalSource: f.media.content,
								onPostMediaClick: this.handlePostMediaClick
							}))));
						case Z.o.GALLERY:
							const M = Object(z.b)(f.media.mediaMetadata || {}, Object(z.c)(m), Z.p, ne),
								W = Object(z.a)(f.media.gallery, f.isSponsored);
							return u.a.createElement(D.a, ue({}, de, {
								blurSrc: ae ? te : void 0,
								isExpando: !!d,
								maxGalleryHeight: M + W,
								className: ce.a.galleryMediaContainer,
								isGalleryTileLayout: c
							}), u.a.createElement(ve, {
								isVisible: L
							}, u.a.createElement(P.a, {
								post: f,
								postId: f.id,
								postTitle: f.title,
								subredditName: I,
								galleryItems: f.media.gallery ? f.media.gallery.items : [],
								mediaMetadata: f.media.mediaMetadata || {},
								imageHeight: M,
								captionHeight: W,
								isSponsored: f.isSponsored,
								showPromotedCTA: !!w,
								className: this.props.imageBoxClassName,
								isListing: m,
								isNSFW: this.isNSFW(),
								isSpoiler: this.isSpoiler(),
								shouldBlur: le,
								onClickRevealBlurred: this.onClickRevealBlurred,
								isTileLayout: !!c,
								shouldShowTileLayoutOption: this.props.shouldShowGalleryTileOption,
								isVisible: L
							})));
						default:
							return null
					}
				}
			}
			const Ne = Ie(Te(Object(p.a)(Object(E.a)(Me))))
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
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				o = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = s("./src/reddit/helpers/styles/smartTextColor.ts"),
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
			t.a = Object(a.a)(({
				flairStyleTemplate: e,
				...t
			}) => n.a.createElement(d.a, l({
				style: {
					color: Object(r.a)(Object(o.a)({
						flairStyleTemplate: e,
						...t
					}))
				}
			}, t)))
		},
		"./src/reddit/helpers/canPreviewSelfText/index.ts": function(e, t, s) {
			"use strict";
			var i = s("./src/reddit/helpers/postHasSelfText/index.ts");
			t.a = e => (Object(i.a)(e) || !!e.pollData) && !e.isSpoiler && !e.isNSFW
		},
		"./src/reddit/helpers/mediaGallery/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return o
			})), s.d(t, "h", (function() {
				return r
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
				a = s("./src/reddit/models/Media/index.ts");

			function o(e, t) {
				const s = t.sort((e, t) => e.y - t.y),
					i = s.find(t => t.y > e);
				if (i) return i;
				const n = s.pop();
				return n || null
			}

			function r(e) {
				const t = u(e),
					s = t.every(e => e.y > e.x),
					i = t.every(e => e.x > e.y);
				return !s && !i
			}

			function d(e, t, s) {
				const i = u(e);
				if (p(i, t)) return !0;
				const n = m(i).y;
				return !n || n < s
			}
			const l = e => e ? a.j : a.e;

			function c(e, t, s, i) {
				const n = u(e);
				if (p(n, t)) return t;
				const a = m(n);
				let o = a.y;
				return !o || o < s ? s : (i > 0 && (o = i * o / a.x), o > t ? t : o)
			}
			const u = e => Object.entries(e).reduce((e, [t, s]) => (s && s.s && e.push(s.s), e), []),
				m = e => e.reduce((e, t) => h(e, t), e && e[0] || []),
				h = (e, t) => {
					const s = e.x / e.y + .005,
						i = e.x / e.y - .005;
					return t.x / t.y > s ? t : t.x / t.y > i ? e.y > t.y ? e : t : e
				},
				p = (e, t) => e.some(e => e.y > t && Object(a.L)(e.y, e.x));

			function b(e, t) {
				return e && e.items && !t && e.items.some(e => void 0 !== e.caption || void 0 !== e.outboundUrl) ? a.i : 0
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
						for (const a of t)
							if ("link" === a.e && a.u && a.u.includes(`https://www.reddit.com/poll/${s}`)) i = !0;
							else if (a.c && "string" != typeof a.c) {
							const t = e(a.c, s);
							t.found ? (i = !0, ("par" !== a.e || t.updated.length) && n.push({
								...a,
								c: t.updated
							})) : n.push(a)
						} else n.push(a)
					} catch (a) {
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
				a = s("./src/reddit/selectors/media.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			const r = (e, t, s) => ({
					gallery: o.s(e, t, s),
					post: o.I(e, t),
					...o.o(e)
				}),
				d = (e, t) => s => ({
					...r(s, e, t),
					action: i.c.VIEW,
					noun: "media",
					source: "gallery",
					media: o.B(s, e)
				}),
				l = (e, t) => s => {
					const d = Object(n.a)(t),
						l = Object(a.b)(s, e) + 1;
					return {
						...r(s, e, l),
						action: i.c.CLICK,
						noun: "outbound_url",
						source: "gallery",
						media: {
							...o.B(s, e),
							outboundUrl: t,
							outboundDomain: d ? d.hostname : void 0
						}
					}
				},
				c = (e, t) => m(e, !0, t),
				u = (e, t) => m(e, !1, t),
				m = (e, t, s) => n => ({
					...r(n, e, s),
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab.af55313c8481847dd4c0.js.map