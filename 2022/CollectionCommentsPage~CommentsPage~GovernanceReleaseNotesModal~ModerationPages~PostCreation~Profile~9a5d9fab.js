// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab.4b33c71a6675ed1a9ed1.js
// Retrieved at 4/21/2022, 1:50:04 PM by Reddit Dataminer v1.0.0
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
			const d = (e, t, s) => (function() {
				let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
				return n => {
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
							actionInfo: Object(o.P)(s, n)
						}
					})), u(n.target, n.currentTarget, c.anchorsAndButtons) && i(n)
				}
			});

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
					experimentName: u.Yd
				});
				return Object(u.Gf)(t) ? void 0 : t
			}, e => {
				const t = Object(m.c)(e, {
					experimentEligibilitySelector: m.a,
					experimentName: u.Zd
				});
				return Object(u.Gf)(t) ? void 0 : t
			}, (e, t) => e === u.ae.Enabled && t === u.ae.Enabled);
			var p = s("./src/config.ts");
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
			var v;
			! function(e) {
				e.SHA1 = "SHA-1", e.SHA256 = "SHA-256", e.SHA384 = "SHA-384", e.SHA512 = "SHA-512"
			}(v || (v = {}));
			const E = async e => (async (e, t) => {
				const s = (new TextEncoder).encode(t),
					i = await crypto.subtle.digest(e, s);
				return Array.from(new Uint8Array(i)).map(f).join("")
			})(v.SHA1, e);

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
					localStorageViewerUserIdKey: v,
					playerName: I,
					playerVersion: C,
					respectDoNotTrack: j,
					saltLength: T,
					saltTimeToLive: S,
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
						return (await E(s)).substr(0, M.VIEWER_USER_ID_LENGTH)
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
				M.displayName = O(e), M.ANONYMOUS_USER_ID = s, M.DEBUG = l, M.DISABLE_COOKIES = u, M.DURATION_LIVE = 1 / 0, M.ENV_KEY = m, M.LOCAL_STORAGE_SALT_KEY = f, M.LOCAL_STORAGE_VIEWER_USER_ID_KEY = v, M.PLAYER_NAME = I, M.PLAYER_VERSION = C, M.RESPECT_DO_NOT_TRACK = j, M.SALT_LENGTH = T, M.SALT_TIME_TO_LIVE = S, M.STREAM_TYPE_LIVE = "live", M.STREAM_TYPE_ON_DEMAND = "on-demand", M.VIEWER_USER_ID_LENGTH = L;
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
				v = s("./src/reddit/components/Media/BlurredContent.tsx"),
				E = s("./src/reddit/constants/adEvents.ts"),
				y = s("./src/reddit/constants/keycodes.ts"),
				O = s("./src/reddit/helpers/mediaGallery/index.tsx"),
				w = s("./src/reddit/models/Media/index.ts"),
				I = s("./src/reddit/selectors/media.ts"),
				C = s("./src/reddit/components/Media/GalleryBox/index.m.less"),
				j = s.n(C);
			const {
				fbt: T
			} = s("./node_modules/fbt/lib/FbtPublic.js"), S = e => {
				const {
					displayImage: t,
					style: s,
					showSeeMore: i,
					isReadyToShow: a,
					imgAltText: o
				} = e, d = "u" in t ? t.u : t.gif;
				return n.a.createElement("div", {
					className: Object(r.a)({
						[j.a.slideImageMainDiv]: !i
					})
				}, a && n.a.createElement("img", {
					src: d,
					alt: o,
					className: j.a.slideImage,
					style: s
				}), i && n.a.createElement("div", {
					className: j.a.seeMore
				}, T._("see full image", null, {
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
				let E;
				return E = i || (x ? o : "gif" in o ? o : a), n.a.createElement("li", {
					style: b,
					className: j.a.slide
				}, n.a.createElement("figure", {
					className: Object(r.a)({
						[j.a.tallImage]: x,
						[j.a.commonImage]: !x
					}, j.a.figure)
				}, l || m ? n.a.createElement(S, {
					displayImage: E,
					style: f,
					showSeeMore: x,
					isReadyToShow: h,
					imgAltText: d
				}) : n.a.createElement("a", {
					href: "u" in o ? o.u : o.gif,
					rel: "noopener noreferrer",
					target: "_blank",
					className: Object(r.a)({
						[j.a.tallImage]: x,
						[j.a.commonImage]: !x
					}, j.a.imageLink)
				}, n.a.createElement(S, {
					displayImage: E,
					style: f,
					showSeeMore: x,
					isReadyToShow: h,
					imgAltText: d
				}), p && n.a.createElement(v.a, {
					isNSFW: !!c,
					isSpoiler: !!u
				}))))
			}, M = e => n.a.createElement("a", {
				className: Object(r.a)(e.className, j.a.navigationUnderlay, {
					[j.a.hasMoreSlides]: e.hasMoreSlides
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
				className: Object(r.a)(e.iconClassName, j.a.icon)
			}, n.a.createElement(p.a, {
				className: j.a.iconImage
			}))), N = e => n.a.createElement("div", {
				className: j.a.imageMetaData,
				style: {
					height: e.captionHeight,
					justifyContent: e.caption ? "space-between" : "flex-end"
				}
			}, e.caption && n.a.createElement("span", {
				className: j.a.imageCaption,
				title: e.caption
			}, e.caption), e.outboundUrl && n.a.createElement("span", {
				className: j.a.imageUrl
			}, n.a.createElement("a", {
				className: j.a.outboundUrlWrapper,
				href: e.outboundUrl,
				onClick: e.onClickEvent,
				rel: "noopener noreferrer",
				target: "'_blank'"
			}, n.a.createElement("span", {
				className: j.a.urlText
			}, Object(O.e)(e.outboundUrl)), n.a.createElement(b.a, {
				className: j.a.linkIcon
			})))), P = e => n.a.createElement("div", {
				className: j.a.slideIndicator,
				onClick: e.toggleTileLayout ? t => {
					t.preventDefault(), t.stopPropagation(), e.toggleTileLayout()
				} : void 0
			}, e.toggleTileLayout && n.a.createElement(g.a, {
				className: j.a.tileIcon
			}), e.currentSlide, "/", e.totalSlides), _ = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
					s = e - t;
				return s < 0 && (s = 0), s
			}, D = function(e, t) {
				let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
					i = e + s;
				return i > t - 1 && (i = t - 1), i
			};
			t.a = e => {
				const t = Object(a.d)(),
					{
						captionHeight: s,
						galleryItems: p,
						imageHeight: b,
						isListing: g,
						isSponsored: C,
						isTileLayout: T,
						mediaMetadata: S = {},
						post: R,
						postId: k,
						postTitle: A,
						shouldShowTileLayoutOption: V,
						showPromotedCTA: B,
						subredditName: W,
						isVisible: H
					} = e,
					U = Object(a.e)(e => Object(I.d)(e, k)),
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
						t(Object(f.z)(R, E.a.GalleryItemImpression, `Slide${e}`))
					}, [t, R]),
					ne = Object(i.useCallback)(() => {
						t(Object(x.i)({
							postId: k,
							isTileLayout: !T
						}))
					}, [t, k, T]),
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
					})(S, b, g);
				return n.a.createElement("div", {
					className: Object(r.a)(j.a.outerContainer),
					ref: $,
					tabIndex: 0
				}, T ? n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
					className: Object(r.a)(j.a.tilesWrapper, {
						[j.a.blurredContent]: e.shouldBlur
					}),
					onClick: e.onClickRevealBlurred
				}, p.map((t, s) => {
					const i = t.mediaId,
						a = S && S[i];
					if (!a || !a.s) return null;
					const o = [...a && a.s ? [a.s] : [], ...a && a.p ? a.p : []],
						r = Object(O.d)(w.y, o);
					if (!r) return null;
					const d = a.s;
					return n.a.createElement("div", {
						style: {
							backgroundImage: `url(${"gif"in d?d.gif:"u"in r&&r.u})`
						},
						className: j.a.tileImage,
						onClick: e.shouldBlur ? void 0 : e => {
							e.preventDefault(), e.stopPropagation(), ne(), se(s)
						},
						key: i
					})
				}), [1, 2, 3].map(e => n.a.createElement("div", {
					key: e,
					className: j.a.tilePlaceholder
				}))), e.shouldBlur && n.a.createElement(v.a, {
					isNSFW: !!e.isNSFW,
					isSpoiler: !!e.isSpoiler
				})) : n.a.createElement("div", {
					className: j.a.slideshowContainer,
					tabIndex: -1,
					ref: Y,
					onClick: e.onClickRevealBlurred,
					style: ce
				}, n.a.createElement("div", {
					className: j.a.imagesWrapper
				}, n.a.createElement("ul", {
					className: j.a.slideWrapper
				}, p.map((t, s) => {
					const i = t.mediaId,
						a = S && S[i];
					if (!a || !a.s) return null;
					const o = t.caption ? t.caption : A,
						r = Object(c.a)(W ? `${W} - ${o}` : o, 300, d.jb),
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
						isSponsored: C,
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
					iconClassName: j.a.prevIcon,
					className: j.a.prevButton
				}), n.a.createElement(M, {
					onClick: ae,
					setFocusTo: Y,
					hasMoreSlides: G,
					title: "Next",
					iconClassName: j.a.nextIcon,
					className: j.a.nextButton
				}))), p.length > 1 ? n.a.createElement(P, {
					currentSlide: U + 1,
					totalSlides: p.length,
					toggleTileLayout: V && ne || void 0
				}) : ""), !de && !le || T || B ? !!s && !T && !B && n.a.createElement("div", {
					className: j.a.emptyCaptionBlock,
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
			t.a = Object(a.b)(u)(e => {
				let {
					isCommentsPage: t,
					poll: s,
					postId: i
				} = e;
				return s ? Object(r.c)(s) ? n.a.createElement(l.a, {
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
			t.a = e => {
				let {
					canLoadContent: t,
					children: s,
					className: i,
					isCommentsPage: d,
					isMediumHeight: l,
					isRichTextTruncated: c,
					isExpando: u,
					isTitleOnly: h,
					postId: g,
					showFull: x,
					...f
				} = e;
				const v = {
						[m.a.richTextContainerFull]: x,
						[m.a.richTextContainerTitleOnly]: h && !x,
						[m.a.richTextContainer]: !x && !h
					},
					E = {};
				x || (E.maxHeight = h ? `${r.m}px` : l ? `${r.l}px` : `${r.k}px`), d && (E.maxWidth = `${o.d}px`);
				const y = c && x;
				return n.a.createElement("div", b({
					className: Object(a.a)(v, i),
					style: E
				}, f), s, y && n.a.createElement(p, {
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
			const f = 550,
				v = 100,
				E = 300;

			function y(e) {
				const {
					canLoadContent: t,
					mediaContainerProps: s,
					onIframeLoaded: b,
					embedBoxChildRef: y,
					source: O,
					title: w,
					postId: I
				} = e, [C, j] = Object(n.useState)(!1), T = Object(d.a)(t), S = Object(n.useRef)(), {
					height: L,
					isDeleted: M
				} = Object(o.e)(e => e.mediaEmbed[I] || {}), N = C ? M ? v : L : E;

				function P(e) {
					var t;
					C || (null === (t = null == S ? void 0 : S.current) || void 0 === t ? void 0 : t.contentWindow) !== e.source || "tweet-measured" !== e.data.action || j(!0)
				}
				return Object(n.useEffect)(() => (window.addEventListener("message", P), () => {
					S.current && Object(l.b)(S.current), window.removeEventListener("message", P)
				}), []), Object(n.useEffect)(() => {
					!t && T && j(!1)
				}, [T, t]), a.a.createElement(m.a, x({}, s, {
					alwaysWrapMedia: !0,
					height: N + 8,
					isTweet: !0,
					showFull: !s.isListing,
					width: f
				}), t && a.a.createElement("div", {
					className: g.a.tweetContainer,
					style: {
						height: N
					}
				}, !C && a.a.createElement("div", {
					className: Object(r.a)(Object(h.a)({
						isLoading: !0
					}), g.a.tweetPlaceholder)
				}), C && M && a.a.createElement("p", {
					className: g.a.tweetDeleted
				}, i.fbt._("This Tweet has been deleted.", null, {
					hk: "1LhcOw"
				})), a.a.createElement(u.a, {
					childRef: function(e) {
						S.current = e, e && Object(l.a)(e, (t, s) => {
							e && e.contentWindow && !L && s && (j(!1), e.contentWindow.postMessage("twitter-measure-requested", c.a))
						}), y(e)
					},
					className: Object(r.a)(g.a.tweetEmbedBox, {
						[g.a.isInvisible]: !C || M
					}),
					fullWidth: !0,
					height: N,
					isListing: s.isListing,
					isResponsive: !0,
					maxHeight: s.isListing ? p.j : null,
					onLoad: b,
					showCentered: s.showCentered,
					showFull: !0,
					source: O,
					title: w
				}), s.isListing && N > p.j && a.a.createElement("div", {
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
				return Pe
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
				v = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				E = s("./src/lib/env/index.ts"),
				y = s("./src/lib/isUrl/index.ts"),
				O = s("./src/lib/objectSelector/index.ts"),
				w = s("./src/lib/onFocusAndVisibilityChange/index.ts"),
				I = s("./src/lib/sentry/index.ts"),
				C = s("./src/lib/truncateText/index.ts"),
				j = s("./src/reddit/actions/post.ts"),
				T = s("./src/reddit/components/AdViewability/index.tsx"),
				S = s("./src/reddit/components/Governance/VaultActionLink/async.ts"),
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
				ie = s("./src/reddit/selectors/meta.ts"),
				ne = s("./src/reddit/selectors/postCreations.ts"),
				ae = s("./src/reddit/selectors/posts.ts"),
				oe = s("./src/reddit/selectors/seo/index.ts"),
				re = s("./src/reddit/selectors/telemetry.ts"),
				de = s("./src/reddit/selectors/user.ts"),
				le = s("./src/reddit/components/Media/getResolution.ts"),
				ce = s("./src/reddit/components/Media/index.m.less"),
				ue = s.n(ce);

			function me() {
				return (me = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const he = Object(a.a)({
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
				pe = Object(b.a)(L.b, {
					playerName: "Reddit Player"
				}),
				be = 300,
				ge = " - ",
				xe = 1200,
				fe = 75,
				ve = "player.js",
				Ee = F.r + F.q,
				ye = e => u.a.createElement("div", {
					className: Object(x.a)(ue.a.visibilityWrapper, {
						[ue.a.displayNone]: !e.isVisible
					})
				}, e.children),
				Oe = new Set([Z.o.EMBED, Z.o.LIVEVIDEO, Z.o.VIDEO, Z.o.GIFVIDEO]),
				we = e => !!e.media && Oe.has(e.media.type),
				Ie = new Set([Z.o.EMBED, Z.o.GALLERY, Z.o.GIFVIDEO, Z.o.IMAGE, Z.o.LIVEVIDEO, Z.o.VIDEO]),
				Ce = e => {
					let {
						post: t
					} = e;
					return !!t.media && Ie.has(t.media.type)
				},
				je = Object(K.u)(),
				Te = Object(h.c)({
					canUseOCRAltText: (e, t) => Object(te.b)(e, t.post),
					OCRAltText: (e, t) => {
						let {
							post: s
						} = t;
						return Object(te.a)(e, s.id)
					},
					subredditOrProfileDisplayText: (e, t) => Object(te.i)(e, t),
					subredditOrProfile: (e, t) => {
						let {
							post: s
						} = t;
						return Object(ae.U)(e, {
							postId: s.id
						})
					},
					isEditing: (e, t) => {
						let {
							post: s
						} = t;
						return Object(ne.M)(e, {
							postId: s.id
						})
					},
					shouldShowAltText: (e, t) => Object(oe.d)(e, t),
					isGalleryTileLayout: (e, t) => {
						let {
							shouldShowGalleryTileOption: s,
							post: i,
							isGalleryTileLayoutDefault: n
						} = t;
						if (!s) return !1;
						const a = Object(se.e)(e, i.id);
						return !(void 0 !== a || !n) || !!a
					},
					pageType: e => Object(re.d)(e).pageType,
					basePixelMetadata: (e, t) => {
						let {
							post: s
						} = t;
						return Object(ae.b)(e, s.id)
					},
					isBlockingInterstitialEnabled: ee.b,
					isBlockingInterstitialV2Enabled: ee.c,
					currentUserId: de.Db,
					isNSFW: (e, t) => {
						let {
							post: s,
							crosspost: i
						} = t;
						return Object(se.b)(e, s.isNSFW, Boolean(i && i.isNSFW))
					},
					isSpoiler: (e, t) => {
						let {
							post: s,
							crosspost: i
						} = t;
						return Object(se.c)(e, s.isSpoiler, Boolean(i && i.isSpoiler))
					},
					isBot: ie.d
				}),
				Se = e => ({
					fireAdPixelsOfType: (t, s) => e(Object(j.z)(t, s)),
					openPost: t => e(Object(j.L)(t)),
					openPostLink: t => e(Object(j.bb)(Object(J.b)(t.permalink), t.id))
				}),
				Le = Object(m.b)(Te, Se),
				Me = Object(O.b)(e => ({
					renderingObjectInfo: e.post,
					pageLayer: e.pageLayer
				}));
			class Ne extends u.a.Component {
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
								context: ve,
								method: s
							}, M.a), e.contentWindow.postMessage({
								context: ve,
								method: Z.g.Mute
							}, M.a)
						}
					}, this.pauseEmbed = (e, t) => {
						e.contentWindow && (t === Z.v.YouTube ? e.contentWindow.postMessage(JSON.stringify({
							event: "command",
							func: Z.A.Pause
						}), M.a) : e.contentWindow.postMessage({
							context: ve,
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
					}, this.handlePostMediaClick = e => {
						(this.props.isBlockingInterstitialEnabled || this.props.isBlockingInterstitialV2Enabled) && (e.preventDefault(), this.props.openPostLink(this.props.post))
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
					we(this.props.post) && (this.visibilityChangeSubscriptionId = w.a.subscribe(e => {
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
					return i && (a += i), t && e ? a += `${ge}${t}` : s.title && (a += `${ge}${s.title}`), a.length > be ? Object(C.a)(a, be, f.jb) : a
				}
				getVideoExpandoMaxDimensions() {
					let e, t = Math.max(Z.j, this.state.viewportHeight),
						s = Math.min(xe, 16 * t / 9);
					s === xe && (t = 9 * xe / 16), e = this.state.viewportWidth >= G.c ? this.state.viewportWidth < F.l ? this.state.viewportWidth - Ee - 2 * fe : this.state.viewportWidth - Ee - F.e - 2 * fe : this.state.viewportWidth - 2 * fe;
					const i = this.state.viewportHeight - 2 * fe;
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
				getMediaInfo(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state,
						s = arguments.length > 2 ? arguments[2] : void 0;
					const {
						availableWidth: i,
						isListing: n,
						post: a
					} = e;
					if (Object(Z.H)(a.media)) return {
						source: a.media.scrubberThumbSource,
						width: this.state.viewportWidth - 2 * fe,
						height: this.state.viewportHeight - 2 * fe
					};
					const o = a.media && a.media.obfuscated || "";
					let r = !a.media || Object(Z.N)(a.media) || Object(Z.G)(a.media) || Object(Z.E)(a.media) ? "" : a.media.content,
						[d, l] = !a.media || Object(Z.K)(a.media) || Object(Z.M)(a.media) || Object(Z.E)(a.media) ? [0, 0] : [a.media.height, a.media.width];
					if (i && a.media && Object(Z.E)(a.media)) {
						d = Object(z.b)(a.media.mediaMetadata || {}, Object(z.c)(n), Z.p, i) + Z.i, l = i
					}
					if (i && a.media && (a.media.type === Z.o.IMAGE || a.media.type === Z.o.GIFVIDEO)) {
						const e = le.b(i, a.media.resolutions);
						e && (r = e.url, l = e.width, d = e.height)
					} else if (a && a.media && (!e.isListing || e.isExpando) && (a.media.type === Z.o.IMAGE || a.media.type === Z.o.GIFVIDEO)) {
						let e;
						(e = Object(Z.L)(a.media.height, a.media.width) && Object(_.b)(a.media.height) ? le.c(a.media.height, a.media.width, a.media.resolutions) : le.a(a.media.resolutions)) && (r = e.url, l = e.width, d = e.height)
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
					if (a.media && a.media.type === Z.o.VIDEO) {
						const t = d / l;
						e.isExpando ? (d = c, l = u) : t > Z.c ? (d = c, l = Math.min(Math.max(c / t, Z.r), u)) : (d = Math.min(Math.max(u * t, Z.q), c), l = u)
					}
					a.media && a.media.type === Z.o.EMBED && (a.isSurveyAd && (r = Object(g.a)(s, a.impressionId, a.postId), d = 450, l = 450), e.isExpando && a.media.provider !== Z.v.Twitter && (d = c, l = u));
					let m = !1;
					if (e.isMiniCard) {
						const e = d / l;
						m = Math.abs(e - Z.c) > .01
					}
					return {
						source: r,
						obfuscated: o,
						width: l,
						height: d,
						needsBackgroundBlur: m
					}
				}
				shouldBlur() {
					const {
						isExpando: e,
						isBot: t,
						isNSFW: s,
						isSpoiler: i,
						isOverlay: n,
						theme: a
					} = this.props;
					return !(t || e || this.state.isRevealed || n) && (s && !a.subredditContext.shouldShowNSFWContent || i)
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
						isNSFW: p,
						isSpoiler: b,
						isNotCardView: g,
						isTitleOnly: x,
						openPost: f,
						post: v,
						showCentered: O,
						showFull: w = !1,
						showPromotedCTA: C,
						subredditOrProfileDisplayText: j,
						currentUserId: L
					} = this.props, {
						canLoadContent: M,
						forcePause: F,
						shouldPause: G,
						shouldStop: K,
						viewportWidth: J
					} = this.state;
					if (!v.media) return null;
					const ee = F || G,
						te = K,
						{
							source: se,
							obfuscated: ie,
							height: ne,
							width: ae,
							needsBackgroundBlur: oe
						} = this.getMediaInfo(this.props, this.state, L),
						de = {
							showCentered: O,
							isListing: m,
							showFull: w,
							height: ne,
							width: ae
						},
						le = {
							...de,
							className: s,
							forceAspectRatio: o,
							viewportWidth: J
						},
						ce = this.shouldBlur(),
						be = !((null === (e = v.pollData) || void 0 === e ? void 0 : e.isPrediction) && !r),
						ge = !(!v.isSponsored || !v.source),
						xe = Object(re.rb)() || "",
						ve = v.isSponsored ? Object(W.b)(v.id, {
							fireAdPixelsOfType: n,
							openPost: f
						}) : l.a,
						Ee = e => {
							ve && ve(e, this.props.post, this.props.basePixelMetadata, void 0, this.props.pageType)
						};
					if (ie && ce) return u.a.createElement(D.a, me({}, le, {
						blurSrc: ie
					}), u.a.createElement(ye, {
						isVisible: M
					}, u.a.createElement(_.a, me({}, de, {
						altText: this.getAltText(),
						className: this.props.imageBoxClassName,
						contentImageClassName: this.props.imageBoxContentImageClassName,
						imageClassName: this.props.imageBoxClassName,
						isListing: m,
						isNSFW: p,
						isSpoiler: b,
						isVideoThumbnail: !!v.media && v.media.type === Z.o.VIDEO,
						onClick: this.onClickRevealBlurred,
						postId: v.id,
						shouldBlur: ce,
						source: ie,
						outboundUrl: ge && v.source.outboundUrl || void 0,
						originalSource: se,
						onPostMediaClick: this.handlePostMediaClick
					}))));
					if (!v.media) return null;
					switch (v.media.type) {
						case Z.o.RTJSON:
							const e = Object(Y.a)(v, null);
							if (null === e) return null;
							if (!w && !Object($.a)(v)) return null;
							const n = v.isMeta ? Object(X.a)(e, v.id) : e;
							return u.a.createElement(u.a.Fragment, null, be && u.a.createElement(k.a, {
								canLoadContent: M,
								className: s,
								"data-click-id": "text",
								isCommentsPage: r,
								isExpando: d,
								isMediumHeight: h,
								isRichTextTruncated: v.media.isRichtextPreview,
								isTitleOnly: x,
								postId: v.id,
								showFull: w
							}, u.a.createElement(U.a, {
								altText: this.getAltText(),
								content: n,
								flairStyleTemplate: a,
								isListing: m,
								isNSFW: p,
								isSpoiler: b,
								mediaMetadata: v.media.mediaMetadata,
								onClickRevealBlurred: this.onClickRevealBlurred,
								postId: v.id,
								rtJsonElementProps: Me(this.props),
								renderMediaAsLinks: m,
								shouldBlur: ce
							}), u.a.createElement(S.b, {
								content: n
							})), u.a.createElement(R.a, {
								postId: v.id,
								isCommentsPage: !!r
							}));
						case Z.o.TEXT:
							if (Object(q.a)(v)) {
								const e = "Text post should not include body content";
								return I.c.withScope(t => {
									t.setExtra("info", {
										post: v,
										isListing: m,
										isCommentsPage: r
									}), I.c.captureMessage(e)
								}), Object(E.a)() && console.log(`${v.id}: ${e}`), u.a.createElement(u.a.Fragment, null, be && u.a.createElement(k.a, {
									postId: v.id,
									className: s,
									"data-click-id": "text",
									isCommentsPage: r,
									showFull: w
								}, u.a.createElement(H.a, {
									flairStyleTemplate: a,
									html: v.isMeta ? Object(Q.a)(v.media.content, v.id, ue.a.hiddenLink) : v.media.content
								})), u.a.createElement(R.a, {
									postId: v.id,
									isCommentsPage: !!r
								}))
							}
							return u.a.createElement(R.a, {
								postId: v.id,
								isCommentsPage: !!r
							});
						case Z.o.EMBED:
							return this.props.isMiniCard && v.preview && v.preview.url ? u.a.createElement(D.a, me({}, le, {
								alwaysWrapMedia: !0
							}), u.a.createElement(ye, {
								isVisible: M
							}, u.a.createElement(u.a.Fragment, null, u.a.createElement(_.a, me({}, de, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: d,
								isListing: m,
								isNSFW: p,
								isCrosspost: !!i,
								isSpoiler: b,
								postId: v.id,
								shouldBlur: ce,
								source: v.preview.url,
								originalSource: v.preview.url,
								onPostMediaClick: this.handlePostMediaClick
							})), u.a.createElement(B.a, null)))) : Z.h.has(v.media.provider) ? v.media.provider === Z.v.Twitter ? u.a.createElement(A.a, {
								canLoadContent: M,
								embedBoxChildRef: this.storeChildRef,
								mediaContainerProps: le,
								onIframeLoaded: this.onIframeLoaded,
								source: se,
								title: v.title,
								postId: v.id
							}) : u.a.createElement(D.a, me({}, le, {
								alwaysWrapMedia: !0,
								height: d ? ne : Z.j,
								width: d ? ae : Z.j * (16 / 9)
							}), M && u.a.createElement(N.a, {
								childRef: this.storeChildRef,
								height: d ? ne : Z.j,
								width: d ? ae : void 0,
								isListing: m,
								isResponsive: !0,
								onLoad: this.onIframeLoaded,
								showCentered: O,
								showFull: w,
								source: se,
								title: v.title
							})) : u.a.createElement(D.a, me({}, le, {
								alwaysWrapMedia: !0
							}), M && u.a.createElement(N.a, me({}, de, {
								isResponsive: d || v.media.provider === Z.v.IFrameEmbed,
								title: v.title,
								childRef: this.storeChildRef,
								onLoad: this.onIframeLoaded,
								source: se,
								fullWidth: v.media.provider === Z.v.IFrameEmbed
							})));
						case Z.o.GIFVIDEO: {
							let e = ne,
								t = ae;
							return e > Z.j && (t = ae / ne * (e = Z.j)), u.a.createElement(D.a, me({}, le, {
								blurSrc: oe ? v.media.gifBackgroundImage : void 0
							}), u.a.createElement(ye, {
								isVisible: M
							}, u.a.createElement(V.a, me({}, de, {
								isNotCardView: g,
								height: d ? void 0 : e,
								width: d ? void 0 : t,
								postId: v.id,
								shouldLoad: !0,
								shouldPause: m && ee,
								source: se,
								originalSource: v.media.content,
								isPromoted: v.isSponsored
							}))))
						}
						case Z.o.VIDEO: {
							const e = v.media.posterUrl || v.preview && v.preview.url;
							if (this.props.isMiniCard && e) return u.a.createElement(D.a, me({}, le, {
								alwaysWrapMedia: !0
							}), u.a.createElement(ye, {
								isVisible: M
							}, u.a.createElement(u.a.Fragment, null, u.a.createElement(_.a, me({}, de, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: d,
								isListing: m,
								isNSFW: p,
								isCrosspost: !!i,
								isSpoiler: b,
								postId: v.id,
								shouldBlur: ce,
								source: e,
								originalSource: e,
								onPostMediaClick: this.handlePostMediaClick
							})), u.a.createElement(B.a, null))));
							const s = v.reactedFrom && v.attributionInfo ? {
									id: v.id,
									reactedFrom: {
										...v.reactedFrom
									},
									attributionInfo: {
										...v.attributionInfo
									},
									isReactAllowed: v.isReactAllowed
								} : void 0,
								n = u.a.createElement(D.a, me({}, le, {
									alwaysWrapMedia: !0,
									isVideo: !0
								}), M && u.a.createElement(pe, {
									autoPlay: t && !1 === G,
									isExpando: d,
									shouldLoad: !0,
									shouldPause: ee,
									shouldStop: te,
									hlsSource: v.media.hlsUrl,
									mpegDashSource: v.media.dashUrl,
									isGif: v.media.isGif,
									scrubberThumbSource: v.media.scrubberThumbSource,
									postId: v.id,
									isSponsored: v.isSponsored,
									onAdPostClick: Ee,
									callToActionSource: v.source || void 0,
									callToActionText: v.callToAction,
									isListing: m,
									posterUrl: v.media.posterUrl,
									muxVideoDuration: void 0,
									muxVideoId: v.id,
									muxVideoIsLive: !1,
									muxVideoTitle: v.title,
									sessionId: xe,
									reactPostInfo: s,
									isCommentsPage: r
								}));
							return v.isSponsored ? u.a.createElement(T.a, {
								post: v,
								trackVideo: !0
							}, n) : n
						}
						case Z.o.LIVEVIDEO:
							return u.a.createElement(ye, {
								isVisible: M
							}, u.a.createElement(he, {
								className: this.props.isMiniCard ? ue.a.miniCardVideo : void 0,
								canLoad: M,
								postId: v.id,
								postTitle: v.title,
								shouldPause: ee || te,
								url: v.media.hlsUrl
							}));
						case Z.o.IMAGE:
							const o = this.state.viewportHeight - 2 * fe,
								l = this.state.viewportWidth - 2 * fe;
							let f = se;
							return this.props.isMiniCard && !this.props.isMiniCardHQPreviews && (v.thumbnail && Object(y.a)(v.thumbnail.url) ? f = v.thumbnail.url : v.preview && Object(y.a)(v.preview.url) && (f = v.preview.url)), u.a.createElement(D.a, me({}, le, {
								blurSrc: oe ? f : void 0,
								isExpando: !!d
							}), u.a.createElement(ye, {
								isVisible: M
							}, u.a.createElement(_.a, me({}, de, {
								altText: this.getAltText(),
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: d,
								isListing: m,
								isNSFW: p,
								isCrosspost: !!i,
								isSpoiler: b,
								maxHeight: d ? o : void 0,
								maxWidth: d ? l : void 0,
								postId: v.id,
								shouldBlur: ce,
								source: f,
								outboundUrl: ge && v.source.outboundUrl || void 0,
								isSponsored: v.isSponsored,
								originalSource: v.media.content,
								onPostMediaClick: this.handlePostMediaClick
							}))));
						case Z.o.GALLERY:
							const L = Object(z.b)(v.media.mediaMetadata || {}, Object(z.c)(m), Z.p, ae),
								W = Object(z.a)(v.media.gallery, v.isSponsored);
							return u.a.createElement(D.a, me({}, le, {
								blurSrc: oe ? se : void 0,
								isExpando: !!d,
								maxGalleryHeight: L + W,
								className: ue.a.galleryMediaContainer,
								isGalleryTileLayout: c
							}), u.a.createElement(ye, {
								isVisible: M
							}, u.a.createElement(P.a, {
								post: v,
								postId: v.id,
								postTitle: v.title,
								subredditName: j,
								galleryItems: v.media.gallery ? v.media.gallery.items : [],
								mediaMetadata: v.media.mediaMetadata || {},
								imageHeight: L,
								captionHeight: W,
								isSponsored: v.isSponsored,
								showPromotedCTA: !!C,
								className: this.props.imageBoxClassName,
								isListing: m,
								isNSFW: p,
								isSpoiler: b,
								shouldBlur: ce,
								onClickRevealBlurred: this.onClickRevealBlurred,
								isTileLayout: !!c,
								shouldShowTileLayoutOption: this.props.shouldShowGalleryTileOption,
								isVisible: M
							})));
						default:
							return null
					}
				}
			}
			const Pe = je(Le(Object(p.a)(Object(v.a)(Ne))))
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
			t.a = Object(a.a)(e => {
				let {
					flairStyleTemplate: t,
					...s
				} = e;
				return n.a.createElement(d.a, l({
					style: {
						color: Object(r.a)(Object(o.a)({
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
			const u = e => Object.entries(e).reduce((e, t) => {
					let [s, i] = t;
					return i && i.s && e.push(i.s), e
				}, []),
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
					gallery: o.r(e, t, s),
					post: o.H(e, t),
					...o.n(e)
				}),
				d = (e, t) => s => ({
					...r(s, e, t),
					action: i.c.VIEW,
					noun: "media",
					source: "gallery",
					media: o.A(s, e)
				}),
				l = (e, t) => s => {
					const d = Object(n.a)(t),
						l = Object(a.d)(s, e) + 1;
					return {
						...r(s, e, l),
						action: i.c.CLICK,
						noun: "outbound_url",
						source: "gallery",
						media: {
							...o.A(s, e),
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab.4b33c71a6675ed1a9ed1.js.map