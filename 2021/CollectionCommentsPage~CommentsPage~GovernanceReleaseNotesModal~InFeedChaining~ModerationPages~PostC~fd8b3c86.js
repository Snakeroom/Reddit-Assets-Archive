// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86.02410f008c2a2aaf99f5.js
// Retrieved at 3/23/2021, 9:10:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"], {
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
					experimentName: u.mc
				});
				return Object(u.Hd)(t) ? void 0 : t
			}, e => {
				const t = Object(m.c)(e, {
					experimentEligibilitySelector: m.a,
					experimentName: u.nc
				});
				return Object(u.Hd)(t) ? void 0 : t
			}, (e, t) => e === u.oc.Enabled && t === u.oc.Enabled);
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
					localStorageSaltKey: p,
					localStorageViewerUserIdKey: f,
					playerName: E,
					playerVersion: C,
					respectDoNotTrack: O,
					saltLength: S,
					saltTimeToLive: T,
					viewerUserIdLength: L
				} = {
					...I,
					...t
				};
				class j extends i.Component {
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
						const e = this.props.redditUserId || j.ANONYMOUS_USER_ID,
							t = this.getOrCreateSalt(),
							s = `${x()}${e}${t}`;
						return (await v(s)).substr(0, j.VIEWER_USER_ID_LENGTH)
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
							debug: j.DEBUG,
							disableCookies: j.DISABLE_COOKIES,
							respectDoNotTrack: j.RESPECT_DO_NOT_TRACK,
							...s,
							data: {
								env_key: j.ENV_KEY,
								experiment_name: this.experimentName,
								player_init_time: this.playerInitTime,
								player_name: j.PLAYER_NAME,
								player_version: j.PLAYER_VERSION,
								...t,
								viewer_user_id: e
							}
						}
					}
					getOrCreateSalt() {
						const e = j.LOCAL_STORAGE_SALT_KEY;
						let t = Object(r.a)(e);
						return t || (t = g(j.SALT_LENGTH), Object(r.b)(e, t, j.SALT_TIME_TO_LIVE)), t
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
							video_duration: s ? j.DURATION_LIVE : e,
							video_id: t,
							video_stream_type: s ? j.STREAM_TYPE_LIVE : j.STREAM_TYPE_ON_DEMAND,
							video_title: i
						}
					}
				}
				j.displayName = w(e), j.ANONYMOUS_USER_ID = s, j.DEBUG = l, j.DISABLE_COOKIES = u, j.DURATION_LIVE = 1 / 0, j.ENV_KEY = m, j.LOCAL_STORAGE_SALT_KEY = p, j.LOCAL_STORAGE_VIEWER_USER_ID_KEY = f, j.PLAYER_NAME = E, j.PLAYER_VERSION = C, j.RESPECT_DO_NOT_TRACK = O, j.SALT_LENGTH = S, j.SALT_TIME_TO_LIVE = T, j.STREAM_TYPE_LIVE = "live", j.STREAM_TYPE_ON_DEMAND = "on-demand", j.VIEWER_USER_ID_LENGTH = L;
				const M = Object(i.forwardRef)((e, t) => n.a.createElement(j, y({}, e, {
						forwardedRef: t
					}))),
					N = Object(a.c)({
						redditUserId: b.g,
						isMuxEnabled: h
					});
				return Object(o.b)(N, null, null, {
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
				importAsync: () => Promise.all([s.e("vendors~ClaimFreeAwardModal~CollectionCommentsPage~CommentsPage~Subreddit~SubredditWelcomeMessageMod~d61175c4"), s.e("EconHelperActions~reddit-components-Econ-Prediction"), s.e("reddit-components-Econ-Prediction")]).then(s.bind(null, "./src/reddit/components/Econ/Prediction/index.tsx")),
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
		"./src/reddit/components/Governance/Proposal/async.ts": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(i.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-Proposal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-Governance-Proposal").then(s.bind(null, "./src/reddit/components/Governance/Proposal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/Proposal/index.tsx"
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
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/hooks/useIntersectionObserver.ts"),
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
				b = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				g = s("./src/reddit/icons/svgs/Tile/index.tsx"),
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
				fbt: T
			} = s("./node_modules/fbt/lib/FbtPublic.js"), L = e => {
				const {
					displayImage: t,
					style: s,
					showSeeMore: i,
					isReadyToShow: o,
					imgAltText: a
				} = e, r = "u" in t ? t.u : t.gif;
				return n.a.createElement("div", {
					className: Object(d.a)({
						[S.a.slideImageMainDiv]: !i
					})
				}, o && n.a.createElement("img", {
					src: r,
					alt: a,
					className: S.a.slideImage,
					style: s
				}), i && n.a.createElement("div", {
					className: S.a.seeMore
				}, T._("see full image", null, {
					hk: "1Qygw5"
				})))
			}, j = e => {
				const {
					slideIndex: t,
					currentIndex: s,
					obfuscatedImage: i,
					optimalImage: o,
					originalImage: a,
					isListing: r,
					isSponsored: l,
					isReadyToShow: c,
					imgAltText: u
				} = e, m = s === t ? {
					left: "0px"
				} : {
					left: s > t ? "-100%" : "100%"
				}, h = Object(y.c)(r), p = a.y > h && Object(w.I)(a.y, a.x), b = p ? {} : {
					maxHeight: "100%"
				};
				let g;
				return g = i || (p ? a : "gif" in a ? a : o), n.a.createElement("li", {
					style: m,
					className: S.a.slide
				}, n.a.createElement("figure", {
					className: Object(d.a)({
						[S.a.tallImage]: p,
						[S.a.commonImage]: !p
					}, S.a.figure)
				}, r || l ? n.a.createElement(L, {
					displayImage: g,
					style: b,
					showSeeMore: p,
					isReadyToShow: c,
					imgAltText: u
				}) : n.a.createElement("a", {
					href: "u" in a ? a.u : a.gif,
					rel: "noopener noreferrer",
					target: "_blank",
					className: Object(d.a)({
						[S.a.tallImage]: p,
						[S.a.commonImage]: !p
					}, S.a.imageLink)
				}, n.a.createElement(L, {
					displayImage: g,
					style: b,
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
			}, Object(y.e)(e.outboundUrl)), n.a.createElement(b.a, {
				className: S.a.linkIcon
			})))), _ = e => n.a.createElement("div", {
				className: S.a.slideIndicator,
				onClick: e.toggleTileLayout ? t => {
					t.preventDefault(), t.stopPropagation(), e.toggleTileLayout()
				} : void 0
			}, e.toggleTileLayout && n.a.createElement(g.a, {
				className: S.a.tileIcon
			}), e.currentSlide, "/", e.totalSlides), R = (e, t = 4) => {
				let s = e - t;
				return s < 0 && (s = 0), s
			}, P = (e, t, s = 4) => {
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
						isSponsored: O,
						isTileLayout: T,
						mediaMetadata: L = {},
						post: D,
						postId: A,
						postTitle: V,
						shouldShowTileLayoutOption: k,
						subredditName: B,
						isVisible: W
					} = e,
					F = Object(o.e)(e => Object(I.b)(e, A)),
					H = F > 0,
					U = F < p.length - 1,
					G = Object(h.a)(),
					K = Object(i.useRef)(null),
					Y = Object(i.useRef)(null),
					[$, z] = Object(i.useState)(W ? F : -1),
					[J, q] = Object(i.useState)(W ? F : -1),
					Q = Object(r.a)(W),
					X = Object(r.a)(F);
				Object(i.useEffect)(() => {
					(void 0 !== Q && Q !== W && W && $ < 0 && J < 0 || void 0 !== X && X !== F && W && ($ > F || J < F)) && (z(R(F, 1)), q(P(F, p.length, 1)))
				}, [Q, F, W, $, J, X, p.length, A]);
				const Z = Object(i.useRef)(),
					ee = Object(i.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t
							} = e;
							t ? ($ < 0 || J - $ == 0) && (Z.current = setTimeout(() => {
								const e = P(J, p.length);
								e !== J && q(e)
							}, 1e3)) : ($ < 0 || J - $ == 0) && clearTimeout(Z.current)
						})
					}, [$, J, p.length]);
				Object(a.a)(Y, ee);
				const te = Object(i.useCallback)(e => {
						t(Object(x.f)({
							postId: A,
							index: e
						}))
					}, [t, A]),
					se = Object(i.useCallback)(() => {
						t(Object(f.u)(D, E.a.GalleryItemImpression))
					}, [t, D]),
					ie = Object(i.useCallback)(() => {
						t(Object(x.i)({
							postId: A,
							isTileLayout: !T
						}))
					}, [t, A, T]),
					ne = Object(i.useCallback)(() => {
						if (!U) return;
						const e = F + 1;
						if (e + 1 >= J) {
							const e = P(J, p.length);
							e !== J && q(e)
						}
						te(e), G(u.b(A, e)), G(u.d(A, e + 1)), se()
					}, [U, F, se, te, G, A, J, p.length]),
					oe = Object(i.useCallback)(() => {
						if (!H) return;
						const e = F - 1;
						if (e - 1 <= $) {
							const e = R($);
							e !== $ && z(e)
						}
						const t = F + 1;
						te(e), G(u.a(A, t)), G(u.d(A, t - 1)), se()
					}, [H, F, se, te, G, A, $]),
					ae = Object(i.useCallback)(() => {
						const e = p[F] && p[F].outboundUrl;
						e && G(u.c(A, e))
					}, [G, A, F, p]);
				m(v.a.ArrowLeft, K.current, oe), m(v.a.ArrowRight, K.current, ne);
				const re = p[F] && p[F].caption,
					de = p[F] && p[F].outboundUrl,
					le = ((e, t, s) => {
						const i = Object(y.f)(e),
							n = Object(y.g)(i),
							o = n.x / n.y < 1,
							a = Object(y.h)(e),
							r = Object(y.i)(e || {}, Object(y.c)(s), w.p);
						return s || r || a || o ? {
							height: t
						} : {
							paddingBottom: `${Object(w.B)(n.y,n.x)}%`
						}
					})(L, b, g);
				return n.a.createElement("div", {
					className: Object(d.a)(S.a.outerContainer),
					ref: K,
					tabIndex: 0
				}, T ? n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
					className: Object(d.a)(S.a.tilesWrapper, {
						[S.a.blurredContent]: e.shouldBlur
					}),
					onClick: e.onClickRevealBlurred
				}, p.map((t, s) => {
					const i = t.mediaId,
						o = L && L[i];
					if (!o || !o.s) return null;
					const a = [...o && o.s ? [o.s] : [], ...o && o.p ? o.p : []],
						r = Object(y.d)(w.y, a);
					if (!r) return null;
					const d = o.s;
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
					ref: Y,
					onClick: e.onClickRevealBlurred,
					style: le
				}, n.a.createElement("div", {
					className: S.a.imagesWrapper
				}, n.a.createElement("ul", {
					className: S.a.slideWrapper
				}, p.map((t, s) => {
					const i = t.mediaId,
						o = L && L[i];
					if (!o || !o.s) return null;
					const a = t.caption ? t.caption : V,
						r = Object(c.a)(B ? `${B} - ${a}` : a, 300, l.bb),
						d = [...o && o.s ? [o.s] : [], ...o && o.p ? o.p : []],
						u = Object(y.d)(b, d);
					if (!u) return null;
					const m = e.shouldBlur && Object(y.d)(b, o.o || []) || void 0,
						h = s >= $ && s <= J;
					return n.a.createElement(j, {
						slideIndex: s,
						currentIndex: F,
						obfuscatedImage: m,
						optimalImage: u,
						originalImage: o.s,
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
					onClick: oe,
					setFocusTo: Y,
					hasMoreSlides: H,
					title: "Previous",
					iconClassName: S.a.prevIcon,
					className: S.a.prevButton
				}), n.a.createElement(M, {
					onClick: ne,
					setFocusTo: Y,
					hasMoreSlides: U,
					title: "Next",
					iconClassName: S.a.nextIcon,
					className: S.a.nextButton
				}))), p.length > 1 ? n.a.createElement(_, {
					currentSlide: F + 1,
					totalSlides: p.length,
					toggleTileLayout: k && ie || void 0
				}) : ""), !re && !de || T || O ? !!s && !T && !O && n.a.createElement("div", {
					className: S.a.emptyCaptionBlock,
					style: {
						height: s
					}
				}) : n.a.createElement(N, {
					caption: re,
					onClickEvent: ae,
					outboundUrl: de,
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
				r = s("./src/reddit/models/Poll/index.ts"),
				d = s("./src/reddit/selectors/poll/index.ts"),
				l = s("./src/reddit/components/Econ/Prediction/async.ts"),
				c = s("./src/reddit/components/Governance/Proposal/async.ts");
			const u = Object(a.c)({
				poll: d.e
			});
			t.a = Object(o.b)(u)(({
				isCommentsPage: e,
				poll: t,
				postId: s
			}) => t ? Object(r.g)(t) ? n.a.createElement(l.a, {
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
				onLoadRichTextContentIfNeeded: t => e(Object(l.t)(t))
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
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/intersectionObserver/index.ts"),
				d = s("./src/reddit/components/Media/constants.ts"),
				l = s("./src/reddit/components/Media/EmbedBox/index.tsx"),
				c = s("./src/reddit/components/Media/MediaContainer/index.tsx"),
				u = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				m = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/reddit/components/Media/TwitterEmbed/index.m.less"),
				p = s.n(h);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const g = 350,
				x = 100,
				f = 300;
			class E extends o.a.Component {
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
					return o.a.createElement(c.a, b({}, s, {
						alwaysWrapMedia: !0,
						height: E,
						showFull: !s.isListing,
						width: g
					}), e && o.a.createElement(o.a.Fragment, null, (!s.height || !h) && (t.isDeleted ? o.a.createElement("p", {
						className: p.a.tweetDeleted
					}, i.fbt._("This Tweet has been deleted.", null, {
						hk: "1LhcOw"
					})) : o.a.createElement("div", {
						className: Object(a.a)(Object(u.a)({
							isLoading: !0
						}), p.a.tweetPlaceholder)
					})), o.a.createElement(l.a, {
						childRef: this.embedBoxChildRef,
						className: Object(a.a)(p.a.tweetEmbedBox, {
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
						width: g
					}), s.isListing && E > m.j && o.a.createElement("div", {
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
		"./src/reddit/components/Media/index.m.less": function(e, t, s) {
			e.exports = {
				hiddenLink: "_3dhFVFchWAAFXfLFTa94n9",
				displayNone: "_1Q2mF3u7v9hBVu_4bkC7R4",
				galleryMediaContainer: "_3ozFpM1W8BRdrzkr_ssGxZ"
			}
		},
		"./src/reddit/components/Media/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/core-js/modules/web.dom.iterable.js"),
				n = s.n(i),
				o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./node_modules/lodash/debounce.js"),
				r = s.n(a),
				d = s("./node_modules/react/index.js"),
				l = s.n(d),
				c = s("./node_modules/react-redux/es/index.js"),
				u = s("./node_modules/reselect/es/index.js"),
				m = s("./src/higherOrderComponents/withMux/index.tsx"),
				h = s("./src/lib/constants/index.ts"),
				p = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				b = s("./src/lib/env/index.ts"),
				g = s("./src/lib/isUrl/index.ts"),
				x = s("./src/lib/objectSelector/index.ts"),
				f = s("./src/lib/onFocusAndVisibilityChange/index.ts"),
				E = s("./src/lib/sentry/index.ts"),
				v = s("./src/lib/truncateText/index.ts"),
				y = s("./src/reddit/components/AdViewability/index.tsx"),
				w = s("./src/reddit/components/Governance/VaultActionLink/async.ts"),
				I = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				C = s("./src/reddit/components/Media/constants.ts"),
				O = s("./src/reddit/components/Media/EmbedBox/index.tsx"),
				S = s("./src/reddit/components/Media/GalleryBox/index.tsx"),
				T = s("./src/reddit/components/Media/ImageBox/index.tsx"),
				L = s("./src/reddit/components/Media/MediaContainer/index.tsx"),
				j = s("./src/reddit/components/Media/PollContainer/index.tsx"),
				M = s("./src/reddit/components/Media/RichTextContainer/index.tsx"),
				N = s("./src/reddit/components/Media/TwitterEmbed/index.tsx"),
				_ = s("./src/reddit/components/Media/VideoBox/index.tsx"),
				R = s("./src/reddit/components/PlayButton/index.tsx"),
				P = s("./src/reddit/components/RawHTMLDisplay/Media.tsx"),
				D = s("./src/reddit/components/RichTextJson/index.tsx"),
				A = s("./src/reddit/constants/componentSizes.ts"),
				V = s("./src/reddit/constants/experiments.ts"),
				k = s("./src/reddit/constants/screenWidths.ts"),
				B = s("./src/reddit/contexts/PageLayer/index.tsx"),
				W = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				F = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				H = s("./src/reddit/helpers/mediaGallery/index.tsx"),
				U = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				G = s("./src/reddit/helpers/stripMetaLinks/fromRawHtml.ts"),
				K = s("./src/reddit/helpers/stripMetaLinks/fromRTJ.ts"),
				Y = s("./src/reddit/models/Media/index.ts"),
				$ = s("./src/reddit/selectors/experiments/postSeo.ts"),
				z = s("./src/reddit/selectors/experiments/video.ts"),
				J = s("./src/reddit/selectors/media.ts"),
				q = s("./src/reddit/selectors/postCreations.ts"),
				Q = s("./src/reddit/selectors/posts.ts"),
				X = s("./src/reddit/selectors/seo/index.ts"),
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
			const ie = Object(o.a)({
					resolved: {},
					chunkName: () => "LiveVideoPlayer",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), s.e("LiveVideoPlayer~PublicAccessNetwork"), s.e("LiveVideoPlayer")]).then(s.bind(null, "./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/index.tsx")),
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
				oe = 300,
				ae = " - ",
				re = 1200,
				de = 75,
				le = "player.js",
				ce = A.r + A.q,
				ue = e => l.a.createElement("div", {
					className: e.isVisible ? void 0 : te.a.displayNone
				}, e.children),
				me = new Set([Y.o.EMBED, Y.o.GIFVIDEO, Y.o.LIVEVIDEO, Y.o.VIDEO]),
				he = e => !!e.media && me.has(e.media.type),
				pe = new Set([Y.o.EMBED, Y.o.GALLERY, Y.o.GIFVIDEO, Y.o.IMAGE, Y.o.LIVEVIDEO, Y.o.VIDEO]),
				be = ({
					post: e
				}) => !!e.media && pe.has(e.media.type),
				ge = Object(B.t)(),
				xe = Object(u.c)({
					imgOCRAltTextVariant: (e, t) => Object(X.d)(e, t) ? Object($.b)(e, t.post, !0) : void 0,
					OCRAltText: (e, {
						post: t
					}) => Object($.a)(e, t.id),
					subredditOrProfileDisplayText: (e, t) => Object($.k)(e, t),
					subredditOrProfile: (e, {
						post: t
					}) => Object(Q.P)(e, {
						postId: t.id
					}),
					isEditing: (e, {
						post: t
					}) => Object(q.K)(e, {
						postId: t.id
					}),
					shouldShowAltText: (e, t) => Object(X.d)(e, t),
					isGalleryTileLayout: (e, {
						shouldShowGalleryTileOption: t,
						post: s,
						isGalleryTileLayoutDefault: i
					}) => {
						if (!t) return !1;
						const n = Object(J.c)(e, s.id);
						return !(void 0 !== n || !i) || !!n
					},
					inVideoScrollPlaybackFixExperiment: z.b
				}),
				fe = Object(c.b)(xe),
				Ee = Object(x.b)(e => ({
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
							if (this.props.inVideoScrollPlaybackFixExperiment && this.pauseContent(), this.iframe) {
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
						this.props.inVideoScrollPlaybackFixExperiment && this.stopContent(), this.iframe && this.setState(({
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
					he(this.props.post) && (this.visibilityChangeSubscriptionId = f.a.subscribe(e => {
						this.handleVisibilityChange(e)
					})), this.props.scrollerItemRef && be(this.props) && this.props.scrollerItemRef(this, this.state.canLoadContent)
				}
				componentWillUnmount() {
					this.visibilityChangeSubscriptionId && f.a.unsubscribe(this.visibilityChangeSubscriptionId), this.props.scrollerItemRef && be(this.props) && this.props.scrollerItemRef(void 0), window.removeEventListener("resize", this.updateDimensions)
				}
				UNSAFE_componentWillReceiveProps(e) {
					!this.state.canLoadContent && e.shouldLoad && this.setState({
						canLoadContent: !0
					}), void 0 !== e.shouldPause && e.shouldPause !== this.props.shouldPause && this.shouldFocusContentDebouncer(!e.shouldPause)
				}
				getAltText() {
					const {
						imgOCRAltTextVariant: e,
						OCRAltText: t,
						post: s,
						subredditOrProfileDisplayText: i,
						shouldShowAltText: n
					} = this.props;
					if (!n) return;
					let o = "";
					return i && (o += i), e === V.fc.OCR ? o += `${ae}${t}` : s.title && (o += `${ae}${s.title}`), e === V.fc.ShortPostTitleOCR && (o += `${ae}${t}`), o.length > oe ? Object(v.a)(o, oe, h.bb) : o
				}
				getVideoExpandoMaxDimensions() {
					let e, t = Math.max(Y.j, this.state.viewportHeight),
						s = Math.min(re, 16 * t / 9);
					s === re && (t = 9 * re / 16), e = this.state.viewportWidth >= k.c ? this.state.viewportWidth < A.l ? this.state.viewportWidth - ce - 2 * de : this.state.viewportWidth - ce - A.e - 2 * de : this.state.viewportWidth - 2 * de;
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
					if (Object(Y.G)(n.media)) return {
						source: n.media.scrubberThumbSource,
						width: this.state.viewportWidth - 2 * de,
						height: this.state.viewportHeight - 2 * de
					};
					const o = n.media && n.media.obfuscated || "";
					let a = !n.media || Object(Y.K)(n.media) || Object(Y.E)(n.media) ? "" : n.media.content,
						[r, d] = !n.media || Object(Y.H)(n.media) || Object(Y.J)(n.media) || Object(Y.E)(n.media) ? [0, 0] : [n.media.height, n.media.width];
					if (s && n.media && Object(Y.E)(n.media)) {
						r = Object(H.b)(n.media.mediaMetadata || {}, Object(H.c)(i), Y.p, s) + Y.i, d = s
					}
					if (s && n.media && (n.media.type === Y.o.IMAGE || n.media.type === Y.o.GIFVIDEO)) {
						const e = Z.b(s, n.media.resolutions);
						e && (a = e.url, d = e.width, r = e.height)
					} else if (n && n.media && (!e.isListing || e.isExpando) && (n.media.type === Y.o.IMAGE || n.media.type === Y.o.GIFVIDEO)) {
						let e;
						(e = Object(Y.I)(n.media.height, n.media.width) && Object(T.b)(n.media.height) ? Z.c(n.media.height, n.media.width, n.media.resolutions) : Z.a(n.media.resolutions)) && (a = e.url, d = e.width, r = e.height)
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
					const {
						className: e,
						crosspost: t,
						flairStyleTemplate: s,
						forceAspectRatio: i,
						isCommentsPage: n,
						isExpando: o,
						isGalleryTileLayout: a,
						isListing: r,
						isMediumHeight: d,
						isNotCardView: c,
						isTitleOnly: u,
						post: m,
						showCentered: h,
						showFull: p = !1,
						subredditOrProfileDisplayText: x
					} = this.props, {
						canLoadContent: f,
						forcePause: v,
						shouldPause: I,
						shouldStop: C,
						viewportWidth: A
					} = this.state;
					if (!m.media) return null;
					const V = v || I,
						k = C,
						{
							source: B,
							obfuscated: $,
							height: z,
							width: J,
							needsBackgroundBlur: q
						} = this.getMediaInfo(this.props, this.state),
						Q = {
							showCentered: h,
							isListing: r,
							showFull: p,
							height: z,
							width: J
						},
						X = {
							...Q,
							className: e,
							forceAspectRatio: i,
							viewportWidth: A
						},
						Z = this.shouldBlur(),
						ee = !(!m.isSponsored || !m.source);
					if ($ && Z) return l.a.createElement(L.a, se({}, X, {
						blurSrc: $
					}), l.a.createElement(ue, {
						isVisible: f
					}, l.a.createElement(T.a, se({}, Q, {
						altText: this.getAltText(),
						className: this.props.imageBoxClassName,
						contentImageClassName: this.props.imageBoxContentImageClassName,
						imageClassName: this.props.imageBoxClassName,
						isListing: r,
						isNSFW: this.isNSFW(),
						isSpoiler: this.isSpoiler(),
						isVideoThumbnail: !!m.media && m.media.type === Y.o.VIDEO,
						onClick: this.onClickRevealBlurred,
						postId: m.id,
						shouldBlur: Z,
						source: $,
						outboundUrl: ee && m.source.outboundUrl || void 0,
						originalSource: B
					}))));
					if (!m.media) return null;
					switch (m.media.type) {
						case Y.o.RTJSON:
							const i = Object(F.a)(m, null);
							if (null === i) return;
							if (!p && !Object(W.a)(m)) return null;
							const v = m.isMeta ? Object(K.a)(i, m.id) : i;
							return l.a.createElement(l.a.Fragment, null, l.a.createElement(M.a, {
								canLoadContent: f,
								className: e,
								"data-click-id": "text",
								isCommentsPage: n,
								isExpando: o,
								isMediumHeight: d,
								isRichTextTruncated: m.media.isRichtextPreview,
								isTitleOnly: u,
								postId: m.id,
								showFull: p
							}, l.a.createElement(D.a, {
								altText: this.getAltText(),
								content: v,
								flairStyleTemplate: s,
								isListing: r,
								isNSFW: this.isNSFW(),
								isSpoiler: this.isSpoiler(),
								mediaMetadata: m.media.mediaMetadata,
								onClickRevealBlurred: this.onClickRevealBlurred,
								postId: m.id,
								rtJsonElementProps: Ee(this.props),
								renderMediaAsLinks: r,
								shouldBlur: Z
							}), l.a.createElement(w.b, {
								content: v
							})), l.a.createElement(j.a, {
								postId: m.id,
								isCommentsPage: !!n
							}));
						case Y.o.TEXT:
							if (Object(U.a)(m)) {
								const t = "Text post should not include body content";
								return E.c.withScope(e => {
									e.setExtra("info", {
										post: m,
										isListing: r,
										isCommentsPage: n
									}), E.c.captureMessage(t)
								}), Object(b.a)() && console.log(`${m.id}: ${t}`), l.a.createElement(l.a.Fragment, null, l.a.createElement(M.a, {
									postId: m.id,
									className: e,
									"data-click-id": "text",
									isCommentsPage: n,
									showFull: p
								}, l.a.createElement(P.a, {
									flairStyleTemplate: s,
									html: m.isMeta ? Object(G.a)(m.media.content, m.id, te.a.hiddenLink) : m.media.content
								})), l.a.createElement(j.a, {
									postId: m.id,
									isCommentsPage: !!n
								}))
							}
							return l.a.createElement(j.a, {
								postId: m.id,
								isCommentsPage: !!n
							});
						case Y.o.EMBED:
							return this.props.isMiniCard && m.preview && m.preview.url ? l.a.createElement(L.a, se({}, X, {
								alwaysWrapMedia: !0
							}), l.a.createElement(ue, {
								isVisible: f
							}, l.a.createElement(l.a.Fragment, null, l.a.createElement(T.a, se({}, Q, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: o,
								isListing: r,
								isNSFW: this.isNSFW(),
								isCrosspost: !!t,
								isSpoiler: this.isSpoiler(),
								postId: m.id,
								shouldBlur: Z,
								source: m.preview.url,
								originalSource: m.preview.url
							})), l.a.createElement(R.a, null)))) : Y.h.has(m.media.provider) ? m.media.provider === Y.v.Twitter ? l.a.createElement(N.a, {
								canLoadContent: f,
								embedBoxChildRef: this.storeChildRef,
								media: m.media,
								mediaContainerProps: X,
								onIframeLoaded: this.onIframeLoaded,
								source: B,
								title: m.title
							}) : l.a.createElement(L.a, se({}, X, {
								alwaysWrapMedia: !0,
								height: o ? z : Y.j,
								width: o ? J : Y.j * (16 / 9)
							}), f && l.a.createElement(O.a, {
								childRef: this.storeChildRef,
								height: o ? z : Y.j,
								width: o ? J : void 0,
								isListing: r,
								isResponsive: !0,
								onLoad: this.onIframeLoaded,
								showCentered: h,
								showFull: p,
								source: B,
								title: m.title
							})) : l.a.createElement(L.a, se({}, X, {
								alwaysWrapMedia: !0
							}), f && l.a.createElement(O.a, se({}, Q, {
								isResponsive: o || m.media.provider === Y.v.IFrameEmbed,
								title: m.title,
								childRef: this.storeChildRef,
								onLoad: this.onIframeLoaded,
								source: B,
								fullWidth: m.media.provider === Y.v.IFrameEmbed
							})));
						case Y.o.GIFVIDEO: {
							let e = z,
								t = J;
							return e > Y.j && (t = J / z * (e = Y.j)), l.a.createElement(L.a, se({}, X, {
								blurSrc: q ? m.media.gifBackgroundImage : void 0
							}), l.a.createElement(ue, {
								isVisible: f
							}, l.a.createElement(_.a, se({}, Q, {
								isNotCardView: c,
								height: o ? void 0 : e,
								width: o ? void 0 : t,
								postId: m.id,
								shouldLoad: !0,
								shouldPause: V,
								source: B,
								originalSource: m.media.content
							}))))
						}
						case Y.o.VIDEO: {
							const e = m.media.posterUrl || m.preview && m.preview.url;
							if (this.props.isMiniCard && e) return l.a.createElement(L.a, se({}, X, {
								alwaysWrapMedia: !0
							}), l.a.createElement(ue, {
								isVisible: f
							}, l.a.createElement(l.a.Fragment, null, l.a.createElement(T.a, se({}, Q, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: o,
								isListing: r,
								isNSFW: this.isNSFW(),
								isCrosspost: !!t,
								isSpoiler: this.isSpoiler(),
								postId: m.id,
								shouldBlur: Z,
								source: e,
								originalSource: e
							})), l.a.createElement(R.a, null))));
							const s = l.a.createElement(L.a, se({}, X, {
								alwaysWrapMedia: !0,
								isVideo: !0
							}), f && l.a.createElement(ne, {
								autoPlay: "boolean" == typeof I ? !I : void 0,
								isExpando: o,
								shouldLoad: !0,
								shouldPause: V,
								shouldStop: k,
								hlsSource: m.media.hlsUrl,
								mpegDashSource: m.media.dashUrl,
								isGif: m.media.isGif,
								scrubberThumbSource: m.media.scrubberThumbSource,
								postId: m.id,
								callToActionSource: m.source || void 0,
								callToActionText: m.callToAction,
								isListing: r,
								posterUrl: m.media.posterUrl,
								muxVideoDuration: void 0,
								muxVideoId: m.id,
								muxVideoIsLive: !1,
								muxVideoTitle: m.title
							}));
							return m.isSponsored ? l.a.createElement(y.a, {
								post: m,
								trackVideo: !0
							}, s) : s
						}
						case Y.o.LIVEVIDEO:
							return l.a.createElement(ue, {
								isVisible: f
							}, l.a.createElement(ie, {
								canLoad: f,
								postId: m.id,
								postTitle: m.title,
								shouldPause: V || k,
								url: m.media.hlsUrl
							}));
						case Y.o.IMAGE:
							const C = this.state.viewportHeight - 2 * de,
								A = this.state.viewportWidth - 2 * de;
							let $ = B;
							return this.props.isMiniCard && !this.props.isMiniCardHQPreviews && (m.thumbnail && Object(g.a)(m.thumbnail.url) ? $ = m.thumbnail.url : m.preview && Object(g.a)(m.preview.url) && ($ = m.preview.url)), l.a.createElement(L.a, se({}, X, {
								blurSrc: q ? $ : void 0,
								isExpando: !!o
							}), l.a.createElement(ue, {
								isVisible: f
							}, l.a.createElement(T.a, se({}, Q, {
								altText: this.getAltText(),
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: o,
								isListing: r,
								isNSFW: this.isNSFW(),
								isCrosspost: !!t,
								isSpoiler: this.isSpoiler(),
								maxHeight: o ? C : void 0,
								maxWidth: o ? A : void 0,
								postId: m.id,
								shouldBlur: Z,
								source: $,
								outboundUrl: ee && m.source.outboundUrl || void 0,
								isSponsored: m.isSponsored,
								originalSource: m.media.content
							}))));
						case Y.o.GALLERY:
							const oe = Object(H.b)(m.media.mediaMetadata || {}, Object(H.c)(r), Y.p, J),
								ae = Object(H.a)(m.media.gallery, m.isSponsored);
							return l.a.createElement(L.a, se({}, X, {
								blurSrc: q ? B : void 0,
								isExpando: !!o,
								maxGalleryHeight: oe + ae,
								className: te.a.galleryMediaContainer,
								isGalleryTileLayout: a
							}), l.a.createElement(ue, {
								isVisible: f
							}, l.a.createElement(S.a, {
								post: m,
								postId: m.id,
								postTitle: m.title,
								subredditName: x,
								galleryItems: m.media.gallery ? m.media.gallery.items : [],
								mediaMetadata: m.media.mediaMetadata || {},
								imageHeight: oe,
								captionHeight: ae,
								isSponsored: m.isSponsored,
								className: this.props.imageBoxClassName,
								isListing: r,
								isNSFW: this.isNSFW(),
								isSpoiler: this.isSpoiler(),
								shouldBlur: Z,
								onClickRevealBlurred: this.onClickRevealBlurred,
								isTileLayout: !!a,
								shouldShowTileLayoutOption: this.props.shouldShowGalleryTileOption,
								isVisible: f
							})));
						default:
							return null
					}
				}
			}
			t.a = ge(fe(Object(p.a)(ve)))
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
				p = (e, t) => e.some(e => e.y > t && Object(o.I)(e.y, e.x));

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
				return a
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
				n = s("./src/reddit/models/Poll/index.ts"),
				o = s("./src/reddit/selectors/commentSelector.ts");
			const a = (e, {
					postId: t
				}) => e.posts.metaMap[t],
				r = (e, {
					postId: t
				}) => {
					const s = a(e, {
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
					return s && Object(n.g)(s) ? s : null
				},
				l = (e, {
					commentId: t
				}) => {
					const s = Object(o.a)(e, {
						commentId: t
					});
					return s && s.commentType === i.a.Prediction && d(e, s) || null
				},
				c = (e, {
					postId: t
				}) => {
					const s = a(e, {
						postId: t
					});
					if (s) return e.polls.rewards[s]
				},
				u = (e, {
					postId: t
				}) => {
					const s = a(e, {
						postId: t
					});
					if (s) return e.polls.results.byVotingPower[s]
				},
				m = (e, {
					postId: t
				}) => {
					const s = a(e, {
						postId: t
					});
					if (s) return e.polls.results.byVoters[s]
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86.02410f008c2a2aaf99f5.js.map