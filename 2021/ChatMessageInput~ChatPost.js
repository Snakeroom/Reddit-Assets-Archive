// https://www.redditstatic.com/desktop2x/ChatMessageInput~ChatPost.58498df8f18bd9891d03.js
// Retrieved at 9/22/2021, 3:10:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatMessageInput~ChatPost"], {
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, s, n, r) {
				return r(e, (function(e, r, o) {
					s = n ? (n = !1, e) : t(s, e, r, o)
				})), s
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_arrayReduce.js"),
				r = s("./node_modules/lodash/_baseEach.js"),
				o = s("./node_modules/lodash/_baseIteratee.js"),
				a = s("./node_modules/lodash/_baseReduce.js"),
				i = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s) {
				var c = i(e) ? n : a,
					d = arguments.length < 3;
				return c(e, o(t, 4), s, d, r)
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var n = s("./node_modules/lodash/toString.js"),
				r = 0;
			e.exports = function(e) {
				var t = ++r;
				return n(e) + t
			}
		},
		"./src/lib/unicodeUtils/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			}));
			const n = e => {
					let t = 0,
						s = 0;
					const n = [0];
					for (const r of e) t++, s += r.length, n[t] = s;
					return n
				},
				r = e => {
					let t = 0,
						s = 0;
					const n = [];
					for (const r of e) {
						for (let e = 0; e < r.length; e++) n[s] = t, s++;
						t++
					}
					return n[s] = t, n
				}
		},
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/default.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				r = s("./node_modules/lodash/memoize.js"),
				o = s.n(r),
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				u = ["FF4500", "0DD3BB", "24A0ED", "FFB000", "FF8717", "46D160", "25B79F", "0079D3", "4856A3", "C18D42", "A06A42", "46A508", "008985", "7193FF", "7E53C1", "FFD635", "DDBD37", "D4E815", "94E044", "FF66AC", "DB0064", "FF585B", "EA0027", "A5A4A4", "545452"],
				m = s("./src/reddit/components/Econ/DefaultAvatar/index.tsx"),
				h = s("./src/reddit/selectors/experiments/econ/index.ts"),
				p = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less"),
				b = s.n(p);
			const x = l.a.div("Userpic", b.a);
			t.a = o()(({
				defaultImage: e,
				userId: t
			}) => {
				const s = Object(c.e)(h.w),
					{
						processingAvatarImageUrl: r
					} = n.a;
				if (s) return e ? i.a.createElement("img", {
					className: b.a.NewUserpic,
					src: e,
					alt: "user icon"
				}) : i.a.createElement(m.a, {
					className: b.a.NewUserpic,
					userId: t
				});
				const o = (e => e.replace(d.Gb.Account + "_", ""))(t),
					{
						avatar: a,
						color: l
					} = (e => {
						const t = u.length,
							s = parseInt(e, 36),
							n = s % 20 + 1,
							r = Math.floor(s / 20) % t;
						return {
							avatar: ("0" + n).slice(-2),
							color: u[r]
						}
					})(o),
					p = `${r}/avatar_default_${a}_${l}.png`;
				return i.a.createElement(x, {
					"data-testid": "old-default-icon",
					style: {
						backgroundImage: `url(${p})`,
						backgroundColor: `#${l}`
					}
				})
			})
		},
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3SwKz63oDhqTWK_aG-xnXF",
				Userpic: "_1c_u99Y2cLg7hhjeq50Op6",
				userpic: "_1c_u99Y2cLg7hhjeq50Op6",
				roundedIcon: "qzfpAikXRAwHLMGlL6_5m",
				NewUserpic: "_2Zwmb9SDpYPNT8z3bJMLCX",
				newUserpic: "_2Zwmb9SDpYPNT8z3bJMLCX",
				TrashIcon: "_2xUH_6ZFDwVzDXthdBMEyN",
				trashIcon: "_2xUH_6ZFDwVzDXthdBMEyN",
				ProfileIcon: "_2OVsvDCTt2OzgIct4dAykk",
				profileIcon: "_2OVsvDCTt2OzgIct4dAykk"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/default.tsx"),
				d = s("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				l = s("./src/reddit/components/UserIcon/UserIcon.tsx"),
				u = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				m = s("./src/reddit/icons/svgs/Remove/index.tsx"),
				h = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less"),
				p = s.n(h);
			const b = Object(a.c)({
					account: e => e.user.account
				}),
				x = Object(o.b)(b);
			t.a = i.a.wrapped(x(({
				account: e,
				className: t,
				height: s,
				icon: n,
				isLivestreaming: o,
				isNSFW: a,
				trash: i,
				userId: h,
				width: b
			}) => {
				const x = o ? 36 : 20,
					f = h || `${null==e?void 0:e.id}`,
					g = {
						height: s || x,
						width: b || x,
						minWidth: b || x
					};
				if (i) return r.a.createElement("div", {
					className: t,
					style: g
				}, r.a.createElement(m.a, {
					className: p.a.TrashIcon
				}));
				const E = e && e.id === h ? e.accountIcon : a ? l.a : null != n ? n : void 0;
				return Object(u.a)(E) ? r.a.createElement("div", {
					className: t,
					style: g
				}, r.a.createElement(d.a, {
					headshot: E
				})) : r.a.createElement("div", {
					className: t,
					style: g
				}, r.a.createElement(c.a, {
					userId: f,
					defaultImage: E
				}))
			}), "ChatIcon", p.a)
		},
		"./src/reddit/components/Econ/DefaultAvatar/index.m.less": function(e, t, s) {
			e.exports = {
				defaultAvatar: "_8gjnVWVhueS_hMv9By4wh"
			}
		},
		"./src/reddit/components/Econ/DefaultAvatar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/Econ/DefaultAvatar/index.m.less"),
				c = s.n(i);
			t.a = ({
				className: e,
				style: t = {},
				userId: s
			}) => {
				const {
					processingAvatarImageUrl: r
				} = n.a, i = `url(${r}/defaults/avatar_default_${(e=>{let t=0;for(const s of e)t+=s.charCodeAt();return t%8})(s)}.png)`;
				return o.a.createElement("div", {
					className: Object(a.a)(c.a.avatar, e),
					style: {
						...t,
						backgroundImage: i
					}
				})
			}
		},
		"./src/reddit/components/Governance/VaultActionLink/async.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./src/reddit/featureFlags/component.tsx");
			const o = Object(n.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("CryptoVault").then(s.bind(null, "./src/reddit/components/Governance/VaultActionLink/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/index.tsx"
					}
				}, {
					ssr: !1
				}),
				a = Object(r.a)("spBurnLinks", Object(n.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("CryptoVault").then(s.bind(null, "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx"
					}
				}, {
					ssr: !1
				}))
		},
		"./src/reddit/components/Media/EmbedBox/index.m.less": function(e, t, s) {
			e.exports = {
				embedBox: "_3K6DCjWs2dQ93YYZDOHjib"
			}
		},
		"./src/reddit/components/Media/EmbedBox/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/addQueryParams/index.ts"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/forceHttps/index.ts"),
				l = s("./src/reddit/constants/tracking.ts"),
				u = s("./src/reddit/models/Media/index.ts"),
				m = s("./src/reddit/selectors/user.ts"),
				h = s("./src/reddit/components/Media/EmbedBox/index.m.less"),
				p = s.n(h);
			const b = ["allow-forms", "allow-orientation-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"].join(" "),
				x = Object(o.b)(() => Object(a.c)({
					isNightmodeOn: m.X
				}));
			t.a = x(e => {
				const t = {
						responsive: "true",
						is_nightmode: e.isNightmodeOn
					},
					s = e.isResponsive ? Object(i.a)(Object(d.a)(e.source), t) : Object(d.a)(e.source),
					n = {
						overflow: "hidden"
					};
				return n.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (n.margin = "0 auto"), e.isListing || (n.maxHeight = `${u.e}px`), void 0 !== e.maxHeight && (n.maxHeight = e.maxHeight || void 0), r.a.createElement("iframe", {
					className: Object(c.a)(l.a, p.a.embedBox, e.className),
					height: e.height,
					width: e.width && !e.fullWidth ? e.width : "100%",
					onLoad: e.onLoad,
					ref: e.childRef,
					title: e.title,
					sandbox: b,
					scrolling: "no",
					src: s,
					style: n,
					allowFullScreen: !0
				})
			})
		},
		"./src/reddit/components/Media/ImageBox/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3Oa0THmZ3f5iZXAQ0hBJ0k",
				image: "_2_tDEnGMLxpM6uOa2kaDB3",
				mShowCentered: "_1XWObl-3b9tPy64oaG6fax",
				mShowBlurred: "_3oBPn1sFwq76ZAxXgwRhhn",
				seeMore: "_3hUbl08LBz2mbXjy0iYhOS",
				unblurButtonContainer: "c1UAj_LbgdGBuJFlKbnrQ",
				unblurButton: "_2Ws3wFSVPzJhnW46FsoxLv"
			}
		},
		"./src/reddit/components/Media/ImageBox/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return T
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/forceHttps/index.ts"),
				u = s("./src/lib/opener/index.ts"),
				m = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				h = s("./src/reddit/components/PlayButton/index.tsx"),
				p = s("./src/reddit/constants/elementClassNames.ts"),
				b = s("./src/reddit/controls/OutboundLink/index.tsx"),
				x = s("./src/reddit/helpers/trackers/ads.ts"),
				f = s("./src/reddit/hooks/useClickSourceData.ts"),
				g = s("./src/reddit/models/Media/index.ts"),
				E = s("./src/reddit/selectors/experiments/goodVisitSearchFeed.ts"),
				_ = s("./src/reddit/selectors/posts.ts"),
				j = s("./src/reddit/selectors/telemetry.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/constants/tracking.ts"),
				C = s("./src/reddit/components/Media/blurredContent.ts"),
				y = s("./src/reddit/components/Media/ImageBox/index.m.less"),
				I = s.n(y);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const T = e => e > 2 * g.e,
				k = e => {
					const t = Object(d.a)(I.a.image, p.g, e.className, {
							[I.a.mShowCentered]: e.showCentered,
							[I.a.mShowBlurred]: e.shouldBlur
						}),
						s = {};
					return e.showFull || e.isTall || (s.maxHeight = `${g.j}px`), e.isListing || e.isTall && T(e.height) || (s.maxHeight = `${g.e}px`), e.isExpando && e.maxHeight && (s.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (s.maxWidth = `${e.maxWidth}px`), o.a.createElement("img", {
						alt: e.altText || n.fbt._("Post image", null, {
							hk: "3KfCgs"
						}),
						className: t,
						src: e.src,
						style: s
					})
				},
				S = e => {
					const t = {};
					return (!e.showFull && Object(g.J)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${g.j}px`, e.shouldBlur && (t.maxWidth = Object(g.J)(e.height, e.width) ? `${g.z}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), o.a.createElement("div", {
						className: Object(d.a)(I.a.container, e.className),
						style: t
					}, e.children)
				},
				N = Object(a.b)(() => Object(c.a)(_.G, v.db, (e, {
					isSponsored: t,
					postId: s
				}) => t && s ? Object(_.b)(e, s) : null, E.a, j.actionInfo, _.H, (e, t, s, n, r, o) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: s,
					sendGoodVisitEvent: n,
					pageType: r.pageType,
					post: o
				})));
			t.a = N(e => {
				const t = e.sendGoodVisitEvent ? Object(f.a)() : void 0;
				return e.outboundUrl && !e.shouldBlur ? o.a.createElement("a", {
					href: e.outboundUrl,
					target: "_blank",
					rel: u.a,
					onMouseDown: t => {
						e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(b.c)(t.currentTarget, e.postId, e.basePixelMetadata)
					},
					onClick: () => {
						e.isSponsored && e.post.postId && Object(x.a)(e.post, e.pageType)
					}
				}, M(e)) : e.isListing && e.postPermalink ? o.a.createElement(i.a, {
					target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
					to: e.sendGoodVisitEvent ? Object(m.a)(e.postPermalink, void 0, t) : Object(m.a)(e.postPermalink)
				}, M(e)) : M(e)
			});
			const L = (e, t) => o.a.createElement(k, {
					altText: t.altText,
					className: Object(d.a)(t.imageClassName, {
						[O.a]: !e
					}),
					height: t.height,
					isExpando: !!t.isExpando,
					isListing: t.isListing,
					isTall: e,
					maxHeight: t.maxHeight,
					maxWidth: t.maxWidth,
					shouldBlur: t.shouldBlur,
					showCentered: t.showCentered,
					showFull: t.showFull,
					src: Object(l.a)(t.source),
					width: t.width
				}),
				M = ({
					onClick: e,
					...t
				}) => {
					const s = Object(g.J)(t.height, t.width),
						r = T(t.height) && s;
					return o.a.createElement(S, w({}, t, {
						className: `${s?`${O.a} `:""}${t.className||""}`
					}), t.isListing ? o.a.createElement("div", {
						className: t.contentImageClassName
					}, L(s, t)) : o.a.createElement("a", {
						href: t.originalSource,
						onClick: e,
						style: r ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: u.c
					}, L(s, t)), t.isListing && !t.showFull && t.height > g.j && Object(g.J)(t.height, t.width) && o.a.createElement("div", {
						className: I.a.seeMore
					}, n.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), t.isVideoThumbnail && o.a.createElement(h.a, {
						onClick: e
					}), t.shouldBlur && !t.isVideoThumbnail && !t.isListing && o.a.createElement("div", {
						className: I.a.unblurButtonContainer
					}, o.a.createElement("button", {
						className: I.a.unblurButton
					}, Object(C.a)(!!t.isNSFW, !!t.isSpoiler))))
				}
		},
		"./src/reddit/components/Media/MediaContainer/index.m.less": function(e, t, s) {
			e.exports = {
				blur: "_2iaYXFpGyyEGq1rp02cl5w",
				container: "m3aNC6yp8RrNM_-a0rrfa",
				isGalleryTileLayout: "_1fptM9wVD8i598KW_RjLWO",
				video: "_3PIKVMCKdveCEcyiKr43sU",
				spacer: "_3gBRFDB5C34UWyxEe_U6mD",
				wrapper: "_3JgI-GOrkmyIeDeyzXdyUD",
				mColoredBackground: "_2CSlKHjH7lsjx0IpjORx14"
			}
		},
		"./src/reddit/components/Media/MediaContainer/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/forceHttps/index.ts"),
				i = s("./src/reddit/models/Media/index.ts"),
				c = s("./src/reddit/components/Media/MediaContainer/index.m.less"),
				d = s.n(c);
			const l = e => {
				let t = null;
				(e.showFull || e.height < i.j) && (t = e.height), e.maxGalleryHeight && (t = e.maxGalleryHeight);
				const s = {
						...t ? {
							maxHeight: `${t}px`
						} : {},
						...e.showFull && !e.showCentered ? {
							maxWidth: `${e.width}px`
						} : {},
						...e.blurSrc ? {
							overflow: "hidden"
						} : {}
					},
					n = e.blurSrc ? r.a.createElement("img", {
						className: d.a.blur,
						src: Object(a.a)(e.blurSrc)
					}) : null,
					c = Object(i.B)(e.height, e.width, e.forceAspectRatio);
				return r.a.createElement("div", {
					className: Object(o.a)(d.a.container, e.className, {
						[d.a.video]: e.isVideo,
						[d.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					}),
					"data-click-id": "media",
					style: e.isGalleryTileLayout ? void 0 : s
				}, n, !e.isGalleryTileLayout && r.a.createElement("div", {
					className: d.a.spacer,
					style: {
						paddingBottom: `${c}%`
					}
				}), r.a.createElement("div", {
					className: Object(o.a)(d.a.wrapper, {
						[d.a.mColoredBackground]: !e.blurSrc,
						[d.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					})
				}, e.children))
			};
			class u extends r.a.Component {
				render() {
					if (!this.props.isListing && !this.props.alwaysWrapMedia || this.props.isExpando) {
						return r.a.Children.only(this.props.children) || r.a.createElement("div", null)
					}
					return r.a.createElement(l, this.props)
				}
			}
		},
		"./src/reddit/components/Media/VideoBox/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3spkFGVnKMHZ83pDAhW3Mx",
				centered: "_2b68Lt6xHaLir5082LDDA9",
				styledVideo: "tErWI93xEKrI2OkozPs7J"
			}
		},
		"./src/reddit/components/Media/VideoBox/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return C
			}));
			var n = s("./node_modules/lodash/throttle.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/actions/video.ts"),
				u = s("./src/reddit/constants/tracking.ts"),
				m = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				p = s("./src/reddit/selectors/video.ts");
			const b = 100,
				x = b / 2 / 1e3;
			var f = s("./src/lib/forceHttps/index.ts"),
				g = s("./src/reddit/hooks/usePrevious.ts");

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function _({
				autoplay: e,
				isListing: t,
				isNotCardView: s,
				onBufferingChange: n,
				shouldLoad: r,
				shouldPause: i,
				showCentered: c,
				showFull: d,
				source: l,
				...u
			}) {
				const m = Object(o.useRef)(),
					h = Object(o.useRef)(),
					p = Object(g.a)(i);

				function _(e) {
					if (e) {
						const e = null === (t = null == h ? void 0 : h.current) || void 0 === t ? void 0 : t.play();
						e && e.catch && e.catch(() => {})
					} else ! function() {
						var e;
						null === (e = null == h ? void 0 : h.current) || void 0 === e || e.pause()
					}();
					var t
				}
				return Object(o.useEffect)(() => {
					if (_(!i && (e || s)), h.current && n) return m.current = function(e, t) {
						let s = !1,
							n = !1;
						const r = () => s = !0,
							o = () => n = !0;
						e.addEventListener("loadeddata", r), e.addEventListener("play", o), e.addEventListener("playing", o);
						let a = !1,
							i = 0,
							c = 0;
						const d = window.setInterval(() => {
							if (c = e.currentTime, n) return n = !1, void(i = c);
							if (e.paused || e.seeking || !s) return void(i = c);
							const r = a;
							4 === e.readyState ? a = !1 : !a && c >= i && c < i + x ? a = !0 : a && c >= i && c > i + x && (a = !1), i = c, r !== a && t(a)
						}, b);
						return () => {
							clearInterval(d), e.removeEventListener("playing", o), e.removeEventListener("play", o), e.removeEventListener("loadeddata", r)
						}
					}(h.current, n), () => {
						m.current && m.current()
					}
				}, []), Object(o.useEffect)(() => {
					p !== i && _(!i && (e || s))
				}, [p, i, e, s]), a.a.createElement("video", E({}, u, {
					ref: e => h.current = e,
					muted: !0
				}), a.a.createElement("source", {
					src: Object(f.a)(l || "")
				}))
			}
			var j = s("./src/reddit/components/Media/VideoBox/index.m.less"),
				v = s.n(j);
			const O = Object(c.c)({
				autoplayPref: h.b,
				consumed: p.a,
				loadTimes: p.f,
				metadata: p.h,
				started: p.k
			});

			function C(e) {
				const {
					autoplayPref: t,
					consumed: s,
					loadTimes: n,
					metadata: o,
					started: c
				} = Object(i.e)(t => O(t, e)), {
					postId: h,
					shouldLoad: p,
					source: b,
					height: x,
					isNotCardView: f,
					showFull: g,
					shouldPause: E,
					width: j,
					isListing: C,
					className: y,
					showCentered: I,
					originalSource: w
				} = e, T = Object(i.d)();

				function k(e) {
					T(e ? Object(l.r)(h) : Object(l.E)(h))
				}

				function S() {
					return T(Object(l.z)({
						postId: h
					}))
				}
				const N = r()(e => {
					if (s) return;
					const {
						target: t
					} = e;
					t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && T(Object(l.s)(h))
				}, 200);

				function L(e) {
					e.persist(), N(e)
				}

				function M(e) {
					var t;
					(o || B(e), c) || (t = e.timeStamp, T(Object(l.A)(h, t)))
				}

				function D(e) {
					T(Object(l.q)(h, e.timeStamp))
				}

				function B(e) {
					! function(e) {
						T(Object(l.D)({
							metadata: e,
							postId: h
						}))
					}({
						id: h,
						length: 1e3 * e.target.duration,
						originalHeight: e.target.videoHeight,
						originalWidth: e.target.videoWidth
					})
				}

				function R(e) {
					n || M(e), o || B(e), T(Object(l.C)(h))
				}

				function P() {
					const e = {};
					return I && (e.margin = "0 auto"), C || (e.maxHeight = `${m.e}px`), a.a.createElement(_, {
						autoplay: t,
						className: Object(d.a)(u.a, v.a.styledVideo),
						height: x,
						isListing: C,
						isNotCardView: f,
						key: h,
						loop: !0,
						onBufferingChange: k,
						onLoadStart: D,
						onLoadedData: M,
						onLoadedMetadata: B,
						onPause: S,
						onPlaying: R,
						onTimeUpdate: L,
						shouldLoad: p,
						shouldPause: E,
						showCentered: I,
						showFull: g,
						source: b,
						style: e,
						width: j
					})
				}
				return C ? P() : a.a.createElement("div", {
					className: Object(d.a)(v.a.container, y, {
						[v.a.centered]: I
					})
				}, a.a.createElement("a", {
					href: w,
					target: "_blank",
					rel: "noopener noreferrer"
				}, P()))
			}
		},
		"./src/reddit/components/Media/blurredContent.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js");
			const r = (e, t) => e && t ? n.fbt._("Click to see nsfw spoiler", null, {
				hk: "4EdPWu"
			}) : e ? n.fbt._("Click to see nsfw", null, {
				hk: "4CErse"
			}) : t ? n.fbt._("Click to see spoiler", null, {
				hk: "1x3iUE"
			}) : void 0
		},
		"./src/reddit/components/RichTextJson/Emote/index.m.less": function(e, t, s) {
			e.exports = {
				container: "JnJcJlA7hHeajn8Um_Bh5"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.m.less": function(e, t, s) {
			e.exports = {
				InnerSpan: "_3mIYu0jAt23sIWGr4pFcI",
				innerSpan: "_3mIYu0jAt23sIWGr4pFcI",
				TooltipTarget: "_2XOXS9oLSigrX7LIefjqhe",
				tooltipTarget: "_2XOXS9oLSigrX7LIefjqhe",
				SpoilerWrapper: "_2v4IIjPhKL0PDaWaWtjJ1E",
				spoilerWrapper: "_2v4IIjPhKL0PDaWaWtjJ1E",
				isOpen: "_15VS32zBYFUDI5ssldQhEK",
				Component: "_3CBmNG6xIaLHHh1ts_10tN",
				component: "_3CBmNG6xIaLHHh1ts_10tN"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = s("./src/reddit/components/RichTextJson/SpoilerText.m.less"),
				u = s.n(l),
				m = s("./src/lib/lessComponent.tsx");

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const p = ["left", "top"],
				b = ["left", "bottom"],
				x = m.a.span("InnerSpan", u.a),
				f = m.a.span("TooltipTarget", u.a),
				g = m.a.span("SpoilerWrapper", u.a),
				E = m.a.wrapped(({
					className: e,
					isOpen: t,
					...s
				}) => o.a.createElement(g, h({}, s, {
					className: Object(a.a)(e, {
						[u.a.isOpen]: t
					})
				})), "SpoilerWrapper", u.a),
				_ = Object(d.a)(m.a.wrapped(c.b, "Component", u.a), [i.a.Click, i.a.Keydown]);
			class j extends o.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.onClick = e => {
						const {
							isOpen: t
						} = this.state;
						t || (e.preventDefault(), e.stopPropagation(), this.setState({
							isOpen: !0
						}))
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.state.isOpen || this.setState({
							showTooltip: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							showTooltip: !1
						})
					}, this.state = {
						isOpen: !1,
						showTooltip: !1
					}
				}
				render() {
					const {
						isOpen: e,
						showTooltip: t
					} = this.state;
					return o.a.createElement(E, {
						isOpen: e,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						onClick: this.onClick
					}, o.a.createElement(x, null, o.a.createElement(f, {
						innerRef: this.setTooltipTargetRef
					}), o.a.createElement(_, {
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						text: n.fbt._("Reveal spoiler", null, {
							hk: "271xYi"
						}),
						targetPosition: p,
						tooltipPosition: b
					}), this.props.children))
				}
			}
			t.a = j
		},
		"./src/reddit/components/RichTextJson/elements.m.less": function(e, t, s) {
			e.exports = {
				H1: "_7T4UafM1PdBGycd5na9nF",
				h1: "_7T4UafM1PdBGycd5na9nF",
				H2: "_1WODZhR-x-fbMu3MOL9cH1",
				h2: "_1WODZhR-x-fbMu3MOL9cH1",
				H3: "WFFrvt6_3z5B7MBcYKr8U",
				h3: "WFFrvt6_3z5B7MBcYKr8U",
				H4: "_2UlSUuiYR4BRv_FiLxCcu9",
				h4: "_2UlSUuiYR4BRv_FiLxCcu9",
				H5: "hnYPKCNkyo9X6QpCXHj1I",
				h5: "hnYPKCNkyo9X6QpCXHj1I",
				H6: "_1ceLNhXCFZ1_Lj9Th4go_C",
				h6: "_1ceLNhXCFZ1_Lj9Th4go_C",
				Hr: "_2ACwpV3Y0LKhHHKbsxNmmY",
				hr: "_2ACwpV3Y0LKhHHKbsxNmmY",
				M: "_34q3PgLsx9zIU5BiSOjFoM",
				m: "_34q3PgLsx9zIU5BiSOjFoM",
				Pre: "_3GnarIQX9tD_qsgXkfSDz1",
				pre: "_3GnarIQX9tD_qsgXkfSDz1",
				Blockquote: "_28lDeogZhLGXvE95QRPeDL",
				blockquote: "_28lDeogZhLGXvE95QRPeDL",
				P: "_1qeIAgB0cPwnLhDF9XSiJM",
				p: "_1qeIAgB0cPwnLhDF9XSiJM",
				Li: "_3gqTEjt4x9UIIpWiro7YXz",
				li: "_3gqTEjt4x9UIIpWiro7YXz",
				Ul: "_33MEMislY0GAlB78wL1_CR",
				ul: "_33MEMislY0GAlB78wL1_CR",
				Ol: "_1eJr7K139jnMstd4HajqYP",
				ol: "_1eJr7K139jnMstd4HajqYP",
				B: "_12FoOEddL7j_RgMQN0SNeU",
				b: "_12FoOEddL7j_RgMQN0SNeU",
				I: "_7s4syPYtk5hfUIjySXcRE",
				i: "_7s4syPYtk5hfUIjySXcRE",
				U: "HoWuCifWxDx-PnwllGmZd",
				u: "HoWuCifWxDx-PnwllGmZd",
				Sub: "_2aQztsTwdz2uTN4arsyBD6",
				sub: "_2aQztsTwdz2uTN4arsyBD6",
				Sup: "_1jsgSPRO0cMQfs1UZrSovE",
				sup: "_1jsgSPRO0cMQfs1UZrSovE",
				Table: "MRH-njmSb5ZTkfb1o4dqv",
				table: "MRH-njmSb5ZTkfb1o4dqv",
				Tr: "s6JZe6869f81l9E_5G7Q9",
				tr: "s6JZe6869f81l9E_5G7Q9",
				Tdl: "_3DYfYn_cczg1wj_a3hhyV6",
				tdl: "_3DYfYn_cczg1wj_a3hhyV6",
				Tdc: "_1LHijgw3WoeCUe8AUewfUB",
				tdc: "_1LHijgw3WoeCUe8AUewfUB",
				Tdr: "_3DqGFKR55y45L5IxBTgsFz",
				tdr: "_3DqGFKR55y45L5IxBTgsFz",
				Thl: "_4uv59XIILEFm6V3BmtSuR",
				thl: "_4uv59XIILEFm6V3BmtSuR",
				Thc: "_3TNkDptlyGOiWXvdX_acOB",
				thc: "_3TNkDptlyGOiWXvdX_acOB",
				Thr: "_1AUCpXmm3maPuEbUSe90Y8",
				thr: "_1AUCpXmm3maPuEbUSe90Y8",
				A: "_3t5uN8xUmg0TOwRCOGQEcU",
				a: "_3t5uN8xUmg0TOwRCOGQEcU"
			}
		},
		"./src/reddit/components/RichTextJson/elements.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "x", (function() {
				return l
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "h", (function() {
				return m
			})), s.d(t, "k", (function() {
				return h
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "j", (function() {
				return b
			})), s.d(t, "g", (function() {
				return x
			})), s.d(t, "v", (function() {
				return f
			})), s.d(t, "i", (function() {
				return g
			})), s.d(t, "b", (function() {
				return E
			})), s.d(t, "f", (function() {
				return _
			})), s.d(t, "u", (function() {
				return j
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "l", (function() {
				return O
			})), s.d(t, "m", (function() {
				return C
			})), s.d(t, "n", (function() {
				return y
			})), s.d(t, "t", (function() {
				return I
			})), s.d(t, "p", (function() {
				return w
			})), s.d(t, "o", (function() {
				return T
			})), s.d(t, "q", (function() {
				return k
			})), s.d(t, "s", (function() {
				return S
			})), s.d(t, "r", (function() {
				return N
			})), s.d(t, "a", (function() {
				return L
			})), s.d(t, "w", (function() {
				return M
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/controls/OutboundLink/index.tsx"),
				a = s("./src/reddit/components/RichTextJson/elements.m.less"),
				i = s.n(a),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/Governance/VaultActionLink/async.ts");
			const l = [c.a.div("H1", i.a), c.a.div("H2", i.a), c.a.div("H3", i.a), c.a.div("H4", i.a), c.a.div("H5", i.a), c.a.div("H6", i.a)],
				u = c.a.hr("Hr", i.a),
				m = c.a.code("M", i.a),
				h = c.a.pre("Pre", i.a),
				p = c.a.blockquote("Blockquote", i.a),
				b = c.a.p("P", i.a),
				x = c.a.li("Li", i.a),
				f = c.a.ul("Ul", i.a),
				g = c.a.ol("Ol", i.a),
				E = c.a.strong("B", i.a),
				_ = c.a.em("I", i.a),
				j = c.a.span("U", i.a),
				v = e => r.a.createElement("del", e),
				O = c.a.sub("Sub", i.a),
				C = c.a.sup("Sup", i.a),
				y = c.a.table("Table", i.a),
				I = c.a.tr("Tr", i.a),
				w = c.a.td("Tdl", i.a),
				T = c.a.td("Tdc", i.a),
				k = c.a.td("Tdr", i.a),
				S = c.a.th("Thl", i.a),
				N = c.a.th("Thc", i.a),
				L = (c.a.th("Thr", i.a), c.a.wrapped(e => r.a.createElement(o.b, e), "A", i.a)),
				M = c.a.wrapped(d.a, "A", i.a)
		},
		"./src/reddit/components/RichTextJson/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_292iotee39Lmt0MkQZ2hPV",
				container: "_292iotee39Lmt0MkQZ2hPV",
				unblurButtonContainer: "YCBAlwtFjC7cDSMdBeA2W",
				unblurButton: "gCpM4Pkvf_Xth42z4uIrQ"
			}
		},
		"./src/reddit/components/RichTextJson/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return O
			})), s.d(t, "b", (function() {
				return C
			})), s.d(t, "a", (function() {
				return I
			}));
			var n = s("./node_modules/lodash/findLastIndex.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/sentry/index.ts"),
				l = s("./src/reddit/components/Media/blurredContent.ts"),
				u = s("./src/reddit/constants/elementClassNames.ts"),
				m = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				h = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				p = s("./src/reddit/models/RichTextJson/index.ts"),
				b = s("./src/reddit/components/RichTextJson/media.tsx"),
				x = s("./src/reddit/components/RichTextJson/renderers.tsx"),
				f = s("./src/reddit/components/RichTextJson/index.m.less"),
				g = s.n(f);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = s("./src/lib/lessComponent.tsx").a.div("Container", g.a),
				j = Object(c.a)(({
					flairStyleTemplate: e,
					theme: t,
					...s
				}) => a.a.createElement(_, E({}, s, {
					style: {
						color: Object(h.a)(Object(m.a)({
							flairStyleTemplate: e,
							theme: t,
							...s
						}))
					}
				}))),
				v = e => e.e === p.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== p.u || !!e.c && !e.c.every(e => e.e === p.A && !e.t),
				O = e => r()(e, v),
				C = e => e.findIndex(v),
				y = e => {
					const {
						altText: t,
						className: s,
						content: n,
						isListing: r,
						isNSFW: o,
						isSpoiler: c,
						onClickRevealBlurred: d,
						postId: m,
						renderMediaAsLinks: h,
						rtJsonElementProps: f,
						useExplicitTextColor: E,
						shouldBlur: v
					} = e, y = n.document, I = [], w = e.mediaMetadata || null, T = C(y), k = O(y);
					if (v && !r) return a.a.createElement(_, {
						className: Object(i.a)(u.j, s)
					}, a.a.createElement("div", {
						className: g.a.unblurButtonContainer
					}, a.a.createElement("button", {
						className: g.a.unblurButton,
						onClick: d
					}, Object(l.a)(!!o, !!c))));
					if (-1 !== T)
						for (let a = T; a <= k; a++) {
							const e = y[a];
							switch (e.e) {
								case p.k:
									I.push(x.c(e, f, a));
									break;
								case p.l:
									I.push(x.d(a));
									break;
								case p.b:
									I.push(x.a(e, w, f, a));
									break;
								case p.c:
									I.push(x.b(e, a));
									break;
								case p.p:
									I.push(x.f(e, w, f, a));
									break;
								case p.z:
									I.push(x.h(e, w, f, a));
									break;
								case p.u:
									I.push(x.g(e, w, f, a));
									break;
								case p.h:
									I.push(Object(b.a)(e, a));
									break;
								case p.m:
								case p.a:
								case p.D:
									I.push(...Object(b.b)(e, a, w, h, m, t))
							}
						}
					return E ? a.a.createElement(_, {
						className: Object(i.a)(u.j, s)
					}, I) : a.a.createElement(j, {
						className: Object(i.a)(u.j, s),
						flairStyleTemplate: e.flairStyleTemplate
					}, I)
				};
			class I extends a.a.Component {
				constructor() {
					super(...arguments), this.hasError = !1, this.state = {
						hasError: !1
					}, this.renderDefaultFallback = () => "Something went wrong while trying to render this"
				}
				componentDidCatch(e) {
					this.setState({
						hasError: !0
					}), this.logError(e)
				}
				logError(e) {
					d.c.withScope(t => {
						t.setExtra("objectInfo", this.props.rtJsonElementProps.renderingObjectInfo), t.setTag("rtjson", "rendering"), d.c.captureException(e)
					})
				}
				render() {
					const {
						renderFallback: e = this.renderDefaultFallback,
						...t
					} = this.props;
					if (this.hasError || this.state.hasError) return e();
					try {
						return y(t)
					} catch (s) {
						return this.hasError = !0, this.logError(s), e()
					}
				}
			}
		},
		"./src/reddit/components/RichTextJson/media.m.less": function(e, t, s) {
			e.exports = {
				A: "_1PlxnYkerei9iGJsL9JyrP",
				a: "_1PlxnYkerei9iGJsL9JyrP",
				ImageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				imageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				MediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mHasCaption: "c1cmiB1jfdq4sxidlPDAx",
				Caption: "FJNSiirwoPtG58aeGw2Jx",
				caption: "FJNSiirwoPtG58aeGw2Jx",
				Placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				giphy: "_3J81Ds3WITP7zlq_PlUmGf"
			}
		},
		"./src/reddit/components/RichTextJson/media.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return I
			})), s.d(t, "b", (function() {
				return T
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/config.ts"),
				c = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				d = s("./src/reddit/components/Media/EmbedBox/index.tsx"),
				l = s("./src/reddit/components/Media/ImageBox/index.tsx"),
				u = s("./src/reddit/components/Media/MediaContainer/index.tsx"),
				m = s("./src/reddit/components/Media/VideoBox/index.tsx"),
				h = s("./src/reddit/helpers/richTextJson/index.ts"),
				p = s("./src/reddit/models/RichTextJson/index.ts"),
				b = s("./src/reddit/components/RichTextJson/elements.tsx"),
				x = s("./src/reddit/components/RichTextJson/media.m.less"),
				f = s.n(x),
				g = s("./src/lib/lessComponent.tsx");

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = /\/(\w+)\/asset\/(\w+)\//,
				j = g.a.wrapped(b.a, "A", f.a),
				v = g.a.wrapped(l.a, "ImageBox", f.a),
				O = g.a.wrapped(e => o.a.createElement("p", e), "Caption", f.a),
				C = g.a.div("Placeholder", f.a),
				y = g.a.wrapped(({
					className: e,
					e: t,
					...s
				}) => {
					const r = t === p.D ? n.fbt._("Processing video...", null, {
						hk: "3SXDRi"
					}) : n.fbt._("Processing image...", null, {
						hk: "1qwmbc"
					});
					return o.a.createElement(C, E({
						className: e,
						style: {
							"--placeholder-content-text": `'${r}'`
						}
					}, s))
				}, "Placeholder", f.a),
				I = ({
					c: e,
					x: t,
					y: s
				}, n) => o.a.createElement("div", {
					className: f.a.MediaWrapper
				}, o.a.createElement(u.a, {
					height: s,
					isListing: !1,
					key: n,
					showCentered: !0,
					showFull: !0,
					width: t
				}, o.a.createElement(d.a, {
					isListing: !1,
					source: e,
					height: s,
					width: t,
					showCentered: !0,
					showFull: !0
				}))),
				w = (e, t, s) => {
					const n = e.c;
					let r = "";
					return s && (s.e === p.s ? r = s.s.u : s.e === p.r ? r = s.s.gif : s.e === p.t && (r = (e => {
						const t = _.exec(e);
						return t ? `${i.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(s.dashUrl))), r ? o.a.createElement(j, {
						href: r,
						key: t,
						title: n
					}, n || r) : null
				},
				T = (e, t, s, n, r, i) => {
					const d = p.E(s, e.id);
					if (n) return [w(e, t, d)];
					const l = [];
					return d ? d.e === p.s ? l.push((({
						id: e,
						s: t
					}, s, n, r) => o.a.createElement("div", {
						className: Object(a.a)(f.a.MediaWrapper, {
							[f.a.mHasCaption]: n
						})
					}, o.a.createElement(u.a, {
						height: t.y,
						isListing: !1,
						key: s,
						showCentered: !0,
						showFull: !0,
						width: t.x
					}, o.a.createElement(v, {
						altText: r,
						originalSource: t.u,
						postId: e,
						source: t.u,
						height: t.y,
						width: t.x,
						shouldBlur: !1,
						showCentered: !0,
						showFull: !0,
						isListing: !1
					}))))(d, t, !!e.c, i)) : d.e === p.r ? l.push((({
						id: e,
						ext: t,
						s
					}, n, r) => {
						if (Object(h.f)(e)) {
							const i = t || Object(h.e)(e);
							return o.a.createElement("div", {
								className: Object(a.a)(f.a.MediaWrapper, {
									[f.a.mHasCaption]: r
								})
							}, o.a.createElement(j, {
								href: i,
								key: n,
								target: "_blank"
							}, s.mp4 ? o.a.createElement("video", {
								className: f.a.giphy,
								loop: !0,
								autoPlay: !0,
								muted: !0
							}, o.a.createElement("source", {
								src: s.mp4
							})) : {
								originalSource: i
							}))
						}
						return o.a.createElement("div", {
							className: Object(a.a)(f.a.MediaWrapper, {
								[f.a.mHasCaption]: r
							})
						}, o.a.createElement(u.a, {
							height: s.y,
							isListing: !1,
							key: n,
							showCentered: !0,
							showFull: !0,
							width: s.x
						}, o.a.createElement(m.a, {
							height: s.y,
							isListing: !1,
							isNotCardView: !0,
							originalSource: s.mp4,
							width: s.x,
							postId: e,
							source: s.mp4,
							shouldPause: !1,
							showCentered: !0,
							shouldLoad: !0,
							showFull: !0
						})))
					})(d, t, !!e.c)) : d.e === p.t && l.push((({
						hlsUrl: e,
						dashUrl: t,
						x: s,
						y: n,
						isGif: r
					}, i, d, l) => o.a.createElement("div", {
						className: Object(a.a)(f.a.MediaWrapper, {
							[f.a.mHasCaption]: d
						})
					}, o.a.createElement(u.a, {
						height: n,
						isListing: !1,
						isVideo: !0,
						key: i,
						showCentered: !0,
						showFull: !0,
						width: s
					}, o.a.createElement(c.b, {
						shouldLoad: !0,
						shouldPause: !0,
						autoPlay: r,
						hlsSource: e,
						mpegDashSource: t,
						postId: l,
						isGif: r
					}))))(d, t, !!e.c, r)) : l.push(((e, t) => o.a.createElement(y, {
						e,
						key: t
					}))(e.e, t)), e.c && l.push(((e, t) => o.a.createElement(O, {
						key: t
					}, e))(e.c, `caption${t}`)), l
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return L
			})), s.d(t, "d", (function() {
				return M
			})), s.d(t, "a", (function() {
				return D
			})), s.d(t, "b", (function() {
				return B
			})), s.d(t, "f", (function() {
				return R
			})), s.d(t, "h", (function() {
				return H
			})), s.d(t, "g", (function() {
				return A
			})), s.d(t, "i", (function() {
				return U
			})), s.d(t, "e", (function() {
				return F
			}));
			var n = s("./src/lib/unicodeUtils/index.ts"),
				r = s("./node_modules/lodash/reduce.js"),
				o = s.n(r),
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				c = s("./src/reddit/components/RichTextJson/elements.tsx"),
				d = s("./node_modules/uuid/v4.js"),
				l = s.n(d),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/models/Product/index.ts"),
				h = s("./src/reddit/models/RichTextJson/index.ts"),
				p = s("./src/reddit/selectors/telemetry.ts"),
				b = s("./src/higherOrderComponents/makeAsync.tsx");
			var x = Object(b.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("RichTextJsonEmoteTooltip").then(s.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				f = s("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				g = s.n(f);
			const E = 1e3,
				_ = 1e3;
			var j;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(j || (j = {}));
			class v extends i.a.Component {
				constructor() {
					super(...arguments), this.mouseLocation = j.Outside, this.state = {
						tooltipOpen: !1
					}, this.onClick = () => this.sendEvent("click"), this.onMouseOver = () => {
						this.mouseLocation = j.Inside, setTimeout(() => {
							this.mouseLocation === j.Inside && (this.setState({
								tooltipOpen: !0
							}), this.sendEvent("view"))
						}, E)
					}, this.onMouseOut = () => {
						this.mouseLocation = j.Outside, setTimeout(() => {
							this.mouseLocation !== j.Inside && this.setState({
								tooltipOpen: !1
							})
						}, _)
					}, this.sendEvent = e => {
						this.props.sendEvent(t => {
							const s = p.defaults(t);
							return {
								source: "meta",
								action: e,
								noun: "emote",
								...s,
								actionInfo: {
									...s.actionInfo,
									reason: this.props.node.id
								},
								subreddit: p.subreddit(t)
							}
						})
					}
				}
				render() {
					const {
						node: e,
						media: t
					} = this.props;
					let s, n, r;
					t.e === h.s ? (s = t.s.x, n = t.s.y, r = t.s.u) : t.e === h.r && (s = t.s.x, n = t.s.y, r = t.s.gif);
					const o = this.state.tooltipOpen ? l()() : void 0;
					return r ? i.a.createElement("div", {
						className: g.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, i.a.createElement("img", {
						id: o,
						src: r,
						width: s,
						height: n,
						title: `:${Object(m.b)(e.id)}:`
					}), this.state.tooltipOpen && i.a.createElement(x, {
						isOpen: !0,
						emoteId: e.id,
						targetPosition: ["left", "bottom"],
						tooltipId: o,
						tooltipPosition: ["left", "top"]
					})) : null
				}
			}
			var O = Object(u.c)(v),
				C = s("./src/reddit/components/RichTextJson/media.tsx"),
				y = s("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				I = s("./src/reddit/components/SubredditMention/index.tsx"),
				w = s("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				T = s("./src/reddit/helpers/isComment.ts"),
				k = s("./src/reddit/helpers/isPost.ts"),
				S = s("./src/reddit/helpers/richTextJson/index.ts"),
				N = s("./src/reddit/helpers/trackers/getRichTextSourceElement.ts");
			const L = (e, t, s) => {
					const n = e.c || [],
						r = e.l,
						o = [],
						a = n.length;
					for (let i = 0; i < a; i++) {
						const e = n[i];
						o.push(e.e === h.w ? e.t : F(e, t, i))
					}
					const d = c.x[r - 1];
					return i.a.createElement(d, {
						key: s
					}, o)
				},
				M = e => i.a.createElement(c.e, {
					key: e
				}),
				D = (e, t, s, n) => {
					const r = e.c;
					if (!r) return;
					const o = r.length,
						a = [];
					for (let i = 0; i < o; i++) a.push(P(r[i], t, s, i));
					return i.a.createElement(c.c, {
						key: n
					}, a)
				},
				B = (e, t) => {
					const s = e.c;
					return i.a.createElement(c.k, {
						key: t
					}, i.a.createElement(c.h, null, s.reduce((e, t, s, n) => e += t.t + (s < n.length ? "\n" : ""), "")))
				},
				R = (e, t, s, n) => {
					const r = e.c,
						o = [],
						a = r.length;
					for (let l = 0; l < a; l++) {
						const e = r[l].c;
						e && e.length && o.push(i.a.createElement(c.g, {
							key: l
						}, e.map((e, n) => P(e, t, s, n))))
					}
					const d = e.o ? c.i : c.v;
					return i.a.createElement(d, {
						key: n
					}, o)
				},
				P = (e, t, s, n) => {
					switch (e.e) {
						case h.b:
							return D(e, t, s, n);
						case h.c:
							return B(e, n);
						case h.k:
							return L(e, s, n);
						case h.l:
							return M(n);
						case h.p:
							return R(e, t, s, n);
						case h.u:
							return A(e, t, s, n);
						case h.z:
							return H(e, t, s, n)
					}
				},
				H = (e, t, s, n) => {
					const r = e.c,
						o = e.h,
						a = r.length,
						d = o.length,
						l = [],
						u = [],
						m = [];
					for (let c = 0; c < d; c++) {
						const e = o[c],
							{
								H: n,
								D: r
							} = G(e.a),
							{
								c: a = []
							} = e;
						l.push(i.a.createElement(n, {
							key: c
						}, U(a, t, s))), m[c] = r
					}
					for (let h = 0; h < a; h++) {
						const e = r[h],
							n = e.length,
							o = [];
						for (let r = 0; r < n; r++) {
							const n = m[r],
								{
									c: a = []
								} = e[r];
							o.push(i.a.createElement(n, {
								key: r
							}, U(a, t, s)))
						}
						u.push(i.a.createElement(c.t, {
							key: h
						}, o))
					}
					return i.a.createElement(c.n, {
						key: n
					}, i.a.createElement("thead", null, i.a.createElement(c.t, null, l)), i.a.createElement("tbody", null, u))
				},
				A = (e, t, s, n) => {
					if (!e.c || !e.c.length) return (e => i.a.createElement(c.j, {
						key: e
					}, i.a.createElement("br", null)))(n);
					const r = e.c[0];
					return r.e !== h.m && r.e !== h.a || !Object(S.f)(r.id) ? i.a.createElement(c.j, {
						key: n
					}, U(e.c, t, s)) : Object(C.b)(r, n, t)
				},
				U = (e, t, s) => {
					const n = [],
						r = e.length;
					for (let o = 0; o < r; o++) {
						const r = e[o];
						if (r.e === h.A) n.push(J(r, o));
						else if (r.e === h.x) n.push(i.a.createElement(y.a, {
							key: o
						}, U(r.c, t, s)));
						else if (r.e === h.n) n.push(i.a.createElement("br", {
							key: o
						}));
						else if (r.e === h.m || r.e === h.a) {
							if (r.id.startsWith("emote|")) {
								const e = h.E(t, r.id);
								e && n.push(i.a.createElement(O, {
									key: o,
									node: r,
									media: e
								}))
							}
						} else n.push(F(r, s, o))
					}
					return n
				},
				F = (e, t, s) => {
					switch (e.e) {
						case h.o:
							const n = J({
								t: e.t,
								f: e.f
							}, 0);
							if (Object(w.b)(e.u)) return i.a.createElement(c.w, {
								to: e.u,
								key: s,
								title: e.a
							}, n);
							let r, o;
							const a = Object(N.a)(t),
								d = t.renderingObjectInfo;
							return d && Object(k.b)(d) && (r = d.postId), d && Object(T.b)(d) && (o = d.id, r = d.postId), i.a.createElement(c.a, {
								href: e.u,
								key: s,
								title: e.a,
								sourceElement: a,
								postId: r,
								commentId: o
							}, n);
						case h.y:
							return i.a.createElement(I.b, {
								key: s,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case h.B:
						case h.C:
							return i.a.createElement(c.a, {
								href: `/u/${e.t}/`,
								key: s
							}, `${e.l?"/":""}u/${e.t}`);
						case h.g:
						case h.v:
							return i.a.createElement(c.a, {
								href: e.t,
								key: s
							}, e.t)
					}
				},
				J = (e, t) => {
					const {
						f: s,
						t: r
					} = e, o = [];
					if (!s) return V(0, r, t);
					const a = Object(n.a)(r);
					let i = 0,
						c = 0;
					const d = s.length;
					for (; i < d; i++) {
						const [e, t, n] = s[i], d = t + n, l = a[t], u = a[d] - l;
						l > c && o.push(V(0, r.substr(c, l - c), `between${i}`)), o.push(V(e, r.substr(l, u), i)), c = l + u
					}
					return c < r.length && o.push(V(0, r.substr(c), `remaining${i}`)), o
				},
				W = {
					[h.j.monospace]: c.h,
					[h.j.bold]: c.b,
					[h.j.italic]: c.f,
					[h.j.underline]: c.u,
					[h.j.strikethrough]: c.d,
					[h.j.subscript]: c.l,
					[h.j.superscript]: c.m
				},
				V = (e, t, s) => {
					let n = t;
					return n = o()(W, (t, n, r) => e & parseInt(r, 10) ? i.a.createElement(n, {
						key: s
					}, t) : t, n)
				},
				G = e => {
					switch (e) {
						case h.f:
							return {
								H: c.r, D: c.q
							};
						case h.d:
							return {
								H: c.r, D: c.o
							};
						case h.e:
						default:
							return {
								H: c.r, D: c.p
							}
					}
				}
		},
		"./src/reddit/components/RichTextJsonChatReply/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "qqC8Lcm050i_jAM3CePWY",
				container: "qqC8Lcm050i_jAM3CePWY"
			}
		},
		"./src/reddit/components/RichTextJsonChatReply/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/RichTextJson/index.tsx"),
				i = s("./src/reddit/components/RichTextJson/elements.tsx"),
				c = s("./src/reddit/components/RichTextJson/renderers.tsx"),
				d = s("./src/reddit/models/RichTextJson/index.ts");
			const l = e => r.a.createElement(i.f, null, e),
				u = e => {
					const t = [],
						s = e.c || [],
						n = s.length;
					for (let r = 0; r < n; r++) {
						const e = s[r];
						t.push(e.e === d.w ? e.t : Object(c.e)(e, {}, r))
					}
					return r.a.createElement(r.a.Fragment, null, t)
				},
				m = e => e.c && e.c.length ? r.a.createElement(r.a.Fragment, null, Object(c.i)(e.c, null, {})) : r.a.createElement("br", null);
			var h = s("./src/reddit/constants/elementClassNames.ts"),
				p = s("./src/reddit/components/RichTextJsonChatReply/index.m.less"),
				b = s.n(p);
			const x = s("./src/lib/lessComponent.tsx").a.div("Container", b.a),
				f = {
					[d.a]: "<animated image>",
					[d.b]: "<quote>",
					[d.c]: "<code block>",
					[d.h]: "<embed>",
					[d.m]: "<image>",
					[d.p]: "<list>",
					[d.z]: "<table>",
					[d.D]: "<video>"
				};
			t.a = e => {
				const {
					className: t,
					content: s
				} = e, n = s.document, i = [], c = Object(a.b)(n), p = Object(a.c)(n);
				if (-1 !== c)
					for (let r = c; r <= p; r++) {
						const e = n[r],
							t = e && f[e.e];
						switch (e.e) {
							case d.l:
								break;
							case d.b:
							case d.c:
							case d.p:
							case d.z:
							case d.m:
							case d.a:
							case d.D:
							case d.h:
								i.push(l(t));
								break;
							case d.k:
								i.push(u(e));
								break;
							case d.u:
								i.push(m(e))
						}
					}
				return r.a.createElement(x, {
					className: Object(o.a)(h.j, t)
				}, i)
			}
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.m.less": function(e, t, s) {
			e.exports = {
				S: "Zwo7CZoszMU6kBYhWyIC7",
				s: "Zwo7CZoszMU6kBYhWyIC7",
				SubredditIcon: "_33bYVIxJlbFcqiiYlexnqp",
				subredditIcon: "_33bYVIxJlbFcqiiYlexnqp"
			}
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/SubredditIcon/index.tsx"),
				i = s("./src/reddit/controls/OutboundLink/index.tsx"),
				c = s("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
				d = s.n(c);
			const l = o.a.wrapped(a.b, "SubredditIcon", d.a),
				u = o.a.wrapped(e => r.a.createElement(i.b, e), "S", d.a)
		},
		"./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less": function(e, t, s) {
			e.exports = {
				topPostsTitle: "_2Pw8j7a2DYkjTDOFbIdODA",
				hovercardStyle: "_2ktYI4-r7C-HaMk9ulbwog",
				top: "_3rKUrAbYNFvE7-nMDs6lwZ",
				subredditMentionContainer: "_1e2szH8g0XMMM_EuCN8Olk",
				subredditIconContainer: "_3kpwADnYG-SH40aaSdX3ZE"
			}
		},
		"./src/reddit/components/SubredditMention/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return v
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/components/RichTextJson/elements.tsx"),
				c = s("./src/higherOrderComponents/makeAsync.tsx"),
				d = s("./src/lib/loadWithRetries/index.ts"),
				l = s("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				u = s("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				m = s.n(u);
			var h = Object(c.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(d.a)(() => s.e("SubredditMentionWithIcon").then(s.bind(null, "./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.tsx"))).then(e => e.default),
					LoadingComponent: ({
						subredditName: e
					}) => r.a.createElement("span", {
						className: m.a.subredditMentionContainer
					}, r.a.createElement(l.a, {
						href: `/r/${e}/`
					}, r.a.createElement("span", {
						className: m.a.subredditIconContainer
					}, r.a.createElement(l.b, null)), `r/${e}`))
				}),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/constants/experiments.ts"),
				x = s("./src/reddit/helpers/trackers/subredditMentions.ts"),
				f = s("./src/reddit/selectors/subredditMention.ts");
			class g extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.handleOnClick = () => {
						const {
							rtJsonElementProps: e,
							sendEvent: t,
							subredditName: s
						} = this.props;
						t(Object(x.a)({
							...e,
							subredditName: s
						}))
					}
				}
				render() {
					const {
						subredditName: e
					} = this.props;
					return r.a.createElement(i.a, {
						onClick: this.handleOnClick,
						href: `/r/${e}/`
					}, `r/${e}`)
				}
			}
			const E = Object(p.c)(g),
				_ = Object(a.c)({
					isFeatureFlagEnabled: f.b,
					isUserInTreatment: f.e,
					userVariant: f.a
				}),
				j = Object(o.b)(_),
				v = ({
					isFeatureFlagEnabled: e,
					isUserInTreatment: t,
					subredditName: s,
					userVariant: n,
					rtJsonElementProps: o
				}) => {
					if (!t || !e) return r.a.createElement(E, {
						subredditName: s,
						rtJsonElementProps: o
					});
					switch (n) {
						case b.be.SmIcon:
							return r.a.createElement(h, {
								subredditName: s,
								rtJsonElementProps: o
							});
						case b.be.SmIconHc:
							return r.a.createElement(h, {
								subredditName: s,
								isHoverable: !0,
								rtJsonElementProps: o
							});
						default:
							return r.a.createElement(E, {
								subredditName: s,
								rtJsonElementProps: o
							})
					}
				};
			t.b = j(v)
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return I
			})), s.d(t, "c", (function() {
				return w
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/uniqueId.js"),
				o = s.n(r),
				a = s("./node_modules/raf/index.js"),
				i = s.n(a),
				c = s("./node_modules/react/index.js"),
				d = s.n(c),
				l = s("./node_modules/react-redux/es/index.js"),
				u = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/classNames/index.ts"),
				h = s("./src/reddit/actions/modal.ts"),
				p = s("./src/reddit/selectors/activeModalId.ts"),
				b = s("./src/higherOrderComponents/asModal/index.tsx"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/layout/row/Inline/index.tsx"),
				g = s("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				E = s.n(g);
			var _ = Object(b.a)(e => {
					const {
						children: t,
						title: s
					} = e;
					return d.a.createElement("div", {
						className: E.a.wrapper
					}, d.a.createElement(f.a, {
						className: E.a.titleRow
					}, s), d.a.createElement("div", {
						className: E.a.detailsContainer
					}, t), d.a.createElement(f.a, {
						className: E.a.buttonRow
					}, d.a.createElement(x.k, {
						className: E.a.confirmButton,
						onClick: e.onConfirmed
					}, n.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				j = s("./src/reddit/controls/ErrorText/index.m.less"),
				v = s.n(j);
			const O = Object(u.c)({
				activeModalId: p.a
			});
			class C extends d.a.Component {
				constructor(e) {
					super(e), this.spanRef = d.a.createRef(), this.toggleModal = () => {
						this.props.toggleErrorTextModal(this.state.modalId)
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${o()()}`
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					i()(() => {
						const e = this.spanRef.current;
						if (!e) return;
						const t = e.scrollWidth > e.clientWidth;
						this.setState(e => e.textHasOverflowed !== t ? {
							textHasOverflowed: t
						} : null)
					})
				}
				render() {
					const {
						children: e,
						activeModalId: t,
						className: s,
						errorModalBody: r,
						errorModalTitle: o = n.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: a = n.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						modalId: i,
						textHasOverflowed: c
					} = this.state;
					return d.a.createElement("div", {
						className: Object(m.a)(v.a.wrapper, s)
					}, d.a.createElement("span", {
						className: v.a.description,
						ref: this.spanRef
					}, e), c && d.a.createElement("span", {
						className: v.a.moreText,
						onClick: this.toggleModal
					}, a), t === i && d.a.createElement(_, {
						onConfirmed: this.toggleModal,
						title: o
					}, r || e))
				}
			}
			const y = Object(l.b)(O, e => ({
					toggleErrorTextModal: t => e(Object(h.i)(t))
				}))(C),
				I = e => {
					const {
						className: t,
						errorClassName: s,
						errorModalTitle: n,
						fallbackMessage: r,
						messages: o = []
					} = e, a = o.length ? o : r ? [r] : [];
					return a.length ? d.a.createElement("div", {
						className: t
					}, a.map((e, t) => d.a.createElement(y, {
						className: s,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				w = e => d.a.createElement(I, {
					fallbackMessage: n.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = y
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/featureFlags/index.ts");

			function c(e, t, s) {
				const n = Object(a.c)({
					featureEnabled: t => i.d[e](t)
				});
				return Object(o.b)(n)(e => {
					const {
						featureEnabled: n,
						...o
					} = e, a = o;
					return n ? r.a.createElement(t, a) : void 0 !== s ? r.a.createElement(s, a) : null
				})
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, s) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/helpers/styles/mixins/loading.m.less"),
				o = s.n(r);
			const a = ({
					isLoading: e
				}) => Object(n.a)(o.a.loadingBackground, {
					[o.a["m-loading"]]: e
				}),
				i = e => Object(n.a)(o.a.loadingBar, a(e))
		},
		"./src/reddit/helpers/trackers/getRichTextSourceElement.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/reddit/contexts/PageLayer/index.tsx"),
				r = s("./src/reddit/helpers/isComment.ts"),
				o = s("./src/reddit/helpers/isPost.ts"),
				a = s("./src/telemetry/models/Outbound.ts");
			const i = ({
				renderingObjectInfo: e,
				pageLayer: t
			}) => {
				if (e && (Object(r.b)(e) || Object(o.b)(e))) return Object(r.b)(e) ? a.SourceElement.Comment : Object(n.x)(t) ? a.SourceElement.PostDetail : Object(n.G)(t) ? a.SourceElement.ListingPostDetail : void 0
			}
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			})), s.d(t, "f", (function() {
				return f
			})), s.d(t, "g", (function() {
				return g
			})), s.d(t, "b", (function() {
				return E
			})), s.d(t, "c", (function() {
				return _
			})), s.d(t, "d", (function() {
				return j
			})), s.d(t, "e", (function() {
				return v
			}));
			var n, r, o = s("./src/reddit/constants/tracking.ts"),
				a = s("./src/reddit/helpers/isComment.ts"),
				i = s("./src/reddit/helpers/isPost.ts"),
				c = s("./src/reddit/helpers/trackers/getRichTextSourceElement.ts"),
				d = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = s("./src/reddit/selectors/subreddit.ts"),
				u = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(n || (n = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(r || (r = {}));
			const m = e => ({
					...u.defaults(e),
					source: r.LINK,
					action: o.c.CLICK,
					noun: n.INTERNAL_LINK
				}),
				h = e => ({
					...u.defaults(e),
					source: r,
					screen: u.screen(e),
					discoveryUnit: {
						id: "xd_100",
						name: n.SUBREDDIT_HOVERCARD,
						type: d.e.Listing,
						title: n.SUBREDDIT_HOVERCARD
					}
				}),
				p = (e, t) => {
					const {
						renderingObjectInfo: s,
						subredditName: n
					} = t;
					if (!s || !Object(i.b)(s) && !Object(a.b)(s)) return {
						outbound: void 0
					};
					const r = Object(i.b)(s) ? "postId" : "commentId",
						o = {
							url: `/r/${n}/`,
							sourceElement: Object(c.a)(t),
							subredditName: n,
							[r]: s.id
						},
						d = Object(l.w)(e, {
							subredditName: n
						});
					return d ? {
						outbound: {
							...o,
							url: d.url,
							subredditId: d.id
						}
					} : {
						outbound: {
							...o
						}
					}
				},
				b = (e, t) => {
					const {
						renderingObjectInfo: s
					} = t;
					if (!s || !Object(i.b)(s) && !Object(a.b)(s)) return {};
					const n = Object(i.b)(s) ? s.belongsTo.id : s.subredditId;
					return {
						post: u.post(e, s.id),
						subreddit: u.subredditById(e, n),
						...p(e, t)
					}
				},
				x = e => t => ({
					...m(t),
					...b(t, e)
				}),
				f = e => t => ({
					...h(t),
					source: "global",
					action: o.c.VIEW,
					noun: n.SUBREDDIT_HOVERCARD,
					subreddit: u.subredditByName(t, e),
					screen: u.screen(t)
				}),
				g = (e, t) => s => ({
					...h(s),
					source: r.DISCOVERY_UNIT,
					action: o.c.VIEW,
					noun: n.ITEM_POST,
					post: u.post(s, t),
					subreddit: u.subredditByName(s, e),
					screen: u.screen(s)
				}),
				E = (e, t) => s => ({
					...h(s),
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.ITEM_POST,
					post: u.post(s, t),
					subreddit: u.subredditByName(s, e),
					screen: u.screen(s)
				}),
				_ = e => t => ({
					...h(t),
					subreddit: u.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.HEADER_SUBREDDIT
				}),
				j = e => t => ({
					...h(t),
					subreddit: u.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				v = e => t => ({
					...h(t),
					subreddit: u.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/selectors/subredditMention.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "e", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "d", (function() {
				return u
			})), s.d(t, "f", (function() {
				return m
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/featureFlags/index.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				a = s("./src/reddit/selectors/subreddit.ts");
			const i = e => r.d.subredditMentionD2xExperiment(e),
				c = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: i,
						experimentName: n.Vd
					}) || ""
				},
				d = e => {
					const t = c(e);
					return t === n.be.SmIcon || t === n.be.SmIconHc
				},
				l = (e, {
					subredditName: t
				}) => {
					return !!e.subreddits.api.models.pending[t]
				},
				u = (e, {
					subredditName: t
				}) => {
					return !!e.subreddits.api.models.error[t]
				},
				m = (e, {
					subredditName: t
				}) => {
					const s = Object(a.U)(e, {
						subredditName: t
					});
					return (s && s.postIds || []).slice(0, 2)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ChatMessageInput~ChatPost.58498df8f18bd9891d03.js.map