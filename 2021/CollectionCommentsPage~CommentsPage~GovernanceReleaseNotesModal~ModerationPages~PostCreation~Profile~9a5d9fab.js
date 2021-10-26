// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab.33fd159b036e1153af60.js
// Retrieved at 10/26/2021, 2:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"], {
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
					experimentName: u.od
				});
				return Object(u.Oe)(t) ? void 0 : t
			}, e => {
				const t = Object(m.c)(e, {
					experimentEligibilitySelector: m.a,
					experimentName: u.pd
				});
				return Object(u.Oe)(t) ? void 0 : t
			}, (e, t) => e === u.rd.Enabled && t === u.rd.Enabled);
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
					respectDoNotTrack: S,
					saltLength: j,
					saltTimeToLive: T,
					viewerUserIdLength: L
				} = {
					...O,
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
				N.displayName = w(e), N.ANONYMOUS_USER_ID = s, N.DEBUG = l, N.DISABLE_COOKIES = u, N.DURATION_LIVE = 1 / 0, N.ENV_KEY = m, N.LOCAL_STORAGE_SALT_KEY = f, N.LOCAL_STORAGE_VIEWER_USER_ID_KEY = E, N.PLAYER_NAME = I, N.PLAYER_VERSION = C, N.RESPECT_DO_NOT_TRACK = S, N.SALT_LENGTH = j, N.SALT_TIME_TO_LIVE = T, N.STREAM_TYPE_LIVE = "live", N.STREAM_TYPE_ON_DEMAND = "on-demand", N.VIEWER_USER_ID_LENGTH = L;
				const M = Object(i.forwardRef)((e, t) => n.a.createElement(N, y({}, e, {
						forwardedRef: t
					}))),
					_ = Object(o.c)({
						redditUserId: b.i,
						isMuxEnabled: h
					});
				return Object(a.b)(_, null, null, {
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
				w = s("./src/reddit/helpers/mediaGallery/index.tsx"),
				O = s("./src/reddit/models/Media/index.ts"),
				I = s("./src/reddit/selectors/media.ts"),
				C = s("./src/reddit/components/Media/GalleryBox/index.m.less"),
				S = s.n(C);
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
				}, g = Object(w.c)(l), x = o.y > g && Object(O.K)(o.y, o.x), f = x ? {} : {
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
			}, N = e => n.a.createElement("a", {
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
			}))), M = e => n.a.createElement("div", {
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
			}, Object(w.e)(e.outboundUrl)), n.a.createElement(b.a, {
				className: S.a.linkIcon
			})))), _ = e => n.a.createElement("div", {
				className: S.a.slideIndicator,
				onClick: e.toggleTileLayout ? t => {
					t.preventDefault(), t.stopPropagation(), e.toggleTileLayout()
				} : void 0
			}, e.toggleTileLayout && n.a.createElement(g.a, {
				className: S.a.tileIcon
			}), e.currentSlide, "/", e.totalSlides), D = (e, t = 4) => {
				let s = e - t;
				return s < 0 && (s = 0), s
			}, R = (e, t, s = 4) => {
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
						isSponsored: C,
						isTileLayout: j,
						mediaMetadata: T = {},
						post: P,
						postId: A,
						postTitle: V,
						shouldShowTileLayoutOption: k,
						showPromotedCTA: B,
						subredditName: W,
						isVisible: H
					} = e,
					U = Object(a.e)(e => Object(I.b)(e, A)),
					F = U > 0,
					G = U < p.length - 1,
					K = Object(h.a)(),
					Y = Object(i.useRef)(null),
					$ = Object(i.useRef)(null),
					[z, J] = Object(i.useState)(H ? U : -1),
					[q, Q] = Object(i.useState)(H ? U : -1),
					X = Object(l.a)(H),
					Z = Object(l.a)(U);
				Object(i.useEffect)(() => {
					(void 0 !== X && X !== H && H && z < 0 && q < 0 || void 0 !== Z && Z !== U && H && (z > U || q < U)) && (J(D(U, 1)), Q(R(U, p.length, 1)))
				}, [X, U, H, z, q, Z, p.length, A]);
				const ee = Object(i.useRef)(),
					te = Object(i.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t
							} = e;
							t ? (z < 0 || q - z == 0) && (ee.current = setTimeout(() => {
								const e = R(q, p.length);
								e !== q && Q(e)
							}, 1e3)) : (z < 0 || q - z == 0) && clearTimeout(ee.current)
						})
					}, [z, q, p.length]);
				Object(o.a)($, te);
				const se = Object(i.useCallback)(e => {
						t(Object(x.f)({
							postId: A,
							index: e
						}))
					}, [t, A]),
					ie = Object(i.useCallback)(e => {
						t(Object(f.z)(P, v.a.GalleryItemImpression, `Slide${e}`))
					}, [t, P]),
					ne = Object(i.useCallback)(() => {
						t(Object(x.i)({
							postId: A,
							isTileLayout: !j
						}))
					}, [t, A, j]),
					ae = Object(i.useCallback)(() => {
						if (!G) return;
						const e = U + 1;
						if (e + 1 >= q) {
							const e = R(q, p.length);
							e !== q && Q(e)
						}
						se(e), K(u.b(A, e)), K(u.d(A, e + 1)), ie(e)
					}, [G, U, ie, se, K, A, q, p.length]),
					oe = Object(i.useCallback)(() => {
						if (!F) return;
						const e = U - 1;
						if (e - 1 <= z) {
							const e = D(z);
							e !== z && J(e)
						}
						const t = U + 1;
						se(e), K(u.a(A, t)), K(u.d(A, t - 1)), ie(e)
					}, [F, U, ie, se, K, A, z]),
					re = Object(i.useCallback)(() => {
						const e = p[U] && p[U].outboundUrl;
						e && K(u.c(A, e))
					}, [K, A, U, p]);
				m(y.a.ArrowLeft, Y.current, oe), m(y.a.ArrowRight, Y.current, ae);
				const de = p[U] && p[U].caption,
					le = p[U] && p[U].outboundUrl,
					ce = ((e, t, s) => {
						const i = Object(w.f)(e),
							n = Object(w.g)(i),
							a = n.x / n.y < 1,
							o = Object(w.h)(e),
							r = Object(w.i)(e || {}, Object(w.c)(s), O.p);
						return s || r || o || a ? {
							height: t
						} : {
							paddingBottom: `${Object(O.B)(n.y,n.x)}%`
						}
					})(T, b, g);
				return n.a.createElement("div", {
					className: Object(r.a)(S.a.outerContainer),
					ref: Y,
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
						r = Object(w.d)(O.y, o);
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
					ref: $,
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
					const o = t.caption ? t.caption : V,
						r = Object(c.a)(W ? `${W} - ${o}` : o, 300, d.hb),
						l = [...a && a.s ? [a.s] : [], ...a && a.p ? a.p : []],
						u = Object(w.d)(b, l);
					if (!u) return null;
					const m = e.shouldBlur && Object(w.d)(b, a.o || []) || void 0,
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
				})), !e.shouldBlur && n.a.createElement(n.a.Fragment, null, n.a.createElement(N, {
					onClick: oe,
					setFocusTo: $,
					hasMoreSlides: F,
					title: "Previous",
					iconClassName: S.a.prevIcon,
					className: S.a.prevButton
				}), n.a.createElement(N, {
					onClick: ae,
					setFocusTo: $,
					hasMoreSlides: G,
					title: "Next",
					iconClassName: S.a.nextIcon,
					className: S.a.nextButton
				}))), p.length > 1 ? n.a.createElement(_, {
					currentSlide: U + 1,
					totalSlides: p.length,
					toggleTileLayout: k && ne || void 0
				}) : ""), !de && !le || j || B ? !!s && !j && !B && n.a.createElement("div", {
					className: S.a.emptyCaptionBlock,
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
					source: w,
					title: O,
					postId: I
				} = e, [C, S] = Object(n.useState)(!1), j = Object(d.a)(t), T = Object(n.useRef)(), {
					height: L,
					isDeleted: N
				} = Object(o.e)(e => e.mediaEmbed[I] || {}), M = N ? E : L || v;

				function _(e) {
					var t;
					C || (null === (t = null == T ? void 0 : T.current) || void 0 === t ? void 0 : t.contentWindow) !== e.source || "tweet-measured" !== e.data.action || S(!0)
				}
				return Object(n.useEffect)(() => (window.addEventListener("message", _), () => {
					T.current && Object(l.b)(T.current), window.removeEventListener("message", _)
				}), []), Object(n.useEffect)(() => {
					!t && j && S(!1)
				}, [j, t]), a.a.createElement(m.a, x({}, s, {
					alwaysWrapMedia: !0,
					height: M,
					showFull: !s.isListing,
					width: f
				}), t && a.a.createElement(a.a.Fragment, null, N && a.a.createElement("p", {
					className: g.a.tweetDeleted
				}, i.fbt._("This Tweet has been deleted.", null, {
					hk: "1LhcOw"
				})), !N && a.a.createElement(a.a.Fragment, null, !C && a.a.createElement("div", {
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
						[g.a.isInvisible]: !C
					}),
					height: M,
					isListing: s.isListing,
					isResponsive: !0,
					maxHeight: s.isListing ? p.j : null,
					onLoad: b,
					showCentered: s.showCentered,
					showFull: !0,
					source: w,
					title: O,
					width: f
				}), s.isListing && M > p.j && a.a.createElement("div", {
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
				return ye
			}));
			var i = s("./node_modules/core-js/modules/web.dom.iterable.js"),
				n = s.n(i),
				a = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/lodash/debounce.js"),
				r = s.n(o),
				d = s("./node_modules/react/index.js"),
				l = s.n(d),
				c = s("./node_modules/react-redux/es/index.js"),
				u = s("./node_modules/reselect/es/index.js"),
				m = s("./src/higherOrderComponents/withMux/index.tsx"),
				h = s("./src/lib/classNames/index.ts"),
				p = s("./src/lib/constants/index.ts"),
				b = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				g = s("./src/lib/env/index.ts"),
				x = s("./src/lib/isUrl/index.ts"),
				f = s("./src/lib/objectSelector/index.ts"),
				E = s("./src/lib/onFocusAndVisibilityChange/index.ts"),
				v = s("./src/lib/sentry/index.ts"),
				y = s("./src/lib/truncateText/index.ts"),
				w = s("./src/reddit/components/AdViewability/index.tsx"),
				O = s("./src/reddit/components/Governance/VaultActionLink/async.ts"),
				I = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				C = s("./src/reddit/components/Media/constants.ts"),
				S = s("./src/reddit/components/Media/EmbedBox/index.tsx"),
				j = s("./src/reddit/components/Media/GalleryBox/index.tsx"),
				T = s("./src/reddit/components/Media/ImageBox/index.tsx"),
				L = s("./src/reddit/components/Media/MediaContainer/index.tsx"),
				N = s("./src/reddit/components/Media/PollContainer/index.tsx"),
				M = s("./src/reddit/components/Media/RichTextContainer/index.tsx"),
				_ = s("./src/reddit/components/Media/TwitterEmbed/index.tsx"),
				D = s("./src/reddit/components/Media/VideoBox/index.tsx"),
				R = s("./src/reddit/components/PlayButton/index.tsx"),
				P = s("./src/reddit/components/RawHTMLDisplay/Media.tsx"),
				A = s("./src/reddit/components/RichTextJson/index.tsx"),
				V = s("./src/reddit/constants/componentSizes.ts"),
				k = s("./src/reddit/constants/screenWidths.ts"),
				B = s("./src/reddit/contexts/PageLayer/index.tsx"),
				W = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				H = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				U = s("./src/reddit/helpers/mediaGallery/index.tsx"),
				F = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				G = s("./src/reddit/helpers/stripMetaLinks/fromRawHtml.ts"),
				K = s("./src/reddit/helpers/stripMetaLinks/fromRTJ.ts"),
				Y = s("./src/reddit/models/Media/index.ts"),
				$ = s("./src/reddit/selectors/experiments/postSeo.ts"),
				z = s("./src/reddit/selectors/media.ts"),
				J = s("./src/reddit/selectors/postCreations.ts"),
				q = s("./src/reddit/selectors/posts.ts"),
				Q = s("./src/reddit/selectors/seo/index.ts"),
				X = s("./src/reddit/selectors/telemetry.ts"),
				Z = s("./src/reddit/components/Media/getResolution.ts"),
				ee = s("./src/reddit/components/Media/index.m.less"),
				te = s.n(ee);

			function se() {
				return (se = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const ie = Object(a.a)({
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
				ne = Object(m.a)(I.b, {
					playerName: "Reddit Player"
				}),
				ae = 300,
				oe = " - ",
				re = 1200,
				de = 75,
				le = "player.js",
				ce = V.r + V.q,
				ue = e => l.a.createElement("div", {
					className: Object(h.a)(te.a.visibilityWrapper, {
						[te.a.displayNone]: !e.isVisible
					})
				}, e.children),
				me = new Set([Y.o.EMBED, Y.o.LIVEVIDEO, Y.o.VIDEO, Y.o.GIFVIDEO]),
				he = e => !!e.media && me.has(e.media.type),
				pe = new Set([Y.o.EMBED, Y.o.GALLERY, Y.o.GIFVIDEO, Y.o.IMAGE, Y.o.LIVEVIDEO, Y.o.VIDEO]),
				be = ({
					post: e
				}) => !!e.media && pe.has(e.media.type),
				ge = Object(B.u)(),
				xe = Object(u.c)({
					canUseOCRAltText: (e, t) => Object($.b)(e, t.post),
					OCRAltText: (e, {
						post: t
					}) => Object($.a)(e, t.id),
					subredditOrProfileDisplayText: (e, t) => Object($.i)(e, t),
					subredditOrProfile: (e, {
						post: t
					}) => Object(q.U)(e, {
						postId: t.id
					}),
					isEditing: (e, {
						post: t
					}) => Object(J.K)(e, {
						postId: t.id
					}),
					shouldShowAltText: (e, t) => Object(Q.d)(e, t),
					isGalleryTileLayout: (e, {
						shouldShowGalleryTileOption: t,
						post: s,
						isGalleryTileLayoutDefault: i
					}) => {
						if (!t) return !1;
						const n = Object(z.c)(e, s.id);
						return !(void 0 !== n || !i) || !!n
					}
				}),
				fe = Object(c.b)(xe),
				Ee = Object(f.b)(e => ({
					renderingObjectInfo: e.post,
					pageLayer: e.pageLayer
				}));
			class ve extends l.a.Component {
				constructor(e) {
					super(e), this.pauseContent = () => {
						this.shouldFocusContentDebouncer(!1)
					}, this.stopContent = () => {
						const {
							media: e
						} = this.props.post;
						if (e && Y.d.has(e.type)) {
							if (this.pauseContent(), this.iframe) {
								const t = e.type === Y.o.EMBED ? e.provider : null;
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
						return !!e && Y.d.has(e.type)
					}, this.shouldFocusContentDebouncer = r()(e => {
						const {
							media: t
						} = this.props.post, {
							autoplayPref: s
						} = this.props;
						if (t && Y.d.has(t.type)) {
							if (this.iframe) {
								const i = t.type === Y.o.EMBED ? t.provider : null;
								i && !Y.s.has(i) ? !s && e || this.toggleEmbedAutoplay(this.iframe, !e) : e || this.pauseEmbed(this.iframe, i)
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
							const s = t ? Y.g.Pause : Y.g.Play;
							e.contentWindow.postMessage({
								context: le,
								method: s
							}, C.a), e.contentWindow.postMessage({
								context: le,
								method: Y.g.Mute
							}, C.a)
						}
					}, this.pauseEmbed = (e, t) => {
						e.contentWindow && (t === Y.v.YouTube ? e.contentWindow.postMessage(JSON.stringify({
							event: "command",
							func: Y.A.Pause
						}), C.a) : e.contentWindow.postMessage({
							context: le,
							method: Y.g.Pause
						}, C.a))
					}, this.onIframeLoaded = () => {
						const {
							media: e
						} = this.props.post, {
							autoplayPref: t
						} = this.props, s = e && e.type === Y.o.EMBED ? e.provider : null;
						if (this.iframe && s && !Y.s.has(s)) {
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
					}, this.isSpoiler = () => this.props.post.isSpoiler || !(!this.props.crosspost || !this.props.crosspost.isSpoiler), this.isNSFW = () => this.props.post.isNSFW || !(!this.props.crosspost || !this.props.crosspost.isNSFW), this.state = {
						canLoadContent: e.shouldLoad || !1,
						forcePause: !1,
						isRevealed: !1,
						shouldPause: void 0 === e.shouldPause || e.shouldPause,
						shouldStop: void 0 === e.shouldStop || e.shouldStop,
						viewportHeight: Y.e,
						viewportWidth: Y.f
					}
				}
				UNSAFE_componentWillMount() {
					"undefined" != typeof window && (this.updateDimensions(), window.addEventListener("resize", this.updateDimensions))
				}
				componentDidMount() {
					he(this.props.post) && (this.visibilityChangeSubscriptionId = E.a.subscribe(e => {
						this.handleVisibilityChange(e)
					})), this.props.scrollerItemRef && be(this.props) && this.props.scrollerItemRef(this, this.state.canLoadContent)
				}
				componentWillUnmount() {
					this.visibilityChangeSubscriptionId && E.a.unsubscribe(this.visibilityChangeSubscriptionId), this.props.scrollerItemRef && be(this.props) && this.props.scrollerItemRef(void 0), window.removeEventListener("resize", this.updateDimensions)
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
					return i && (a += i), t && e ? a += `${oe}${t}` : s.title && (a += `${oe}${s.title}`), a.length > ae ? Object(y.a)(a, ae, p.hb) : a
				}
				getVideoExpandoMaxDimensions() {
					let e, t = Math.max(Y.j, this.state.viewportHeight),
						s = Math.min(re, 16 * t / 9);
					s === re && (t = 9 * re / 16), e = this.state.viewportWidth >= k.c ? this.state.viewportWidth < V.l ? this.state.viewportWidth - ce - 2 * de : this.state.viewportWidth - ce - V.e - 2 * de : this.state.viewportWidth - 2 * de;
					const i = this.state.viewportHeight - 2 * de;
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
					let s = Y.j,
						i = Y.n;
					return e.isExpando ? this.getVideoExpandoMaxDimensions() : (e.isPromotedTrend && (s = Y.t, i = Y.u), {
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
					if (Object(Y.H)(n.media)) return {
						source: n.media.scrubberThumbSource,
						width: this.state.viewportWidth - 2 * de,
						height: this.state.viewportHeight - 2 * de
					};
					const a = n.media && n.media.obfuscated || "";
					let o = !n.media || Object(Y.M)(n.media) || Object(Y.G)(n.media) || Object(Y.E)(n.media) ? "" : n.media.content,
						[r, d] = !n.media || Object(Y.J)(n.media) || Object(Y.L)(n.media) || Object(Y.E)(n.media) ? [0, 0] : [n.media.height, n.media.width];
					if (s && n.media && Object(Y.E)(n.media)) {
						r = Object(U.b)(n.media.mediaMetadata || {}, Object(U.c)(i), Y.p, s) + Y.i, d = s
					}
					if (s && n.media && (n.media.type === Y.o.IMAGE || n.media.type === Y.o.GIFVIDEO)) {
						const e = Z.b(s, n.media.resolutions);
						e && (o = e.url, d = e.width, r = e.height)
					} else if (n && n.media && (!e.isListing || e.isExpando) && (n.media.type === Y.o.IMAGE || n.media.type === Y.o.GIFVIDEO)) {
						let e;
						(e = Object(Y.K)(n.media.height, n.media.width) && Object(T.b)(n.media.height) ? Z.c(n.media.height, n.media.width, n.media.resolutions) : Z.a(n.media.resolutions)) && (o = e.url, d = e.width, r = e.height)
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
					if (n.media && n.media.type === Y.o.VIDEO) {
						const t = r / d;
						e.isExpando ? (r = l, d = c) : t > Y.c ? (r = l, d = Math.min(Math.max(l / t, Y.r), c)) : (r = Math.min(Math.max(c * t, Y.q), l), d = c)
					}
					n.media && n.media.type === Y.o.EMBED && e.isExpando && n.media.provider !== Y.v.Twitter && (r = l, d = c);
					let u = !1;
					if (e.isMiniCard) {
						const e = r / d;
						u = Math.abs(e - Y.c) > .01
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
						className: t,
						crosspost: s,
						flairStyleTemplate: i,
						forceAspectRatio: n,
						isCommentsPage: a,
						isExpando: o,
						isGalleryTileLayout: r,
						isListing: d,
						isMediumHeight: c,
						isNotCardView: u,
						isTitleOnly: m,
						post: h,
						showCentered: p,
						showFull: b = !1,
						showPromotedCTA: f,
						subredditOrProfileDisplayText: E
					} = this.props, {
						canLoadContent: y,
						forcePause: I,
						shouldPause: C,
						shouldStop: V,
						viewportWidth: k
					} = this.state;
					if (!h.media) return null;
					const B = I || C,
						$ = V,
						{
							source: z,
							obfuscated: J,
							height: q,
							width: Q,
							needsBackgroundBlur: Z
						} = this.getMediaInfo(this.props, this.state),
						ee = {
							showCentered: p,
							isListing: d,
							showFull: b,
							height: q,
							width: Q
						},
						ae = {
							...ee,
							className: t,
							forceAspectRatio: n,
							viewportWidth: k
						},
						oe = this.shouldBlur(),
						re = !((null === (e = h.pollData) || void 0 === e ? void 0 : e.isPrediction) && !a),
						le = !(!h.isSponsored || !h.source),
						ce = Object(X.videoCorrelationId)() || "";
					if (J && oe) return l.a.createElement(L.a, se({}, ae, {
						blurSrc: J
					}), l.a.createElement(ue, {
						isVisible: y
					}, l.a.createElement(T.a, se({}, ee, {
						altText: this.getAltText(),
						className: this.props.imageBoxClassName,
						contentImageClassName: this.props.imageBoxContentImageClassName,
						imageClassName: this.props.imageBoxClassName,
						isListing: d,
						isNSFW: this.isNSFW(),
						isSpoiler: this.isSpoiler(),
						isVideoThumbnail: !!h.media && h.media.type === Y.o.VIDEO,
						onClick: this.onClickRevealBlurred,
						postId: h.id,
						shouldBlur: oe,
						source: J,
						outboundUrl: le && h.source.outboundUrl || void 0,
						originalSource: z
					}))));
					if (!h.media) return null;
					switch (h.media.type) {
						case Y.o.RTJSON:
							const e = Object(H.a)(h, null);
							if (null === e) return null;
							if (!b && !Object(W.a)(h)) return null;
							const n = h.isMeta ? Object(K.a)(e, h.id) : e;
							return l.a.createElement(l.a.Fragment, null, re && l.a.createElement(M.a, {
								canLoadContent: y,
								className: t,
								"data-click-id": "text",
								isCommentsPage: a,
								isExpando: o,
								isMediumHeight: c,
								isRichTextTruncated: h.media.isRichtextPreview,
								isTitleOnly: m,
								postId: h.id,
								showFull: b
							}, l.a.createElement(A.a, {
								altText: this.getAltText(),
								content: n,
								flairStyleTemplate: i,
								isListing: d,
								isNSFW: this.isNSFW(),
								isSpoiler: this.isSpoiler(),
								mediaMetadata: h.media.mediaMetadata,
								onClickRevealBlurred: this.onClickRevealBlurred,
								postId: h.id,
								rtJsonElementProps: Ee(this.props),
								renderMediaAsLinks: d,
								shouldBlur: oe
							}), l.a.createElement(O.b, {
								content: n
							})), l.a.createElement(N.a, {
								postId: h.id,
								isCommentsPage: !!a
							}));
						case Y.o.TEXT:
							if (Object(F.a)(h)) {
								const e = "Text post should not include body content";
								return v.c.withScope(t => {
									t.setExtra("info", {
										post: h,
										isListing: d,
										isCommentsPage: a
									}), v.c.captureMessage(e)
								}), Object(g.a)() && console.log(`${h.id}: ${e}`), l.a.createElement(l.a.Fragment, null, re && l.a.createElement(M.a, {
									postId: h.id,
									className: t,
									"data-click-id": "text",
									isCommentsPage: a,
									showFull: b
								}, l.a.createElement(P.a, {
									flairStyleTemplate: i,
									html: h.isMeta ? Object(G.a)(h.media.content, h.id, te.a.hiddenLink) : h.media.content
								})), l.a.createElement(N.a, {
									postId: h.id,
									isCommentsPage: !!a
								}))
							}
							return l.a.createElement(N.a, {
								postId: h.id,
								isCommentsPage: !!a
							});
						case Y.o.EMBED:
							return this.props.isMiniCard && h.preview && h.preview.url ? l.a.createElement(L.a, se({}, ae, {
								alwaysWrapMedia: !0
							}), l.a.createElement(ue, {
								isVisible: y
							}, l.a.createElement(l.a.Fragment, null, l.a.createElement(T.a, se({}, ee, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: o,
								isListing: d,
								isNSFW: this.isNSFW(),
								isCrosspost: !!s,
								isSpoiler: this.isSpoiler(),
								postId: h.id,
								shouldBlur: oe,
								source: h.preview.url,
								originalSource: h.preview.url
							})), l.a.createElement(R.a, null)))) : Y.h.has(h.media.provider) ? h.media.provider === Y.v.Twitter ? l.a.createElement(_.a, {
								canLoadContent: y,
								embedBoxChildRef: this.storeChildRef,
								mediaContainerProps: ae,
								onIframeLoaded: this.onIframeLoaded,
								source: z,
								title: h.title,
								postId: h.id
							}) : l.a.createElement(L.a, se({}, ae, {
								alwaysWrapMedia: !0,
								height: o ? q : Y.j,
								width: o ? Q : Y.j * (16 / 9)
							}), y && l.a.createElement(S.a, {
								childRef: this.storeChildRef,
								height: o ? q : Y.j,
								width: o ? Q : void 0,
								isListing: d,
								isResponsive: !0,
								onLoad: this.onIframeLoaded,
								showCentered: p,
								showFull: b,
								source: z,
								title: h.title
							})) : l.a.createElement(L.a, se({}, ae, {
								alwaysWrapMedia: !0
							}), y && l.a.createElement(S.a, se({}, ee, {
								isResponsive: o || h.media.provider === Y.v.IFrameEmbed,
								title: h.title,
								childRef: this.storeChildRef,
								onLoad: this.onIframeLoaded,
								source: z,
								fullWidth: h.media.provider === Y.v.IFrameEmbed
							})));
						case Y.o.GIFVIDEO: {
							let e = q,
								t = Q;
							return e > Y.j && (t = Q / q * (e = Y.j)), l.a.createElement(L.a, se({}, ae, {
								blurSrc: Z ? h.media.gifBackgroundImage : void 0
							}), l.a.createElement(ue, {
								isVisible: y
							}, l.a.createElement(D.a, se({}, ee, {
								isNotCardView: u,
								height: o ? void 0 : e,
								width: o ? void 0 : t,
								postId: h.id,
								shouldLoad: !0,
								shouldPause: d && B,
								source: z,
								originalSource: h.media.content
							}))))
						}
						case Y.o.VIDEO: {
							const e = h.media.posterUrl || h.preview && h.preview.url;
							if (this.props.isMiniCard && e) return l.a.createElement(L.a, se({}, ae, {
								alwaysWrapMedia: !0
							}), l.a.createElement(ue, {
								isVisible: y
							}, l.a.createElement(l.a.Fragment, null, l.a.createElement(T.a, se({}, ee, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: o,
								isListing: d,
								isNSFW: this.isNSFW(),
								isCrosspost: !!s,
								isSpoiler: this.isSpoiler(),
								postId: h.id,
								shouldBlur: oe,
								source: e,
								originalSource: e
							})), l.a.createElement(R.a, null))));
							const t = l.a.createElement(L.a, se({}, ae, {
								alwaysWrapMedia: !0,
								isVideo: !0
							}), y && l.a.createElement(ne, {
								autoPlay: "boolean" == typeof C ? !C : void 0,
								isExpando: o,
								shouldLoad: !0,
								shouldPause: B,
								shouldStop: $,
								hlsSource: h.media.hlsUrl,
								mpegDashSource: h.media.dashUrl,
								isGif: h.media.isGif,
								scrubberThumbSource: h.media.scrubberThumbSource,
								postId: h.id,
								callToActionSource: h.source || void 0,
								callToActionText: h.callToAction,
								isListing: d,
								posterUrl: h.media.posterUrl,
								muxVideoDuration: void 0,
								muxVideoId: h.id,
								muxVideoIsLive: !1,
								muxVideoTitle: h.title,
								sessionId: ce
							}));
							return h.isSponsored ? l.a.createElement(w.a, {
								post: h,
								trackVideo: !0
							}, t) : t
						}
						case Y.o.LIVEVIDEO:
							return l.a.createElement(ue, {
								isVisible: y
							}, l.a.createElement(ie, {
								className: this.props.isMiniCard ? te.a.miniCardVideo : void 0,
								canLoad: y,
								postId: h.id,
								postTitle: h.title,
								shouldPause: B || $,
								url: h.media.hlsUrl
							}));
						case Y.o.IMAGE:
							const I = this.state.viewportHeight - 2 * de,
								V = this.state.viewportWidth - 2 * de;
							let k = z;
							return this.props.isMiniCard && !this.props.isMiniCardHQPreviews && (h.thumbnail && Object(x.a)(h.thumbnail.url) ? k = h.thumbnail.url : h.preview && Object(x.a)(h.preview.url) && (k = h.preview.url)), l.a.createElement(L.a, se({}, ae, {
								blurSrc: Z ? k : void 0,
								isExpando: !!o
							}), l.a.createElement(ue, {
								isVisible: y
							}, l.a.createElement(T.a, se({}, ee, {
								altText: this.getAltText(),
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: o,
								isListing: d,
								isNSFW: this.isNSFW(),
								isCrosspost: !!s,
								isSpoiler: this.isSpoiler(),
								maxHeight: o ? I : void 0,
								maxWidth: o ? V : void 0,
								postId: h.id,
								shouldBlur: oe,
								source: k,
								outboundUrl: le && h.source.outboundUrl || void 0,
								isSponsored: h.isSponsored,
								originalSource: h.media.content
							}))));
						case Y.o.GALLERY:
							const J = Object(U.b)(h.media.mediaMetadata || {}, Object(U.c)(d), Y.p, Q),
								X = Object(U.a)(h.media.gallery, h.isSponsored);
							return l.a.createElement(L.a, se({}, ae, {
								blurSrc: Z ? z : void 0,
								isExpando: !!o,
								maxGalleryHeight: J + X,
								className: te.a.galleryMediaContainer,
								isGalleryTileLayout: r
							}), l.a.createElement(ue, {
								isVisible: y
							}, l.a.createElement(j.a, {
								post: h,
								postId: h.id,
								postTitle: h.title,
								subredditName: E,
								galleryItems: h.media.gallery ? h.media.gallery.items : [],
								mediaMetadata: h.media.mediaMetadata || {},
								imageHeight: J,
								captionHeight: X,
								isSponsored: h.isSponsored,
								showPromotedCTA: !!f,
								className: this.props.imageBoxClassName,
								isListing: d,
								isNSFW: this.isNSFW(),
								isSpoiler: this.isSpoiler(),
								shouldBlur: oe,
								onClickRevealBlurred: this.onClickRevealBlurred,
								isTileLayout: !!r,
								shouldShowTileLayoutOption: this.props.shouldShowGalleryTileOption,
								isVisible: y
							})));
						default:
							return null
					}
				}
			}
			const ye = ge(fe(Object(b.a)(ve)))
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
				p = (e, t) => e.some(e => e.y > t && Object(a.K)(e.y, e.x));

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
					gallery: o.gallery(e, t, s),
					post: o.post(e, t),
					...o.defaults(e)
				}),
				d = (e, t) => s => ({
					...r(s, e, t),
					action: i.c.VIEW,
					noun: "media",
					source: "gallery",
					media: o.media(s, e)
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
							...o.media(s, e),
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab.33fd159b036e1153af60.js.map