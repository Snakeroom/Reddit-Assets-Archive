// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86.f59260da38980d9822e3.js
// Retrieved at 8/5/2021, 7:00:09 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"], {
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
					experimentName: u.Lc
				});
				return Object(u.ce)(t) ? void 0 : t
			}, e => {
				const t = Object(m.c)(e, {
					experimentEligibilitySelector: m.a,
					experimentName: u.Mc
				});
				return Object(u.ce)(t) ? void 0 : t
			}, (e, t) => e === u.Nc.Enabled && t === u.Nc.Enabled);
			var p = s("./src/config.ts");
			var g = s("./src/reddit/selectors/user.ts");
			const b = e => {
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
				I = {
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
					playerVersion: O,
					respectDoNotTrack: S,
					saltLength: L,
					saltTimeToLive: T,
					viewerUserIdLength: j
				} = {
					...I,
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
						this.props.muxVideoId !== e.muxVideoId && this.doMuxThings(), this.props.videoRef !== e.videoRef && (this.combinedVideoRefs = this.combineExternalVideoRef(this.props.videoRef))
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
						return t || (t = b(M.SALT_LENGTH), Object(r.b)(e, t, M.SALT_TIME_TO_LIVE)), t
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
							player_software_version: this.getDashInstanceData() ? p.a.dashVersion : this.getHlsInstanceData() ? p.a.hlsVersion : null
						}
					}
				}
				M.displayName = w(e), M.ANONYMOUS_USER_ID = s, M.DEBUG = l, M.DISABLE_COOKIES = u, M.DURATION_LIVE = 1 / 0, M.ENV_KEY = m, M.LOCAL_STORAGE_SALT_KEY = f, M.LOCAL_STORAGE_VIEWER_USER_ID_KEY = E, M.PLAYER_NAME = C, M.PLAYER_VERSION = O, M.RESPECT_DO_NOT_TRACK = S, M.SALT_LENGTH = L, M.SALT_TIME_TO_LIVE = T, M.STREAM_TYPE_LIVE = "live", M.STREAM_TYPE_ON_DEMAND = "on-demand", M.VIEWER_USER_ID_LENGTH = j;
				const N = Object(i.forwardRef)((e, t) => n.a.createElement(M, y({}, e, {
						forwardedRef: t
					}))),
					_ = Object(o.c)({
						redditUserId: g.h,
						isMuxEnabled: h
					});
				return Object(a.b)(_, null, null, {
					forwardRef: !0
				})(N)
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
				unblurButtonContainer: "XU8P4L1nSifowaG9_gEQu",
				unblurButton: "_2xd9ygloNjk8lC1O8LrxPo",
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
				r = s("./src/reddit/hooks/usePrevious.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/constants/index.ts"),
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
				E = s("./src/reddit/constants/adEvents.ts"),
				v = s("./src/reddit/constants/keycodes.ts"),
				y = s("./src/reddit/helpers/mediaGallery/index.tsx"),
				w = s("./src/reddit/models/Media/index.ts"),
				I = s("./src/reddit/selectors/media.ts"),
				C = s("./src/reddit/components/Media/blurredContent.ts"),
				O = s("./src/reddit/components/Media/GalleryBox/index.m.less"),
				S = s.n(O);
			const {
				fbt: L
			} = s("./node_modules/fbt/lib/FbtPublic.js"), T = e => {
				const {
					displayImage: t,
					style: s,
					showSeeMore: i,
					isReadyToShow: a,
					imgAltText: o
				} = e, r = "u" in t ? t.u : t.gif;
				return n.a.createElement("div", {
					className: Object(d.a)({
						[S.a.slideImageMainDiv]: !i
					})
				}, a && n.a.createElement("img", {
					src: r,
					alt: o,
					className: S.a.slideImage,
					style: s
				}), i && n.a.createElement("div", {
					className: S.a.seeMore
				}, L._("see full image", null, {
					hk: "1Qygw5"
				})))
			}, j = e => {
				const {
					slideIndex: t,
					currentIndex: s,
					obfuscatedImage: i,
					optimalImage: a,
					originalImage: o,
					isListing: r,
					isSponsored: l,
					isReadyToShow: c,
					imgAltText: u
				} = e, m = s === t ? {
					left: "0px"
				} : {
					left: s > t ? "-100%" : "100%"
				}, h = Object(y.c)(r), p = o.y > h && Object(w.I)(o.y, o.x), g = p ? {} : {
					maxHeight: "100%"
				};
				let b;
				return b = i || (p ? o : "gif" in o ? o : a), n.a.createElement("li", {
					style: m,
					className: S.a.slide
				}, n.a.createElement("figure", {
					className: Object(d.a)({
						[S.a.tallImage]: p,
						[S.a.commonImage]: !p
					}, S.a.figure)
				}, r || l ? n.a.createElement(T, {
					displayImage: b,
					style: g,
					showSeeMore: p,
					isReadyToShow: c,
					imgAltText: u
				}) : n.a.createElement("a", {
					href: "u" in o ? o.u : o.gif,
					rel: "noopener noreferrer",
					target: "_blank",
					className: Object(d.a)({
						[S.a.tallImage]: p,
						[S.a.commonImage]: !p
					}, S.a.imageLink)
				}, n.a.createElement(T, {
					displayImage: b,
					style: g,
					showSeeMore: p,
					isReadyToShow: c,
					imgAltText: u
				}))))
			}, M = e => n.a.createElement("a", {
				className: Object(d.a)(e.className, S.a.navigationUnderlay, {
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
				className: Object(d.a)(e.iconClassName, S.a.icon)
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
			}, Object(y.e)(e.outboundUrl)), n.a.createElement(g.a, {
				className: S.a.linkIcon
			})))), _ = e => n.a.createElement("div", {
				className: S.a.slideIndicator,
				onClick: e.toggleTileLayout ? t => {
					t.preventDefault(), t.stopPropagation(), e.toggleTileLayout()
				} : void 0
			}, e.toggleTileLayout && n.a.createElement(b.a, {
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
						imageHeight: g,
						isListing: b,
						isSponsored: O,
						isTileLayout: L,
						mediaMetadata: T = {},
						post: P,
						postId: A,
						postTitle: V,
						shouldShowTileLayoutOption: k,
						subredditName: B,
						isVisible: W
					} = e,
					F = Object(a.e)(e => Object(I.b)(e, A)),
					H = F > 0,
					U = F < p.length - 1,
					G = Object(h.a)(),
					K = Object(i.useRef)(null),
					z = Object(i.useRef)(null),
					[Y, $] = Object(i.useState)(W ? F : -1),
					[J, q] = Object(i.useState)(W ? F : -1),
					Q = Object(r.a)(W),
					X = Object(r.a)(F);
				Object(i.useEffect)(() => {
					(void 0 !== Q && Q !== W && W && Y < 0 && J < 0 || void 0 !== X && X !== F && W && (Y > F || J < F)) && ($(D(F, 1)), q(R(F, p.length, 1)))
				}, [Q, F, W, Y, J, X, p.length, A]);
				const Z = Object(i.useRef)(),
					ee = Object(i.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t
							} = e;
							t ? (Y < 0 || J - Y == 0) && (Z.current = setTimeout(() => {
								const e = R(J, p.length);
								e !== J && q(e)
							}, 1e3)) : (Y < 0 || J - Y == 0) && clearTimeout(Z.current)
						})
					}, [Y, J, p.length]);
				Object(o.a)(z, ee);
				const te = Object(i.useCallback)(e => {
						t(Object(x.f)({
							postId: A,
							index: e
						}))
					}, [t, A]),
					se = Object(i.useCallback)(e => {
						t(Object(f.z)(P, E.a.GalleryItemImpression, `Slide${e}`))
					}, [t, P]),
					ie = Object(i.useCallback)(() => {
						t(Object(x.i)({
							postId: A,
							isTileLayout: !L
						}))
					}, [t, A, L]),
					ne = Object(i.useCallback)(() => {
						if (!U) return;
						const e = F + 1;
						if (e + 1 >= J) {
							const e = R(J, p.length);
							e !== J && q(e)
						}
						te(e), G(u.b(A, e)), G(u.d(A, e + 1)), se(e)
					}, [U, F, se, te, G, A, J, p.length]),
					ae = Object(i.useCallback)(() => {
						if (!H) return;
						const e = F - 1;
						if (e - 1 <= Y) {
							const e = D(Y);
							e !== Y && $(e)
						}
						const t = F + 1;
						te(e), G(u.a(A, t)), G(u.d(A, t - 1)), se(e)
					}, [H, F, se, te, G, A, Y]),
					oe = Object(i.useCallback)(() => {
						const e = p[F] && p[F].outboundUrl;
						e && G(u.c(A, e))
					}, [G, A, F, p]);
				m(v.a.ArrowLeft, K.current, ae), m(v.a.ArrowRight, K.current, ne);
				const re = p[F] && p[F].caption,
					de = p[F] && p[F].outboundUrl,
					le = ((e, t, s) => {
						const i = Object(y.f)(e),
							n = Object(y.g)(i),
							a = n.x / n.y < 1,
							o = Object(y.h)(e),
							r = Object(y.i)(e || {}, Object(y.c)(s), w.p);
						return s || r || o || a ? {
							height: t
						} : {
							paddingBottom: `${Object(w.B)(n.y,n.x)}%`
						}
					})(T, g, b);
				return n.a.createElement("div", {
					className: Object(d.a)(S.a.outerContainer),
					ref: K,
					tabIndex: 0
				}, L ? n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
					className: Object(d.a)(S.a.tilesWrapper, {
						[S.a.blurredContent]: e.shouldBlur
					}),
					onClick: e.onClickRevealBlurred
				}, p.map((t, s) => {
					const i = t.mediaId,
						a = T && T[i];
					if (!a || !a.s) return null;
					const o = [...a && a.s ? [a.s] : [], ...a && a.p ? a.p : []],
						r = Object(y.d)(w.y, o);
					if (!r) return null;
					const d = a.s;
					return n.a.createElement("div", {
						style: {
							backgroundImage: `url(${"gif"in d?d.gif:"u"in r&&r.u})`
						},
						className: S.a.tileImage,
						onClick: e.shouldBlur ? void 0 : e => {
							e.preventDefault(), e.stopPropagation(), ie(), te(s)
						},
						key: i
					})
				}), [1, 2, 3].map(e => n.a.createElement("div", {
					key: e,
					className: S.a.tilePlaceholder
				}))), e.shouldBlur && n.a.createElement("div", {
					className: S.a.unblurButtonContainer
				}, n.a.createElement("button", {
					className: S.a.unblurButton
				}, Object(C.a)(!!e.isNSFW, !!e.isSpoiler)))) : n.a.createElement("div", {
					className: S.a.slideshowContainer,
					tabIndex: -1,
					ref: z,
					onClick: e.onClickRevealBlurred,
					style: le
				}, n.a.createElement("div", {
					className: S.a.imagesWrapper
				}, n.a.createElement("ul", {
					className: S.a.slideWrapper
				}, p.map((t, s) => {
					const i = t.mediaId,
						a = T && T[i];
					if (!a || !a.s) return null;
					const o = t.caption ? t.caption : V,
						r = Object(c.a)(B ? `${B} - ${o}` : o, 300, l.gb),
						d = [...a && a.s ? [a.s] : [], ...a && a.p ? a.p : []],
						u = Object(y.d)(g, d);
					if (!u) return null;
					const m = e.shouldBlur && Object(y.d)(g, a.o || []) || void 0,
						h = s >= Y && s <= J;
					return n.a.createElement(j, {
						slideIndex: s,
						currentIndex: F,
						obfuscatedImage: m,
						optimalImage: u,
						originalImage: a.s,
						isListing: e.isListing,
						isSponsored: O,
						key: i,
						isReadyToShow: h,
						imgAltText: r
					})
				})), e.shouldBlur && !e.isListing && n.a.createElement("div", {
					className: S.a.unblurButtonContainer
				}, n.a.createElement("button", {
					className: S.a.unblurButton
				}, Object(C.a)(!!e.isNSFW, !!e.isSpoiler))), !e.shouldBlur && n.a.createElement(n.a.Fragment, null, n.a.createElement(M, {
					onClick: ae,
					setFocusTo: z,
					hasMoreSlides: H,
					title: "Previous",
					iconClassName: S.a.prevIcon,
					className: S.a.prevButton
				}), n.a.createElement(M, {
					onClick: ne,
					setFocusTo: z,
					hasMoreSlides: U,
					title: "Next",
					iconClassName: S.a.nextIcon,
					className: S.a.nextButton
				}))), p.length > 1 ? n.a.createElement(_, {
					currentSlide: F + 1,
					totalSlides: p.length,
					toggleTileLayout: k && ie || void 0
				}) : ""), !re && !de || L || O ? !!s && !L && !O && n.a.createElement("div", {
					className: S.a.emptyCaptionBlock,
					style: {
						height: s
					}
				}) : n.a.createElement(N, {
					caption: re,
					onClickEvent: oe,
					outboundUrl: de,
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

			function g() {
				return (g = Object.assign || function(e) {
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
				showFull: b,
				...x
			}) => {
				const f = {
						[m.a.richTextContainerFull]: b,
						[m.a.richTextContainerTitleOnly]: u && !b,
						[m.a.richTextContainer]: !b && !u
					},
					E = {};
				b || (E.maxHeight = u ? `${r.m}px` : d ? `${r.l}px` : `${r.k}px`), i && (E.maxWidth = `${o.d}px`);
				const v = l && b;
				return n.a.createElement("div", g({
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
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/intersectionObserver/index.ts"),
				d = s("./src/reddit/components/Media/constants.ts"),
				l = s("./src/reddit/components/Media/EmbedBox/index.tsx"),
				c = s("./src/reddit/components/Media/MediaContainer/index.tsx"),
				u = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				m = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/reddit/components/Media/TwitterEmbed/index.m.less"),
				p = s.n(h);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const b = 350,
				x = 100,
				f = 300;
			class E extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isFullyLoaded: !1
					}, this.iframe = null, this.onWindowMessage = e => {
						!this.state.isFullyLoaded && this.iframe && this.iframe.contentWindow === e.source && "tweet-measured" === e.data.action && this.setState({
							isFullyLoaded: !0
						})
					}, this.embedBoxChildRef = e => {
						this.iframe = e, e && r.a(e, (t, s) => {
							e && e.contentWindow && !this.props.media.height && s && e.contentWindow.postMessage("twitter-measure-requested", d.a)
						}), this.props.embedBoxChildRef(e)
					}
				}
				componentDidMount() {
					window.addEventListener("message", this.onWindowMessage)
				}
				componentDidUpdate(e) {
					!this.props.canLoadContent && e.canLoadContent && this.setState(({
						isFullyLoaded: e
					}) => e ? {
						isFullyLoaded: !1
					} : null)
				}
				componentWillUnmount() {
					this.iframe && r.b(this.iframe), window.removeEventListener("message", this.onWindowMessage)
				}
				render() {
					const {
						canLoadContent: e,
						media: t,
						mediaContainerProps: s,
						onIframeLoaded: n,
						source: r,
						title: d
					} = this.props, {
						isFullyLoaded: h
					} = this.state, E = s.height || (t.isDeleted ? x : f);
					return a.a.createElement(c.a, g({}, s, {
						alwaysWrapMedia: !0,
						height: E,
						showFull: !s.isListing,
						width: b
					}), e && a.a.createElement(a.a.Fragment, null, (!s.height || !h) && (t.isDeleted ? a.a.createElement("p", {
						className: p.a.tweetDeleted
					}, i.fbt._("This Tweet has been deleted.", null, {
						hk: "1LhcOw"
					})) : a.a.createElement("div", {
						className: Object(o.a)(Object(u.a)({
							isLoading: !0
						}), p.a.tweetPlaceholder)
					})), a.a.createElement(l.a, {
						childRef: this.embedBoxChildRef,
						className: Object(o.a)(p.a.tweetEmbedBox, {
							[p.a.isInvisible]: !s.height || !h
						}),
						height: E,
						isListing: s.isListing,
						isResponsive: !0,
						maxHeight: s.isListing ? m.j : null,
						onLoad: n,
						showCentered: s.showCentered,
						showFull: !0,
						source: r,
						title: d,
						width: b
					}), s.isListing && E > m.j && a.a.createElement("div", {
						className: p.a.seeMore
					}, i.fbt._("See full tweet", null, {
						hk: "1bxtrd"
					}))))
				}
			}
			t.a = E
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
		"./src/reddit/components/Media/index.m.less": function(e, t, s) {
			e.exports = {
				hiddenLink: "_3dhFVFchWAAFXfLFTa94n9",
				visibilityWrapper: "_1NSbknF8ucHV2abfCZw2Z1",
				displayNone: "_1Q2mF3u7v9hBVu_4bkC7R4",
				galleryMediaContainer: "_3ozFpM1W8BRdrzkr_ssGxZ",
				miniCardVideo: "_18_METUBD2i2iqGBz4ofw1"
			}
		},
		"./src/reddit/components/Media/index.tsx": function(e, t, s) {
			"use strict";
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
				g = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				b = s("./src/lib/env/index.ts"),
				x = s("./src/lib/isUrl/index.ts"),
				f = s("./src/lib/objectSelector/index.ts"),
				E = s("./src/lib/onFocusAndVisibilityChange/index.ts"),
				v = s("./src/lib/sentry/index.ts"),
				y = s("./src/lib/truncateText/index.ts"),
				w = s("./src/reddit/components/AdViewability/index.tsx"),
				I = s("./src/reddit/components/Governance/VaultActionLink/async.ts"),
				C = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				O = s("./src/reddit/components/Media/constants.ts"),
				S = s("./src/reddit/components/Media/EmbedBox/index.tsx"),
				L = s("./src/reddit/components/Media/GalleryBox/index.tsx"),
				T = s("./src/reddit/components/Media/ImageBox/index.tsx"),
				j = s("./src/reddit/components/Media/MediaContainer/index.tsx"),
				M = s("./src/reddit/components/Media/PollContainer/index.tsx"),
				N = s("./src/reddit/components/Media/RichTextContainer/index.tsx"),
				_ = s("./src/reddit/components/Media/TwitterEmbed/index.tsx"),
				D = s("./src/reddit/components/Media/VideoBox/index.tsx"),
				R = s("./src/reddit/components/PlayButton/index.tsx"),
				P = s("./src/reddit/components/RawHTMLDisplay/Media.tsx"),
				A = s("./src/reddit/components/RichTextJson/index.tsx"),
				V = s("./src/reddit/constants/componentSizes.ts"),
				k = s("./src/reddit/constants/screenWidths.ts"),
				B = s("./src/reddit/contexts/PageLayer/index.tsx"),
				W = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				F = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				H = s("./src/reddit/helpers/mediaGallery/index.tsx"),
				U = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				G = s("./src/reddit/helpers/stripMetaLinks/fromRawHtml.ts"),
				K = s("./src/reddit/helpers/stripMetaLinks/fromRTJ.ts"),
				z = s("./src/reddit/models/Media/index.ts"),
				Y = s("./src/reddit/selectors/experiments/postSeo.ts"),
				$ = s("./src/reddit/selectors/media.ts"),
				J = s("./src/reddit/selectors/postCreations.ts"),
				q = s("./src/reddit/selectors/posts.ts"),
				Q = s("./src/reddit/selectors/seo/index.ts"),
				X = s("./src/reddit/components/Media/getResolution.ts"),
				Z = s("./src/reddit/components/Media/index.m.less"),
				ee = s.n(Z);

			function te() {
				return (te = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const se = Object(a.a)({
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
				ie = Object(m.a)(C.b, {
					playerName: "Reddit Player"
				}),
				ne = 300,
				ae = " - ",
				oe = 1200,
				re = 75,
				de = "player.js",
				le = V.r + V.q,
				ce = e => l.a.createElement("div", {
					className: Object(h.a)(ee.a.visibilityWrapper, {
						[ee.a.displayNone]: !e.isVisible
					})
				}, e.children),
				ue = new Set([z.o.EMBED, z.o.LIVEVIDEO, z.o.VIDEO, z.o.GIFVIDEO]),
				me = e => !!e.media && ue.has(e.media.type),
				he = new Set([z.o.EMBED, z.o.GALLERY, z.o.GIFVIDEO, z.o.IMAGE, z.o.LIVEVIDEO, z.o.VIDEO]),
				pe = ({
					post: e
				}) => !!e.media && he.has(e.media.type),
				ge = Object(B.t)(),
				be = Object(u.c)({
					canUseOCRAltText: (e, t) => Object(Y.b)(e, t.post),
					OCRAltText: (e, {
						post: t
					}) => Object(Y.a)(e, t.id),
					subredditOrProfileDisplayText: (e, t) => Object(Y.j)(e, t),
					subredditOrProfile: (e, {
						post: t
					}) => Object(q.T)(e, {
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
						const n = Object($.c)(e, s.id);
						return !(void 0 !== n || !i) || !!n
					}
				}),
				xe = Object(c.b)(be),
				fe = Object(f.b)(e => ({
					renderingObjectInfo: e.post,
					pageLayer: e.pageLayer
				}));
			class Ee extends l.a.Component {
				constructor(e) {
					super(e), this.pauseContent = () => {
						this.shouldFocusContentDebouncer(!1)
					}, this.stopContent = () => {
						const {
							media: e
						} = this.props.post;
						if (e && z.d.has(e.type)) {
							if (this.pauseContent(), this.iframe) {
								const t = e.type === z.o.EMBED ? e.provider : null;
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
						return !!e && z.d.has(e.type)
					}, this.shouldFocusContentDebouncer = r()(e => {
						const {
							media: t
						} = this.props.post, {
							autoplayPref: s
						} = this.props;
						if (t && z.d.has(t.type)) {
							if (this.iframe) {
								const i = t.type === z.o.EMBED ? t.provider : null;
								i && !z.s.has(i) ? !s && e || this.toggleEmbedAutoplay(this.iframe, !e) : e || this.pauseEmbed(this.iframe, i)
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
							const s = t ? z.g.Pause : z.g.Play;
							e.contentWindow.postMessage({
								context: de,
								method: s
							}, O.a), e.contentWindow.postMessage({
								context: de,
								method: z.g.Mute
							}, O.a)
						}
					}, this.pauseEmbed = (e, t) => {
						e.contentWindow && (t === z.v.YouTube ? e.contentWindow.postMessage(JSON.stringify({
							event: "command",
							func: z.A.Pause
						}), O.a) : e.contentWindow.postMessage({
							context: de,
							method: z.g.Pause
						}, O.a))
					}, this.onIframeLoaded = () => {
						const {
							media: e
						} = this.props.post, {
							autoplayPref: t
						} = this.props, s = e && e.type === z.o.EMBED ? e.provider : null;
						if (this.iframe && s && !z.s.has(s)) {
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
						viewportHeight: z.e,
						viewportWidth: z.f
					}
				}
				UNSAFE_componentWillMount() {
					"undefined" != typeof window && (this.updateDimensions(), window.addEventListener("resize", this.updateDimensions))
				}
				componentDidMount() {
					me(this.props.post) && (this.visibilityChangeSubscriptionId = E.a.subscribe(e => {
						this.handleVisibilityChange(e)
					})), this.props.scrollerItemRef && pe(this.props) && this.props.scrollerItemRef(this, this.state.canLoadContent)
				}
				componentWillUnmount() {
					this.visibilityChangeSubscriptionId && E.a.unsubscribe(this.visibilityChangeSubscriptionId), this.props.scrollerItemRef && pe(this.props) && this.props.scrollerItemRef(void 0), window.removeEventListener("resize", this.updateDimensions)
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
					return i && (a += i), t && e ? a += `${ae}${t}` : s.title && (a += `${ae}${s.title}`), a.length > ne ? Object(y.a)(a, ne, p.gb) : a
				}
				getVideoExpandoMaxDimensions() {
					let e, t = Math.max(z.j, this.state.viewportHeight),
						s = Math.min(oe, 16 * t / 9);
					s === oe && (t = 9 * oe / 16), e = this.state.viewportWidth >= k.c ? this.state.viewportWidth < V.l ? this.state.viewportWidth - le - 2 * re : this.state.viewportWidth - le - V.e - 2 * re : this.state.viewportWidth - 2 * re;
					const i = this.state.viewportHeight - 2 * re;
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
					let s = z.j,
						i = z.n;
					return e.isExpando ? this.getVideoExpandoMaxDimensions() : (e.isPromotedTrend && (s = z.t, i = z.u), {
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
					if (Object(z.G)(n.media)) return {
						source: n.media.scrubberThumbSource,
						width: this.state.viewportWidth - 2 * re,
						height: this.state.viewportHeight - 2 * re
					};
					const a = n.media && n.media.obfuscated || "";
					let o = !n.media || Object(z.K)(n.media) || Object(z.E)(n.media) ? "" : n.media.content,
						[r, d] = !n.media || Object(z.H)(n.media) || Object(z.J)(n.media) || Object(z.E)(n.media) ? [0, 0] : [n.media.height, n.media.width];
					if (s && n.media && Object(z.E)(n.media)) {
						r = Object(H.b)(n.media.mediaMetadata || {}, Object(H.c)(i), z.p, s) + z.i, d = s
					}
					if (s && n.media && (n.media.type === z.o.IMAGE || n.media.type === z.o.GIFVIDEO)) {
						const e = X.b(s, n.media.resolutions);
						e && (o = e.url, d = e.width, r = e.height)
					} else if (n && n.media && (!e.isListing || e.isExpando) && (n.media.type === z.o.IMAGE || n.media.type === z.o.GIFVIDEO)) {
						let e;
						(e = Object(z.I)(n.media.height, n.media.width) && Object(T.b)(n.media.height) ? X.c(n.media.height, n.media.width, n.media.resolutions) : X.a(n.media.resolutions)) && (o = e.url, d = e.width, r = e.height)
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
					if (n.media && n.media.type === z.o.VIDEO) {
						const t = r / d;
						e.isExpando ? (r = l, d = c) : t > z.c ? (r = l, d = Math.min(Math.max(l / t, z.r), c)) : (r = Math.min(Math.max(c * t, z.q), l), d = c)
					}
					n.media && n.media.type === z.o.EMBED && e.isExpando && n.media.provider !== z.v.Twitter && (r = l, d = c);
					let u = !1;
					if (e.isMiniCard) {
						const e = r / d;
						u = Math.abs(e - z.c) > .01
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
						showFull: g = !1,
						subredditOrProfileDisplayText: f
					} = this.props, {
						canLoadContent: E,
						forcePause: y,
						shouldPause: C,
						shouldStop: O,
						viewportWidth: V
					} = this.state;
					if (!h.media) return null;
					const k = y || C,
						B = O,
						{
							source: Y,
							obfuscated: $,
							height: J,
							width: q,
							needsBackgroundBlur: Q
						} = this.getMediaInfo(this.props, this.state),
						X = {
							showCentered: p,
							isListing: d,
							showFull: g,
							height: J,
							width: q
						},
						Z = {
							...X,
							className: t,
							forceAspectRatio: n,
							viewportWidth: V
						},
						ne = this.shouldBlur(),
						ae = !((null === (e = h.pollData) || void 0 === e ? void 0 : e.isPrediction) && !a),
						oe = !(!h.isSponsored || !h.source);
					if ($ && ne) return l.a.createElement(j.a, te({}, Z, {
						blurSrc: $
					}), l.a.createElement(ce, {
						isVisible: E
					}, l.a.createElement(T.a, te({}, X, {
						altText: this.getAltText(),
						className: this.props.imageBoxClassName,
						contentImageClassName: this.props.imageBoxContentImageClassName,
						imageClassName: this.props.imageBoxClassName,
						isListing: d,
						isNSFW: this.isNSFW(),
						isSpoiler: this.isSpoiler(),
						isVideoThumbnail: !!h.media && h.media.type === z.o.VIDEO,
						onClick: this.onClickRevealBlurred,
						postId: h.id,
						shouldBlur: ne,
						source: $,
						outboundUrl: oe && h.source.outboundUrl || void 0,
						originalSource: Y
					}))));
					if (!h.media) return null;
					switch (h.media.type) {
						case z.o.RTJSON:
							const e = Object(F.a)(h, null);
							if (null === e) return;
							if (!g && !Object(W.a)(h)) return null;
							const n = h.isMeta ? Object(K.a)(e, h.id) : e;
							return l.a.createElement(l.a.Fragment, null, ae && l.a.createElement(N.a, {
								canLoadContent: E,
								className: t,
								"data-click-id": "text",
								isCommentsPage: a,
								isExpando: o,
								isMediumHeight: c,
								isRichTextTruncated: h.media.isRichtextPreview,
								isTitleOnly: m,
								postId: h.id,
								showFull: g
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
								rtJsonElementProps: fe(this.props),
								renderMediaAsLinks: d,
								shouldBlur: ne
							}), l.a.createElement(I.b, {
								content: n
							})), l.a.createElement(M.a, {
								postId: h.id,
								isCommentsPage: !!a
							}));
						case z.o.TEXT:
							if (Object(U.a)(h)) {
								const e = "Text post should not include body content";
								return v.c.withScope(t => {
									t.setExtra("info", {
										post: h,
										isListing: d,
										isCommentsPage: a
									}), v.c.captureMessage(e)
								}), Object(b.a)() && console.log(`${h.id}: ${e}`), l.a.createElement(l.a.Fragment, null, ae && l.a.createElement(N.a, {
									postId: h.id,
									className: t,
									"data-click-id": "text",
									isCommentsPage: a,
									showFull: g
								}, l.a.createElement(P.a, {
									flairStyleTemplate: i,
									html: h.isMeta ? Object(G.a)(h.media.content, h.id, ee.a.hiddenLink) : h.media.content
								})), l.a.createElement(M.a, {
									postId: h.id,
									isCommentsPage: !!a
								}))
							}
							return l.a.createElement(M.a, {
								postId: h.id,
								isCommentsPage: !!a
							});
						case z.o.EMBED:
							return this.props.isMiniCard && h.preview && h.preview.url ? l.a.createElement(j.a, te({}, Z, {
								alwaysWrapMedia: !0
							}), l.a.createElement(ce, {
								isVisible: E
							}, l.a.createElement(l.a.Fragment, null, l.a.createElement(T.a, te({}, X, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: o,
								isListing: d,
								isNSFW: this.isNSFW(),
								isCrosspost: !!s,
								isSpoiler: this.isSpoiler(),
								postId: h.id,
								shouldBlur: ne,
								source: h.preview.url,
								originalSource: h.preview.url
							})), l.a.createElement(R.a, null)))) : z.h.has(h.media.provider) ? h.media.provider === z.v.Twitter ? l.a.createElement(_.a, {
								canLoadContent: E,
								embedBoxChildRef: this.storeChildRef,
								media: h.media,
								mediaContainerProps: Z,
								onIframeLoaded: this.onIframeLoaded,
								source: Y,
								title: h.title
							}) : l.a.createElement(j.a, te({}, Z, {
								alwaysWrapMedia: !0,
								height: o ? J : z.j,
								width: o ? q : z.j * (16 / 9)
							}), E && l.a.createElement(S.a, {
								childRef: this.storeChildRef,
								height: o ? J : z.j,
								width: o ? q : void 0,
								isListing: d,
								isResponsive: !0,
								onLoad: this.onIframeLoaded,
								showCentered: p,
								showFull: g,
								source: Y,
								title: h.title
							})) : l.a.createElement(j.a, te({}, Z, {
								alwaysWrapMedia: !0
							}), E && l.a.createElement(S.a, te({}, X, {
								isResponsive: o || h.media.provider === z.v.IFrameEmbed,
								title: h.title,
								childRef: this.storeChildRef,
								onLoad: this.onIframeLoaded,
								source: Y,
								fullWidth: h.media.provider === z.v.IFrameEmbed
							})));
						case z.o.GIFVIDEO: {
							let e = J,
								t = q;
							return e > z.j && (t = q / J * (e = z.j)), l.a.createElement(j.a, te({}, Z, {
								blurSrc: Q ? h.media.gifBackgroundImage : void 0
							}), l.a.createElement(ce, {
								isVisible: E
							}, l.a.createElement(D.a, te({}, X, {
								isNotCardView: u,
								height: o ? void 0 : e,
								width: o ? void 0 : t,
								postId: h.id,
								shouldLoad: !0,
								shouldPause: d && k,
								source: Y,
								originalSource: h.media.content
							}))))
						}
						case z.o.VIDEO: {
							const e = h.media.posterUrl || h.preview && h.preview.url;
							if (this.props.isMiniCard && e) return l.a.createElement(j.a, te({}, Z, {
								alwaysWrapMedia: !0
							}), l.a.createElement(ce, {
								isVisible: E
							}, l.a.createElement(l.a.Fragment, null, l.a.createElement(T.a, te({}, X, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: o,
								isListing: d,
								isNSFW: this.isNSFW(),
								isCrosspost: !!s,
								isSpoiler: this.isSpoiler(),
								postId: h.id,
								shouldBlur: ne,
								source: e,
								originalSource: e
							})), l.a.createElement(R.a, null))));
							const t = l.a.createElement(j.a, te({}, Z, {
								alwaysWrapMedia: !0,
								isVideo: !0
							}), E && l.a.createElement(ie, {
								autoPlay: "boolean" == typeof C ? !C : void 0,
								isExpando: o,
								shouldLoad: !0,
								shouldPause: k,
								shouldStop: B,
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
								muxVideoTitle: h.title
							}));
							return h.isSponsored ? l.a.createElement(w.a, {
								post: h,
								trackVideo: !0
							}, t) : t
						}
						case z.o.LIVEVIDEO:
							return l.a.createElement(ce, {
								isVisible: E
							}, l.a.createElement(se, {
								className: this.props.isMiniCard ? ee.a.miniCardVideo : void 0,
								canLoad: E,
								postId: h.id,
								postTitle: h.title,
								shouldPause: k || B,
								url: h.media.hlsUrl
							}));
						case z.o.IMAGE:
							const y = this.state.viewportHeight - 2 * re,
								O = this.state.viewportWidth - 2 * re;
							let V = Y;
							return this.props.isMiniCard && !this.props.isMiniCardHQPreviews && (h.thumbnail && Object(x.a)(h.thumbnail.url) ? V = h.thumbnail.url : h.preview && Object(x.a)(h.preview.url) && (V = h.preview.url)), l.a.createElement(j.a, te({}, Z, {
								blurSrc: Q ? V : void 0,
								isExpando: !!o
							}), l.a.createElement(ce, {
								isVisible: E
							}, l.a.createElement(T.a, te({}, X, {
								altText: this.getAltText(),
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: o,
								isListing: d,
								isNSFW: this.isNSFW(),
								isCrosspost: !!s,
								isSpoiler: this.isSpoiler(),
								maxHeight: o ? y : void 0,
								maxWidth: o ? O : void 0,
								postId: h.id,
								shouldBlur: ne,
								source: V,
								outboundUrl: oe && h.source.outboundUrl || void 0,
								isSponsored: h.isSponsored,
								originalSource: h.media.content
							}))));
						case z.o.GALLERY:
							const $ = Object(H.b)(h.media.mediaMetadata || {}, Object(H.c)(d), z.p, q),
								de = Object(H.a)(h.media.gallery, h.isSponsored);
							return l.a.createElement(j.a, te({}, Z, {
								blurSrc: Q ? Y : void 0,
								isExpando: !!o,
								maxGalleryHeight: $ + de,
								className: ee.a.galleryMediaContainer,
								isGalleryTileLayout: r
							}), l.a.createElement(ce, {
								isVisible: E
							}, l.a.createElement(L.a, {
								post: h,
								postId: h.id,
								postTitle: h.title,
								subredditName: f,
								galleryItems: h.media.gallery ? h.media.gallery.items : [],
								mediaMetadata: h.media.mediaMetadata || {},
								imageHeight: $,
								captionHeight: de,
								isSponsored: h.isSponsored,
								className: this.props.imageBoxClassName,
								isListing: d,
								isNSFW: this.isNSFW(),
								isSpoiler: this.isSpoiler(),
								shouldBlur: ne,
								onClickRevealBlurred: this.onClickRevealBlurred,
								isTileLayout: !!r,
								shouldShowTileLayoutOption: this.props.shouldShowGalleryTileOption,
								isVisible: E
							})));
						default:
							return null
					}
				}
			}
			t.a = ge(xe(Object(g.a)(Ee)))
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
				return g
			})), s.d(t, "e", (function() {
				return b
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
				p = (e, t) => e.some(e => e.y > t && Object(a.I)(e.y, e.x));

			function g(e, t) {
				return e && e.items && !t && e.items.some(e => void 0 !== e.caption || void 0 !== e.outboundUrl) ? a.i : 0
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
		"./src/reddit/selectors/poll/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "e", (function() {
				return r
			})), s.d(t, "g", (function() {
				return d
			})), s.d(t, "f", (function() {
				return l
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "c", (function() {
				return m
			}));
			var i = s("./src/reddit/models/Comment/index.ts"),
				n = s("./src/reddit/models/Prediction/index.ts"),
				a = s("./src/reddit/selectors/commentSelector.ts");
			const o = (e, {
					postId: t
				}) => e.posts.metaMap[t],
				r = (e, {
					postId: t
				}) => {
					const s = o(e, {
						postId: t
					});
					if (s) return e.polls.models[s]
				},
				d = (e, {
					postId: t
				}) => {
					const s = r(e, {
						postId: t
					});
					return s && Object(n.c)(s) ? s : null
				},
				l = (e, {
					commentId: t
				}) => {
					const s = Object(a.a)(e, {
						commentId: t
					});
					return s && s.commentType === i.b.Prediction && d(e, s) || null
				},
				c = (e, {
					postId: t
				}) => {
					const s = o(e, {
						postId: t
					});
					if (s) return e.polls.rewards[s]
				},
				u = (e, {
					postId: t
				}) => {
					const s = o(e, {
						postId: t
					});
					if (s) return e.polls.results.byVotingPower[s]
				},
				m = (e, {
					postId: t
				}) => {
					const s = o(e, {
						postId: t
					});
					if (s) return e.polls.results.byVoters[s]
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86.f59260da38980d9822e3.js.map