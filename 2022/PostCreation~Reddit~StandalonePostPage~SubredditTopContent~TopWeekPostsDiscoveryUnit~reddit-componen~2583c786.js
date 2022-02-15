// https://www.redditstatic.com/desktop2x/PostCreation~Reddit~StandalonePostPage~SubredditTopContent~TopWeekPostsDiscoveryUnit~reddit-componen~2583c786.1cc84f65074a696c0941.js
// Retrieved at 2/15/2022, 6:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PostCreation~Reddit~StandalonePostPage~SubredditTopContent~TopWeekPostsDiscoveryUnit~reddit-componen~2583c786"], {
		"./src/higherOrderComponents/withClickTracking/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				o = s("./src/reddit/components/TrackingHelper/index.tsx"),
				a = s("./src/reddit/selectors/telemetry.ts");

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
				const o = m(n.target, n.currentTarget),
					r = h(n.target, n.currentTarget);
				o && s && t && (u(n.target, n.currentTarget, c.anchors) ? s(t(e, o, r)) : s(s => {
					const i = t(e, o, r)(s);
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
						actionInfo: Object(a.R)(s, n)
					}
				})), u(n.target, n.currentTarget, c.anchorsAndButtons) && i(n)
			};

			function l(e) {
				const t = t => {
					const {
						sendEvent: s,
						eventFactory: o,
						clickTrackingId: a,
						...l
					} = t, c = Object(i.useCallback)(d(a, o, s), [a, o, s]);
					return n.a.createElement(e, r({}, l, {
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
				h = (e, t) => "true" === e.dataset.ignoreClick || e !== t && (!!e.parentElement && h(e.parentElement, t))
		},
		"./src/higherOrderComponents/withMux/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/cache/localStorage/index.ts"),
				d = s("./src/lib/combineRefs/index.tsx"),
				l = s("./src/lib/loadWithRetries/index.ts"),
				c = () => Object(l.a)(() => s.e("MuxEmbed").then(s.t.bind(null, "./node_modules/mux-embed/dist/mux.js", 7))),
				u = s("./src/reddit/constants/experiments.ts"),
				m = s("./src/reddit/helpers/chooseVariant/index.ts");
			const h = Object(a.a)(e => {
				const t = Object(m.c)(e, {
					experimentEligibilitySelector: m.a,
					experimentName: u.Kd
				});
				return Object(u.tf)(t) ? void 0 : t
			}, e => {
				const t = Object(m.c)(e, {
					experimentEligibilitySelector: m.a,
					experimentName: u.Ld
				});
				return Object(u.tf)(t) ? void 0 : t
			}, (e, t) => e === u.Od.Enabled && t === u.Od.Enabled);
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
					playerVersion: T,
					respectDoNotTrack: I,
					saltLength: S,
					saltTimeToLive: j,
					viewerUserIdLength: L
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
						let t = Object(r.a)(e);
						return t || (t = g(N.SALT_LENGTH), Object(r.b)(e, t, N.SALT_TIME_TO_LIVE)), t
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
							player_software_version: this.getDashInstanceData() ? p.a.dashVersion : this.getHlsInstanceData() ? p.a.hlsVersion : null
						}
					}
				}
				N.displayName = O(e), N.ANONYMOUS_USER_ID = s, N.DEBUG = l, N.DISABLE_COOKIES = u, N.DURATION_LIVE = 1 / 0, N.ENV_KEY = m, N.LOCAL_STORAGE_SALT_KEY = f, N.LOCAL_STORAGE_VIEWER_USER_ID_KEY = E, N.PLAYER_NAME = C, N.PLAYER_VERSION = T, N.RESPECT_DO_NOT_TRACK = I, N.SALT_LENGTH = S, N.SALT_TIME_TO_LIVE = j, N.STREAM_TYPE_LIVE = "live", N.STREAM_TYPE_ON_DEMAND = "on-demand", N.VIEWER_USER_ID_LENGTH = L;
				const M = Object(i.forwardRef)((e, t) => n.a.createElement(N, y({}, e, {
						forwardedRef: t
					}))),
					P = Object(a.c)({
						redditUserId: b.i,
						isMuxEnabled: h
					});
				return Object(o.b)(P, null, null, {
					forwardRef: !0
				})(M)
			}
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
				importAsync: () => Promise.all([s.e("EconHelperActions~index~reddit-components-Econ-Prediction"), s.e("index~reddit-components-Econ-Prediction"), s.e("reddit-components-Econ-Prediction")]).then(s.bind(null, "./src/reddit/components/Econ/Prediction/index.tsx")),
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
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/hooks/useIntersectionObserver.ts"),
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
				T = s("./src/reddit/components/Media/GalleryBox/index.m.less"),
				I = s.n(T);
			const {
				fbt: S
			} = s("./node_modules/fbt/lib/FbtPublic.js"), j = e => {
				const {
					displayImage: t,
					style: s,
					showSeeMore: i,
					isReadyToShow: o,
					imgAltText: a
				} = e, d = "u" in t ? t.u : t.gif;
				return n.a.createElement("div", {
					className: Object(r.a)({
						[I.a.slideImageMainDiv]: !i
					})
				}, o && n.a.createElement("img", {
					src: d,
					alt: a,
					className: I.a.slideImage,
					style: s
				}), i && n.a.createElement("div", {
					className: I.a.seeMore
				}, S._("see full image", null, {
					hk: "1Qygw5"
				})))
			}, L = e => {
				const {
					slideIndex: t,
					currentIndex: s,
					obfuscatedImage: i,
					optimalImage: o,
					originalImage: a,
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
				}, g = Object(O.c)(l), x = a.y > g && Object(w.L)(a.y, a.x), f = x ? {} : {
					maxHeight: "100%"
				};
				let v;
				return v = i || (x ? a : "gif" in a ? a : o), n.a.createElement("li", {
					style: b,
					className: I.a.slide
				}, n.a.createElement("figure", {
					className: Object(r.a)({
						[I.a.tallImage]: x,
						[I.a.commonImage]: !x
					}, I.a.figure)
				}, l || m ? n.a.createElement(j, {
					displayImage: v,
					style: f,
					showSeeMore: x,
					isReadyToShow: h,
					imgAltText: d
				}) : n.a.createElement("a", {
					href: "u" in a ? a.u : a.gif,
					rel: "noopener noreferrer",
					target: "_blank",
					className: Object(r.a)({
						[I.a.tallImage]: x,
						[I.a.commonImage]: !x
					}, I.a.imageLink)
				}, n.a.createElement(j, {
					displayImage: v,
					style: f,
					showSeeMore: x,
					isReadyToShow: h,
					imgAltText: d
				}), p && n.a.createElement(E.a, {
					isNSFW: !!c,
					isSpoiler: !!u
				}))))
			}, N = e => n.a.createElement("a", {
				className: Object(r.a)(e.className, I.a.navigationUnderlay, {
					[I.a.hasMoreSlides]: e.hasMoreSlides
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
				className: Object(r.a)(e.iconClassName, I.a.icon)
			}, n.a.createElement(p.a, {
				className: I.a.iconImage
			}))), M = e => n.a.createElement("div", {
				className: I.a.imageMetaData,
				style: {
					height: e.captionHeight,
					justifyContent: e.caption ? "space-between" : "flex-end"
				}
			}, e.caption && n.a.createElement("span", {
				className: I.a.imageCaption,
				title: e.caption
			}, e.caption), e.outboundUrl && n.a.createElement("span", {
				className: I.a.imageUrl
			}, n.a.createElement("a", {
				className: I.a.outboundUrlWrapper,
				href: e.outboundUrl,
				onClick: e.onClickEvent,
				rel: "noopener noreferrer",
				target: "'_blank'"
			}, n.a.createElement("span", {
				className: I.a.urlText
			}, Object(O.e)(e.outboundUrl)), n.a.createElement(b.a, {
				className: I.a.linkIcon
			})))), P = e => n.a.createElement("div", {
				className: I.a.slideIndicator,
				onClick: e.toggleTileLayout ? t => {
					t.preventDefault(), t.stopPropagation(), e.toggleTileLayout()
				} : void 0
			}, e.toggleTileLayout && n.a.createElement(g.a, {
				className: I.a.tileIcon
			}), e.currentSlide, "/", e.totalSlides), _ = (e, t = 4) => {
				let s = e - t;
				return s < 0 && (s = 0), s
			}, k = (e, t, s = 4) => {
				let i = e + s;
				return i > t - 1 && (i = t - 1), i
			};
			t.a = e => {
				const t = Object(o.d)(),
					{
						captionHeight: s,
						galleryItems: p,
						imageHeight: b,
						isListing: g,
						isSponsored: T,
						isTileLayout: S,
						mediaMetadata: j = {},
						post: R,
						postId: D,
						postTitle: A,
						shouldShowTileLayoutOption: V,
						showPromotedCTA: B,
						subredditName: W,
						isVisible: H
					} = e,
					F = Object(o.e)(e => Object(C.b)(e, D)),
					U = F > 0,
					G = F < p.length - 1,
					K = Object(h.a)(),
					Y = Object(i.useRef)(null),
					z = Object(i.useRef)(null),
					[J, $] = Object(i.useState)(H ? F : -1),
					[q, Q] = Object(i.useState)(H ? F : -1),
					X = Object(l.a)(H),
					Z = Object(l.a)(F);
				Object(i.useEffect)(() => {
					(void 0 !== X && X !== H && H && J < 0 && q < 0 || void 0 !== Z && Z !== F && H && (J > F || q < F)) && ($(_(F, 1)), Q(k(F, p.length, 1)))
				}, [X, F, H, J, q, Z, p.length, D]);
				const ee = Object(i.useRef)(),
					te = Object(i.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t
							} = e;
							t ? (J < 0 || q - J == 0) && (ee.current = setTimeout(() => {
								const e = k(q, p.length);
								e !== q && Q(e)
							}, 1e3)) : (J < 0 || q - J == 0) && clearTimeout(ee.current)
						})
					}, [J, q, p.length]);
				Object(a.a)(z, te);
				const se = Object(i.useCallback)(e => {
						t(Object(x.f)({
							postId: D,
							index: e
						}))
					}, [t, D]),
					ie = Object(i.useCallback)(e => {
						t(Object(f.z)(R, v.a.GalleryItemImpression, `Slide${e}`))
					}, [t, R]),
					ne = Object(i.useCallback)(() => {
						t(Object(x.i)({
							postId: D,
							isTileLayout: !S
						}))
					}, [t, D, S]),
					oe = Object(i.useCallback)(() => {
						if (!G) return;
						const e = F + 1;
						if (e + 1 >= q) {
							const e = k(q, p.length);
							e !== q && Q(e)
						}
						se(e), K(u.b(D, e)), K(u.d(D, e + 1)), ie(e)
					}, [G, F, ie, se, K, D, q, p.length]),
					ae = Object(i.useCallback)(() => {
						if (!U) return;
						const e = F - 1;
						if (e - 1 <= J) {
							const e = _(J);
							e !== J && $(e)
						}
						const t = F + 1;
						se(e), K(u.a(D, t)), K(u.d(D, t - 1)), ie(e)
					}, [U, F, ie, se, K, D, J]),
					re = Object(i.useCallback)(() => {
						const e = p[F] && p[F].outboundUrl;
						e && K(u.c(D, e))
					}, [K, D, F, p]);
				m(y.a.ArrowLeft, Y.current, ae), m(y.a.ArrowRight, Y.current, oe);
				const de = p[F] && p[F].caption,
					le = p[F] && p[F].outboundUrl,
					ce = ((e, t, s) => {
						const i = Object(O.f)(e),
							n = Object(O.g)(i),
							o = n.x / n.y < 1,
							a = Object(O.h)(e),
							r = Object(O.i)(e || {}, Object(O.c)(s), w.p);
						return s || r || a || o ? {
							height: t
						} : {
							paddingBottom: `${Object(w.B)(n.y,n.x)}%`
						}
					})(j, b, g);
				return n.a.createElement("div", {
					className: Object(r.a)(I.a.outerContainer),
					ref: Y,
					tabIndex: 0
				}, S ? n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
					className: Object(r.a)(I.a.tilesWrapper, {
						[I.a.blurredContent]: e.shouldBlur
					}),
					onClick: e.onClickRevealBlurred
				}, p.map((t, s) => {
					const i = t.mediaId,
						o = j && j[i];
					if (!o || !o.s) return null;
					const a = [...o && o.s ? [o.s] : [], ...o && o.p ? o.p : []],
						r = Object(O.d)(w.y, a);
					if (!r) return null;
					const d = o.s;
					return n.a.createElement("div", {
						style: {
							backgroundImage: `url(${"gif"in d?d.gif:"u"in r&&r.u})`
						},
						className: I.a.tileImage,
						onClick: e.shouldBlur ? void 0 : e => {
							e.preventDefault(), e.stopPropagation(), ne(), se(s)
						},
						key: i
					})
				}), [1, 2, 3].map(e => n.a.createElement("div", {
					key: e,
					className: I.a.tilePlaceholder
				}))), e.shouldBlur && n.a.createElement(E.a, {
					isNSFW: !!e.isNSFW,
					isSpoiler: !!e.isSpoiler
				})) : n.a.createElement("div", {
					className: I.a.slideshowContainer,
					tabIndex: -1,
					ref: z,
					onClick: e.onClickRevealBlurred,
					style: ce
				}, n.a.createElement("div", {
					className: I.a.imagesWrapper
				}, n.a.createElement("ul", {
					className: I.a.slideWrapper
				}, p.map((t, s) => {
					const i = t.mediaId,
						o = j && j[i];
					if (!o || !o.s) return null;
					const a = t.caption ? t.caption : A,
						r = Object(c.a)(W ? `${W} - ${a}` : a, 300, d.ib),
						l = [...o && o.s ? [o.s] : [], ...o && o.p ? o.p : []],
						u = Object(O.d)(b, l);
					if (!u) return null;
					const m = e.shouldBlur && Object(O.d)(b, o.o || []) || void 0,
						h = s >= J && s <= q;
					return n.a.createElement(L, {
						slideIndex: s,
						currentIndex: F,
						obfuscatedImage: m,
						optimalImage: u,
						originalImage: o.s,
						isListing: e.isListing,
						isSponsored: T,
						key: i,
						isReadyToShow: h,
						imgAltText: r,
						shouldBlur: e.shouldBlur,
						isNSFW: e.isNSFW,
						isSpoiler: e.isSpoiler
					})
				})), !e.shouldBlur && n.a.createElement(n.a.Fragment, null, n.a.createElement(N, {
					onClick: ae,
					setFocusTo: z,
					hasMoreSlides: U,
					title: "Previous",
					iconClassName: I.a.prevIcon,
					className: I.a.prevButton
				}), n.a.createElement(N, {
					onClick: oe,
					setFocusTo: z,
					hasMoreSlides: G,
					title: "Next",
					iconClassName: I.a.nextIcon,
					className: I.a.nextButton
				}))), p.length > 1 ? n.a.createElement(P, {
					currentSlide: F + 1,
					totalSlides: p.length,
					toggleTileLayout: V && ne || void 0
				}) : ""), !de && !le || S || B ? !!s && !S && !B && n.a.createElement("div", {
					className: I.a.emptyCaptionBlock,
					style: {
						height: s
					}
				}) : n.a.createElement(M, {
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
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/models/Prediction/index.ts"),
				d = s("./src/reddit/selectors/poll/index.ts"),
				l = s("./src/reddit/components/Econ/Prediction/async.ts"),
				c = s("./src/reddit/components/Poll/async.ts");
			const u = Object(a.c)({
				poll: d.e
			});
			t.a = Object(o.b)(u)(({
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
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/constants/componentSizes.ts"),
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
				g || (E.maxHeight = u ? `${r.m}px` : d ? `${r.l}px` : `${r.k}px`), i && (E.maxWidth = `${a.d}px`);
				const v = l && g;
				return n.a.createElement("div", b({
					className: Object(o.a)(f, s),
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
				o = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
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
				} = e, [T, I] = Object(n.useState)(!1), S = Object(d.a)(t), j = Object(n.useRef)(), {
					height: L,
					isDeleted: N
				} = Object(a.e)(e => e.mediaEmbed[C] || {}), M = N ? E : L || v;

				function P(e) {
					var t;
					T || (null === (t = null == j ? void 0 : j.current) || void 0 === t ? void 0 : t.contentWindow) !== e.source || "tweet-measured" !== e.data.action || I(!0)
				}
				return Object(n.useEffect)(() => (window.addEventListener("message", P), () => {
					j.current && Object(l.b)(j.current), window.removeEventListener("message", P)
				}), []), Object(n.useEffect)(() => {
					!t && S && I(!1)
				}, [S, t]), o.a.createElement(m.a, x({}, s, {
					alwaysWrapMedia: !0,
					height: M,
					showFull: !s.isListing,
					width: f
				}), t && o.a.createElement(o.a.Fragment, null, N && o.a.createElement("p", {
					className: g.a.tweetDeleted
				}, i.fbt._("This Tweet has been deleted.", null, {
					hk: "1LhcOw"
				})), !N && o.a.createElement(o.a.Fragment, null, !T && o.a.createElement("div", {
					className: Object(r.a)(Object(h.a)({
						isLoading: !0
					}), g.a.tweetPlaceholder)
				}), o.a.createElement(u.a, {
					childRef: function(e) {
						j.current = e, e && Object(l.a)(e, (t, s) => {
							e && e.contentWindow && !L && s && e.contentWindow.postMessage("twitter-measure-requested", c.a)
						}), y(e)
					},
					className: Object(r.a)(g.a.tweetEmbedBox, {
						[g.a.isInvisible]: !T
					}),
					height: M,
					isListing: s.isListing,
					isResponsive: !0,
					maxHeight: s.isListing ? p.j : null,
					onLoad: b,
					showCentered: s.showCentered,
					showFull: !0,
					source: O,
					title: w,
					width: f
				}), s.isListing && M > p.j && o.a.createElement("div", {
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
				return o
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "a", (function() {
				return r
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
				a = (e, t, s) => {
					for (let o = 0; o < s.length; o++) {
						const a = s[o];
						if (a.width >= i.e / 2 && n(e, t, a.height, a.width)) return a
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
				return Le
			}));
			var i = s("./node_modules/core-js/modules/web.dom.iterable.js"),
				n = s.n(i),
				o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./node_modules/lodash/debounce.js"),
				r = s.n(a),
				d = s("./node_modules/lodash/noop.js"),
				l = s.n(d),
				c = s("./node_modules/react/index.js"),
				u = s.n(c),
				m = s("./node_modules/react-redux/es/index.js"),
				h = s("./node_modules/reselect/es/index.js"),
				p = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				b = s("./src/higherOrderComponents/withMux/index.tsx"),
				g = s("./src/lib/classNames/index.ts"),
				x = s("./src/lib/constants/index.ts"),
				f = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				E = s("./src/lib/env/index.ts"),
				v = s("./src/lib/isUrl/index.ts"),
				y = s("./src/lib/objectSelector/index.ts"),
				O = s("./src/lib/onFocusAndVisibilityChange/index.ts"),
				w = s("./src/lib/sentry/index.ts"),
				C = s("./src/lib/truncateText/index.ts"),
				T = s("./src/reddit/actions/post.ts"),
				I = s("./src/reddit/components/AdViewability/index.tsx"),
				S = s("./src/reddit/components/Governance/VaultActionLink/async.ts"),
				j = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				L = s("./src/reddit/components/Media/constants.ts"),
				N = s("./src/reddit/components/Media/EmbedBox/index.tsx"),
				M = s("./src/reddit/components/Media/GalleryBox/index.tsx"),
				P = s("./src/reddit/components/Media/ImageBox/index.tsx"),
				_ = s("./src/reddit/components/Media/MediaContainer/index.tsx"),
				k = s("./src/reddit/components/Media/PollContainer/index.tsx"),
				R = s("./src/reddit/components/Media/RichTextContainer/index.tsx"),
				D = s("./src/reddit/components/Media/TwitterEmbed/index.tsx"),
				A = s("./src/reddit/components/Media/VideoBox/index.tsx"),
				V = s("./src/reddit/components/PlayButton/index.tsx"),
				B = s("./src/reddit/components/PostList/index.tsx"),
				W = s("./src/reddit/components/RawHTMLDisplay/Media.tsx"),
				H = s("./src/reddit/components/RichTextJson/index.tsx"),
				F = s("./src/reddit/constants/componentSizes.ts"),
				U = s("./src/reddit/constants/screenWidths.ts"),
				G = s("./src/reddit/contexts/PageLayer/index.tsx"),
				K = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				Y = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				z = s("./src/reddit/helpers/mediaGallery/index.tsx"),
				J = s("./src/reddit/helpers/path/index.ts"),
				$ = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				q = s("./src/reddit/helpers/stripMetaLinks/fromRawHtml.ts"),
				Q = s("./src/reddit/helpers/stripMetaLinks/fromRTJ.ts"),
				X = s("./src/reddit/models/Media/index.ts"),
				Z = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				ee = s("./src/reddit/selectors/experiments/postSeo.ts"),
				te = s("./src/reddit/selectors/media.ts"),
				se = s("./src/reddit/selectors/postCreations.ts"),
				ie = s("./src/reddit/selectors/posts.ts"),
				ne = s("./src/reddit/selectors/seo/index.ts"),
				oe = s("./src/reddit/selectors/telemetry.ts"),
				ae = s("./src/reddit/components/Media/getResolution.ts"),
				re = s("./src/reddit/components/Media/index.m.less"),
				de = s.n(re);

			function le() {
				return (le = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const ce = Object(o.a)({
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
				ue = Object(b.a)(j.b, {
					playerName: "Reddit Player"
				}),
				me = 300,
				he = " - ",
				pe = 1200,
				be = 75,
				ge = "player.js",
				xe = F.r + F.q,
				fe = e => u.a.createElement("div", {
					className: Object(g.a)(de.a.visibilityWrapper, {
						[de.a.displayNone]: !e.isVisible
					})
				}, e.children),
				Ee = new Set([X.o.EMBED, X.o.LIVEVIDEO, X.o.VIDEO, X.o.GIFVIDEO]),
				ve = e => !!e.media && Ee.has(e.media.type),
				ye = new Set([X.o.EMBED, X.o.GALLERY, X.o.GIFVIDEO, X.o.IMAGE, X.o.LIVEVIDEO, X.o.VIDEO]),
				Oe = ({
					post: e
				}) => !!e.media && ye.has(e.media.type),
				we = Object(G.u)(),
				Ce = Object(h.c)({
					canUseOCRAltText: (e, t) => Object(ee.b)(e, t.post),
					OCRAltText: (e, {
						post: t
					}) => Object(ee.a)(e, t.id),
					subredditOrProfileDisplayText: (e, t) => Object(ee.i)(e, t),
					subredditOrProfile: (e, {
						post: t
					}) => Object(ie.U)(e, {
						postId: t.id
					}),
					isEditing: (e, {
						post: t
					}) => Object(se.M)(e, {
						postId: t.id
					}),
					shouldShowAltText: (e, t) => Object(ne.d)(e, t),
					isGalleryTileLayout: (e, {
						shouldShowGalleryTileOption: t,
						post: s,
						isGalleryTileLayoutDefault: i
					}) => {
						if (!t) return !1;
						const n = Object(te.c)(e, s.id);
						return !(void 0 !== n || !i) || !!n
					},
					pageType: e => Object(oe.d)(e).pageType,
					basePixelMetadata: (e, {
						post: t
					}) => Object(ie.b)(e, t.id),
					isBlockingInterstitialEnabled: Z.b
				}),
				Te = e => ({
					fireAdPixelsOfType: (t, s) => e(Object(T.z)(t, s)),
					openPost: t => e(Object(T.L)(t)),
					openPostLink: t => e(Object(T.ab)(Object(J.b)(t.permalink), t.id))
				}),
				Ie = Object(m.b)(Ce, Te),
				Se = Object(y.b)(e => ({
					renderingObjectInfo: e.post,
					pageLayer: e.pageLayer
				}));
			class je extends u.a.Component {
				constructor(e) {
					super(e), this.pauseContent = () => {
						this.shouldFocusContentDebouncer(!1)
					}, this.stopContent = () => {
						const {
							media: e
						} = this.props.post;
						if (e && X.d.has(e.type)) {
							if (this.pauseContent(), this.iframe) {
								const t = e.type === X.o.EMBED ? e.provider : null;
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
						return !!e && X.d.has(e.type)
					}, this.shouldFocusContentDebouncer = r()(e => {
						const {
							media: t
						} = this.props.post, {
							autoplayPref: s
						} = this.props;
						if (t && X.d.has(t.type)) {
							if (this.iframe) {
								const i = t.type === X.o.EMBED ? t.provider : null;
								i && !X.s.has(i) ? !s && e || this.toggleEmbedAutoplay(this.iframe, !e) : e || this.pauseEmbed(this.iframe, i)
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
							const s = t ? X.g.Pause : X.g.Play;
							e.contentWindow.postMessage({
								context: ge,
								method: s
							}, L.a), e.contentWindow.postMessage({
								context: ge,
								method: X.g.Mute
							}, L.a)
						}
					}, this.pauseEmbed = (e, t) => {
						e.contentWindow && (t === X.v.YouTube ? e.contentWindow.postMessage(JSON.stringify({
							event: "command",
							func: X.A.Pause
						}), L.a) : e.contentWindow.postMessage({
							context: ge,
							method: X.g.Pause
						}, L.a))
					}, this.onIframeLoaded = () => {
						const {
							media: e
						} = this.props.post, {
							autoplayPref: t
						} = this.props, s = e && e.type === X.o.EMBED ? e.provider : null;
						if (this.iframe && s && !X.s.has(s)) {
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
						viewportHeight: X.e,
						viewportWidth: X.f
					}
				}
				UNSAFE_componentWillMount() {
					"undefined" != typeof window && (this.updateDimensions(), window.addEventListener("resize", this.updateDimensions))
				}
				componentDidMount() {
					ve(this.props.post) && (this.visibilityChangeSubscriptionId = O.a.subscribe(e => {
						this.handleVisibilityChange(e)
					})), this.props.scrollerItemRef && Oe(this.props) && this.props.scrollerItemRef(this, this.state.canLoadContent)
				}
				componentWillUnmount() {
					this.visibilityChangeSubscriptionId && O.a.unsubscribe(this.visibilityChangeSubscriptionId), this.props.scrollerItemRef && Oe(this.props) && this.props.scrollerItemRef(void 0), window.removeEventListener("resize", this.updateDimensions)
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
					return i && (o += i), t && e ? o += `${he}${t}` : s.title && (o += `${he}${s.title}`), o.length > me ? Object(C.a)(o, me, x.ib) : o
				}
				getVideoExpandoMaxDimensions() {
					let e, t = Math.max(X.j, this.state.viewportHeight),
						s = Math.min(pe, 16 * t / 9);
					s === pe && (t = 9 * pe / 16), e = this.state.viewportWidth >= U.c ? this.state.viewportWidth < F.l ? this.state.viewportWidth - xe - 2 * be : this.state.viewportWidth - xe - F.e - 2 * be : this.state.viewportWidth - 2 * be;
					const i = this.state.viewportHeight - 2 * be;
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
					let s = X.j,
						i = X.n;
					return e.isExpando ? this.getVideoExpandoMaxDimensions() : (e.isPromotedTrend && (s = X.t, i = X.u), {
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
					if (Object(X.H)(n.media)) return {
						source: n.media.scrubberThumbSource,
						width: this.state.viewportWidth - 2 * be,
						height: this.state.viewportHeight - 2 * be
					};
					const o = n.media && n.media.obfuscated || "";
					let a = !n.media || Object(X.N)(n.media) || Object(X.G)(n.media) || Object(X.E)(n.media) ? "" : n.media.content,
						[r, d] = !n.media || Object(X.K)(n.media) || Object(X.M)(n.media) || Object(X.E)(n.media) ? [0, 0] : [n.media.height, n.media.width];
					if (s && n.media && Object(X.E)(n.media)) {
						r = Object(z.b)(n.media.mediaMetadata || {}, Object(z.c)(i), X.p, s) + X.i, d = s
					}
					if (s && n.media && (n.media.type === X.o.IMAGE || n.media.type === X.o.GIFVIDEO)) {
						const e = ae.b(s, n.media.resolutions);
						e && (a = e.url, d = e.width, r = e.height)
					} else if (n && n.media && (!e.isListing || e.isExpando) && (n.media.type === X.o.IMAGE || n.media.type === X.o.GIFVIDEO)) {
						let e;
						(e = Object(X.L)(n.media.height, n.media.width) && Object(P.b)(n.media.height) ? ae.c(n.media.height, n.media.width, n.media.resolutions) : ae.a(n.media.resolutions)) && (a = e.url, d = e.width, r = e.height)
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
					if (n.media && n.media.type === X.o.VIDEO) {
						const t = r / d;
						e.isExpando ? (r = l, d = c) : t > X.c ? (r = l, d = Math.min(Math.max(l / t, X.r), c)) : (r = Math.min(Math.max(c * t, X.q), l), d = c)
					}
					n.media && n.media.type === X.o.EMBED && e.isExpando && n.media.provider !== X.v.Twitter && (r = l, d = c);
					let u = !1;
					if (e.isMiniCard) {
						const e = r / d;
						u = Math.abs(e - X.c) > .01
					}
					return {
						source: a,
						obfuscated: o,
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
						className: t,
						crosspost: s,
						fireAdPixelsOfType: i,
						flairStyleTemplate: n,
						forceAspectRatio: o,
						isCommentsPage: a,
						isExpando: r,
						isGalleryTileLayout: d,
						isListing: c,
						isMediumHeight: m,
						isNotCardView: h,
						isTitleOnly: p,
						openPost: b,
						post: g,
						showCentered: x,
						showFull: f = !1,
						showPromotedCTA: y,
						subredditOrProfileDisplayText: O
					} = this.props, {
						canLoadContent: C,
						forcePause: T,
						shouldPause: j,
						shouldStop: L,
						viewportWidth: F
					} = this.state;
					if (!g.media) return null;
					const U = T || j,
						G = L,
						{
							source: J,
							obfuscated: Z,
							height: ee,
							width: te,
							needsBackgroundBlur: se
						} = this.getMediaInfo(this.props, this.state),
						ie = {
							showCentered: x,
							isListing: c,
							showFull: f,
							height: ee,
							width: te
						},
						ne = {
							...ie,
							className: t,
							forceAspectRatio: o,
							viewportWidth: F
						},
						ae = this.shouldBlur(),
						re = !((null === (e = g.pollData) || void 0 === e ? void 0 : e.isPrediction) && !a),
						me = !(!g.isSponsored || !g.source),
						he = Object(oe.ub)() || "",
						pe = g.isSponsored ? Object(B.b)(g.id, {
							fireAdPixelsOfType: i,
							openPost: b
						}) : l.a,
						ge = e => {
							pe && pe(e, this.props.post, this.props.basePixelMetadata, void 0, this.props.pageType)
						};
					if (Z && ae) return u.a.createElement(_.a, le({}, ne, {
						blurSrc: Z
					}), u.a.createElement(fe, {
						isVisible: C
					}, u.a.createElement(P.a, le({}, ie, {
						altText: this.getAltText(),
						className: this.props.imageBoxClassName,
						contentImageClassName: this.props.imageBoxContentImageClassName,
						imageClassName: this.props.imageBoxClassName,
						isListing: c,
						isNSFW: this.isNSFW(),
						isSpoiler: this.isSpoiler(),
						isVideoThumbnail: !!g.media && g.media.type === X.o.VIDEO,
						onClick: this.onClickRevealBlurred,
						postId: g.id,
						shouldBlur: ae,
						source: Z,
						outboundUrl: me && g.source.outboundUrl || void 0,
						originalSource: J,
						onPostMediaClick: this.handlePostMediaClick
					}))));
					if (!g.media) return null;
					switch (g.media.type) {
						case X.o.RTJSON:
							const e = Object(Y.a)(g, null);
							if (null === e) return null;
							if (!f && !Object(K.a)(g)) return null;
							const i = g.isMeta ? Object(Q.a)(e, g.id) : e;
							return u.a.createElement(u.a.Fragment, null, re && u.a.createElement(R.a, {
								canLoadContent: C,
								className: t,
								"data-click-id": "text",
								isCommentsPage: a,
								isExpando: r,
								isMediumHeight: m,
								isRichTextTruncated: g.media.isRichtextPreview,
								isTitleOnly: p,
								postId: g.id,
								showFull: f
							}, u.a.createElement(H.a, {
								altText: this.getAltText(),
								content: i,
								flairStyleTemplate: n,
								isListing: c,
								isNSFW: this.isNSFW(),
								isSpoiler: this.isSpoiler(),
								mediaMetadata: g.media.mediaMetadata,
								onClickRevealBlurred: this.onClickRevealBlurred,
								postId: g.id,
								rtJsonElementProps: Se(this.props),
								renderMediaAsLinks: c,
								shouldBlur: ae
							}), u.a.createElement(S.b, {
								content: i
							})), u.a.createElement(k.a, {
								postId: g.id,
								isCommentsPage: !!a
							}));
						case X.o.TEXT:
							if (Object($.a)(g)) {
								const e = "Text post should not include body content";
								return w.c.withScope(t => {
									t.setExtra("info", {
										post: g,
										isListing: c,
										isCommentsPage: a
									}), w.c.captureMessage(e)
								}), Object(E.a)() && console.log(`${g.id}: ${e}`), u.a.createElement(u.a.Fragment, null, re && u.a.createElement(R.a, {
									postId: g.id,
									className: t,
									"data-click-id": "text",
									isCommentsPage: a,
									showFull: f
								}, u.a.createElement(W.a, {
									flairStyleTemplate: n,
									html: g.isMeta ? Object(q.a)(g.media.content, g.id, de.a.hiddenLink) : g.media.content
								})), u.a.createElement(k.a, {
									postId: g.id,
									isCommentsPage: !!a
								}))
							}
							return u.a.createElement(k.a, {
								postId: g.id,
								isCommentsPage: !!a
							});
						case X.o.EMBED:
							return this.props.isMiniCard && g.preview && g.preview.url ? u.a.createElement(_.a, le({}, ne, {
								alwaysWrapMedia: !0
							}), u.a.createElement(fe, {
								isVisible: C
							}, u.a.createElement(u.a.Fragment, null, u.a.createElement(P.a, le({}, ie, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: r,
								isListing: c,
								isNSFW: this.isNSFW(),
								isCrosspost: !!s,
								isSpoiler: this.isSpoiler(),
								postId: g.id,
								shouldBlur: ae,
								source: g.preview.url,
								originalSource: g.preview.url,
								onPostMediaClick: this.handlePostMediaClick
							})), u.a.createElement(V.a, null)))) : X.h.has(g.media.provider) ? g.media.provider === X.v.Twitter ? u.a.createElement(D.a, {
								canLoadContent: C,
								embedBoxChildRef: this.storeChildRef,
								mediaContainerProps: ne,
								onIframeLoaded: this.onIframeLoaded,
								source: J,
								title: g.title,
								postId: g.id
							}) : u.a.createElement(_.a, le({}, ne, {
								alwaysWrapMedia: !0,
								height: r ? ee : X.j,
								width: r ? te : X.j * (16 / 9)
							}), C && u.a.createElement(N.a, {
								childRef: this.storeChildRef,
								height: r ? ee : X.j,
								width: r ? te : void 0,
								isListing: c,
								isResponsive: !0,
								onLoad: this.onIframeLoaded,
								showCentered: x,
								showFull: f,
								source: J,
								title: g.title
							})) : u.a.createElement(_.a, le({}, ne, {
								alwaysWrapMedia: !0
							}), C && u.a.createElement(N.a, le({}, ie, {
								isResponsive: r || g.media.provider === X.v.IFrameEmbed,
								title: g.title,
								childRef: this.storeChildRef,
								onLoad: this.onIframeLoaded,
								source: J,
								fullWidth: g.media.provider === X.v.IFrameEmbed
							})));
						case X.o.GIFVIDEO: {
							let e = ee,
								t = te;
							return e > X.j && (t = te / ee * (e = X.j)), u.a.createElement(_.a, le({}, ne, {
								blurSrc: se ? g.media.gifBackgroundImage : void 0
							}), u.a.createElement(fe, {
								isVisible: C
							}, u.a.createElement(A.a, le({}, ie, {
								isNotCardView: h,
								height: r ? void 0 : e,
								width: r ? void 0 : t,
								postId: g.id,
								shouldLoad: !0,
								shouldPause: c && U,
								source: J,
								originalSource: g.media.content
							}))))
						}
						case X.o.VIDEO: {
							const e = g.media.posterUrl || g.preview && g.preview.url;
							if (this.props.isMiniCard && e) return u.a.createElement(_.a, le({}, ne, {
								alwaysWrapMedia: !0
							}), u.a.createElement(fe, {
								isVisible: C
							}, u.a.createElement(u.a.Fragment, null, u.a.createElement(P.a, le({}, ie, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: r,
								isListing: c,
								isNSFW: this.isNSFW(),
								isCrosspost: !!s,
								isSpoiler: this.isSpoiler(),
								postId: g.id,
								shouldBlur: ae,
								source: e,
								originalSource: e,
								onPostMediaClick: this.handlePostMediaClick
							})), u.a.createElement(V.a, null))));
							const t = u.a.createElement(_.a, le({}, ne, {
								alwaysWrapMedia: !0,
								isVideo: !0
							}), C && u.a.createElement(ue, {
								autoPlay: "boolean" == typeof j ? !j : void 0,
								isExpando: r,
								shouldLoad: !0,
								shouldPause: U,
								shouldStop: G,
								hlsSource: g.media.hlsUrl,
								mpegDashSource: g.media.dashUrl,
								isGif: g.media.isGif,
								scrubberThumbSource: g.media.scrubberThumbSource,
								postId: g.id,
								isSponsored: g.isSponsored,
								onAdPostClick: ge,
								callToActionSource: g.source || void 0,
								callToActionText: g.callToAction,
								isListing: c,
								posterUrl: g.media.posterUrl,
								muxVideoDuration: void 0,
								muxVideoId: g.id,
								muxVideoIsLive: !1,
								muxVideoTitle: g.title,
								sessionId: he
							}));
							return g.isSponsored ? u.a.createElement(I.a, {
								post: g,
								trackVideo: !0
							}, t) : t
						}
						case X.o.LIVEVIDEO:
							return u.a.createElement(fe, {
								isVisible: C
							}, u.a.createElement(ce, {
								className: this.props.isMiniCard ? de.a.miniCardVideo : void 0,
								canLoad: C,
								postId: g.id,
								postTitle: g.title,
								shouldPause: U || G,
								url: g.media.hlsUrl
							}));
						case X.o.IMAGE:
							const o = this.state.viewportHeight - 2 * be,
								l = this.state.viewportWidth - 2 * be;
							let b = J;
							return this.props.isMiniCard && !this.props.isMiniCardHQPreviews && (g.thumbnail && Object(v.a)(g.thumbnail.url) ? b = g.thumbnail.url : g.preview && Object(v.a)(g.preview.url) && (b = g.preview.url)), u.a.createElement(_.a, le({}, ne, {
								blurSrc: se ? b : void 0,
								isExpando: !!r
							}), u.a.createElement(fe, {
								isVisible: C
							}, u.a.createElement(P.a, le({}, ie, {
								altText: this.getAltText(),
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: r,
								isListing: c,
								isNSFW: this.isNSFW(),
								isCrosspost: !!s,
								isSpoiler: this.isSpoiler(),
								maxHeight: r ? o : void 0,
								maxWidth: r ? l : void 0,
								postId: g.id,
								shouldBlur: ae,
								source: b,
								outboundUrl: me && g.source.outboundUrl || void 0,
								isSponsored: g.isSponsored,
								originalSource: g.media.content,
								onPostMediaClick: this.handlePostMediaClick
							}))));
						case X.o.GALLERY:
							const T = Object(z.b)(g.media.mediaMetadata || {}, Object(z.c)(c), X.p, te),
								L = Object(z.a)(g.media.gallery, g.isSponsored);
							return u.a.createElement(_.a, le({}, ne, {
								blurSrc: se ? J : void 0,
								isExpando: !!r,
								maxGalleryHeight: T + L,
								className: de.a.galleryMediaContainer,
								isGalleryTileLayout: d
							}), u.a.createElement(fe, {
								isVisible: C
							}, u.a.createElement(M.a, {
								post: g,
								postId: g.id,
								postTitle: g.title,
								subredditName: O,
								galleryItems: g.media.gallery ? g.media.gallery.items : [],
								mediaMetadata: g.media.mediaMetadata || {},
								imageHeight: T,
								captionHeight: L,
								isSponsored: g.isSponsored,
								showPromotedCTA: !!y,
								className: this.props.imageBoxClassName,
								isListing: c,
								isNSFW: this.isNSFW(),
								isSpoiler: this.isSpoiler(),
								shouldBlur: ae,
								onClickRevealBlurred: this.onClickRevealBlurred,
								isTileLayout: !!d,
								shouldShowTileLayoutOption: this.props.shouldShowGalleryTileOption,
								isVisible: C
							})));
						default:
							return null
					}
				}
			}
			const Le = we(Ie(Object(p.a)(Object(f.a)(je))))
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
		"./src/reddit/components/QuarantinedLabel/index.m.less": function(e, t, s) {
			e.exports = {
				quarantineIcon: "_3fdQM74ud_8KssWgeznOrR",
				Container: "_3Ph6ensT9WFRjOg8dQQKJK",
				container: "_3Ph6ensT9WFRjOg8dQQKJK"
			}
		},
		"./src/reddit/components/QuarantinedLabel/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/higherOrderComponents/asTooltip.tsx"),
				r = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				c = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				u = s("./src/reddit/components/QuarantinedLabel/index.m.less"),
				m = s.n(u);
			const h = ["center", "top"],
				p = ["center", "bottom"],
				b = r.a.div("Container", m.a),
				g = Object(a.a)(d.b),
				x = Object(l.u)({
					isProfileListingPage: l.I
				});
			class f extends o.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.setState({
							showTooltip: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							showTooltip: !1
						})
					}, this.state = {
						showTooltip: !1
					}
				}
				render() {
					const {
						isProfileListingPage: e
					} = this.props;
					if (!e) return null;
					const {
						showTooltip: t
					} = this.state;
					return o.a.createElement(b, {
						innerRef: this.setTooltipTargetRef,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip
					}, o.a.createElement(c.a, {
						className: m.a.quarantineIcon
					}), i.fbt._("quarantined", null, {
						hk: "3hfN4T"
					}), o.a.createElement(g, {
						text: i.fbt._("This post was submitted in a quarantined community", null, {
							hk: "1Rebnc"
						}),
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: h,
						tooltipPosition: p
					}))
				}
			}
			t.a = x(f)
		},
		"./src/reddit/components/RawHTMLDisplay/Media.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				o = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
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
			t.a = Object(o.a)(({
				flairStyleTemplate: e,
				...t
			}) => n.a.createElement(d.a, l({
				style: {
					color: Object(r.a)(Object(a.a)({
						flairStyleTemplate: e,
						...t
					}))
				}
			}, t)))
		},
		"./src/reddit/components/SubredditNameLink/index.m.less": function(e, t, s) {
			e.exports = {
				SubredditName: "_3ryJoIoycVkA88fy40qNJc",
				subredditName: "_3ryJoIoycVkA88fy40qNJc"
			}
		},
		"./src/reddit/components/SubredditNameLink/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				n = s("./src/reddit/components/SubredditNameLink/index.m.less"),
				o = s.n(n);
			const a = s("./src/lib/lessComponent.tsx").a.wrapped(i.a, "SubredditName", o.a);
			t.a = a
		},
		"./src/reddit/helpers/canPreviewSelfText/index.ts": function(e, t, s) {
			"use strict";
			var i = s("./src/reddit/helpers/postHasSelfText/index.ts");
			t.a = e => (Object(i.a)(e) || !!e.pollData) && !e.isSpoiler && !e.isNSFW
		},
		"./src/reddit/helpers/mediaGallery/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return a
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
				o = s("./src/reddit/models/Media/index.ts");

			function a(e, t) {
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
			const l = e => e ? o.j : o.e;

			function c(e, t, s, i) {
				const n = u(e);
				if (p(n, t)) return t;
				const o = m(n);
				let a = o.y;
				return !a || a < s ? s : (i > 0 && (a = i * a / o.x), a > t ? t : a)
			}
			const u = e => Object.entries(e).reduce((e, [t, s]) => (s && s.s && e.push(s.s), e), []),
				m = e => e.reduce((e, t) => h(e, t), e && e[0] || []),
				h = (e, t) => {
					const s = e.x / e.y + .005,
						i = e.x / e.y - .005;
					return t.x / t.y > s ? t : t.x / t.y > i ? e.y > t.y ? e : t : e
				},
				p = (e, t) => e.some(e => e.y > t && Object(o.L)(e.y, e.x));

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
				a = s("./src/reddit/selectors/telemetry.ts");
			const r = (e, t, s) => ({
					gallery: a.s(e, t, s),
					post: a.J(e, t),
					...a.o(e)
				}),
				d = (e, t) => s => ({
					...r(s, e, t),
					action: i.c.VIEW,
					noun: "media",
					source: "gallery",
					media: a.C(s, e)
				}),
				l = (e, t) => s => {
					const d = Object(n.a)(t),
						l = Object(o.b)(s, e) + 1;
					return {
						...r(s, e, l),
						action: i.c.CLICK,
						noun: "outbound_url",
						source: "gallery",
						media: {
							...a.C(s, e),
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
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, n.a.createElement("g", null, n.a.createElement("polygon", {
				fill: "inherit",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PostCreation~Reddit~StandalonePostPage~SubredditTopContent~TopWeekPostsDiscoveryUnit~reddit-componen~2583c786.1cc84f65074a696c0941.js.map