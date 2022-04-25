// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab.bbb182214a68e7c56a96.js
// Retrieved at 4/25/2022, 11:10:04 AM by Reddit Dataminer v1.0.0
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
			const d = (e, t, s) => (function() {
				let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
				return n => {
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
							actionInfo: Object(a.P)(s, n)
						}
					})), u(n.target, n.currentTarget, c.anchorsAndButtons) && i(n)
				}
			});

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
					experimentName: u.ce
				});
				return Object(u.Kf)(t) ? void 0 : t
			}, e => {
				const t = Object(m.c)(e, {
					experimentEligibilitySelector: m.a,
					experimentName: u.de
				});
				return Object(u.Kf)(t) ? void 0 : t
			}, (e, t) => e === u.ee.Enabled && t === u.ee.Enabled);
			var p = s("./src/config.ts");
			var g = s("./src/reddit/selectors/user.ts");
			const b = e => {
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
			const w = (e => t => ((e, t) => `${e}(${(e=>e.displayName||e.name||"Component")(t)})`)(e, t))("WithMux"),
				O = {
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
					playerName: I,
					playerVersion: C,
					respectDoNotTrack: j,
					saltLength: S,
					saltTimeToLive: T,
					viewerUserIdLength: M
				} = {
					...O,
					...t
				};
				class L extends i.Component {
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
						const e = this.props.redditUserId || L.ANONYMOUS_USER_ID,
							t = this.getOrCreateSalt(),
							s = `${x()}${e}${t}`;
						return (await v(s)).substr(0, L.VIEWER_USER_ID_LENGTH)
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
							debug: L.DEBUG,
							disableCookies: L.DISABLE_COOKIES,
							respectDoNotTrack: L.RESPECT_DO_NOT_TRACK,
							...s,
							data: {
								env_key: L.ENV_KEY,
								experiment_name: this.experimentName,
								player_init_time: this.playerInitTime,
								player_name: L.PLAYER_NAME,
								player_version: L.PLAYER_VERSION,
								...t,
								viewer_user_id: e
							}
						}
					}
					getOrCreateSalt() {
						const e = L.LOCAL_STORAGE_SALT_KEY;
						let t = Object(r.a)(e);
						return t || (t = b(L.SALT_LENGTH), Object(r.b)(e, t, L.SALT_TIME_TO_LIVE)), t
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
							video_duration: s ? L.DURATION_LIVE : e,
							video_id: t,
							video_stream_type: s ? L.STREAM_TYPE_LIVE : L.STREAM_TYPE_ON_DEMAND,
							video_title: i,
							view_session_id: this.props.sessionId,
							player_software_version: this.getDashInstanceData() ? p.a.dashVersion : this.getHlsInstanceData() ? p.a.hlsVersion : null
						}
					}
				}
				L.displayName = w(e), L.ANONYMOUS_USER_ID = s, L.DEBUG = l, L.DISABLE_COOKIES = u, L.DURATION_LIVE = 1 / 0, L.ENV_KEY = m, L.LOCAL_STORAGE_SALT_KEY = f, L.LOCAL_STORAGE_VIEWER_USER_ID_KEY = E, L.PLAYER_NAME = I, L.PLAYER_VERSION = C, L.RESPECT_DO_NOT_TRACK = j, L.SALT_LENGTH = S, L.SALT_TIME_TO_LIVE = T, L.STREAM_TYPE_LIVE = "live", L.STREAM_TYPE_ON_DEMAND = "on-demand", L.VIEWER_USER_ID_LENGTH = M;
				const N = Object(i.forwardRef)((e, t) => n.a.createElement(L, y({}, e, {
						forwardedRef: t
					}))),
					P = Object(a.c)({
						redditUserId: g.i,
						isMuxEnabled: h
					});
				return Object(o.b)(P, null, null, {
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
				g = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				b = s("./src/reddit/icons/svgs/Tile/index.tsx"),
				x = s("./src/reddit/actions/media.ts"),
				f = s("./src/reddit/actions/post.ts"),
				E = s("./src/reddit/components/Media/BlurredContent.tsx"),
				v = s("./src/reddit/constants/adEvents.ts"),
				y = s("./src/reddit/constants/keycodes.ts"),
				w = s("./src/reddit/helpers/mediaGallery/index.tsx"),
				O = s("./src/reddit/models/Media/index.ts"),
				I = s("./src/reddit/selectors/media.ts"),
				C = s("./src/reddit/components/Media/GalleryBox/index.m.less"),
				j = s.n(C);
			const {
				fbt: S
			} = s("./node_modules/fbt/lib/FbtPublic.js"), T = e => {
				const {
					displayImage: t,
					style: s,
					showSeeMore: i,
					isReadyToShow: o,
					imgAltText: a
				} = e, d = "u" in t ? t.u : t.gif;
				return n.a.createElement("div", {
					className: Object(r.a)({
						[j.a.slideImageMainDiv]: !i
					})
				}, o && n.a.createElement("img", {
					src: d,
					alt: a,
					className: j.a.slideImage,
					style: s
				}), i && n.a.createElement("div", {
					className: j.a.seeMore
				}, S._("see full image", null, {
					hk: "1Qygw5"
				})))
			}, M = e => {
				const {
					slideIndex: t,
					currentIndex: s,
					obfuscatedImage: i,
					optimalImage: o,
					originalImage: a,
					imgAltText: d,
					isListing: l,
					isNSFW: c,
					isNsfwBlockingModalEligible: u,
					isSpoiler: m,
					isSponsored: h,
					isReadyToShow: p,
					shouldBlur: g
				} = e, b = s === t ? {
					left: "0px"
				} : {
					left: s > t ? "-100%" : "100%"
				}, x = Object(w.c)(l), f = a.y > x && Object(O.L)(a.y, a.x), v = f ? {} : {
					maxHeight: "100%"
				};
				let y;
				return y = i || (f ? a : "gif" in a ? a : o), n.a.createElement("li", {
					style: b,
					className: j.a.slide
				}, n.a.createElement("figure", {
					className: Object(r.a)({
						[j.a.tallImage]: f,
						[j.a.commonImage]: !f
					}, j.a.figure)
				}, l || h ? n.a.createElement(T, {
					displayImage: y,
					style: v,
					showSeeMore: f,
					isReadyToShow: p,
					imgAltText: d
				}) : n.a.createElement("a", {
					href: "u" in a ? a.u : a.gif,
					rel: "noopener noreferrer",
					target: "_blank",
					className: Object(r.a)({
						[j.a.tallImage]: f,
						[j.a.commonImage]: !f
					}, j.a.imageLink)
				}, n.a.createElement(T, {
					displayImage: y,
					style: v,
					showSeeMore: f,
					isReadyToShow: p,
					imgAltText: d
				}), g && !u && n.a.createElement(E.a, {
					isNSFW: !!c,
					isSpoiler: !!m
				}))))
			}, L = e => n.a.createElement("a", {
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
			}, Object(w.e)(e.outboundUrl)), n.a.createElement(g.a, {
				className: j.a.linkIcon
			})))), P = e => n.a.createElement("div", {
				className: j.a.slideIndicator,
				onClick: e.toggleTileLayout ? t => {
					t.preventDefault(), t.stopPropagation(), e.toggleTileLayout()
				} : void 0
			}, e.toggleTileLayout && n.a.createElement(b.a, {
				className: j.a.tileIcon
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
						galleryItems: p,
						imageHeight: g,
						isListing: b,
						isSponsored: C,
						isTileLayout: T,
						mediaMetadata: D = {},
						post: R,
						postId: A,
						postTitle: B,
						shouldShowTileLayoutOption: V,
						showPromotedCTA: W,
						subredditName: H,
						isVisible: U
					} = e,
					F = Object(o.e)(e => Object(I.d)(e, A)),
					G = F > 0,
					K = F < p.length - 1,
					$ = Object(h.a)(),
					Y = Object(i.useRef)(null),
					z = Object(i.useRef)(null),
					[J, q] = Object(i.useState)(U ? F : -1),
					[Q, X] = Object(i.useState)(U ? F : -1),
					Z = Object(l.a)(U),
					ee = Object(l.a)(F);
				Object(i.useEffect)(() => {
					(void 0 !== Z && Z !== U && U && J < 0 && Q < 0 || void 0 !== ee && ee !== F && U && (J > F || Q < F)) && (q(_(F, 1)), X(k(F, p.length, 1)))
				}, [Z, F, U, J, Q, ee, p.length, A]);
				const te = Object(i.useRef)(),
					se = Object(i.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t
							} = e;
							t ? (J < 0 || Q - J == 0) && (te.current = setTimeout(() => {
								const e = k(Q, p.length);
								e !== Q && X(e)
							}, 1e3)) : (J < 0 || Q - J == 0) && clearTimeout(te.current)
						})
					}, [J, Q, p.length]);
				Object(a.a)(z, se);
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
							isTileLayout: !T
						}))
					}, [t, A, T]),
					ae = Object(i.useCallback)(() => {
						if (!K) return;
						const e = F + 1;
						if (e + 1 >= Q) {
							const e = k(Q, p.length);
							e !== Q && X(e)
						}
						ie(e), $(u.b(A, e)), $(u.d(A, e + 1)), ne(e)
					}, [K, F, ne, ie, $, A, Q, p.length]),
					re = Object(i.useCallback)(() => {
						if (!G) return;
						const e = F - 1;
						if (e - 1 <= J) {
							const e = _(J);
							e !== J && q(e)
						}
						const t = F + 1;
						ie(e), $(u.a(A, t)), $(u.d(A, t - 1)), ne(e)
					}, [G, F, ne, ie, $, A, J]),
					de = Object(i.useCallback)(() => {
						const e = p[F] && p[F].outboundUrl;
						e && $(u.c(A, e))
					}, [$, A, F, p]);
				m(y.a.ArrowLeft, Y.current, re), m(y.a.ArrowRight, Y.current, ae);
				const le = p[F] && p[F].caption,
					ce = p[F] && p[F].outboundUrl,
					ue = ((e, t, s) => {
						const i = Object(w.f)(e),
							n = Object(w.g)(i),
							o = n.x / n.y < 1,
							a = Object(w.h)(e),
							r = Object(w.i)(e || {}, Object(w.c)(s), O.p);
						return s || r || a || o ? {
							height: t
						} : {
							paddingBottom: `${Object(O.B)(n.y,n.x)}%`
						}
					})(D, g, b);
				return n.a.createElement("div", {
					className: Object(r.a)(j.a.outerContainer),
					ref: Y,
					tabIndex: 0
				}, T ? n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
					className: Object(r.a)(j.a.tilesWrapper, {
						[j.a.blurredContent]: e.shouldBlur
					}),
					onClick: e.onClickRevealBlurred
				}, p.map((t, s) => {
					const i = t.mediaId,
						o = D && D[i];
					if (!o || !o.s) return null;
					const a = [...o && o.s ? [o.s] : [], ...o && o.p ? o.p : []],
						r = Object(w.d)(O.y, a);
					if (!r) return null;
					const d = o.s;
					return n.a.createElement("div", {
						style: {
							backgroundImage: `url(${"gif"in d?d.gif:"u"in r&&r.u})`
						},
						className: j.a.tileImage,
						onClick: e.shouldBlur ? void 0 : e => {
							e.preventDefault(), e.stopPropagation(), oe(), ie(s)
						},
						key: i
					})
				}), [1, 2, 3].map(e => n.a.createElement("div", {
					key: e,
					className: j.a.tilePlaceholder
				}))), e.shouldBlur && !e.isNsfwBlockingModalEligible && n.a.createElement(E.a, {
					isNSFW: !!e.isNSFW,
					isSpoiler: !!e.isSpoiler
				})) : n.a.createElement("div", {
					className: j.a.slideshowContainer,
					tabIndex: -1,
					ref: z,
					onClick: e.onClickRevealBlurred,
					style: ue
				}, n.a.createElement("div", {
					className: j.a.imagesWrapper
				}, n.a.createElement("ul", {
					className: j.a.slideWrapper
				}, p.map((t, s) => {
					const i = t.mediaId,
						o = D && D[i];
					if (!o || !o.s) return null;
					const a = t.caption ? t.caption : B,
						r = Object(c.a)(H ? `${H} - ${a}` : a, 300, d.jb),
						l = [...o && o.s ? [o.s] : [], ...o && o.p ? o.p : []],
						u = Object(w.d)(g, l);
					if (!u) return null;
					const m = e.shouldBlur && Object(w.d)(g, o.o || []) || void 0,
						h = s >= J && s <= Q;
					return n.a.createElement(M, {
						slideIndex: s,
						currentIndex: F,
						obfuscatedImage: m,
						optimalImage: u,
						originalImage: o.s,
						isListing: e.isListing,
						isSponsored: C,
						key: i,
						isReadyToShow: h,
						imgAltText: r,
						shouldBlur: e.shouldBlur,
						isNSFW: e.isNSFW,
						isNsfwBlockingModalEligible: e.isNsfwBlockingModalEligible,
						isSpoiler: e.isSpoiler
					})
				})), !e.shouldBlur && n.a.createElement(n.a.Fragment, null, n.a.createElement(L, {
					onClick: re,
					setFocusTo: z,
					hasMoreSlides: G,
					title: S._("Previous", null, {
						hk: "3dZcTi"
					}),
					iconClassName: j.a.prevIcon,
					className: j.a.prevButton
				}), n.a.createElement(L, {
					onClick: ae,
					setFocusTo: z,
					hasMoreSlides: K,
					title: S._("Next", null, {
						hk: "3Ajk1H"
					}),
					iconClassName: j.a.nextIcon,
					className: j.a.nextButton
				}))), p.length > 1 ? n.a.createElement(P, {
					currentSlide: F + 1,
					totalSlides: p.length,
					toggleTileLayout: V && oe || void 0
				}) : ""), !le && !ce || T || W ? !!s && !T && !W && n.a.createElement("div", {
					className: j.a.emptyCaptionBlock,
					style: {
						height: s
					}
				}) : n.a.createElement(N, {
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
				a = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/models/Prediction/index.ts"),
				d = s("./src/reddit/selectors/poll/index.ts"),
				l = s("./src/reddit/components/Econ/Prediction/async.ts"),
				c = s("./src/reddit/components/Poll/async.ts");
			const u = Object(a.c)({
				poll: d.e
			});
			t.a = Object(o.b)(u)(e => {
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

			function g() {
				return (g = Object.assign || function(e) {
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
					postId: b,
					showFull: x,
					...f
				} = e;
				const E = {
						[m.a.richTextContainerFull]: x,
						[m.a.richTextContainerTitleOnly]: h && !x,
						[m.a.richTextContainer]: !x && !h
					},
					v = {};
				x || (v.maxHeight = h ? `${r.m}px` : l ? `${r.l}px` : `${r.k}px`), d && (v.maxWidth = `${a.d}px`);
				const y = c && x;
				return n.a.createElement("div", g({
					className: Object(o.a)(E, i),
					style: v
				}, f), s, y && n.a.createElement(p, {
					canLoadContent: !!t,
					isExpando: u,
					postId: b
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
				a = s("./node_modules/react-redux/es/index.js"),
				r = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/hooks/usePrevious.ts"),
				l = s("./src/lib/intersectionObserver/index.ts"),
				c = s("./src/reddit/components/Media/constants.ts"),
				u = s("./src/reddit/components/Media/EmbedBox/index.tsx"),
				m = s("./src/reddit/components/Media/MediaContainer/index.tsx"),
				h = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				p = s("./src/reddit/models/Media/index.ts"),
				g = s("./src/reddit/components/Media/TwitterEmbed/index.m.less"),
				b = s.n(g);

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
					onIframeLoaded: g,
					embedBoxChildRef: y,
					source: w,
					title: O,
					postId: I
				} = e, [C, j] = Object(n.useState)(!1), S = Object(d.a)(t), T = Object(n.useRef)(), {
					height: M,
					isDeleted: L
				} = Object(a.e)(e => e.mediaEmbed[I] || {}), N = C ? L ? E : M : v;

				function P(e) {
					var t;
					C || (null === (t = null == T ? void 0 : T.current) || void 0 === t ? void 0 : t.contentWindow) !== e.source || "tweet-measured" !== e.data.action || j(!0)
				}
				return Object(n.useEffect)(() => (window.addEventListener("message", P), () => {
					T.current && Object(l.b)(T.current), window.removeEventListener("message", P)
				}), []), Object(n.useEffect)(() => {
					!t && S && j(!1)
				}, [S, t]), o.a.createElement(m.a, x({}, s, {
					alwaysWrapMedia: !0,
					height: N + 8,
					isTweet: !0,
					showFull: !s.isListing,
					width: f
				}), t && o.a.createElement("div", {
					className: b.a.tweetContainer,
					style: {
						height: N
					}
				}, !C && o.a.createElement("div", {
					className: Object(r.a)(Object(h.a)({
						isLoading: !0
					}), b.a.tweetPlaceholder)
				}), C && L && o.a.createElement("p", {
					className: b.a.tweetDeleted
				}, i.fbt._("This Tweet has been deleted.", null, {
					hk: "1LhcOw"
				})), o.a.createElement(u.a, {
					childRef: function(e) {
						T.current = e, e && Object(l.a)(e, (t, s) => {
							e && e.contentWindow && !M && s && (j(!1), e.contentWindow.postMessage("twitter-measure-requested", c.a))
						}), y(e)
					},
					className: Object(r.a)(b.a.tweetEmbedBox, {
						[b.a.isInvisible]: !C || L
					}),
					fullWidth: !0,
					height: N,
					isListing: s.isListing,
					isResponsive: !0,
					maxHeight: s.isListing ? p.j : null,
					onLoad: g,
					showCentered: s.showCentered,
					showFull: !0,
					source: w,
					title: O
				}), s.isListing && N > p.j && o.a.createElement("div", {
					className: b.a.seeMore
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
				return _e
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
				g = s("./src/higherOrderComponents/withMux/index.tsx"),
				b = s("./src/lib/ads/utils.ts"),
				x = s("./src/lib/classNames/index.ts"),
				f = s("./src/lib/constants/index.ts"),
				E = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				v = s("./src/lib/env/index.ts"),
				y = s("./src/lib/isUrl/index.ts"),
				w = s("./src/lib/objectSelector/index.ts"),
				O = s("./src/lib/onFocusAndVisibilityChange/index.ts"),
				I = s("./src/lib/sentry/index.ts"),
				C = s("./src/lib/truncateText/index.ts"),
				j = s("./src/reddit/actions/post.ts"),
				S = s("./src/reddit/components/AdViewability/index.tsx"),
				T = s("./src/reddit/components/Governance/VaultActionLink/async.ts"),
				M = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				L = s("./src/reddit/components/Media/constants.ts"),
				N = s("./src/reddit/components/Media/EmbedBox/index.tsx"),
				P = s("./src/reddit/components/Media/GalleryBox/index.tsx"),
				_ = s("./src/reddit/components/Media/ImageBox/index.tsx"),
				k = s("./src/reddit/components/Media/MediaContainer/index.tsx"),
				D = s("./src/reddit/components/Media/PollContainer/index.tsx"),
				R = s("./src/reddit/components/Media/RichTextContainer/index.tsx"),
				A = s("./src/reddit/components/Media/TwitterEmbed/index.tsx"),
				B = s("./src/reddit/components/Media/VideoBox/index.tsx"),
				V = s("./src/reddit/components/PlayButton/index.tsx"),
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
				te = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				se = s("./src/reddit/selectors/experiments/postSeo.ts"),
				ie = s("./src/reddit/selectors/media.ts"),
				ne = s("./src/reddit/selectors/meta.ts"),
				oe = s("./src/reddit/selectors/postCreations.ts"),
				ae = s("./src/reddit/selectors/posts.ts"),
				re = s("./src/reddit/selectors/seo/index.ts"),
				de = s("./src/reddit/selectors/telemetry.ts"),
				le = s("./src/reddit/selectors/user.ts"),
				ce = s("./src/reddit/components/Media/getResolution.ts"),
				ue = s("./src/reddit/components/Media/index.m.less"),
				me = s.n(ue);

			function he() {
				return (he = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const pe = Object(o.a)({
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
				ge = Object(g.a)(M.b, {
					playerName: "Reddit Player"
				}),
				be = 300,
				xe = " - ",
				fe = 1200,
				Ee = 75,
				ve = "player.js",
				ye = F.r + F.q,
				we = e => u.a.createElement("div", {
					className: Object(x.a)(me.a.visibilityWrapper, {
						[me.a.displayNone]: !e.isVisible
					})
				}, e.children),
				Oe = new Set([Z.o.EMBED, Z.o.LIVEVIDEO, Z.o.VIDEO, Z.o.GIFVIDEO]),
				Ie = e => !!e.media && Oe.has(e.media.type),
				Ce = new Set([Z.o.EMBED, Z.o.GALLERY, Z.o.GIFVIDEO, Z.o.IMAGE, Z.o.LIVEVIDEO, Z.o.VIDEO]),
				je = e => {
					let {
						post: t
					} = e;
					return !!t.media && Ce.has(t.media.type)
				},
				Se = Object(K.u)(),
				Te = Object(h.c)({
					canUseOCRAltText: (e, t) => Object(se.b)(e, t.post),
					OCRAltText: (e, t) => {
						let {
							post: s
						} = t;
						return Object(se.a)(e, s.id)
					},
					subredditOrProfileDisplayText: (e, t) => Object(se.i)(e, t),
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
						return Object(oe.M)(e, {
							postId: s.id
						})
					},
					shouldShowAltText: (e, t) => Object(re.d)(e, t),
					isGalleryTileLayout: (e, t) => {
						let {
							shouldShowGalleryTileOption: s,
							post: i,
							isGalleryTileLayoutDefault: n
						} = t;
						if (!s) return !1;
						const o = Object(ie.e)(e, i.id);
						return !(void 0 !== o || !n) || !!o
					},
					pageType: e => Object(de.d)(e).pageType,
					basePixelMetadata: (e, t) => {
						let {
							post: s
						} = t;
						return Object(ae.b)(e, s.id)
					},
					isBlockingInterstitialEnabled: ee.b,
					isBlockingInterstitialV2Enabled: ee.c,
					currentUserId: le.Db,
					isNSFW: (e, t) => {
						let {
							post: s,
							crosspost: i
						} = t;
						return Object(ie.b)(e, s.isNSFW, Boolean(i && i.isNSFW))
					},
					isSpoiler: (e, t) => {
						let {
							post: s,
							crosspost: i
						} = t;
						return Object(ie.c)(e, s.isSpoiler, Boolean(i && i.isSpoiler))
					},
					isBot: ne.d,
					nsfwBlurSubreddit: te.d
				}),
				Me = e => ({
					fireAdPixelsOfType: (t, s) => e(Object(j.z)(t, s)),
					openPost: t => e(Object(j.L)(t)),
					openPostLink: t => e(Object(j.bb)(Object(J.b)(t.permalink), t.id))
				}),
				Le = Object(m.b)(Te, Me),
				Ne = Object(w.b)(e => ({
					renderingObjectInfo: e.post,
					pageLayer: e.pageLayer
				}));
			class Pe extends u.a.Component {
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
							}, L.a), e.contentWindow.postMessage({
								context: ve,
								method: Z.g.Mute
							}, L.a)
						}
					}, this.pauseEmbed = (e, t) => {
						e.contentWindow && (t === Z.v.YouTube ? e.contentWindow.postMessage(JSON.stringify({
							event: "command",
							func: Z.A.Pause
						}), L.a) : e.contentWindow.postMessage({
							context: ve,
							method: Z.g.Pause
						}, L.a))
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
					Ie(this.props.post) && (this.visibilityChangeSubscriptionId = O.a.subscribe(e => {
						this.handleVisibilityChange(e)
					})), this.props.scrollerItemRef && je(this.props) && this.props.scrollerItemRef(this, this.state.canLoadContent)
				}
				componentWillUnmount() {
					this.visibilityChangeSubscriptionId && O.a.unsubscribe(this.visibilityChangeSubscriptionId), this.props.scrollerItemRef && je(this.props) && this.props.scrollerItemRef(void 0), window.removeEventListener("resize", this.updateDimensions)
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
					return i && (o += i), t && e ? o += `${xe}${t}` : s.title && (o += `${xe}${s.title}`), o.length > be ? Object(C.a)(o, be, f.jb) : o
				}
				getVideoExpandoMaxDimensions() {
					let e, t = Math.max(Z.j, this.state.viewportHeight),
						s = Math.min(fe, 16 * t / 9);
					s === fe && (t = 9 * fe / 16), e = this.state.viewportWidth >= G.c ? this.state.viewportWidth < F.l ? this.state.viewportWidth - ye - 2 * Ee : this.state.viewportWidth - ye - F.e - 2 * Ee : this.state.viewportWidth - 2 * Ee;
					const i = this.state.viewportHeight - 2 * Ee;
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
						post: o
					} = e;
					if (Object(Z.H)(o.media)) return {
						source: o.media.scrubberThumbSource,
						width: this.state.viewportWidth - 2 * Ee,
						height: this.state.viewportHeight - 2 * Ee
					};
					const a = o.media && o.media.obfuscated || "";
					let r = !o.media || Object(Z.N)(o.media) || Object(Z.G)(o.media) || Object(Z.E)(o.media) ? "" : o.media.content,
						[d, l] = !o.media || Object(Z.K)(o.media) || Object(Z.M)(o.media) || Object(Z.E)(o.media) ? [0, 0] : [o.media.height, o.media.width];
					if (i && o.media && Object(Z.E)(o.media)) {
						d = Object(z.b)(o.media.mediaMetadata || {}, Object(z.c)(n), Z.p, i) + Z.i, l = i
					}
					if (i && o.media && (o.media.type === Z.o.IMAGE || o.media.type === Z.o.GIFVIDEO)) {
						const e = ce.b(i, o.media.resolutions);
						e && (r = e.url, l = e.width, d = e.height)
					} else if (o && o.media && (!e.isListing || e.isExpando) && (o.media.type === Z.o.IMAGE || o.media.type === Z.o.GIFVIDEO)) {
						let e;
						(e = Object(Z.L)(o.media.height, o.media.width) && Object(_.b)(o.media.height) ? ce.c(o.media.height, o.media.width, o.media.resolutions) : ce.a(o.media.resolutions)) && (r = e.url, l = e.width, d = e.height)
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
					if (o.media && o.media.type === Z.o.VIDEO) {
						const t = d / l;
						e.isExpando ? (d = c, l = u) : t > Z.c ? (d = c, l = Math.min(Math.max(c / t, Z.r), u)) : (d = Math.min(Math.max(u * t, Z.q), c), l = u)
					}
					o.media && o.media.type === Z.o.EMBED && (o.isSurveyAd && (r = Object(b.a)(s, o.impressionId, o.postId), d = 450, l = 450), e.isExpando && o.media.provider !== Z.v.Twitter && (d = c, l = u));
					let m = !1;
					if (e.isMiniCard) {
						const e = d / l;
						m = Math.abs(e - Z.c) > .01
					}
					return {
						source: r,
						obfuscated: a,
						width: l,
						height: d,
						needsBackgroundBlur: m
					}
				}
				shouldBlur() {
					const {
						isBot: e,
						isExpando: t,
						isNSFW: s,
						isOverlay: i,
						isSpoiler: n,
						nsfwBlurSubreddit: o,
						theme: a
					} = this.props;
					if (e || t || this.state.isRevealed || i) return !1;
					const r = o && s;
					return s && !a.subredditContext.shouldShowNSFWContent || n || r
				}
				render() {
					var e;
					const {
						autoplayPref: t,
						className: s,
						crosspost: i,
						fireAdPixelsOfType: n,
						flairStyleTemplate: o,
						forceAspectRatio: a,
						isCommentsPage: r,
						isExpando: d,
						isGalleryTileLayout: c,
						isListing: m,
						isMediumHeight: h,
						isNSFW: p,
						isSpoiler: g,
						isNotCardView: b,
						isTitleOnly: x,
						nsfwBlurSubreddit: f,
						openPost: E,
						post: w,
						showCentered: O,
						showFull: C = !1,
						showPromotedCTA: j,
						subredditOrProfileDisplayText: M,
						currentUserId: L
					} = this.props, {
						canLoadContent: F,
						forcePause: G,
						shouldPause: K,
						shouldStop: J,
						viewportWidth: ee
					} = this.state, te = f && p;
					if (!w.media) return null;
					const se = G || K,
						ie = J,
						{
							source: ne,
							obfuscated: oe,
							height: ae,
							width: re,
							needsBackgroundBlur: le
						} = this.getMediaInfo(this.props, this.state, L),
						ce = {
							showCentered: O,
							isListing: m,
							showFull: C,
							height: ae,
							width: re
						},
						ue = {
							...ce,
							className: s,
							forceAspectRatio: a,
							viewportWidth: ee
						},
						be = this.shouldBlur(),
						xe = !((null === (e = w.pollData) || void 0 === e ? void 0 : e.isPrediction) && !r),
						fe = !(!w.isSponsored || !w.source),
						ve = Object(de.rb)() || "",
						ye = w.isSponsored ? Object(W.b)(w.id, {
							fireAdPixelsOfType: n,
							openPost: E
						}) : l.a,
						Oe = e => {
							ye && ye(e, this.props.post, this.props.basePixelMetadata, void 0, this.props.pageType)
						};
					if (oe && be) return u.a.createElement(k.a, he({}, ue, {
						blurSrc: oe
					}), u.a.createElement(we, {
						isVisible: F
					}, u.a.createElement(_.a, he({}, ce, {
						altText: this.getAltText(),
						className: this.props.imageBoxClassName,
						contentImageClassName: this.props.imageBoxContentImageClassName,
						imageClassName: this.props.imageBoxClassName,
						isListing: m,
						isNSFW: p,
						isNsfwBlockingModalEligible: te,
						isSpoiler: g,
						isVideoThumbnail: !!w.media && w.media.type === Z.o.VIDEO,
						onClick: this.onClickRevealBlurred,
						postId: w.id,
						shouldBlur: be,
						source: oe,
						outboundUrl: fe && w.source.outboundUrl || void 0,
						originalSource: ne,
						onPostMediaClick: this.handlePostMediaClick
					}))));
					if (!w.media) return null;
					switch (w.media.type) {
						case Z.o.RTJSON:
							const e = Object(Y.a)(w, null);
							if (null === e) return null;
							if (!C && !Object($.a)(w)) return null;
							const n = w.isMeta ? Object(X.a)(e, w.id) : e;
							return u.a.createElement(u.a.Fragment, null, xe && u.a.createElement(R.a, {
								canLoadContent: F,
								className: s,
								"data-click-id": "text",
								isCommentsPage: r,
								isExpando: d,
								isMediumHeight: h,
								isRichTextTruncated: w.media.isRichtextPreview,
								isTitleOnly: x,
								postId: w.id,
								showFull: C
							}, u.a.createElement(U.a, {
								altText: this.getAltText(),
								content: n,
								flairStyleTemplate: o,
								isListing: m,
								isNSFW: p,
								isNsfwBlockingModalEligible: te,
								isSpoiler: g,
								mediaMetadata: w.media.mediaMetadata,
								onClickRevealBlurred: this.onClickRevealBlurred,
								postId: w.id,
								rtJsonElementProps: Ne(this.props),
								renderMediaAsLinks: m,
								shouldBlur: be
							}), u.a.createElement(T.b, {
								content: n
							})), u.a.createElement(D.a, {
								postId: w.id,
								isCommentsPage: !!r
							}));
						case Z.o.TEXT:
							if (Object(q.a)(w)) {
								const e = "Text post should not include body content";
								return I.c.withScope(t => {
									t.setExtra("info", {
										post: w,
										isListing: m,
										isCommentsPage: r
									}), I.c.captureMessage(e)
								}), Object(v.a)() && console.log(`${w.id}: ${e}`), u.a.createElement(u.a.Fragment, null, xe && u.a.createElement(R.a, {
									postId: w.id,
									className: s,
									"data-click-id": "text",
									isCommentsPage: r,
									showFull: C
								}, u.a.createElement(H.a, {
									flairStyleTemplate: o,
									html: w.isMeta ? Object(Q.a)(w.media.content, w.id, me.a.hiddenLink) : w.media.content
								})), u.a.createElement(D.a, {
									postId: w.id,
									isCommentsPage: !!r
								}))
							}
							return u.a.createElement(D.a, {
								postId: w.id,
								isCommentsPage: !!r
							});
						case Z.o.EMBED:
							return this.props.isMiniCard && w.preview && w.preview.url ? u.a.createElement(k.a, he({}, ue, {
								alwaysWrapMedia: !0
							}), u.a.createElement(we, {
								isVisible: F
							}, u.a.createElement(u.a.Fragment, null, u.a.createElement(_.a, he({}, ce, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: d,
								isListing: m,
								isNSFW: p,
								isCrosspost: !!i,
								isSpoiler: g,
								postId: w.id,
								shouldBlur: be,
								source: w.preview.url,
								originalSource: w.preview.url,
								onPostMediaClick: this.handlePostMediaClick
							})), u.a.createElement(V.a, null)))) : Z.h.has(w.media.provider) ? w.media.provider === Z.v.Twitter ? u.a.createElement(A.a, {
								canLoadContent: F,
								embedBoxChildRef: this.storeChildRef,
								mediaContainerProps: ue,
								onIframeLoaded: this.onIframeLoaded,
								source: ne,
								title: w.title,
								postId: w.id
							}) : u.a.createElement(k.a, he({}, ue, {
								alwaysWrapMedia: !0,
								height: d ? ae : Z.j,
								width: d ? re : Z.j * (16 / 9)
							}), F && u.a.createElement(N.a, {
								childRef: this.storeChildRef,
								height: d ? ae : Z.j,
								width: d ? re : void 0,
								isListing: m,
								isResponsive: !0,
								onLoad: this.onIframeLoaded,
								showCentered: O,
								showFull: C,
								source: ne,
								title: w.title
							})) : u.a.createElement(k.a, he({}, ue, {
								alwaysWrapMedia: !0
							}), F && u.a.createElement(N.a, he({}, ce, {
								isResponsive: d || w.media.provider === Z.v.IFrameEmbed,
								title: w.title,
								childRef: this.storeChildRef,
								onLoad: this.onIframeLoaded,
								source: ne,
								fullWidth: w.media.provider === Z.v.IFrameEmbed
							})));
						case Z.o.GIFVIDEO: {
							let e = ae,
								t = re;
							return e > Z.j && (t = re / ae * (e = Z.j)), u.a.createElement(k.a, he({}, ue, {
								blurSrc: le ? w.media.gifBackgroundImage : void 0
							}), u.a.createElement(we, {
								isVisible: F
							}, u.a.createElement(B.a, he({}, ce, {
								isNotCardView: b,
								height: d ? void 0 : e,
								width: d ? void 0 : t,
								postId: w.id,
								shouldLoad: !0,
								shouldPause: m && se,
								source: ne,
								originalSource: w.media.content,
								isPromoted: w.isSponsored
							}))))
						}
						case Z.o.VIDEO: {
							const e = w.media.posterUrl || w.preview && w.preview.url;
							if (this.props.isMiniCard && e) return u.a.createElement(k.a, he({}, ue, {
								alwaysWrapMedia: !0
							}), u.a.createElement(we, {
								isVisible: F
							}, u.a.createElement(u.a.Fragment, null, u.a.createElement(_.a, he({}, ce, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: d,
								isListing: m,
								isNSFW: p,
								isCrosspost: !!i,
								isSpoiler: g,
								postId: w.id,
								shouldBlur: be,
								source: e,
								originalSource: e,
								onPostMediaClick: this.handlePostMediaClick
							})), u.a.createElement(V.a, null))));
							const s = w.reactedFrom && w.attributionInfo ? {
									id: w.id,
									reactedFrom: {
										...w.reactedFrom
									},
									attributionInfo: {
										...w.attributionInfo
									},
									isReactAllowed: w.isReactAllowed
								} : void 0,
								n = u.a.createElement(k.a, he({}, ue, {
									alwaysWrapMedia: !0,
									isVideo: !0
								}), F && u.a.createElement(ge, {
									autoPlay: t && !1 === K,
									isExpando: d,
									shouldLoad: !0,
									shouldPause: se,
									shouldStop: ie,
									hlsSource: w.media.hlsUrl,
									mpegDashSource: w.media.dashUrl,
									isGif: w.media.isGif,
									scrubberThumbSource: w.media.scrubberThumbSource,
									postId: w.id,
									isSponsored: w.isSponsored,
									onAdPostClick: Oe,
									callToActionSource: w.source || void 0,
									callToActionText: w.callToAction,
									isListing: m,
									posterUrl: w.media.posterUrl,
									muxVideoDuration: void 0,
									muxVideoId: w.id,
									muxVideoIsLive: !1,
									muxVideoTitle: w.title,
									sessionId: ve,
									reactPostInfo: s,
									isCommentsPage: r
								}));
							return w.isSponsored ? u.a.createElement(S.a, {
								post: w,
								trackVideo: !0
							}, n) : n
						}
						case Z.o.LIVEVIDEO:
							return u.a.createElement(we, {
								isVisible: F
							}, u.a.createElement(pe, {
								className: this.props.isMiniCard ? me.a.miniCardVideo : void 0,
								canLoad: F,
								postId: w.id,
								postTitle: w.title,
								shouldPause: se || ie,
								url: w.media.hlsUrl
							}));
						case Z.o.IMAGE:
							const a = this.state.viewportHeight - 2 * Ee,
								l = this.state.viewportWidth - 2 * Ee;
							let f = ne;
							return this.props.isMiniCard && !this.props.isMiniCardHQPreviews && (w.thumbnail && Object(y.a)(w.thumbnail.url) ? f = w.thumbnail.url : w.preview && Object(y.a)(w.preview.url) && (f = w.preview.url)), u.a.createElement(k.a, he({}, ue, {
								blurSrc: le ? f : void 0,
								isExpando: !!d
							}), u.a.createElement(we, {
								isVisible: F
							}, u.a.createElement(_.a, he({}, ce, {
								altText: this.getAltText(),
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: d,
								isListing: m,
								isNSFW: p,
								isCrosspost: !!i,
								isSpoiler: g,
								maxHeight: d ? a : void 0,
								maxWidth: d ? l : void 0,
								postId: w.id,
								shouldBlur: be,
								source: f,
								outboundUrl: fe && w.source.outboundUrl || void 0,
								isSponsored: w.isSponsored,
								originalSource: w.media.content,
								onPostMediaClick: this.handlePostMediaClick
							}))));
						case Z.o.GALLERY:
							const E = Object(z.b)(w.media.mediaMetadata || {}, Object(z.c)(m), Z.p, re),
								L = Object(z.a)(w.media.gallery, w.isSponsored);
							return u.a.createElement(k.a, he({}, ue, {
								blurSrc: le ? ne : void 0,
								isExpando: !!d,
								maxGalleryHeight: E + L,
								className: me.a.galleryMediaContainer,
								isGalleryTileLayout: c
							}), u.a.createElement(we, {
								isVisible: F
							}, u.a.createElement(P.a, {
								post: w,
								postId: w.id,
								postTitle: w.title,
								subredditName: M,
								galleryItems: w.media.gallery ? w.media.gallery.items : [],
								mediaMetadata: w.media.mediaMetadata || {},
								imageHeight: E,
								captionHeight: L,
								isSponsored: w.isSponsored,
								showPromotedCTA: !!j,
								className: this.props.imageBoxClassName,
								isListing: m,
								isNSFW: p,
								isNsfwBlockingModalEligible: te,
								isSpoiler: g,
								shouldBlur: be,
								onClickRevealBlurred: this.onClickRevealBlurred,
								isTileLayout: !!c,
								shouldShowTileLayoutOption: this.props.shouldShowGalleryTileOption,
								isVisible: F
							})));
						default:
							return null
					}
				}
			}
			const _e = Se(Le(Object(p.a)(Object(E.a)(Pe))))
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
			t.a = Object(o.a)(e => {
				let {
					flairStyleTemplate: t,
					...s
				} = e;
				return n.a.createElement(d.a, l({
					style: {
						color: Object(r.a)(Object(a.a)({
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
				return g
			})), s.d(t, "e", (function() {
				return b
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
				p = (e, t) => e.some(e => e.y > t && Object(o.L)(e.y, e.x));

			function g(e, t) {
				return e && e.items && !t && e.items.some(e => void 0 !== e.caption || void 0 !== e.outboundUrl) ? o.i : 0
			}
			const b = e => {
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
					gallery: a.r(e, t, s),
					post: a.H(e, t),
					...a.n(e)
				}),
				d = (e, t) => s => ({
					...r(s, e, t),
					action: i.c.VIEW,
					noun: "media",
					source: "gallery",
					media: a.A(s, e)
				}),
				l = (e, t) => s => {
					const d = Object(n.a)(t),
						l = Object(o.d)(s, e) + 1;
					return {
						...r(s, e, l),
						action: i.c.CLICK,
						noun: "outbound_url",
						source: "gallery",
						media: {
							...a.A(s, e),
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab.bbb182214a68e7c56a96.js.map