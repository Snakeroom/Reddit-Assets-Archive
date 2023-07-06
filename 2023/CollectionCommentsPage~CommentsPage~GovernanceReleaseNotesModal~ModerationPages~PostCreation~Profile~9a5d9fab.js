// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab.1c04620393beb3de4f3c.js
// Retrieved at 7/6/2023, 5:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"], {
		"./src/higherOrderComponents/withClickTracking/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return d
			}));
			var s = i("./node_modules/react/index.js"),
				n = i.n(s),
				a = i("./src/reddit/components/TrackingHelper/index.tsx"),
				o = i("./src/reddit/selectors/telemetry.ts");

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
					}
					return e
				}).apply(this, arguments)
			}
			const l = (e, t, i) => (function() {
				let s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
				return n => {
					const a = p(n.target, n.currentTarget),
						r = m(n.target, n.currentTarget);
					a && i && t && (u(n.target, n.currentTarget, c.anchors) ? i(t(e, a, r)) : i(i => {
						const s = t(e, a, r)(i);
						let n;
						if (s && s.actionInfo) {
							const {
								pageType: e,
								...t
							} = s.actionInfo;
							n = t
						}
						return {
							...s,
							actionInfo: Object(o.T)(i, n)
						}
					})), u(n.target, n.currentTarget, c.anchorsAndButtons) && s(n)
				}
			});

			function d(e) {
				const t = t => {
					const {
						sendEvent: i,
						eventFactory: a,
						clickTrackingId: o,
						...d
					} = t, c = Object(s.useCallback)(l(o, a, i), [o, a, i]);
					return n.a.createElement(e, r({}, d, {
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
				u = (e, t, i) => !i.includes(e.tagName) && (e === t || !!e.parentElement && u(e.parentElement, t, i)),
				p = (e, t) => {
					const i = e.dataset.clickId;
					return i || (e === t ? null : !!e.parentElement && p(e.parentElement, t))
				},
				m = (e, t) => "true" === e.dataset.ignoreClick || e !== t && (!!e.parentElement && m(e.parentElement, t))
		},
		"./src/lib/truncateText/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			}));
			const s = /\s*[,-:;\u2013\u2014]\s*$/;

			function n(e, t) {
				let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
				if (e.length <= t || t < 0) return e;
				if ((e = e.trim().replace(/\s+/g, " ")).length <= t) return e;
				t -= i.length;
				let n = e.lastIndexOf(" ", t);
				return n = n > 0 ? n : t, e.slice(0, n).replace(s, "").trimRight() + i
			}
		},
		"./src/reddit/components/Econ/Prediction/async.ts": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-Prediction",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!i.m[t]
				},
				importAsync: () => Promise.all([i.e("index~reddit-components-Econ-Prediction"), i.e("reddit-components-Econ-Prediction")]).then(i.bind(null, "./src/reddit/components/Econ/Prediction/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return i(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Prediction/index.tsx"
				}
			})
		},
		"./src/reddit/components/IntuitivePostTypes/OptionalText.m.less": function(e, t, i) {
			e.exports = {
				optionalText: "_1Bdk-WLPvP2xHwSSQ3qsHq"
			}
		},
		"./src/reddit/components/IntuitivePostTypes/OptionalText.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/react/index.js"),
				n = i.n(s),
				a = i("./src/reddit/components/IntuitivePostTypes/OptionalText.m.less"),
				o = i.n(a),
				r = i("./src/reddit/components/RichTextJson/index.tsx");
			t.a = e => {
				let {
					content: t,
					rtJsonElementProps: i
				} = e;
				return n.a.createElement("div", {
					className: o.a.optionalText
				}, n.a.createElement(r.a, {
					content: t,
					rtJsonElementProps: i
				}))
			}
		},
		"./src/reddit/components/Media/GalleryBox/index.m.less": function(e, t, i) {
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
		"./src/reddit/components/Media/RichTextContainer/index.m.less": function(e, t, i) {
			e.exports = {
				richTextContainer: "Chtkt3BCZQruf0LtmFg2c",
				richTextContainerTitleOnly: "_2XNPI46MXRfDdsSoDqaksI",
				richTextContainerFull: "_3xX726aBn29LDbsDtzr_6E",
				placeholder: "_1aLU7RPNLdvfcbaNdcN11x",
				placeholderParagraph: "Owi9iYzjyVpDq_0YbCdJY"
			}
		},
		"./src/reddit/components/Media/TwitterEmbed/index.m.less": function(e, t, i) {
			e.exports = {
				tweetPlaceholder: "q0jsD_ZcQRuuUQzXawr8J",
				tweetContainer: "_2yB7G9L-6O_6Lp6D0n7EAl",
				tweetEmbedBox: "_3pYTJO5FjsoQWRUsIFQASN",
				isInvisible: "_3xICr9rbunMOudN40P1GgI",
				tweetDeleted: "sIgL7k1Lz6YLL146KNk8k",
				seeMore: "_2f5uYHvlfzs2DngQsiCdvB"
			}
		},
		"./src/reddit/components/Media/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return pi
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = i("./node_modules/lodash/debounce.js"),
				n = i.n(s),
				a = i("./node_modules/lodash/noop.js"),
				o = i.n(a),
				r = i("./node_modules/react/index.js"),
				l = i.n(r),
				d = i("./node_modules/react-redux/es/index.js"),
				c = i("./node_modules/reselect/es/index.js"),
				u = i("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				p = i("./src/higherOrderComponents/withClickTracking/index.tsx"),
				m = i("./src/lib/cache/localStorage/index.ts"),
				h = i("./src/lib/combineRefs/index.tsx"),
				g = i("./src/lib/loadWithRetries/index.ts"),
				b = () => Object(g.a)(() => i.e("MuxEmbed").then(i.t.bind(null, "./node_modules/mux-embed/dist/mux.js", 7))),
				v = i("./src/reddit/constants/experiments.ts"),
				f = i("./src/reddit/helpers/chooseVariant/index.ts");
			const E = Object(c.a)(e => {
				const t = Object(f.c)(e, {
					experimentEligibilitySelector: f.a,
					experimentName: v.Qe
				});
				return Object(v.Lg)(t) ? void 0 : t
			}, e => {
				const t = Object(f.c)(e, {
					experimentEligibilitySelector: f.a,
					experimentName: v.Re
				});
				return Object(v.Lg)(t) ? void 0 : t
			}, (e, t) => e === v.Te.Enabled && t === v.Te.Enabled);
			var x = i("./src/config.ts");
			var y = i("./src/reddit/selectors/user.ts");
			const O = e => {
					const t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
						i = t.length,
						s = new Uint32Array(e);
					return crypto.getRandomValues(s), Array.from(s).map(e => t.charAt(e % i)).join("")
				},
				w = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
					return new Date(e).toISOString().replace(/^(\d{4})-(\d{2})-(\d{2}).*/, "$1$2$3")
				},
				I = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
					return Math.trunc(e).toString(16).padStart(t, "0")
				};
			var S;
			! function(e) {
				e.SHA1 = "SHA-1", e.SHA256 = "SHA-256", e.SHA384 = "SHA-384", e.SHA512 = "SHA-512"
			}(S || (S = {}));
			const T = async e => (async (e, t) => {
				const i = (new TextEncoder).encode(t),
					s = await crypto.subtle.digest(e, i);
				return Array.from(new Uint8Array(s)).map(I).join("")
			})(S.SHA1, e);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
					}
					return e
				}).apply(this, arguments)
			}
			const j = (e => t => ((e, t) => `${e}(${(e=>e.displayName||e.name||"Component")(t)})`)(e, t))("WithMux"),
				L = {
					anonymousUserId: "t2_anonymous",
					debug: !1,
					disableCookies: !0,
					envKey: x.a.muxApiKey,
					localStorageSaltKey: "muxSalt",
					localStorageViewerUserIdKey: "muxViewerUserId",
					playerVersion: `Reddit/Version Build ${x.a.buildNumber} ${x.a.appName}`,
					respectDoNotTrack: !0,
					saltLength: 20,
					saltTimeToLive: 2592e3,
					viewerUserIdLength: 20
				};
			var P = function(e, t) {
					const {
						anonymousUserId: i,
						debug: s,
						disableCookies: n,
						envKey: a,
						localStorageSaltKey: o,
						localStorageViewerUserIdKey: u,
						playerName: p,
						playerVersion: g,
						respectDoNotTrack: v,
						saltLength: f,
						saltTimeToLive: I,
						viewerUserIdLength: S
					} = {
						...L,
						...t
					};
					class P extends r.Component {
						constructor(e) {
							super(e), this.dashInstance = null, this.hlsInstance = null, this.isMonitoring = !1, this.playerInitTime = Date.now(), this.videoRef = Object(r.createRef)(), this.handleDashCreate = e => this.setDashInstance(e), this.handleDashDestroy = () => this.setDashInstance(null), this.handleHlsCreate = e => this.setHlsInstance(e), this.handleHlsDestroy = () => this.setHlsInstance(null), this.combinedVideoRefs = this.combineExternalVideoRef(e.videoRef)
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
							return e ? Object(h.a)(this.videoRef, e) : this.videoRef
						}
						render() {
							const {
								forwardedRef: t,
								...i
							} = this.props, s = i;
							return l.a.createElement(e, C({}, s, {
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
								} = this, t = await b();
								e && t.removeDashJS(e), this.video && this.dashInstance && t.addDashJS(this.video, this.getDashInstanceData())
							} catch (i) {
								console.error(i)
							}
						}
						async setHlsInstance(e) {
							if (!this.props.isMuxEnabled) return;
							const t = e || null;
							if (t !== this.hlsInstance && (this.hlsInstance = t, this.isMonitoring)) try {
								const {
									video: e
								} = this, t = await b();
								e && t.removeHLSJS(e), this.video && this.hlsInstance && t.addHLSJS(this.video, this.getHlsInstanceData())
							} catch (i) {
								console.error(i)
							}
						}
						async doMuxThings() {
							if (this.props.isMuxEnabled) try {
								const e = await b();
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
							const e = this.props.redditUserId || P.ANONYMOUS_USER_ID,
								t = this.getOrCreateSalt(),
								i = `${w()}${e}${t}`;
							return (await T(i)).substr(0, P.VIEWER_USER_ID_LENGTH)
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
								i = this.getThirdPartyLibData();
							return {
								debug: P.DEBUG,
								disableCookies: P.DISABLE_COOKIES,
								respectDoNotTrack: P.RESPECT_DO_NOT_TRACK,
								...i,
								data: {
									env_key: P.ENV_KEY,
									experiment_name: this.experimentName,
									player_init_time: this.playerInitTime,
									player_name: P.PLAYER_NAME,
									player_version: P.PLAYER_VERSION,
									...t,
									viewer_user_id: e
								}
							}
						}
						getOrCreateSalt() {
							const e = P.LOCAL_STORAGE_SALT_KEY;
							let t = Object(m.a)(e);
							return t || (t = O(P.SALT_LENGTH), Object(m.b)(e, t, P.SALT_TIME_TO_LIVE)), t
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
								muxVideoIsLive: i,
								muxVideoTitle: s
							} = this.props;
							return {
								video_duration: i ? P.DURATION_LIVE : e,
								video_id: t,
								video_stream_type: i ? P.STREAM_TYPE_LIVE : P.STREAM_TYPE_ON_DEMAND,
								video_title: s,
								view_session_id: this.props.sessionId,
								player_software_version: this.getDashInstanceData() ? x.a.dashVersion : this.getHlsInstanceData() ? x.a.hlsVersion : null
							}
						}
					}
					P.displayName = j(e), P.ANONYMOUS_USER_ID = i, P.DEBUG = s, P.DISABLE_COOKIES = n, P.DURATION_LIVE = 1 / 0, P.ENV_KEY = a, P.LOCAL_STORAGE_SALT_KEY = o, P.LOCAL_STORAGE_VIEWER_USER_ID_KEY = u, P.PLAYER_NAME = p, P.PLAYER_VERSION = g, P.RESPECT_DO_NOT_TRACK = v, P.SALT_LENGTH = f, P.SALT_TIME_TO_LIVE = I, P.STREAM_TYPE_LIVE = "live", P.STREAM_TYPE_ON_DEMAND = "on-demand", P.VIEWER_USER_ID_LENGTH = S;
					const N = Object(r.forwardRef)((e, t) => l.a.createElement(P, C({}, e, {
							forwardedRef: t
						}))),
						M = Object(c.c)({
							redditUserId: y.k,
							isMuxEnabled: E
						});
					return Object(d.b)(M, null, null, {
						forwardRef: !0
					})(N)
				},
				N = i("./src/lib/ads/index.ts"),
				M = i("./src/lib/ads/utils.ts"),
				k = i("./src/lib/classNames/index.ts"),
				_ = i("./src/lib/constants/index.ts"),
				D = i("./src/lib/CSSVariableProvider/withTheme.tsx"),
				R = i("./src/lib/env/index.ts"),
				A = i("./src/lib/isUrl/index.ts"),
				B = i("./src/lib/objectSelector/index.ts"),
				V = i("./src/lib/onFocusAndVisibilityChange/index.ts"),
				W = i("./src/lib/sentry/index.ts"),
				U = i("./src/lib/truncateText/index.ts"),
				H = i("./src/reddit/actions/post.ts"),
				F = i("./src/reddit/components/AdViewability/index.tsx"),
				G = i("./src/reddit/components/Governance/VaultActionLink/async.ts"),
				z = i("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				Y = i("./src/reddit/components/IntuitivePostTypes/OptionalText.tsx");
			const J = "https://www.redditmedia.com";
			var K = i("./src/reddit/components/Media/EmbedBox/index.tsx"),
				$ = i("./src/reddit/hooks/useIntersectionObserver.ts"),
				q = i("./src/lib/hooks/usePrevious.ts"),
				Q = i("./src/reddit/helpers/trackers/gallery.ts");
			var X = (e, t, i) => {
					const s = Object(r.useCallback)(t => {
						t.isComposing || e !== t.keyCode || i()
					}, [e, i]);
					Object(r.useEffect)(() => {
						if (t) return t.addEventListener("keydown", s), () => {
							t && t.removeEventListener("keydown", s)
						}
					}, [t, s])
				},
				Z = i("./src/reddit/hooks/useTracking.ts"),
				ee = i("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				te = i("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				ie = i("./src/reddit/icons/svgs/Tile/index.tsx"),
				se = i("./src/reddit/actions/media.ts"),
				ne = i("./src/reddit/components/Media/BlurredContent.tsx"),
				ae = i("./src/reddit/constants/adEvents.ts"),
				oe = i("./src/reddit/constants/keycodes.ts"),
				re = i("./node_modules/node-libs-browser/node_modules/url/url.js"),
				le = i.n(re),
				de = i("./src/reddit/models/Media/index.ts");

			function ce(e, t) {
				const i = t.sort((e, t) => e.y - t.y),
					s = i.find(t => t.y > e);
				if (s) return s;
				const n = i.pop();
				return n || null
			}
			const ue = e => e ? de.j : de.d;

			function pe(e, t, i, s) {
				const n = me(e);
				if (be(n, t)) return t;
				const a = he(n);
				let o = a.y;
				return !o || o < i ? i : (s > 0 && (o = s * o / a.x), o > t ? t : o)
			}
			const me = e => Object.entries(e).reduce((e, t) => {
					let [i, s] = t;
					return s && s.s && e.push(s.s), e
				}, []),
				he = e => e.reduce((e, t) => ge(e, t), e && e[0] || []),
				ge = (e, t) => {
					const i = e.x / e.y + .005,
						s = e.x / e.y - .005;
					return t.x / t.y > i ? t : t.x / t.y > s ? e.y > t.y ? e : t : e
				},
				be = (e, t) => e.some(e => e.y > t && Object(de.M)(e.y, e.x));
			var ve = i("./src/reddit/selectors/media.ts"),
				fe = i("./src/reddit/components/Media/GalleryBox/index.m.less"),
				Ee = i.n(fe);
			const {
				fbt: xe
			} = i("./node_modules/fbt/lib/FbtPublic.js"), ye = e => {
				const {
					displayImage: t,
					style: i,
					showSeeMore: s,
					isReadyToShow: n,
					imgAltText: a
				} = e, o = "u" in t ? t.u : t.gif;
				return l.a.createElement("div", {
					className: Object(k.a)({
						[Ee.a.slideImageMainDiv]: !s
					})
				}, n && l.a.createElement("img", {
					src: o,
					alt: a,
					className: Ee.a.slideImage,
					style: i
				}), s && l.a.createElement("div", {
					className: Ee.a.seeMore
				}, xe._("see full image", null, {
					hk: "1Qygw5"
				})))
			}, Oe = (e, t, i) => {
				const s = me(e),
					n = he(s),
					a = n.x / n.y < 1,
					o = function(e) {
						const t = me(e),
							i = t.every(e => e.y > e.x),
							s = t.every(e => e.x > e.y);
						return !i && !s
					}(e),
					r = function(e, t, i) {
						const s = me(e);
						if (be(s, t)) return !0;
						const n = he(s).y;
						return !n || n < i
					}(e || {}, ue(i), de.p);
				return i || r || o || a ? {
					height: t
				} : {
					paddingBottom: `${Object(de.C)(n.y,n.x)}%`
				}
			}, we = e => {
				const {
					slideIndex: t,
					currentIndex: i,
					obfuscatedImage: s,
					optimalImage: n,
					originalImage: a,
					imgAltText: o,
					isListing: r,
					isNSFW: d,
					isNsfwBlockingModalEligible: c,
					isSpoiler: u,
					isSponsored: p,
					isReadyToShow: m,
					shouldBlur: h
				} = e, g = i === t ? {
					left: "0px"
				} : {
					left: i > t ? "-100%" : "100%"
				}, b = ue(r), v = a.y > b && Object(de.M)(a.y, a.x), f = v ? {} : {
					maxHeight: "100%"
				};
				let E;
				return E = s || (v ? a : "gif" in a ? a : n), l.a.createElement("li", {
					style: g,
					className: Ee.a.slide
				}, l.a.createElement("figure", {
					className: Object(k.a)({
						[Ee.a.tallImage]: v,
						[Ee.a.commonImage]: !v
					}, Ee.a.figure)
				}, r || p ? l.a.createElement(ye, {
					displayImage: E,
					style: f,
					showSeeMore: v,
					isReadyToShow: m,
					imgAltText: o
				}) : l.a.createElement("a", {
					href: "u" in a ? a.u : a.gif,
					rel: "noopener noreferrer",
					target: "_blank",
					className: Object(k.a)({
						[Ee.a.tallImage]: v,
						[Ee.a.commonImage]: !v
					}, Ee.a.imageLink)
				}, l.a.createElement(ye, {
					displayImage: E,
					style: f,
					showSeeMore: v,
					isReadyToShow: m,
					imgAltText: o
				}), h && !c && l.a.createElement(ne.a, {
					isNSFW: !!d,
					isSpoiler: !!u
				}))))
			}, Ie = e => l.a.createElement("a", {
				className: Object(k.a)(e.className, Ee.a.navigationUnderlay, {
					[Ee.a.hasMoreSlides]: e.hasMoreSlides
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
			}, e.hasMoreSlides && l.a.createElement("i", {
				className: Object(k.a)(e.iconClassName, Ee.a.icon)
			}, l.a.createElement(ee.a, {
				className: Ee.a.iconImage
			}))), Se = e => l.a.createElement("div", {
				className: Ee.a.imageMetaData,
				style: {
					height: e.captionHeight,
					justifyContent: e.caption ? "space-between" : "flex-end"
				}
			}, e.caption && l.a.createElement("span", {
				className: Ee.a.imageCaption,
				title: e.caption
			}, e.caption), e.outboundUrl && l.a.createElement("span", {
				className: Ee.a.imageUrl
			}, l.a.createElement("a", {
				className: Ee.a.outboundUrlWrapper,
				href: e.outboundUrl,
				onClick: e.onClickEvent,
				rel: "noopener noreferrer",
				target: "'_blank'"
			}, l.a.createElement("span", {
				className: Ee.a.urlText
			}, (e => {
				const t = le.a.parse(e),
					i = t.path || "",
					s = i.length > 7 ? i.substring(0, 7) + "..." : i;
				return (t.hostname ? t.hostname.replace("www.", "") : "") + s.substring(s.lastIndexOf("/") + 1)
			})(e.outboundUrl)), l.a.createElement(te.a, {
				className: Ee.a.linkIcon
			})))), Te = e => l.a.createElement("div", {
				className: Ee.a.slideIndicator,
				onClick: e.toggleTileLayout ? t => {
					t.preventDefault(), t.stopPropagation(), e.toggleTileLayout()
				} : void 0
			}, e.toggleTileLayout && l.a.createElement(ie.a, {
				className: Ee.a.tileIcon
			}), e.currentSlide, "/", e.totalSlides), Ce = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
					i = e - t;
				return i < 0 && (i = 0), i
			}, je = function(e, t) {
				let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
					s = e + i;
				return s > t - 1 && (s = t - 1), s
			};
			var Le = e => {
					const t = Object(d.d)(),
						{
							captionHeight: i,
							galleryItems: s,
							imageHeight: n,
							isListing: a,
							isSponsored: o,
							isTileLayout: c,
							mediaMetadata: p = {},
							post: m,
							postId: h,
							postTitle: g,
							shouldShowTileLayoutOption: b,
							showPromotedCTA: v,
							subredditName: f,
							isVisible: E
						} = e,
						x = Object(d.e)(e => Object(ve.d)(e, h)),
						y = x > 0,
						O = x < s.length - 1,
						w = Object(Z.a)(),
						I = Object(r.useRef)(null),
						S = Object(r.useRef)(null),
						[T, C] = Object(r.useState)(E ? x : -1),
						[j, L] = Object(r.useState)(E ? x : -1),
						P = Object(q.a)(E),
						N = Object(q.a)(x);
					Object(r.useEffect)(() => {
						(void 0 !== P && P !== E && E && T < 0 && j < 0 || void 0 !== N && N !== x && E && (T > x || j < x)) && (C(Ce(x, 1)), L(je(x, s.length, 1)))
					}, [P, x, E, T, j, N, s.length, h]);
					const M = Object(r.useRef)(),
						D = Object(r.useCallback)(e => {
							e.forEach(e => {
								const {
									isIntersecting: t
								} = e;
								t ? (T < 0 || j - T == 0) && (M.current = setTimeout(() => {
									const e = je(j, s.length);
									e !== j && L(e)
								}, 1e3)) : (T < 0 || j - T == 0) && clearTimeout(M.current)
							})
						}, [T, j, s.length]);
					Object($.a)(S, D);
					const R = Object(r.useCallback)(e => {
							t(Object(se.f)({
								postId: h,
								index: e
							}))
						}, [t, h]),
						A = Object(r.useCallback)(e => {
							t(Object(H.y)(m, ae.a.GalleryItemImpression, `Slide${e}`))
						}, [t, m]),
						B = Object(r.useCallback)(() => {
							t(Object(se.i)({
								postId: h,
								isTileLayout: !c
							}))
						}, [t, h, c]),
						V = Object(r.useCallback)(() => {
							if (!O) return;
							const e = x + 1;
							if (e + 1 >= j) {
								const e = je(j, s.length);
								e !== j && L(e)
							}
							R(e), w(Q.b(h, e)), w(Q.d(h, e + 1)), A(e)
						}, [O, x, A, R, w, h, j, s.length]),
						W = Object(r.useCallback)(() => {
							if (!y) return;
							const e = x - 1;
							if (e - 1 <= T) {
								const e = Ce(T);
								e !== T && C(e)
							}
							const t = x + 1;
							R(e), w(Q.a(h, t)), w(Q.d(h, t - 1)), A(e)
						}, [y, x, A, R, w, h, T]),
						F = Object(r.useCallback)(() => {
							const e = s[x] && s[x].outboundUrl;
							e && w(Q.c(h, e))
						}, [w, h, x, s]);
					X(oe.a.ArrowLeft, I.current, W), X(oe.a.ArrowRight, I.current, V);
					const G = s[x] && s[x].caption,
						z = s[x] && s[x].outboundUrl,
						Y = Oe(p, n, a);
					return l.a.createElement("div", {
						"data-adclicklocation": u.a.MEDIA,
						className: Object(k.a)(Ee.a.outerContainer),
						ref: I,
						tabIndex: 0
					}, c ? l.a.createElement(l.a.Fragment, null, l.a.createElement("div", {
						className: Object(k.a)(Ee.a.tilesWrapper, {
							[Ee.a.blurredContent]: e.shouldBlur
						}),
						onClick: e.onClickRevealBlurred
					}, s.map((t, i) => {
						const s = t.mediaId,
							n = p && p[s];
						if (!n || !n.s) return null;
						const a = [...n && n.s ? [n.s] : [], ...n && n.p ? n.p : []],
							o = ce(de.z, a);
						if (!o) return null;
						const r = n.s;
						return l.a.createElement("div", {
							style: {
								backgroundImage: `url(${"gif"in r?r.gif:"u"in o&&o.u})`
							},
							className: Ee.a.tileImage,
							onClick: e.shouldBlur ? void 0 : e => {
								e.preventDefault(), e.stopPropagation(), B(), R(i)
							},
							key: s
						})
					}), [1, 2, 3].map(e => l.a.createElement("div", {
						key: e,
						className: Ee.a.tilePlaceholder
					}))), e.shouldBlur && !e.isNsfwBlockingModalEligible && l.a.createElement(ne.a, {
						isNSFW: !!e.isNSFW,
						isSpoiler: !!e.isSpoiler
					})) : l.a.createElement("div", {
						className: Ee.a.slideshowContainer,
						tabIndex: -1,
						ref: S,
						onClick: e.onClickRevealBlurred,
						style: Y
					}, l.a.createElement("div", {
						className: Ee.a.imagesWrapper
					}, l.a.createElement("ul", {
						className: Ee.a.slideWrapper
					}, s.map((t, i) => {
						const s = t.mediaId,
							a = p && p[s];
						if (!a || !a.s) return null;
						const r = t.caption ? t.caption : g,
							d = Object(U.a)(f ? `${f} - ${r}` : r, 300, _.nb),
							c = [...a && a.s ? [a.s] : [], ...a && a.p ? a.p : []],
							u = ce(n, c);
						if (!u) return null;
						const m = e.shouldBlur && ce(n, a.o || []) || void 0,
							h = i >= T && i <= j;
						return l.a.createElement(we, {
							slideIndex: i,
							currentIndex: x,
							obfuscatedImage: m,
							optimalImage: u,
							originalImage: a.s,
							isListing: e.isListing,
							isSponsored: o,
							key: s,
							isReadyToShow: h,
							imgAltText: d,
							shouldBlur: e.shouldBlur,
							isNSFW: e.isNSFW,
							isNsfwBlockingModalEligible: e.isNsfwBlockingModalEligible,
							isSpoiler: e.isSpoiler
						})
					})), !e.shouldBlur && l.a.createElement(l.a.Fragment, null, l.a.createElement(Ie, {
						onClick: W,
						setFocusTo: S,
						hasMoreSlides: y,
						title: xe._("Previous", null, {
							hk: "3dZcTi"
						}),
						iconClassName: Ee.a.prevIcon,
						className: Ee.a.prevButton
					}), l.a.createElement(Ie, {
						onClick: V,
						setFocusTo: S,
						hasMoreSlides: O,
						title: xe._("Next", null, {
							hk: "3Ajk1H"
						}),
						iconClassName: Ee.a.nextIcon,
						className: Ee.a.nextButton
					}))), s.length > 1 ? l.a.createElement(Te, {
						currentSlide: x + 1,
						totalSlides: s.length,
						toggleTileLayout: b && B || void 0
					}) : ""), !G && !z || c || v ? !!i && !c && !v && l.a.createElement("div", {
						className: Ee.a.emptyCaptionBlock,
						style: {
							height: i
						}
					}) : l.a.createElement(Se, {
						caption: G,
						onClickEvent: F,
						outboundUrl: z,
						captionHeight: i
					}))
				},
				Pe = i("./src/reddit/components/Media/ImageBox/index.tsx"),
				Ne = i("./src/reddit/components/Media/MediaContainer/index.tsx"),
				Me = i("./src/reddit/models/Prediction/index.ts"),
				ke = i("./src/reddit/selectors/poll/index.ts"),
				_e = i("./src/reddit/components/Econ/Prediction/async.ts"),
				De = i("./src/reddit/components/Poll/async.ts");
			const Re = Object(c.c)({
				poll: ke.e
			});
			var Ae = Object(d.b)(Re)(e => {
					let {
						isCommentsPage: t,
						poll: i,
						postId: s
					} = e;
					return i ? Object(Me.c)(i) ? l.a.createElement(_e.a, {
						postId: s
					}) : l.a.createElement(De.a, {
						postId: s,
						isCommentsPage: t
					}) : null
				}),
				Be = i("./src/reddit/constants/componentSizes.ts"),
				Ve = i("./src/reddit/helpers/styles/mixins/loading.ts"),
				We = i("./src/reddit/components/Media/RichTextContainer/index.m.less"),
				Ue = i.n(We);
			class He extends l.a.Component {
				componentDidMount() {
					this.loadRichTextContentIfNeeded()
				}
				loadRichTextContentIfNeeded() {
					this.props.canLoadContent && this.props.isExpando && this.props.onLoadRichTextContentIfNeeded(this.props.postId)
				}
				render() {
					const e = Object(Ve.a)({
						isLoading: !0
					});
					return l.a.createElement("div", {
						className: Ue.a.placeholder
					}, [1, 2, 3].map(t => l.a.createElement("div", {
						key: t,
						className: Ue.a.placeholderParagraph
					}, l.a.createElement("div", {
						className: e
					}), l.a.createElement("div", {
						className: e
					}), l.a.createElement("div", {
						className: e
					}))))
				}
			}
			var Fe = Object(d.b)(null, e => ({
				onLoadRichTextContentIfNeeded: t => e(Object(H.x)(t))
			}))(He);

			function Ge() {
				return (Ge = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
					}
					return e
				}).apply(this, arguments)
			}
			var ze = e => {
					let {
						canLoadContent: t,
						children: i,
						className: s,
						isCommentsPage: n,
						isMediumHeight: a,
						isRichTextTruncated: o,
						isExpando: r,
						isTitleOnly: d,
						postId: c,
						showFull: u,
						...p
					} = e;
					const m = {
							[Ue.a.richTextContainerFull]: u,
							[Ue.a.richTextContainerTitleOnly]: d && !u,
							[Ue.a.richTextContainer]: !u && !d
						},
						h = {};
					u || (h.maxHeight = d ? `${de.m}px` : a ? `${de.l}px` : `${de.k}px`), n && (h.maxWidth = `${Be.d}px`);
					const g = o && u;
					return l.a.createElement("div", Ge({
						className: Object(k.a)(m, s),
						style: h
					}, p), i, g && l.a.createElement(Fe, {
						canLoadContent: !!t,
						isExpando: r,
						postId: c
					}))
				},
				Ye = i("./node_modules/fbt/lib/FbtPublic.js"),
				Je = i("./src/lib/intersectionObserver/index.ts"),
				Ke = i("./src/reddit/components/Media/TwitterEmbed/index.m.less"),
				$e = i.n(Ke);

			function qe() {
				return (qe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Qe = 550,
				Xe = 100,
				Ze = 300;

			function et(e) {
				const {
					canLoadContent: t,
					mediaContainerProps: i,
					onIframeLoaded: s,
					embedBoxChildRef: n,
					source: a,
					title: o,
					postId: c
				} = e, [u, p] = Object(r.useState)(!1), m = Object(q.a)(t), h = Object(r.useRef)(), {
					height: g,
					isDeleted: b
				} = Object(d.e)(e => e.mediaEmbed[c] || {}), v = u ? b ? Xe : g : Ze, f = i.isListing ? Math.min(v, de.j) : v;

				function E(e) {
					var t;
					u || (null === (t = null == h ? void 0 : h.current) || void 0 === t ? void 0 : t.contentWindow) !== e.source || "tweet-measured" !== e.data.action || p(!0)
				}
				return Object(r.useEffect)(() => (window.addEventListener("message", E), () => {
					h.current && Object(Je.b)(h.current), window.removeEventListener("message", E)
				}), []), Object(r.useEffect)(() => {
					!t && m && p(!1)
				}, [m, t]), l.a.createElement(Ne.a, qe({}, i, {
					alwaysWrapMedia: !0,
					height: f + 8,
					showFull: !i.isListing,
					width: Qe
				}), t && l.a.createElement("div", {
					className: $e.a.tweetContainer,
					style: {
						height: f
					}
				}, !u && l.a.createElement("div", {
					className: Object(k.a)(Object(Ve.a)({
						isLoading: !0
					}), $e.a.tweetPlaceholder)
				}), u && b && l.a.createElement("p", {
					className: $e.a.tweetDeleted
				}, Ye.fbt._("This Tweet has been deleted.", null, {
					hk: "1LhcOw"
				})), l.a.createElement(K.a, {
					childRef: function(e) {
						h.current = e, e && Object(Je.a)(e, (t, i) => {
							e && e.contentWindow && !g && i && (p(!1), e.contentWindow.postMessage("twitter-measure-requested", J))
						}), n(e)
					},
					className: Object(k.a)($e.a.tweetEmbedBox, {
						[$e.a.isInvisible]: !u || b
					}),
					fullWidth: !0,
					height: f,
					isListing: i.isListing,
					isResponsive: !0,
					isTweet: !0,
					maxHeight: i.isListing ? de.j : null,
					onLoad: s,
					showCentered: i.showCentered,
					showFull: !0,
					source: a,
					title: o
				}), i.isListing && v > de.j && l.a.createElement("div", {
					className: $e.a.seeMore
				}, Ye.fbt._("See full tweet", null, {
					hk: "1bxtrd"
				}))))
			}
			var tt = i("./src/reddit/components/Media/VideoBox/index.tsx"),
				it = i("./src/reddit/components/PlayButton/index.tsx"),
				st = i("./src/reddit/components/PostList/index.tsx"),
				nt = i("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				at = i("./src/reddit/helpers/styles/smartTextColor.ts"),
				ot = i("./src/reddit/components/RawHTMLDisplay/index.tsx");

			function rt() {
				return (rt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
					}
					return e
				}).apply(this, arguments)
			}
			var lt = Object(D.a)(e => {
					let {
						flairStyleTemplate: t,
						...i
					} = e;
					return l.a.createElement(ot.a, rt({
						style: {
							color: Object(at.a)(Object(nt.a)({
								flairStyleTemplate: t,
								...i
							}))
						}
					}, i))
				}),
				dt = i("./src/reddit/components/RichTextJson/index.tsx"),
				ct = i("./src/reddit/constants/screenWidths.ts"),
				ut = i("./src/reddit/contexts/PageLayer/index.tsx"),
				pt = i("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				mt = i("./src/reddit/helpers/getRichTextContent/index.ts"),
				ht = i("./src/reddit/helpers/path/index.ts"),
				gt = i("./src/reddit/helpers/postHasSelfText/index.ts"),
				bt = i("./src/lib/redditId/index.ts");

			function vt(e, t, i) {
				return e.replace(`href="https://www.reddit.com/poll/${Object(bt.c)(t)}`, `class="${i}" href="https://www.reddit.com/poll/${Object(bt.c)(t)}`)
			}

			function ft(e, t) {
				const i = function e(t, i) {
					let s = !1;
					let n = [];
					try {
						for (const a of t)
							if ("link" === a.e && a.u && a.u.includes(`https://www.reddit.com/poll/${i}`)) s = !0;
							else if (a.c && "string" != typeof a.c) {
							const t = e(a.c, i);
							t.found ? (s = !0, ("par" !== a.e || t.updated.length) && n.push({
								...a,
								c: t.updated
							})) : n.push(a)
						} else n.push(a)
					} catch (a) {
						s = !1, n = []
					}
					return {
						found: s,
						updated: s ? n : t
					}
				}(e.document, Object(bt.c)(t));
				return i.found ? {
					document: i.updated
				} : e
			}
			const Et = [_.Tb.INDEX, _.Tb.COMMENTS, _.Tb.SUBREDDIT, ..._.Ib];
			var xt = i("./src/reddit/selectors/experiments/intuitivePostTypes.ts"),
				yt = i("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Ot = i("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				wt = i("./src/reddit/selectors/experiments/postSeo.ts"),
				It = i("./src/reddit/selectors/meta.ts"),
				St = i("./src/reddit/selectors/postCreations.ts"),
				Tt = i("./src/reddit/selectors/posts.ts"),
				Ct = i("./src/reddit/selectors/seo/index.ts"),
				jt = i("./src/reddit/selectors/telemetry.ts");
			const Lt = (e, t, i, s) => {
					const n = e / t,
						a = i / s;
					return Math.abs(n - a) < .03
				},
				Pt = (e, t) => {
					for (let i = 0; i < t.length; i++) {
						const s = t[i];
						if (s.width >= e) return s
					}
				},
				Nt = (e, t, i) => {
					for (let s = 0; s < i.length; s++) {
						const n = i[s];
						if (n.width >= de.d / 2 && Lt(e, t, n.height, n.width)) return n
					}
				},
				Mt = e => {
					for (let t = 0; t < e.length; t++) {
						const i = e[t];
						if (i.height >= de.d || i.width >= de.e) return i
					}
				};
			var kt = i("./node_modules/@reddit/adblock-detection/browser.js"),
				_t = i("./src/reddit/actions/preferences.ts"),
				Dt = i("./src/reddit/actions/video.ts"),
				Rt = i("./src/reddit/constants/video.ts"),
				At = i("./src/reddit/contexts/InsideOverlay.tsx"),
				Bt = i("./src/reddit/contexts/PageLayer/selectors.ts"),
				Vt = i("./src/reddit/helpers/trackers/media.ts"),
				Wt = i("./src/reddit/selectors/platform.ts");

			function Ut() {
				return (Ut = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: Ht
			} = i("./node_modules/fbt/lib/FbtPublic.js"), Ft = Object(d.b)(() => Object(c.c)({
				autoplayPref: y.d
			}), (e, t) => {
				let {
					post: i,
					postId: s
				} = t;
				return {
					onMetadataReceived: t => e(Dt.Q({
						metadata: t,
						postId: t.id
					})),
					onPlayedExpanded: () => {
						s && e(Dt.N(i, s, e))
					},
					onPlayedWithSound: () => {
						s && e(Dt.O(!0, s))
					},
					onUpdateVideoTime: n()(t => {
						s && e(Dt.W({
							postId: s,
							time: t
						}))
					}, Rt.m, {
						maxWait: Rt.n
					}),
					onVideoStarted: () => {
						s && e(Dt.bb(s))
					},
					onWatchedPercent: t => {
						s && e(Dt.db(t, s))
					},
					onWatchedSeconds: t => {
						s && e(Dt.eb(t, s))
					},
					setAutoplayPref: t => e(_t.s(t))
				}
			});
			const Gt = e => {
				let {
					lastUpdate: t,
					maxTimeServed: i,
					onMetadataReceived: s,
					onUpdateVideoTime: n,
					postId: a,
					setLastUpdate: o,
					setMaxTimeServed: r,
					shredditPlayerRef: l
				} = e;
				var d, c;
				const u = null === (c = null === (d = null == l ? void 0 : l.current) || void 0 === d ? void 0 : d.provider) || void 0 === c ? void 0 : c.videoElement;
				if (!u || u.onloadedmetadata) return;
				const p = () => {
						var e, t;
						if (null != a) {
							const i = null === (t = null === (e = null == l ? void 0 : l.current) || void 0 === e ? void 0 : e.provider) || void 0 === t ? void 0 : t.videoElement;
							s({
								id: a,
								length: 1e3 * ((null == i ? void 0 : i.duration) || 0),
								originalHeight: (null == i ? void 0 : i.videoHeight) || 0,
								originalWidth: (null == i ? void 0 : i.videoWidth) || 0
							})
						}
					},
					m = e => {
						var s, a;
						const d = null === (a = null === (s = null == l ? void 0 : l.current) || void 0 === s ? void 0 : s.provider) || void 0 === a ? void 0 : a.videoElement;
						if (null !== t) {
							r(i + ((null == d ? void 0 : d.currentTime) || 0) - (t || 0));
							const e = {
								currentTime: 1e3 * ((null == d ? void 0 : d.currentTime) || 0),
								maxTimeServed: 1e3 * i
							};
							n(e)
						}
						o((null == d ? void 0 : d.currentTime) || 0)
					};
				u && (u.onloadedmetadata = p, u.ondurationchange = p, u.ontimeupdate = m, u.onseeking = e => {
					o(null)
				})
			};
			var zt = Object(r.memo)(Ft(Object(At.b)(e => {
					var t, s;
					const n = Object(r.useRef)(),
						a = Object(r.useRef)(),
						o = Object(Z.a)(),
						[c, u] = Object(r.useState)("ready"),
						[p, m] = Object(r.useState)(null),
						[h, g] = Object(r.useState)(0),
						{
							autoplayPref: b,
							height: v,
							isGif: f,
							isListing: E,
							isMp4DeliveryEnabled: x,
							isOverlay: y,
							onMetadataReceived: O,
							onPlayedExpanded: w,
							onPlayedWithSound: I,
							onUpdateVideoTime: S,
							onVideoStarted: T,
							onWatchedPercent: C,
							onWatchedSeconds: j,
							originalSource: L,
							packagedMedia: P,
							pageLayer: N,
							post: M,
							postId: k,
							posterUrl: _,
							scrubberThumbSource: D,
							shouldUseInitializationOptimization: R,
							setAutoplayPref: A,
							source: B,
							width: V
						} = e || {},
						U = Object(d.e)(Wt.i),
						H = !y && U;
					Object(r.useEffect)(() => {
						"ready" === c && async function() {
							try {
								u("importing"), await Promise.all([Promise.all([i.e("vendors~mod-nav~shreddit-player"), i.e("vendors~shreddit-player")]).then(i.bind(null, "./node_modules/@reddit/shreddit.components.shreddit-player/dist/media-telemetry-observer/media-telemetry-observer.js")), Promise.all([i.e("vendors~mod-nav~shreddit-player"), i.e("vendors~shreddit-player")]).then(i.bind(null, "./node_modules/@reddit/shreddit.components.shreddit-player/dist/index.js"))]), u("done")
							} catch (e) {
								console.error("Error importing shreddit-player", e), u("error"), W.c.withScope(t => {
									t.setExtra("info", {
										postId: k
									}), W.c.captureException(e)
								})
							}
						}()
					}, [c, k]), Object(r.useEffect)(() => {
						if ("done" !== c) return;
						const e = e => {
								e.stopPropagation();
								const {
									details: t
								} = (null == e ? void 0 : e.detail) || {};
								if (k && t) {
									const {
										action: e,
										noun: i,
										media: s,
										playback: n
									} = t;
									o(Object(Vt.b)(k, e, i, s, null == n ? void 0 : n.id)), M.isSponsored && (! function(e) {
										let {
											action: t,
											noun: i,
											onPlayedExpanded: s,
											onPlayedWithSound: n,
											onWatchedPercent: a,
											onWatchedSeconds: o,
											onVideoStarted: r
										} = e;
										if ("video" === i && /^watch_\d+_seconds$/.test(t)) {
											const e = parseInt(t.split("_")[1]);
											e && o(e)
										}
										if ("video" === i && /^watch_\d+_percent$/.test(t)) {
											const e = parseInt(t.split("_")[1]);
											e && a(e)
										}
										"click" === t && "unmute" === i && n();
										"start" === t && "video" === i && r();
										"play_expanded" === t && "video" === i && s()
									}({
										action: e,
										noun: i,
										onPlayedExpanded: w,
										onPlayedWithSound: I,
										onWatchedPercent: C,
										onWatchedSeconds: j,
										onVideoStarted: T
									}), Gt({
										lastUpdate: p,
										maxTimeServed: h,
										onMetadataReceived: O,
										onUpdateVideoTime: S,
										postId: k,
										setLastUpdate: m,
										setMaxTimeServed: g,
										shredditPlayerRef: a
									}))
								}
							},
							t = e => {
								var t, i;
								void 0 !== typeof(null === (t = e.detail) || void 0 === t ? void 0 : t.newValue) && A(null === (i = e.detail) || void 0 === i ? void 0 : i.newValue)
							},
							{
								current: i
							} = n;
						return null == i || i.addEventListener("track-event", e), null == i || i.addEventListener("change-autoplay-pref", t), () => {
							null == i || i.removeEventListener("track-event", e), null == i || i.removeEventListener("change-autoplay-pref", t)
						}
					}, [c, p, h, n, O, w, I, S, T, C, j, k, M.isSponsored, o, A]), Object(r.useEffect)(() => {
						"done" === c && function(e) {
							let {
								shredditPlayerRef: t,
								isBeneathOverlay: i,
								isGif: s
							} = e;
							var n;
							const {
								current: a
							} = t;
							if (!s && i && (null === (n = null == a ? void 0 : a.provider) || void 0 === n ? void 0 : n.state.canPlay)) try {
								a.pause(), a.provider.manualPaused = !0
							} catch (o) {}
						}({
							shredditPlayerRef: a,
							isBeneathOverlay: H,
							isGif: f
						})
					}, [c, H, f, a]);
					const F = {
							backgroundColor: "black",
							color: "white",
							cursor: f ? "pointer" : "default",
							height: null != v ? v : "100%",
							margin: "0 auto",
							maxHeight: "100%",
							maxWidth: "100%",
							width: null != V ? V : "100%"
						},
						G = {
							onClick: e => {
								!f && E && e.stopPropagation()
							},
							style: F,
							"data-testid": "shreddit-player-wrapper"
						};
					if ("ready" === c || "importing" === c) return l.a.createElement("div", G, l.a.createElement("div", {
						className: "h-full w-full absolute flex items-center justify-center ease inset-0 text-white"
					}, l.a.createElement("svg", {
						"aria-hidden": "true",
						className: "w-3xl h-3xl animate-spin",
						fill: "none",
						viewBox: "0 0 120 120"
					}, l.a.createElement("circle", {
						className: "opacity-25",
						cx: "60",
						cy: "60",
						r: "54",
						stroke: "currentColor",
						strokeWidth: "8"
					}), l.a.createElement("circle", {
						className: "opacity-75",
						cx: "60",
						cy: "60",
						r: "54",
						stroke: "currentColor",
						strokeWidth: "10",
						strokeDasharray: 100,
						strokeDashoffset: 50,
						pathLength: "100"
					}))));
					if ("error" === c) return l.a.createElement("div", Ut({}, G, {
						style: {
							...F,
							display: "flex",
							alignItems: "center",
							justifyContent: "center"
						}
					}), Ht._("Sorry, something went wrong when loading this video.", null, {
						hk: "9N3Tr"
					}));
					const z = (f || b && !y) && (Object(Bt.z)(N) || !(e.isSponsored && Object(kt.hasAcceptableAds)())),
						Y = x && void 0 !== (null === (t = null == P ? void 0 : P.playbackMp4s) || void 0 === t ? void 0 : t.duration) && (null === (s = null == P ? void 0 : P.playbackMp4s) || void 0 === s ? void 0 : s.duration) <= 45 ? JSON.stringify(P) : void 0,
						J = l.a.createElement("media-telemetry-observer", {
							ref: n
						}, l.a.createElement("shreddit-player", {
							ref: a,
							autoplay: z || void 0,
							"autoplay-pref": b || void 0,
							gif: f || void 0,
							"packaged-media-json": Y,
							"play-out-of-viewport": Object(Bt.z)(N) || void 0,
							poster: _,
							preview: D || void 0,
							"show-autoplay-toggle": !0,
							src: B,
							ui: "desktop",
							"use-init-optimization": R || void 0
						}, l.a.createElement("source", {
							src: B || void 0,
							type: "application/vnd.apple.mpegURL"
						})));
					return E ? l.a.createElement("div", G, J) : l.a.createElement("div", G, l.a.createElement("a", {
						href: L,
						target: "_blank",
						rel: "noopener noreferrer"
					}, J))
				})), (function(e, t) {
					const i = ["isGif", "isSponsored", "postId"];
					for (const s of i)
						if (e[s] !== t[s]) return !1;
					return !0
				})),
				Yt = i("./src/reddit/components/Media/index.m.less"),
				Jt = i.n(Yt);

			function Kt() {
				return (Kt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
					}
					return e
				}).apply(this, arguments)
			}
			const $t = P(z.b, {
					playerName: "Reddit Player"
				}),
				qt = 300,
				Qt = " - ",
				Xt = 1200,
				Zt = 75,
				ei = "player.js",
				ti = Be.q + Be.p,
				ii = e => l.a.createElement("div", {
					className: Object(k.a)(Jt.a.visibilityWrapper, {
						[Jt.a.displayNone]: !e.isVisible
					})
				}, e.children),
				si = new Set([de.o.EMBED, de.o.VIDEO, de.o.GIFVIDEO]),
				ni = e => !!e.media && si.has(e.media.type),
				ai = new Set([de.o.EMBED, de.o.GALLERY, de.o.GIFVIDEO, de.o.IMAGE, de.o.VIDEO]),
				oi = e => {
					let {
						post: t
					} = e;
					return !!t.media && ai.has(t.media.type)
				},
				ri = Object(ut.v)(),
				li = Object(c.c)({
					canUseOCRAltText: (e, t) => Object(wt.b)(e, t.post),
					OCRAltText: (e, t) => {
						let {
							post: i
						} = t;
						return Object(wt.a)(e, i.id)
					},
					subredditOrProfileDisplayText: (e, t) => Object(wt.i)(e, t),
					subredditOrProfile: (e, t) => {
						let {
							post: i
						} = t;
						return Object(Tt.U)(e, {
							postId: i.id
						})
					},
					isEditing: (e, t) => {
						let {
							post: i
						} = t;
						return Object(St.M)(e, {
							postId: i.id
						})
					},
					shouldShowAltText: (e, t) => Object(Ct.d)(e, t),
					isGalleryTileLayout: (e, t) => {
						let {
							shouldShowGalleryTileOption: i,
							post: s,
							isGalleryTileLayoutDefault: n
						} = t;
						if (!i) return !1;
						const a = Object(ve.e)(e, s.id);
						return !(void 0 !== a || !n) || !!a
					},
					pageType: e => Object(jt.d)(e).pageType,
					basePixelMetadata: (e, t) => {
						let {
							post: i
						} = t;
						return Object(Tt.b)(e, i.id)
					},
					isBlockingInterstitialEnabled: yt.b,
					isBlockingInterstitialV2Enabled: yt.c,
					currentUserId: y.Fb,
					nightmode: y.fb,
					shouldUseShredditPlayer: (e, t) => {
						let {
							pageLayer: i,
							post: s
						} = t;
						return ((e, t, i) => {
							var s, n, a;
							const o = Object(f.c)(e, {
								experimentEligibilitySelector: f.a,
								experimentName: v.Zc
							}) === v.Yd;
							return !![...Et, ...o ? [..._.ab, ..._.cc, _.Tb.DUPLICATES] : []].includes(null === (s = null == t ? void 0 : t.meta) || void 0 === s ? void 0 : s.name) && (i.isSponsored ? Object(f.c)(e, {
								experimentEligibilitySelector: f.a,
								experimentName: v.Yc
							}) === v.Yd : "video" === (null === (n = null == i ? void 0 : i.media) || void 0 === n ? void 0 : n.type) && (null === (a = null == i ? void 0 : i.media) || void 0 === a || !a.isGif) || o)
						})(e, i, s)
					},
					shouldUseInitializationOptimization: e => (e => Object(f.c)(e, {
						experimentEligibilitySelector: f.a,
						experimentName: v.Tf
					}) === v.Yd)(e),
					isMp4DeliveryEnabled: e => (e => Object(f.c)(e, {
						experimentEligibilitySelector: f.a,
						experimentName: v.hc
					}) === v.Yd)(e),
					isNSFW: (e, t) => {
						let {
							post: i,
							crosspost: s
						} = t;
						return Object(ve.b)(e, i.isNSFW, Boolean(s && s.isNSFW))
					},
					isSpoiler: (e, t) => {
						let {
							post: i,
							crosspost: s
						} = t;
						return Object(ve.c)(e, i.isSpoiler, Boolean(s && s.isSpoiler))
					},
					isBot: It.d,
					isNsfwBlurSubreddit: Ot.e,
					isOptionalTextExpEnabled: xt.a
				}),
				di = Object(d.b)(li, e => ({
					fireAdPixelsOfType: (t, i) => e(Object(H.y)(t, i)),
					openPost: t => e(Object(H.K)(t)),
					openPostLink: t => e(Object(H.Z)(Object(ht.b)(t.permalink), t.id))
				})),
				ci = Object(B.b)(e => ({
					renderingObjectInfo: e.post,
					pageLayer: e.pageLayer
				}));
			class ui extends l.a.Component {
				constructor(e) {
					super(e), this.pauseContent = () => {
						this.shouldFocusContentDebouncer(!1)
					}, this.stopContent = () => {
						const {
							media: e
						} = this.props.post;
						if (e && de.c.has(e.type)) {
							if (this.pauseContent(), this.iframe) {
								const t = e.type === de.o.EMBED ? e.provider : null;
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
							autoplayPref: i
						} = this.props;
						this.iframe && (t || !i && e.documentInFocus || this.toggleEmbedAutoplay(this.iframe, !e.documentInFocus)), this.setState({
							isBackgrounded: !e.documentInFocus
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
						return !!e && de.c.has(e.type)
					}, this.shouldFocusContentDebouncer = n()(e => {
						const {
							media: t
						} = this.props.post, {
							autoplayPref: i
						} = this.props;
						if (t && de.c.has(t.type)) {
							if (this.iframe) {
								const s = t.type === de.o.EMBED ? t.provider : null;
								s && !de.s.has(s) ? !i && e || this.toggleEmbedAutoplay(this.iframe, !e) : e || this.pauseEmbed(this.iframe, s)
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
							const i = t ? de.f.Pause : de.f.Play;
							e.contentWindow.postMessage({
								context: ei,
								method: i
							}, J), e.contentWindow.postMessage({
								context: ei,
								method: de.f.Mute
							}, J)
						}
					}, this.pauseEmbed = (e, t) => {
						e.contentWindow && (t === de.v.YouTube ? e.contentWindow.postMessage(JSON.stringify({
							event: "command",
							func: de.B.Pause
						}), J) : e.contentWindow.postMessage({
							context: ei,
							method: de.f.Pause
						}, J))
					}, this.onIframeLoaded = () => {
						const {
							media: e
						} = this.props.post, {
							autoplayPref: t
						} = this.props, i = e && e.type === de.o.EMBED ? e.provider : null;
						if (this.iframe && i && !de.s.has(i)) {
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
						isBackgrounded: !1,
						isRevealed: !1,
						shouldPause: void 0 === e.shouldPause || e.shouldPause,
						shouldStop: void 0 === e.shouldStop || e.shouldStop,
						viewportHeight: de.d,
						viewportWidth: de.e
					}
				}
				UNSAFE_componentWillMount() {
					"undefined" != typeof window && (this.updateDimensions(), window.addEventListener("resize", this.updateDimensions))
				}
				componentDidMount() {
					ni(this.props.post) && (this.visibilityChangeSubscriptionId = V.a.subscribe(e => {
						this.handleVisibilityChange(e)
					})), this.props.scrollerItemRef && oi(this.props) && this.props.scrollerItemRef(this, this.state.canLoadContent)
				}
				componentWillUnmount() {
					this.visibilityChangeSubscriptionId && V.a.unsubscribe(this.visibilityChangeSubscriptionId), this.props.scrollerItemRef && oi(this.props) && this.props.scrollerItemRef(void 0), window.removeEventListener("resize", this.updateDimensions)
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
						post: i,
						subredditOrProfileDisplayText: s,
						shouldShowAltText: n
					} = this.props;
					if (!n) return;
					let a = "";
					return s && (a += s), t && e ? a += `${Qt}${t}` : i.title && (a += `${Qt}${i.title}`), a.length > qt ? Object(U.a)(a, qt, _.nb) : a
				}
				getVideoExpandoMaxDimensions() {
					let e, t = Math.max(de.j, this.state.viewportHeight),
						i = Math.min(Xt, 16 * t / 9);
					i === Xt && (t = 9 * Xt / 16), e = this.state.viewportWidth >= ct.c ? this.state.viewportWidth < Be.k ? this.state.viewportWidth - ti - 2 * Zt : this.state.viewportWidth - ti - Be.e - 2 * Zt : this.state.viewportWidth - 2 * Zt;
					const s = this.state.viewportHeight - 2 * Zt;
					if (i > e) {
						t *= e / i, i = e
					} else if (t > s) {
						const e = s / t;
						t = s, i *= e
					}
					return {
						maxVideoHeight: t,
						maxVideoWidth: i
					}
				}
				getVideoMaxDimensions(e, t) {
					let i = de.j,
						s = de.n;
					return e.isExpando ? this.getVideoExpandoMaxDimensions() : (e.isPromotedTrend && (i = de.t, s = de.u), {
						maxVideoHeight: i,
						maxVideoWidth: s
					})
				}
				getMediaInfo(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state,
						i = arguments.length > 2 ? arguments[2] : void 0,
						s = arguments.length > 3 ? arguments[3] : void 0;
					const {
						availableWidth: n,
						isListing: a,
						post: o
					} = e, r = o.media && o.media.obfuscated || "";
					let l = !o.media || Object(de.O)(o.media) || Object(de.I)(o.media) || Object(de.G)(o.media) ? "" : o.media.content,
						[d, c] = !o.media || Object(de.L)(o.media) || Object(de.N)(o.media) || Object(de.G)(o.media) ? [0, 0] : [o.media.height, o.media.width];
					if (n && o.media && Object(de.G)(o.media)) {
						d = pe(o.media.mediaMetadata || {}, ue(a), de.p, n) + de.i, c = n
					}
					if (n && o.media && (o.media.type === de.o.IMAGE || o.media.type === de.o.GIFVIDEO)) {
						const e = Pt(n, o.media.resolutions);
						e && (l = e.url, c = e.width, d = e.height)
					} else if (o && o.media && (!e.isListing || e.isExpando) && (o.media.type === de.o.IMAGE || o.media.type === de.o.GIFVIDEO)) {
						let e;
						(e = Object(de.M)(o.media.height, o.media.width) && Object(Pe.b)(o.media.height) ? Nt(o.media.height, o.media.width, o.media.resolutions) : Mt(o.media.resolutions)) && (l = e.url, c = e.width, d = e.height)
					}
					if (e.isExpando)
						if (c > t.viewportWidth) {
							d *= t.viewportWidth / c, c = t.viewportWidth
						} else if (d > t.viewportHeight) {
						const e = t.viewportHeight / d;
						d = t.viewportHeight, c *= e
					}
					const {
						maxVideoHeight: u,
						maxVideoWidth: p
					} = this.getVideoMaxDimensions(e, t);
					if (o.media && o.media.type === de.o.VIDEO) {
						const t = d / c;
						e.isExpando ? (d = u, c = p) : t > de.b ? (d = u, c = Math.min(Math.max(u / t, de.r), p)) : (d = Math.min(Math.max(p * t, de.q), u), c = p)
					}
					o.media && o.media.type === de.o.EMBED && (o.isSurveyAd && (l = Object(M.a)(i, o.impressionId, o.postId, s), d = 475, c = 475), e.isExpando && o.media.provider !== de.v.Twitter && (d = u, c = p));
					let m = !1;
					if (e.isMiniCard) {
						const e = d / c;
						m = Math.abs(e - de.b) > .01
					}
					return {
						source: l,
						obfuscated: r,
						width: c,
						height: d,
						needsBackgroundBlur: m
					}
				}
				shouldBlur() {
					const {
						isBot: e,
						isExpando: t,
						isNsfwBlurSubreddit: i,
						isNSFW: s,
						isOverlay: n,
						isSpoiler: a,
						theme: o
					} = this.props;
					if (e || t || this.state.isRevealed || n) return !1;
					const r = i && s;
					return s && !o.subredditContext.shouldShowNSFWContent || a || r
				}
				render() {
					var e, t, i;
					const {
						autoplayPref: s,
						className: n,
						crosspost: a,
						currentUserId: r,
						fireAdPixelsOfType: d,
						flairStyleTemplate: c,
						forceAspectRatio: p,
						isCommentsPage: m,
						isExpando: h,
						isGalleryTileLayout: g,
						isListing: b,
						isMediumHeight: v,
						isMp4DeliveryEnabled: f,
						isNotCardView: E,
						isNsfwBlurSubreddit: x,
						isNSFW: y,
						isOptionalTextExpEnabled: O,
						isSpoiler: w,
						isTitleOnly: I,
						nightmode: S,
						openPost: T,
						pageLayer: C,
						post: j,
						showCentered: L,
						showFull: P = !1,
						shouldUseInitializationOptimization: M,
						shouldUseShredditPlayer: k,
						subredditOrProfileDisplayText: _
					} = this.props, {
						canLoadContent: D,
						isBackgrounded: B,
						shouldPause: V,
						shouldStop: U,
						viewportWidth: H
					} = this.state, z = x && y;
					if (!j.media) return null;
					const J = j.isSponsored || Object(N.u)(C);
					let $;
					j.media.type !== de.o.TEXT && ($ = j.media.richtextContent);
					const q = O && $ && !J,
						Q = B || V,
						X = U,
						{
							source: Z,
							obfuscated: ee,
							height: te,
							width: ie,
							needsBackgroundBlur: se
						} = this.getMediaInfo(this.props, this.state, r, S),
						ne = {
							showCentered: L,
							isListing: b,
							showFull: P,
							height: te,
							width: ie,
							provider: null === (e = j.media) || void 0 === e ? void 0 : e.provider
						},
						ae = {
							...ne,
							className: n,
							forceAspectRatio: p,
							viewportWidth: H
						},
						oe = this.shouldBlur(),
						re = !((null === (t = j.pollData) || void 0 === t ? void 0 : t.isPrediction) && !m),
						le = !(!j.isSponsored || !j.source),
						ce = Object(jt.wb)() || "",
						me = j.isSponsored ? Object(st.b)(j.id, {
							fireAdPixelsOfType: d,
							openPost: T
						}) : o.a,
						he = e => {
							me && me(e, this.props.post, this.props.basePixelMetadata, void 0, this.props.pageType)
						};
					if (ee && oe) return l.a.createElement(Ne.a, Kt({}, ae, {
						blurSrc: ee
					}), l.a.createElement(ii, {
						isVisible: D
					}, l.a.createElement(Pe.a, Kt({}, ne, {
						altText: this.getAltText(),
						className: this.props.imageBoxClassName,
						contentImageClassName: this.props.imageBoxContentImageClassName,
						imageClassName: this.props.imageBoxClassName,
						isListing: b,
						isNSFW: y,
						isNsfwBlockingModalEligible: z,
						isSpoiler: w,
						isVideoThumbnail: !!j.media && j.media.type === de.o.VIDEO,
						onClick: this.onClickRevealBlurred,
						postId: j.id,
						shouldBlur: oe,
						source: ee,
						outboundUrl: le && j.source.outboundUrl || void 0,
						originalSource: Z,
						onPostMediaClick: this.handlePostMediaClick,
						fireAdPixelsOfType: this.props.fireAdPixelsOfType
					}))));
					if (!j.media) return null;
					switch (j.media.type) {
						case de.o.RTJSON:
							const e = Object(mt.a)(j, null);
							if (null === e) return null;
							if (!P && !Object(pt.a)(j, null === (i = this.props.theme) || void 0 === i ? void 0 : i.subredditContext)) return null;
							const t = j.isMeta ? ft(e, j.id) : e;
							return l.a.createElement(l.a.Fragment, null, re && l.a.createElement(ze, {
								canLoadContent: D,
								className: n,
								"data-click-id": "text",
								"data-adclicklocation": u.a.MEDIA,
								isCommentsPage: m,
								isExpando: h,
								isMediumHeight: v,
								isRichTextTruncated: j.media.isRichtextPreview,
								isTitleOnly: I,
								postId: j.id,
								showFull: P
							}, l.a.createElement(dt.b, {
								altText: this.getAltText(),
								content: t,
								flairStyleTemplate: c,
								isListing: b,
								isNSFW: y,
								isNsfwBlockingModalEligible: z,
								isSpoiler: w,
								mediaMetadata: j.media.mediaMetadata,
								onClickRevealBlurred: this.onClickRevealBlurred,
								postId: j.id,
								rtJsonElementProps: ci(this.props),
								renderMediaAsLinks: b,
								shouldBlur: oe
							}), l.a.createElement(G.b, {
								content: t
							})), l.a.createElement(Ae, {
								postId: j.id,
								isCommentsPage: !!m
							}));
						case de.o.TEXT:
							if (Object(gt.a)(j)) {
								const e = "Text post should not include body content";
								return W.c.withScope(t => {
									t.setExtra("info", {
										post: j,
										isListing: b,
										isCommentsPage: m
									}), W.c.captureMessage(e)
								}), Object(R.a)() && console.log(`${j.id}: ${e}`), l.a.createElement(l.a.Fragment, null, re && l.a.createElement(ze, {
									postId: j.id,
									className: n,
									"data-click-id": "text",
									"data-adclicklocation": u.a.MEDIA,
									isCommentsPage: m,
									showFull: P
								}, l.a.createElement(lt, {
									flairStyleTemplate: c,
									html: j.isMeta ? vt(j.media.content, j.id, Jt.a.hiddenLink) : j.media.content
								})), l.a.createElement(Ae, {
									postId: j.id,
									isCommentsPage: !!m
								}))
							}
							return l.a.createElement(Ae, {
								postId: j.id,
								isCommentsPage: !!m
							});
						case de.o.EMBED:
							return this.props.isMiniCard && j.preview && j.preview.url ? l.a.createElement(Ne.a, Kt({}, ae, {
								alwaysWrapMedia: !0
							}), l.a.createElement(ii, {
								isVisible: D
							}, l.a.createElement(l.a.Fragment, null, l.a.createElement(Pe.a, Kt({}, ne, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: h,
								isListing: b,
								isNSFW: y,
								isCrosspost: !!a,
								isSpoiler: w,
								postId: j.id,
								shouldBlur: oe,
								source: j.preview.url,
								originalSource: j.preview.url,
								onPostMediaClick: this.handlePostMediaClick
							})), l.a.createElement(it.a, null)))) : de.h.has(j.media.provider) ? j.media.provider === de.v.Twitter ? l.a.createElement(l.a.Fragment, null, l.a.createElement(et, {
								canLoadContent: D,
								embedBoxChildRef: this.storeChildRef,
								mediaContainerProps: ae,
								onIframeLoaded: this.onIframeLoaded,
								source: Z,
								title: j.title,
								postId: j.id
							}), q && l.a.createElement(Y.a, {
								content: $,
								rtJsonElementProps: ci(this.props)
							})) : l.a.createElement(l.a.Fragment, null, l.a.createElement(Ne.a, Kt({}, ae, {
								alwaysWrapMedia: !0,
								height: h ? te : de.j,
								width: h ? ie : de.j * (16 / 9)
							}), D && l.a.createElement(K.a, {
								childRef: this.storeChildRef,
								height: h ? te : de.j,
								width: h ? ie : void 0,
								isListing: b,
								isResponsive: !0,
								onLoad: this.onIframeLoaded,
								showCentered: L,
								showFull: P,
								source: Z,
								title: j.title
							})), q && l.a.createElement(Y.a, {
								content: $,
								rtJsonElementProps: ci(this.props)
							})) : l.a.createElement(l.a.Fragment, null, l.a.createElement(Ne.a, Kt({}, ae, {
								alwaysWrapMedia: !0
							}), D && l.a.createElement(K.a, Kt({}, ne, {
								isResponsive: h || j.media.provider === de.v.IFrameEmbed,
								title: j.title,
								childRef: this.storeChildRef,
								onLoad: this.onIframeLoaded,
								source: Z,
								fullWidth: j.media.provider === de.v.IFrameEmbed
							}))), q && l.a.createElement(Y.a, {
								content: $,
								rtJsonElementProps: ci(this.props)
							}));
						case de.o.GIFVIDEO: {
							let e = te,
								t = ie;
							e > de.j && (t = ie / te * (e = de.j));
							const i = k ? l.a.createElement(zt, {
								height: e,
								isGif: !0,
								isListing: b,
								isMp4DeliveryEnabled: f,
								isSponsored: j.isSponsored,
								originalSource: j.media.content,
								pageLayer: this.props.pageLayer,
								post: j,
								postId: j.id,
								posterUrl: j.media.gifBackgroundImage,
								shouldUseInitializationOptimization: M,
								source: Z,
								width: t
							}) : l.a.createElement(tt.a, Kt({}, ne, {
								isNotCardView: E,
								height: h ? void 0 : e,
								width: h ? void 0 : t,
								postId: j.id,
								shouldLoad: !0,
								shouldPause: b && Q,
								source: Z,
								originalSource: j.media.content,
								isGif: !0,
								isPromoted: j.isSponsored
							}));
							return l.a.createElement(Ne.a, Kt({}, ae, {
								height: e,
								width: t,
								blurSrc: se ? j.media.gifBackgroundImage : void 0
							}), l.a.createElement(ii, {
								isVisible: D
							}, i, q && l.a.createElement(Y.a, {
								content: $,
								rtJsonElementProps: ci(this.props)
							})))
						}
						case de.o.VIDEO: {
							const e = j.media.posterUrl || j.preview && j.preview.url;
							if (this.props.isMiniCard && e) return l.a.createElement(l.a.Fragment, null, l.a.createElement(Ne.a, Kt({}, ae, {
								alwaysWrapMedia: !0
							}), l.a.createElement(ii, {
								isVisible: D
							}, l.a.createElement(l.a.Fragment, null, l.a.createElement(Pe.a, Kt({}, ne, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: h,
								isListing: b,
								isNSFW: y,
								isCrosspost: !!a,
								isSpoiler: w,
								postId: j.id,
								shouldBlur: oe,
								source: e,
								originalSource: e,
								onPostMediaClick: this.handlePostMediaClick
							})), l.a.createElement(it.a, null)))), q && l.a.createElement(Y.a, {
								content: $,
								rtJsonElementProps: ci(this.props)
							}));
							const t = j.reactedFrom && j.attributionInfo ? {
									id: j.id,
									reactedFrom: {
										...j.reactedFrom
									},
									attributionInfo: {
										...j.attributionInfo
									},
									isReactAllowed: j.isReactAllowed
								} : void 0,
								i = k ? l.a.createElement(zt, {
									isGif: j.media.isGif,
									isListing: b,
									isMp4DeliveryEnabled: f,
									isSponsored: j.isSponsored,
									packagedMedia: j.media.packagedMedia,
									pageLayer: this.props.pageLayer,
									post: j,
									postId: j.id,
									posterUrl: j.media.posterUrl,
									scrubberThumbSource: j.media.scrubberThumbSource,
									shouldUseInitializationOptimization: M,
									source: j.media.hlsUrl
								}) : l.a.createElement($t, {
									key: j.id,
									autoPlay: s && !1 === V,
									isExpando: h,
									shouldLoad: !0,
									shouldPause: Q,
									shouldStop: X,
									isBackgrounded: B,
									hlsSource: j.media.hlsUrl,
									mpegDashSource: j.media.dashUrl,
									isGif: j.media.isGif,
									scrubberThumbSource: j.media.scrubberThumbSource,
									postId: j.id,
									isSponsored: j.isSponsored,
									onAdPostClick: he,
									callToActionSource: j.source || void 0,
									callToActionText: j.callToAction,
									isListing: b,
									posterUrl: j.media.posterUrl,
									muxVideoDuration: void 0,
									muxVideoId: j.id,
									muxVideoIsLive: !1,
									muxVideoTitle: j.title,
									sessionId: ce,
									reactPostInfo: t,
									isCommentsPage: m
								}),
								n = l.a.createElement(Ne.a, Kt({}, ae, {
									alwaysWrapMedia: !0,
									isVideo: !0
								}), D ? i : null);
							return j.isSponsored ? l.a.createElement(F.a, {
								post: j,
								trackVideo: !0
							}, n) : l.a.createElement(l.a.Fragment, null, n, q && l.a.createElement(Y.a, {
								content: $,
								rtJsonElementProps: ci(this.props)
							}))
						}
						case de.o.IMAGE:
							const o = this.state.viewportHeight - 2 * Zt,
								r = this.state.viewportWidth - 2 * Zt;
							let d = Z;
							return this.props.isMiniCard && !this.props.isMiniCardHQPreviews && (j.thumbnail && Object(A.a)(j.thumbnail.url) ? d = j.thumbnail.url : j.preview && Object(A.a)(j.preview.url) && (d = j.preview.url)), l.a.createElement(l.a.Fragment, null, l.a.createElement(Ne.a, Kt({}, ae, {
								blurSrc: se ? d : void 0,
								isExpando: !!h
							}), l.a.createElement(ii, {
								isVisible: D
							}, l.a.createElement(Pe.a, Kt({}, ne, {
								altText: this.getAltText(),
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: h,
								isListing: b,
								isNSFW: y,
								isCrosspost: !!a,
								isSpoiler: w,
								maxHeight: h ? o : void 0,
								maxWidth: h ? r : void 0,
								postId: j.id,
								shouldBlur: oe,
								source: d,
								outboundUrl: le && j.source.outboundUrl || void 0,
								isSponsored: j.isSponsored,
								originalSource: j.media.content,
								onPostMediaClick: this.handlePostMediaClick,
								fireAdPixelsOfType: this.props.fireAdPixelsOfType
							})))), q && l.a.createElement(Y.a, {
								content: $,
								rtJsonElementProps: ci(this.props)
							}));
						case de.o.GALLERY:
							const p = pe(j.media.mediaMetadata || {}, ue(b), de.p, ie),
								x = (ge = j.media.gallery, be = j.isSponsored, ge && ge.items && !be && ge.items.some(e => void 0 !== e.caption || void 0 !== e.outboundUrl) ? de.i : 0);
							return l.a.createElement(Ne.a, Kt({}, ae, {
								blurSrc: se ? Z : void 0,
								isExpando: !!h,
								maxGalleryHeight: p + x,
								className: Jt.a.galleryMediaContainer,
								isGalleryTileLayout: g
							}), l.a.createElement(ii, {
								isVisible: D
							}, l.a.createElement(Le, {
								post: j,
								postId: j.id,
								postTitle: j.title,
								subredditName: _,
								galleryItems: j.media.gallery ? j.media.gallery.items : [],
								mediaMetadata: j.media.mediaMetadata || {},
								imageHeight: p,
								captionHeight: x,
								isSponsored: j.isSponsored,
								showPromotedCTA: Object(N.w)(j),
								className: this.props.imageBoxClassName,
								isListing: b,
								isNSFW: y,
								isNsfwBlockingModalEligible: z,
								isSpoiler: w,
								shouldBlur: oe,
								onClickRevealBlurred: this.onClickRevealBlurred,
								isTileLayout: !!g,
								shouldShowTileLayoutOption: this.props.shouldShowGalleryTileOption,
								isVisible: D
							}), q && l.a.createElement(Y.a, {
								content: $,
								rtJsonElementProps: ci(this.props)
							})));
						default:
							return null
					}
					var ge, be
				}
			}
			const pi = ri(di(Object(p.a)(Object(D.a)(ui))))
		},
		"./src/reddit/components/Poll/async.ts": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Poll",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!i.m[t]
				},
				importAsync: () => i.e("reddit-components-Poll").then(i.bind(null, "./src/reddit/components/Poll/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return i(t)
				},
				resolve() {
					return "./src/reddit/components/Poll/index.tsx"
				}
			})
		},
		"./src/reddit/helpers/canPreviewSelfText/index.ts": function(e, t, i) {
			"use strict";
			var s = i("./src/reddit/helpers/postHasSelfText/index.ts");
			t.a = (e, t) => !(!Object(s.a)(e) && !e.pollData) && (!e.isSpoiler && !(e.isNSFW && (null == t || !t.shouldShowNSFWContent)))
		},
		"./src/reddit/helpers/postHasSelfText/index.ts": function(e, t, i) {
			"use strict";
			var s = i("./src/reddit/models/Media/index.ts"),
				n = i("./src/reddit/models/RichTextJson/index.ts");
			t.a = e => {
				const t = e && e.media;
				return !!t && (t.type === s.o.TEXT && !!t.content || t.type === s.o.RTJSON && !Object(n.H)(t.richtextContent))
			}
		},
		"./src/reddit/helpers/trackers/gallery.ts": function(e, t, i) {
			"use strict";
			i.d(t, "d", (function() {
				return l
			})), i.d(t, "c", (function() {
				return d
			})), i.d(t, "b", (function() {
				return c
			})), i.d(t, "a", (function() {
				return u
			}));
			var s = i("./src/reddit/constants/tracking.ts"),
				n = i("./src/reddit/helpers/parseUrl.ts"),
				a = i("./src/reddit/selectors/media.ts"),
				o = i("./src/reddit/selectors/telemetry.ts");
			const r = (e, t, i) => ({
					gallery: o.t(e, t, i),
					post: o.L(e, t),
					...o.p(e)
				}),
				l = (e, t) => i => ({
					...r(i, e, t),
					action: s.c.VIEW,
					noun: "media",
					source: "gallery",
					media: o.D(i, e)
				}),
				d = (e, t) => i => {
					const l = Object(n.a)(t),
						d = Object(a.d)(i, e) + 1;
					return {
						...r(i, e, d),
						action: s.c.CLICK,
						noun: "outbound_url",
						source: "gallery",
						media: {
							...o.D(i, e),
							outboundUrl: t,
							outboundDomain: l ? l.hostname : void 0
						}
					}
				},
				c = (e, t) => p(e, !0, t),
				u = (e, t) => p(e, !1, t),
				p = (e, t, i) => n => ({
					...r(n, e, i),
					action: s.c.CLICK,
					noun: t ? "forward" : "backward",
					source: "gallery"
				})
		},
		"./src/reddit/icons/svgs/OutboundLink/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/react/index.js"),
				n = i.n(s);
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
		"./src/reddit/icons/svgs/Tile/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/react/index.js"),
				n = i.n(s);
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
		"./src/reddit/selectors/experiments/intuitivePostTypes.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return r
			}));
			var s = i("./src/reddit/constants/experiments.ts"),
				n = i("./src/reddit/helpers/chooseVariant/index.ts"),
				a = i("./src/reddit/helpers/isCrosspost.ts"),
				o = i("./src/reddit/contexts/PageLayer/index.tsx");
			const r = (e, t) => {
				let {
					post: i,
					pageLayer: r
				} = t;
				if (Object(o.F)(r)) return !0;
				const l = Object(o.y)(r),
					d = Object(a.a)(i);
				return !(!l || d) && (e => {
					return Object(n.c)(e, {
						experimentEligibilitySelector: n.a,
						experimentName: s.Ub
					}) === s.Yd
				})(e)
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab.1c04620393beb3de4f3c.js.map