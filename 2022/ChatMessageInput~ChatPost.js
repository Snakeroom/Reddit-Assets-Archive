// https://www.redditstatic.com/desktop2x/ChatMessageInput~ChatPost.1901b9e37eb6ab9f825b.js
// Retrieved at 5/3/2022, 3:40:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatMessageInput~ChatPost"], {
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, n, s, r) {
				return r(e, (function(e, r, o) {
					n = s ? (s = !1, e) : t(n, e, r, o)
				})), n
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_arrayReduce.js"),
				r = n("./node_modules/lodash/_baseEach.js"),
				o = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/_baseReduce.js"),
				a = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var c = a(e) ? s : i,
					d = arguments.length < 3;
				return c(e, o(t, 4), n, d, r)
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var s = n("./node_modules/lodash/toString.js"),
				r = 0;
			e.exports = function(e) {
				var t = ++r;
				return s(e) + t
			}
		},
		"./src/lib/unicodeUtils/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			const s = e => {
					let t = 0,
						n = 0;
					const s = [0];
					for (const r of e) t++, n += r.length, s[t] = n;
					return s
				},
				r = e => {
					let t = 0,
						n = 0;
					const s = [];
					for (const r of e) {
						for (let e = 0; e < r.length; e++) s[n] = t, n++;
						t++
					}
					return s[n] = t, s
				}
		},
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/default.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				r = n("./node_modules/lodash/memoize.js"),
				o = n.n(r),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				u = ["FF4500", "0DD3BB", "24A0ED", "FFB000", "FF8717", "46D160", "25B79F", "0079D3", "4856A3", "C18D42", "A06A42", "46A508", "008985", "7193FF", "7E53C1", "FFD635", "DDBD37", "D4E815", "94E044", "FF66AC", "DB0064", "FF585B", "EA0027", "A5A4A4", "545452"],
				m = n("./src/reddit/components/Econ/DefaultAvatar/index.tsx"),
				h = n("./src/reddit/selectors/experiments/econ/index.ts"),
				p = n("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less"),
				b = n.n(p);
			const x = l.a.div("Userpic", b.a);
			t.a = o()(e => {
				let {
					defaultImage: t,
					userId: n
				} = e;
				const r = Object(c.e)(h.x),
					{
						processingAvatarImageUrl: o
					} = s.a;
				if (r) return t ? a.a.createElement("img", {
					className: b.a.NewUserpic,
					src: t,
					alt: "user icon"
				}) : a.a.createElement(m.a, {
					className: b.a.NewUserpic,
					userId: n
				});
				const i = (e => e.replace(d.Jb.Account + "_", ""))(n),
					{
						avatar: l,
						color: p
					} = (e => {
						const t = u.length,
							n = parseInt(e, 36),
							s = n % 20 + 1,
							r = Math.floor(n / 20) % t;
						return {
							avatar: ("0" + s).slice(-2),
							color: u[r]
						}
					})(i),
					f = `${o}/avatar_default_${l}_${p}.png`;
				return a.a.createElement(x, {
					"data-testid": "old-default-icon",
					style: {
						backgroundImage: `url(${f})`,
						backgroundColor: `#${p}`
					}
				})
			})
		},
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/CommentsChat/Comment/ChatIcon/default.tsx"),
				d = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				l = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				u = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				m = n("./src/reddit/icons/svgs/Remove/index.tsx"),
				h = n("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less"),
				p = n.n(h);
			const b = Object(i.c)({
					account: e => e.user.account
				}),
				x = Object(o.b)(b);
			t.a = a.a.wrapped(x(e => {
				let {
					account: t,
					className: n,
					height: s,
					icon: o,
					isLivestreaming: i,
					isNSFW: a,
					trash: h,
					userId: b,
					width: x
				} = e;
				const f = i ? 36 : 20,
					g = b || `${null==t?void 0:t.id}`,
					E = {
						height: s || f,
						width: x || f,
						minWidth: x || f
					};
				if (h) return r.a.createElement("div", {
					className: n,
					style: E
				}, r.a.createElement(m.a, {
					className: p.a.TrashIcon
				}));
				const _ = t && t.id === b ? t.accountIcon : a ? l.a : null != o ? o : void 0;
				return Object(u.b)(_) ? r.a.createElement("div", {
					className: n,
					style: E
				}, r.a.createElement(d.a, {
					headshot: _
				})) : r.a.createElement("div", {
					className: n,
					style: E
				}, r.a.createElement(c.a, {
					userId: g,
					defaultImage: _
				}))
			}), "ChatIcon", p.a)
		},
		"./src/reddit/components/Econ/DefaultAvatar/index.m.less": function(e, t, n) {
			e.exports = {
				defaultAvatar: "_8gjnVWVhueS_hMv9By4wh"
			}
		},
		"./src/reddit/components/Econ/DefaultAvatar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/Econ/DefaultAvatar/index.m.less"),
				c = n.n(a);
			t.a = e => {
				let {
					className: t,
					style: n = {},
					userId: r
				} = e;
				const {
					processingAvatarImageUrl: a
				} = s.a, d = `url(${a}/defaults/v2/avatar_default_${(e=>{let t=0;for(const n of e)t+=n.charCodeAt();return t%8})(r)}.png)`;
				return o.a.createElement("div", {
					className: Object(i.a)(c.a.avatar, t),
					style: {
						...n,
						backgroundImage: d
					}
				})
			}
		},
		"./src/reddit/components/Governance/VaultActionLink/async.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/reddit/featureFlags/component.tsx");
			const o = Object(s.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("CryptoVault").then(n.bind(null, "./src/reddit/components/Governance/VaultActionLink/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/index.tsx"
					}
				}, {
					ssr: !1
				}),
				i = Object(r.a)("spBurnLinks", Object(s.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("CryptoVault").then(n.bind(null, "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx"
					}
				}, {
					ssr: !1
				}))
		},
		"./src/reddit/components/Media/BlurredContent.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/reddit/components/Media/index.m.less"),
				a = n.n(i);
			const c = (e, t) => e && t ? s.fbt._("Click to see nsfw spoiler", null, {
					hk: "4EdPWu"
				}) : e ? s.fbt._("Click to see nsfw", null, {
					hk: "4CErse"
				}) : t ? s.fbt._("Click to see spoiler", null, {
					hk: "1x3iUE"
				}) : void 0,
				d = e => {
					let {
						isNSFW: t,
						isSpoiler: n
					} = e;
					return o.a.createElement("div", {
						className: a.a.unblurButtonContainer
					}, o.a.createElement("button", {
						className: a.a.unblurButton
					}, c(t, n)))
				}
		},
		"./src/reddit/components/Media/EmbedBox/index.m.less": function(e, t, n) {
			e.exports = {
				embedBox: "_3K6DCjWs2dQ93YYZDOHjib"
			}
		},
		"./src/reddit/components/Media/EmbedBox/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/addQueryParams/index.ts"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/forceHttps/index.ts"),
				l = n("./src/reddit/constants/tracking.ts"),
				u = n("./src/reddit/models/Media/index.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/components/Media/EmbedBox/index.m.less"),
				p = n.n(h);
			const b = ["allow-forms", "allow-orientation-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"].join(" "),
				x = Object(o.b)(() => Object(i.c)({
					isNightmodeOn: m.eb
				}));
			t.a = x(e => {
				const t = {
						responsive: "true",
						is_nightmode: e.isNightmodeOn
					},
					n = e.isResponsive ? Object(a.a)(Object(d.a)(e.source), t) : Object(d.a)(e.source),
					s = {
						overflow: "hidden"
					};
				return s.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (s.margin = "0 auto"), e.isListing || (s.maxHeight = `${u.e}px`), void 0 !== e.maxHeight && (s.maxHeight = e.maxHeight || void 0), e.isTweet || (s.height = "100%"), r.a.createElement("iframe", {
					className: Object(c.a)(l.a, p.a.embedBox, e.className),
					height: e.height,
					width: e.width && !e.fullWidth ? e.width : "100%",
					onLoad: e.onLoad,
					ref: e.childRef,
					title: e.title,
					sandbox: b,
					scrolling: "no",
					src: n,
					style: s,
					allowFullScreen: !0
				})
			})
		},
		"./src/reddit/components/Media/ImageBox/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3Oa0THmZ3f5iZXAQ0hBJ0k",
				image: "_2_tDEnGMLxpM6uOa2kaDB3",
				mShowCentered: "_1XWObl-3b9tPy64oaG6fax",
				mShowBlurred: "_3oBPn1sFwq76ZAxXgwRhhn",
				seeMore: "_3hUbl08LBz2mbXjy0iYhOS",
				imageLink: "_3m20hIKOhTTeMgPnfMbVNN"
			}
		},
		"./src/reddit/components/Media/ImageBox/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return T
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/forceHttps/index.ts"),
				u = n("./src/lib/opener/index.ts"),
				m = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				h = n("./src/reddit/components/Media/BlurredContent.tsx"),
				p = n("./src/reddit/components/PlayButton/index.tsx"),
				b = n("./src/reddit/constants/elementClassNames.ts"),
				x = n("./src/reddit/controls/OutboundLink/index.tsx"),
				f = n("./src/reddit/helpers/trackers/ads.ts"),
				g = n("./src/reddit/hooks/useClickSourceData.ts"),
				E = n("./src/reddit/models/Media/index.ts"),
				_ = n("./src/reddit/selectors/posts.ts"),
				j = n("./src/reddit/selectors/telemetry.ts"),
				C = n("./src/reddit/selectors/user.ts"),
				O = n("./src/reddit/constants/tracking.ts"),
				v = n("./src/reddit/components/Media/ImageBox/index.m.less"),
				y = n.n(v);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const T = e => e > 2 * E.e,
				I = e => {
					const t = Object(d.a)(y.a.image, b.g, e.className, {
							[y.a.mShowCentered]: e.showCentered,
							[y.a.mShowBlurred]: e.shouldBlur
						}),
						n = {};
					return e.showFull || e.isTall || (n.maxHeight = `${E.j}px`), e.isListing || e.isTall && T(e.height) || (n.maxHeight = `${E.e}px`), e.isExpando && e.maxHeight && (n.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (n.maxWidth = `${e.maxWidth}px`), o.a.createElement("img", {
						alt: e.altText || s.fbt._("Post image", null, {
							hk: "3KfCgs"
						}),
						className: t,
						src: e.src,
						style: n
					})
				},
				k = e => {
					const t = {};
					return (!e.showFull && Object(E.L)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${E.j}px`, e.shouldBlur && (t.maxWidth = Object(E.L)(e.height, e.width) ? `${E.z}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), o.a.createElement("div", {
						className: Object(d.a)(y.a.container, e.className),
						style: t
					}, e.children)
				},
				S = Object(i.b)(() => Object(c.a)(_.F, C.kb, (e, t) => {
					let {
						isSponsored: n,
						postId: s
					} = t;
					return n && s ? Object(_.b)(e, s) : null
				}, j.d, _.G, (e, t, n, s, r) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: n,
					pageType: s.pageType,
					post: r
				})));
			t.a = S(e => {
				const t = Object(g.a)();
				return e.outboundUrl && !e.shouldBlur ? o.a.createElement("a", {
					href: e.outboundUrl,
					target: "_blank",
					rel: u.a,
					onMouseDown: t => {
						e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(x.c)(t.currentTarget, e.postId, e.basePixelMetadata)
					},
					onClick: () => {
						e.isSponsored && e.post.postId && Object(f.a)(e.post, e.pageType)
					}
				}, L(e)) : e.isListing && e.postPermalink ? o.a.createElement(a.a, {
					target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
					to: Object(m.a)(e.postPermalink, void 0, t),
					onClick: e.onPostMediaClick
				}, L(e)) : L(e)
			});
			const N = (e, t) => o.a.createElement(I, {
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
				L = e => {
					let {
						onClick: t,
						...n
					} = e;
					const r = Object(E.L)(n.height, n.width),
						i = T(n.height) && r;
					return o.a.createElement(k, w({}, n, {
						className: `${r?`${O.a} `:""}${n.className||""}`
					}), n.isListing ? o.a.createElement("div", {
						className: n.contentImageClassName
					}, N(r, n)) : o.a.createElement("a", {
						href: n.originalSource,
						onClick: t,
						style: i ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: u.c,
						className: y.a.imageLink
					}, N(r, n), n.shouldBlur && !n.isVideoThumbnail && !n.isNsfwBlockingModalEligible && o.a.createElement(h.a, {
						isNSFW: !!n.isNSFW,
						isSpoiler: !!n.isSpoiler
					})), n.isListing && !n.showFull && n.height > E.j && Object(E.L)(n.height, n.width) && o.a.createElement("div", {
						className: y.a.seeMore
					}, s.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), n.isVideoThumbnail && o.a.createElement(p.a, {
						onClick: t
					}))
				}
		},
		"./src/reddit/components/Media/MediaContainer/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Media/MediaContainer/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/forceHttps/index.ts"),
				a = n("./src/reddit/models/Media/index.ts"),
				c = n("./src/reddit/components/Media/MediaContainer/index.m.less"),
				d = n.n(c);
			const l = e => {
				let t = null;
				(e.showFull || e.height < a.j) && (t = e.height), e.maxGalleryHeight && (t = e.maxGalleryHeight);
				const n = {
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
					s = e.blurSrc ? r.a.createElement("img", {
						className: d.a.blur,
						src: Object(i.a)(e.blurSrc)
					}) : null,
					c = Object(a.B)(e.height, e.width, e.forceAspectRatio);
				return r.a.createElement("div", {
					className: Object(o.a)(d.a.container, e.className, {
						[d.a.video]: e.isVideo,
						[d.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					}),
					"data-click-id": "media",
					style: e.isGalleryTileLayout ? void 0 : n
				}, s, !e.isGalleryTileLayout && r.a.createElement("div", {
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
		"./src/reddit/components/Media/VideoBox/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3spkFGVnKMHZ83pDAhW3Mx",
				centered: "_2b68Lt6xHaLir5082LDDA9",
				styledVideo: "tErWI93xEKrI2OkozPs7J"
			}
		},
		"./src/reddit/components/Media/VideoBox/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return y
			}));
			var s = n("./node_modules/lodash/throttle.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./node_modules/@reddit/adblock-detection/browser.js"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/actions/video.ts"),
				m = n("./src/reddit/constants/tracking.ts"),
				h = n("./src/reddit/models/Media/index.ts"),
				p = n("./src/reddit/selectors/user.ts"),
				b = n("./src/reddit/selectors/video.ts");
			const x = 100,
				f = x / 2 / 1e3;
			var g = n("./src/lib/forceHttps/index.ts"),
				E = n("./src/lib/hooks/usePrevious.ts");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function j(e) {
				let {
					autoplay: t,
					isListing: n,
					isNotCardView: s,
					onBufferingChange: r,
					shouldLoad: a,
					shouldPause: c,
					showCentered: d,
					showFull: l,
					source: u,
					...m
				} = e;
				const h = Object(o.useRef)(),
					p = Object(o.useRef)(),
					b = Object(E.a)(c);

				function j(e) {
					if (e) {
						const e = null === (t = null == p ? void 0 : p.current) || void 0 === t ? void 0 : t.play();
						e && e.catch && e.catch(() => {})
					} else ! function() {
						var e;
						null === (e = null == p ? void 0 : p.current) || void 0 === e || e.pause()
					}();
					var t
				}
				return Object(o.useEffect)(() => {
					if (j(!c && (t || s)), p.current && r) return h.current = function(e, t) {
						let n = !1,
							s = !1;
						const r = () => n = !0,
							o = () => s = !0;
						e.addEventListener("loadeddata", r), e.addEventListener("play", o), e.addEventListener("playing", o);
						let i = !1,
							a = 0,
							c = 0;
						const d = window.setInterval(() => {
							if (c = e.currentTime, s) return s = !1, void(a = c);
							if (e.paused || e.seeking || !n) return void(a = c);
							const r = i;
							4 === e.readyState ? i = !1 : !i && c >= a && c < a + f ? i = !0 : i && c >= a && c > a + f && (i = !1), a = c, r !== i && t(i)
						}, x);
						return () => {
							clearInterval(d), e.removeEventListener("playing", o), e.removeEventListener("play", o), e.removeEventListener("loadeddata", r)
						}
					}(p.current, r), () => {
						h.current && h.current()
					}
				}, []), Object(o.useEffect)(() => {
					b !== c && j(!c && (t || s))
				}, [b, c, t, s]), i.a.createElement("video", _({}, m, {
					ref: e => p.current = e,
					muted: !0
				}), i.a.createElement("source", {
					src: Object(g.a)(u || "")
				}))
			}
			var C = n("./src/reddit/components/Media/VideoBox/index.m.less"),
				O = n.n(C);
			const v = Object(c.c)({
				autoplayPref: p.b,
				consumed: b.a,
				loadTimes: b.f,
				metadata: b.h,
				started: b.k
			});

			function y(e) {
				const {
					autoplayPref: t,
					consumed: n,
					loadTimes: s,
					metadata: o,
					started: c
				} = Object(a.e)(t => v(t, e)), {
					postId: p,
					shouldLoad: b,
					source: x,
					height: f,
					isNotCardView: g,
					showFull: E,
					shouldPause: _,
					width: C,
					isListing: y,
					className: w,
					showCentered: T,
					originalSource: I,
					isPromoted: k
				} = e, S = t && !(k && Object(d.hasAcceptableAds)()), N = Object(a.d)();

				function L(e) {
					N(e ? Object(u.r)(p) : Object(u.E)(p))
				}

				function M() {
					return N(Object(u.z)({
						postId: p
					}))
				}
				const B = r()(e => {
					if (n) return;
					const {
						target: t
					} = e;
					t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && N(Object(u.s)(p))
				}, 200);

				function D(e) {
					e.persist(), B(e)
				}

				function R(e) {
					var t;
					(o || H(e), c) || (t = e.timeStamp, N(Object(u.A)(p, t)))
				}

				function P(e) {
					N(Object(u.q)(p, e.timeStamp))
				}

				function H(e) {
					! function(e) {
						N(Object(u.D)({
							metadata: e,
							postId: p
						}))
					}({
						id: p,
						length: 1e3 * e.target.duration,
						originalHeight: e.target.videoHeight,
						originalWidth: e.target.videoWidth
					})
				}

				function F(e) {
					s || R(e), o || H(e), N(Object(u.C)(p))
				}

				function A() {
					const e = {};
					return T && (e.margin = "0 auto"), y || (e.maxHeight = `${h.e}px`), i.a.createElement(j, {
						autoplay: S,
						className: Object(l.a)(m.a, O.a.styledVideo),
						height: f,
						isListing: y,
						isNotCardView: g,
						key: p,
						loop: !0,
						onBufferingChange: L,
						onLoadStart: P,
						onLoadedData: R,
						onLoadedMetadata: H,
						onPause: M,
						onPlaying: F,
						onTimeUpdate: D,
						shouldLoad: b,
						shouldPause: _,
						showCentered: T,
						showFull: E,
						source: x,
						style: e,
						width: C
					})
				}
				return y ? A() : i.a.createElement("div", {
					className: Object(l.a)(O.a.container, w, {
						[O.a.centered]: T
					})
				}, i.a.createElement("a", {
					href: I,
					target: "_blank",
					rel: "noopener noreferrer"
				}, A()))
			}
		},
		"./src/reddit/components/Media/index.m.less": function(e, t, n) {
			e.exports = {
				hiddenLink: "_3dhFVFchWAAFXfLFTa94n9",
				visibilityWrapper: "_1NSbknF8ucHV2abfCZw2Z1",
				displayNone: "_1Q2mF3u7v9hBVu_4bkC7R4",
				galleryMediaContainer: "_3ozFpM1W8BRdrzkr_ssGxZ",
				miniCardVideo: "_18_METUBD2i2iqGBz4ofw1",
				unblurButtonContainer: "_3jrT7JqZwfGWyxKf4SYuRj",
				unblurButton: "_2bcjL-4RRFQN5OUQMrcioo"
			}
		},
		"./src/reddit/components/RichTextJson/Emote/index.m.less": function(e, t, n) {
			e.exports = {
				container: "JnJcJlA7hHeajn8Um_Bh5"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.m.less": function(e, t, n) {
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
		"./src/reddit/components/RichTextJson/SpoilerText.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = n("./src/reddit/components/RichTextJson/SpoilerText.m.less"),
				u = n.n(l),
				m = n("./src/lib/lessComponent.tsx");

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const p = ["left", "top"],
				b = ["left", "bottom"],
				x = m.a.span("InnerSpan", u.a),
				f = m.a.span("TooltipTarget", u.a),
				g = m.a.span("SpoilerWrapper", u.a),
				E = m.a.wrapped(e => {
					let {
						className: t,
						isOpen: n,
						...s
					} = e;
					return o.a.createElement(g, h({}, s, {
						className: Object(i.a)(t, {
							[u.a.isOpen]: n
						})
					}))
				}, "SpoilerWrapper", u.a),
				_ = Object(d.a)(m.a.wrapped(c.b, "Component", u.a), [a.a.Click, a.a.Keydown]);
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
						text: s.fbt._("Reveal spoiler", null, {
							hk: "271xYi"
						}),
						targetPosition: p,
						tooltipPosition: b
					}), this.props.children))
				}
			}
			t.a = j
		},
		"./src/reddit/components/RichTextJson/elements.m.less": function(e, t, n) {
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
		"./src/reddit/components/RichTextJson/elements.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "x", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "h", (function() {
				return m
			})), n.d(t, "k", (function() {
				return h
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "j", (function() {
				return b
			})), n.d(t, "g", (function() {
				return x
			})), n.d(t, "v", (function() {
				return f
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "f", (function() {
				return _
			})), n.d(t, "u", (function() {
				return j
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "m", (function() {
				return v
			})), n.d(t, "n", (function() {
				return y
			})), n.d(t, "t", (function() {
				return w
			})), n.d(t, "p", (function() {
				return T
			})), n.d(t, "o", (function() {
				return I
			})), n.d(t, "q", (function() {
				return k
			})), n.d(t, "s", (function() {
				return S
			})), n.d(t, "r", (function() {
				return N
			})), n.d(t, "a", (function() {
				return L
			})), n.d(t, "w", (function() {
				return M
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/controls/OutboundLink/index.tsx"),
				i = n("./src/reddit/components/RichTextJson/elements.m.less"),
				a = n.n(i),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/Governance/VaultActionLink/async.ts");
			const l = [c.a.div("H1", a.a), c.a.div("H2", a.a), c.a.div("H3", a.a), c.a.div("H4", a.a), c.a.div("H5", a.a), c.a.div("H6", a.a)],
				u = c.a.hr("Hr", a.a),
				m = c.a.code("M", a.a),
				h = c.a.pre("Pre", a.a),
				p = c.a.blockquote("Blockquote", a.a),
				b = c.a.p("P", a.a),
				x = c.a.li("Li", a.a),
				f = c.a.ul("Ul", a.a),
				g = c.a.ol("Ol", a.a),
				E = c.a.strong("B", a.a),
				_ = c.a.em("I", a.a),
				j = c.a.span("U", a.a),
				C = e => r.a.createElement("del", e),
				O = c.a.sub("Sub", a.a),
				v = c.a.sup("Sup", a.a),
				y = c.a.table("Table", a.a),
				w = c.a.tr("Tr", a.a),
				T = c.a.td("Tdl", a.a),
				I = c.a.td("Tdc", a.a),
				k = c.a.td("Tdr", a.a),
				S = c.a.th("Thl", a.a),
				N = c.a.th("Thc", a.a),
				L = (c.a.th("Thr", a.a), c.a.wrapped(e => r.a.createElement(o.b, e), "A", a.a)),
				M = c.a.wrapped(d.a, "A", a.a)
		},
		"./src/reddit/components/RichTextJson/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_292iotee39Lmt0MkQZ2hPV",
				container: "_292iotee39Lmt0MkQZ2hPV",
				unblurButtonContainer: "YCBAlwtFjC7cDSMdBeA2W",
				unblurButton: "gCpM4Pkvf_Xth42z4uIrQ"
			}
		},
		"./src/reddit/components/RichTextJson/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return v
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "a", (function() {
				return T
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/findLastIndex.js"),
				o = n.n(r),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/lib/sentry/index.ts"),
				u = n("./src/reddit/components/Media/BlurredContent.tsx"),
				m = n("./src/reddit/constants/elementClassNames.ts"),
				h = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				p = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				b = n("./src/reddit/models/RichTextJson/index.ts"),
				x = n("./src/reddit/components/RichTextJson/media.tsx"),
				f = n("./src/reddit/components/RichTextJson/renderers.tsx"),
				g = n("./src/reddit/components/RichTextJson/index.m.less"),
				E = n.n(g);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const j = n("./src/lib/lessComponent.tsx").a.div("Container", E.a),
				C = Object(d.a)(e => {
					let {
						flairStyleTemplate: t,
						theme: n,
						...s
					} = e;
					return a.a.createElement(j, _({}, s, {
						style: {
							color: Object(p.a)(Object(h.a)({
								flairStyleTemplate: t,
								theme: n,
								...s
							}))
						}
					}))
				}),
				O = e => e.e === b.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== b.u || !!e.c && !e.c.every(e => e.e === b.A && !e.t),
				v = e => o()(e, O),
				y = e => e.findIndex(O),
				w = e => {
					const {
						altText: t,
						className: n,
						content: s,
						isListing: r,
						isNSFW: o,
						isNsfwBlockingModalEligible: i,
						isSpoiler: d,
						onClickRevealBlurred: l,
						postId: h,
						renderMediaAsLinks: p,
						rtJsonElementProps: g,
						useExplicitTextColor: _,
						shouldBlur: O
					} = e, w = s.document, T = [], I = e.mediaMetadata || null, k = y(w), S = v(w);
					if (O && !r && !i) return a.a.createElement(j, {
						className: Object(c.a)(m.j, n)
					}, a.a.createElement("div", {
						className: E.a.unblurButtonContainer
					}, a.a.createElement("button", {
						className: E.a.unblurButton,
						onClick: l
					}, Object(u.b)(!!o, !!d))));
					if (-1 !== k)
						for (let a = k; a <= S; a++) {
							const e = w[a];
							switch (e.e) {
								case b.k:
									T.push(f.c(e, g, a));
									break;
								case b.l:
									T.push(f.d(a));
									break;
								case b.b:
									T.push(f.a(e, I, g, a));
									break;
								case b.c:
									T.push(f.b(e, a));
									break;
								case b.p:
									T.push(f.f(e, I, g, a));
									break;
								case b.z:
									T.push(f.h(e, I, g, a));
									break;
								case b.u:
									T.push(f.g(e, I, g, a));
									break;
								case b.h:
									T.push(Object(x.a)(e, a));
									break;
								case b.m:
								case b.a:
								case b.D:
									T.push(...Object(x.b)(e, a, I, p, h, t))
							}
						}
					return _ ? a.a.createElement(j, {
						className: Object(c.a)(m.j, n)
					}, T) : a.a.createElement(C, {
						className: Object(c.a)(m.j, n),
						flairStyleTemplate: e.flairStyleTemplate
					}, T)
				};
			class T extends a.a.Component {
				constructor() {
					super(...arguments), this.hasError = !1, this.state = {
						hasError: !1
					}, this.renderDefaultFallback = () => s.fbt._("Something went wrong while trying to render this", null, {
						hk: "2UcBL3"
					})
				}
				componentDidCatch(e) {
					this.setState({
						hasError: !0
					}), this.logError(e)
				}
				logError(e) {
					l.c.withScope(t => {
						t.setExtra("objectInfo", this.props.rtJsonElementProps.renderingObjectInfo), t.setTag("rtjson", "rendering"), l.c.captureException(e)
					})
				}
				render() {
					const {
						renderFallback: e = this.renderDefaultFallback,
						...t
					} = this.props;
					if (this.hasError || this.state.hasError) return e();
					try {
						return w(t)
					} catch (n) {
						return this.hasError = !0, this.logError(n), e()
					}
				}
			}
		},
		"./src/reddit/components/RichTextJson/media.m.less": function(e, t, n) {
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
		"./src/reddit/components/RichTextJson/media.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return w
			})), n.d(t, "b", (function() {
				return I
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/config.ts"),
				c = n("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				d = n("./src/reddit/components/Media/EmbedBox/index.tsx"),
				l = n("./src/reddit/components/Media/ImageBox/index.tsx"),
				u = n("./src/reddit/components/Media/MediaContainer/index.tsx"),
				m = n("./src/reddit/components/Media/VideoBox/index.tsx"),
				h = n("./src/reddit/helpers/richTextJson/index.ts"),
				p = n("./src/reddit/models/RichTextJson/index.ts"),
				b = n("./src/reddit/components/RichTextJson/elements.tsx"),
				x = n("./src/reddit/components/RichTextJson/media.m.less"),
				f = n.n(x),
				g = n("./src/lib/lessComponent.tsx");

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = /\/(\w+)\/asset\/(\w+)\//,
				j = g.a.wrapped(b.a, "A", f.a),
				C = g.a.wrapped(l.a, "ImageBox", f.a),
				O = g.a.wrapped(e => o.a.createElement("p", e), "Caption", f.a),
				v = g.a.div("Placeholder", f.a),
				y = g.a.wrapped(e => {
					let {
						className: t,
						e: n,
						...r
					} = e;
					const i = n === p.D ? s.fbt._("Processing video...", null, {
						hk: "3SXDRi"
					}) : s.fbt._("Processing image...", null, {
						hk: "1qwmbc"
					});
					return o.a.createElement(v, E({
						className: t,
						style: {
							"--placeholder-content-text": `'${i}'`
						}
					}, r))
				}, "Placeholder", f.a),
				w = (e, t) => {
					let {
						c: n,
						x: s,
						y: r
					} = e;
					return o.a.createElement("div", {
						className: f.a.MediaWrapper
					}, o.a.createElement(u.a, {
						height: r,
						isListing: !1,
						key: t,
						showCentered: !0,
						showFull: !0,
						width: s
					}, o.a.createElement(d.a, {
						isListing: !1,
						source: n,
						height: r,
						width: s,
						showCentered: !0,
						showFull: !0
					})))
				},
				T = (e, t, n) => {
					const s = e.c;
					let r = "";
					return n && (n.e === p.s ? r = n.s.u : n.e === p.r ? r = n.s.gif : n.e === p.t && (r = (e => {
						const t = _.exec(e);
						return t ? `${a.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(n.dashUrl))), r ? o.a.createElement(j, {
						href: r,
						key: t,
						title: s
					}, s || r) : null
				},
				I = (e, t, n, s, r, a) => {
					const d = p.E(n, e.id);
					if (s) return [T(e, t, d)];
					const l = [];
					return d ? d.e === p.s ? l.push(((e, t, n, s) => {
						let {
							id: r,
							s: a
						} = e;
						return o.a.createElement("div", {
							className: Object(i.a)(f.a.MediaWrapper, {
								[f.a.mHasCaption]: n
							})
						}, o.a.createElement(u.a, {
							height: a.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: a.x
						}, o.a.createElement(C, {
							altText: s,
							originalSource: a.u,
							postId: r,
							source: a.u,
							height: a.y,
							width: a.x,
							shouldBlur: !1,
							showCentered: !0,
							showFull: !0,
							isListing: !1
						})))
					})(d, t, !!e.c, a)) : d.e === p.r ? l.push(((e, t, n) => {
						let {
							id: s,
							ext: r,
							s: a
						} = e;
						if (Object(h.g)(s)) {
							const e = r || Object(h.f)(s);
							return o.a.createElement("div", {
								className: Object(i.a)(f.a.MediaWrapper, {
									[f.a.mHasCaption]: n
								})
							}, o.a.createElement(j, {
								href: e,
								key: t,
								target: "_blank"
							}, a.mp4 ? o.a.createElement("video", {
								className: f.a.giphy,
								loop: !0,
								autoPlay: !0,
								muted: !0
							}, o.a.createElement("source", {
								src: a.mp4
							})) : {
								originalSource: e
							}))
						}
						return o.a.createElement("div", {
							className: Object(i.a)(f.a.MediaWrapper, {
								[f.a.mHasCaption]: n
							})
						}, o.a.createElement(u.a, {
							height: a.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: a.x
						}, o.a.createElement(m.a, {
							height: a.y,
							isListing: !1,
							isNotCardView: !0,
							originalSource: a.mp4,
							width: a.x,
							postId: s,
							source: a.mp4,
							shouldPause: !1,
							showCentered: !0,
							shouldLoad: !0,
							showFull: !0
						})))
					})(d, t, !!e.c)) : d.e === p.t && l.push(((e, t, n, s) => {
						let {
							hlsUrl: r,
							dashUrl: a,
							x: d,
							y: l,
							isGif: m
						} = e;
						return o.a.createElement("div", {
							className: Object(i.a)(f.a.MediaWrapper, {
								[f.a.mHasCaption]: n
							})
						}, o.a.createElement(u.a, {
							height: l,
							isListing: !1,
							isVideo: !0,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: d
						}, o.a.createElement(c.b, {
							shouldLoad: !0,
							shouldPause: !0,
							autoPlay: m,
							hlsSource: r,
							mpegDashSource: a,
							postId: s,
							isGif: m
						})))
					})(d, t, !!e.c, r)) : l.push(((e, t) => o.a.createElement(y, {
						e,
						key: t
					}))(e.e, t)), e.c && l.push(((e, t) => o.a.createElement(O, {
						key: t
					}, e))(e.c, `caption${t}`)), l
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return L
			})), n.d(t, "d", (function() {
				return M
			})), n.d(t, "a", (function() {
				return B
			})), n.d(t, "b", (function() {
				return D
			})), n.d(t, "f", (function() {
				return R
			})), n.d(t, "h", (function() {
				return H
			})), n.d(t, "g", (function() {
				return F
			})), n.d(t, "i", (function() {
				return A
			})), n.d(t, "e", (function() {
				return U
			}));
			var s = n("./src/lib/unicodeUtils/index.ts"),
				r = n("./node_modules/lodash/reduce.js"),
				o = n.n(r),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				c = n("./src/reddit/components/RichTextJson/elements.tsx"),
				d = n("./node_modules/uuid/v4.js"),
				l = n.n(d),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/models/Product/index.ts"),
				h = n("./src/reddit/models/RichTextJson/index.ts"),
				p = n("./src/reddit/selectors/telemetry.ts"),
				b = n("./src/higherOrderComponents/makeAsync.tsx");
			var x = Object(b.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("RichTextJsonEmoteTooltip").then(n.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				f = n("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				g = n.n(f);
			const E = 1e3,
				_ = 1e3;
			var j;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(j || (j = {}));
			class C extends a.a.Component {
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
							const n = p.n(t);
							return {
								source: "meta",
								action: e,
								noun: "emote",
								...n,
								actionInfo: {
									...n.actionInfo,
									reason: this.props.node.id
								},
								subreddit: p.gb(t)
							}
						})
					}
				}
				render() {
					const {
						node: e,
						media: t
					} = this.props;
					let n, s, r;
					t.e === h.s ? (n = t.s.x, s = t.s.y, r = t.s.u) : t.e === h.r && (n = t.s.x, s = t.s.y, r = t.s.gif);
					const o = this.state.tooltipOpen ? l()() : void 0;
					return r ? a.a.createElement("div", {
						className: g.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, a.a.createElement("img", {
						id: o,
						src: r,
						width: n,
						height: s,
						title: `:${Object(m.b)(e.id)}:`
					}), this.state.tooltipOpen && a.a.createElement(x, {
						isOpen: !0,
						emoteId: e.id,
						targetPosition: ["left", "bottom"],
						tooltipId: o,
						tooltipPosition: ["left", "top"]
					})) : null
				}
			}
			var O = Object(u.c)(C),
				v = n("./src/reddit/components/RichTextJson/media.tsx"),
				y = n("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				w = n("./src/reddit/components/SubredditMention/index.tsx"),
				T = n("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				I = n("./src/reddit/helpers/isComment.ts"),
				k = n("./src/reddit/helpers/isPost.ts"),
				S = n("./src/reddit/helpers/richTextJson/index.ts"),
				N = n("./src/reddit/helpers/trackers/getRichTextSourceElement.ts");
			const L = (e, t, n) => {
					const s = e.c || [],
						r = e.l,
						o = [],
						i = s.length;
					for (let a = 0; a < i; a++) {
						const e = s[a];
						o.push(e.e === h.w ? e.t : U(e, t, a))
					}
					const d = c.x[r - 1];
					return a.a.createElement(d, {
						key: n
					}, o)
				},
				M = e => a.a.createElement(c.e, {
					key: e
				}),
				B = (e, t, n, s) => {
					const r = e.c;
					if (!r) return;
					const o = r.length,
						i = [];
					for (let a = 0; a < o; a++) i.push(P(r[a], t, n, a));
					return a.a.createElement(c.c, {
						key: s
					}, i)
				},
				D = (e, t) => {
					const n = e.c;
					return a.a.createElement(c.k, {
						key: t
					}, a.a.createElement(c.h, null, n.reduce((e, t, n, s) => e += t.t + (n < s.length ? "\n" : ""), "")))
				},
				R = (e, t, n, s) => {
					const r = e.c,
						o = [],
						i = r.length;
					for (let l = 0; l < i; l++) {
						const e = r[l].c;
						e && e.length && o.push(a.a.createElement(c.g, {
							key: l
						}, e.map((e, s) => P(e, t, n, s))))
					}
					const d = e.o ? c.i : c.v;
					return a.a.createElement(d, {
						key: s
					}, o)
				},
				P = (e, t, n, s) => {
					switch (e.e) {
						case h.b:
							return B(e, t, n, s);
						case h.c:
							return D(e, s);
						case h.k:
							return L(e, n, s);
						case h.l:
							return M(s);
						case h.p:
							return R(e, t, n, s);
						case h.u:
							return F(e, t, n, s);
						case h.z:
							return H(e, t, n, s)
					}
				},
				H = (e, t, n, s) => {
					const r = e.c,
						o = e.h,
						i = r.length,
						d = o.length,
						l = [],
						u = [],
						m = [];
					for (let c = 0; c < d; c++) {
						const e = o[c],
							{
								H: s,
								D: r
							} = Y(e.a),
							{
								c: i = []
							} = e;
						l.push(a.a.createElement(s, {
							key: c
						}, A(i, t, n))), m[c] = r
					}
					for (let h = 0; h < i; h++) {
						const e = r[h],
							s = e.length,
							o = [];
						for (let r = 0; r < s; r++) {
							const s = m[r],
								{
									c: i = []
								} = e[r];
							o.push(a.a.createElement(s, {
								key: r
							}, A(i, t, n)))
						}
						u.push(a.a.createElement(c.t, {
							key: h
						}, o))
					}
					return a.a.createElement(c.n, {
						key: s
					}, a.a.createElement("thead", null, a.a.createElement(c.t, null, l)), a.a.createElement("tbody", null, u))
				},
				F = (e, t, n, s) => {
					if (!e.c || !e.c.length) return (e => a.a.createElement(c.j, {
						key: e
					}, a.a.createElement("br", null)))(s);
					const r = e.c[0];
					return r.e !== h.m && r.e !== h.a || !Object(S.g)(r.id) ? a.a.createElement(c.j, {
						key: s
					}, A(e.c, t, n)) : Object(v.b)(r, s, t)
				},
				A = (e, t, n) => {
					const s = [],
						r = e.length;
					for (let o = 0; o < r; o++) {
						const r = e[o];
						if (r.e === h.A) s.push(W(r, o));
						else if (r.e === h.x) s.push(a.a.createElement(y.a, {
							key: o
						}, A(r.c, t, n)));
						else if (r.e === h.n) s.push(a.a.createElement("br", {
							key: o
						}));
						else if (r.e === h.m || r.e === h.a) {
							if (r.id.startsWith("emote|")) {
								const e = h.E(t, r.id);
								e && s.push(a.a.createElement(O, {
									key: o,
									node: r,
									media: e
								}))
							}
						} else s.push(U(r, n, o))
					}
					return s
				},
				U = (e, t, n) => {
					switch (e.e) {
						case h.o:
							const s = W({
								t: e.t,
								f: e.f
							}, 0);
							if (Object(T.b)(e.u)) return a.a.createElement(c.w, {
								to: e.u,
								key: n,
								title: e.a
							}, s);
							let r, o;
							const i = Object(N.a)(t),
								d = t.renderingObjectInfo;
							return d && Object(k.b)(d) && (r = d.postId), d && Object(I.b)(d) && (o = d.id, r = d.postId), a.a.createElement(c.a, {
								href: e.u,
								key: n,
								title: e.a,
								sourceElement: i,
								postId: r,
								commentId: o
							}, s);
						case h.y:
							return a.a.createElement(w.b, {
								key: n,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case h.B:
						case h.C:
							return a.a.createElement(c.a, {
								href: `/u/${e.t}/`,
								key: n
							}, `${e.l?"/":""}u/${e.t}`);
						case h.g:
						case h.v:
							return a.a.createElement(c.a, {
								href: e.t,
								key: n
							}, e.t)
					}
				},
				W = (e, t) => {
					const {
						f: n,
						t: r
					} = e, o = [];
					if (!n) return V(0, r, t);
					const i = Object(s.a)(r);
					let a = 0,
						c = 0;
					const d = n.length;
					for (; a < d; a++) {
						const [e, t, s] = n[a], d = t + s, l = i[t], u = i[d] - l;
						l > c && o.push(V(0, r.substr(c, l - c), `between${a}`)), o.push(V(e, r.substr(l, u), a)), c = l + u
					}
					return c < r.length && o.push(V(0, r.substr(c), `remaining${a}`)), o
				},
				J = {
					[h.j.monospace]: c.h,
					[h.j.bold]: c.b,
					[h.j.italic]: c.f,
					[h.j.underline]: c.u,
					[h.j.strikethrough]: c.d,
					[h.j.subscript]: c.l,
					[h.j.superscript]: c.m
				},
				V = (e, t, n) => {
					let s = t;
					return s = o()(J, (t, s, r) => e & parseInt(r, 10) ? a.a.createElement(s, {
						key: n
					}, t) : t, s)
				},
				Y = e => {
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
		"./src/reddit/components/RichTextJsonChatReply/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "qqC8Lcm050i_jAM3CePWY",
				container: "qqC8Lcm050i_jAM3CePWY"
			}
		},
		"./src/reddit/components/RichTextJsonChatReply/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/RichTextJson/index.tsx"),
				a = n("./src/reddit/components/RichTextJson/elements.tsx"),
				c = n("./src/reddit/components/RichTextJson/renderers.tsx"),
				d = n("./src/reddit/models/RichTextJson/index.ts");
			const l = e => r.a.createElement(a.f, null, e),
				u = e => {
					const t = [],
						n = e.c || [],
						s = n.length;
					for (let r = 0; r < s; r++) {
						const e = n[r];
						t.push(e.e === d.w ? e.t : Object(c.e)(e, {}, r))
					}
					return r.a.createElement(r.a.Fragment, null, t)
				},
				m = e => e.c && e.c.length ? r.a.createElement(r.a.Fragment, null, Object(c.i)(e.c, null, {})) : r.a.createElement("br", null);
			var h = n("./src/reddit/constants/elementClassNames.ts"),
				p = n("./src/reddit/components/RichTextJsonChatReply/index.m.less"),
				b = n.n(p);
			const x = n("./src/lib/lessComponent.tsx").a.div("Container", b.a),
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
					content: n
				} = e, s = n.document, a = [], c = Object(i.b)(s), p = Object(i.c)(s);
				if (-1 !== c)
					for (let r = c; r <= p; r++) {
						const e = s[r],
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
								a.push(l(t));
								break;
							case d.k:
								a.push(u(e));
								break;
							case d.u:
								a.push(m(e))
						}
					}
				return r.a.createElement(x, {
					className: Object(o.a)(h.j, t)
				}, a)
			}
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.m.less": function(e, t, n) {
			e.exports = {
				S: "Zwo7CZoszMU6kBYhWyIC7",
				s: "Zwo7CZoszMU6kBYhWyIC7",
				SubredditIcon: "_33bYVIxJlbFcqiiYlexnqp",
				subredditIcon: "_33bYVIxJlbFcqiiYlexnqp"
			}
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/SubredditIcon/index.tsx"),
				a = n("./src/reddit/controls/OutboundLink/index.tsx"),
				c = n("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
				d = n.n(c);
			const l = o.a.wrapped(i.b, "SubredditIcon", d.a),
				u = o.a.wrapped(e => r.a.createElement(a.b, e), "S", d.a)
		},
		"./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less": function(e, t, n) {
			e.exports = {
				topPostsTitle: "_2Pw8j7a2DYkjTDOFbIdODA",
				hovercardStyle: "_2ktYI4-r7C-HaMk9ulbwog",
				top: "_3rKUrAbYNFvE7-nMDs6lwZ",
				subredditMentionContainer: "_1e2szH8g0XMMM_EuCN8Olk",
				subredditIconContainer: "_3kpwADnYG-SH40aaSdX3ZE"
			}
		},
		"./src/reddit/components/SubredditMention/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return C
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/components/RichTextJson/elements.tsx"),
				c = n("./src/higherOrderComponents/makeAsync.tsx"),
				d = n("./src/lib/loadWithRetries/index.ts"),
				l = n("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				u = n("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				m = n.n(u);
			var h = Object(c.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(d.a)(() => n.e("SubredditMentionWithIcon").then(n.bind(null, "./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.tsx"))).then(e => e.default),
					LoadingComponent(e) {
						let {
							subredditName: t
						} = e;
						return r.a.createElement("span", {
							className: m.a.subredditMentionContainer
						}, r.a.createElement(l.a, {
							href: `/r/${t}/`
						}, r.a.createElement("span", {
							className: m.a.subredditIconContainer
						}, r.a.createElement(l.b, null)), `r/${t}`))
					}
				}),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/constants/experiments.ts"),
				x = n("./src/reddit/helpers/trackers/subredditMentions.ts"),
				f = n("./src/reddit/selectors/subredditMention.ts");
			class g extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.handleOnClick = () => {
						const {
							rtJsonElementProps: e,
							sendEvent: t,
							subredditName: n
						} = this.props;
						t(Object(x.a)({
							...e,
							subredditName: n
						}))
					}
				}
				render() {
					const {
						subredditName: e
					} = this.props;
					return r.a.createElement(a.a, {
						onClick: this.handleOnClick,
						href: `/r/${e}/`
					}, `r/${e}`)
				}
			}
			const E = Object(p.c)(g),
				_ = Object(i.c)({
					isFeatureFlagEnabled: f.b,
					isUserInTreatment: f.e,
					userVariant: f.a
				}),
				j = Object(o.b)(_),
				C = e => {
					let {
						isFeatureFlagEnabled: t,
						isUserInTreatment: n,
						subredditName: s,
						userVariant: o,
						rtJsonElementProps: i
					} = e;
					if (!n || !t) return r.a.createElement(E, {
						subredditName: s,
						rtJsonElementProps: i
					});
					switch (o) {
						case b.qf.SmIcon:
							return r.a.createElement(h, {
								subredditName: s,
								rtJsonElementProps: i
							});
						case b.qf.SmIconHc:
							return r.a.createElement(h, {
								subredditName: s,
								isHoverable: !0,
								rtJsonElementProps: i
							});
						default:
							return r.a.createElement(E, {
								subredditName: s,
								rtJsonElementProps: i
							})
					}
				};
			t.b = j(C)
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _
			})), n.d(t, "c", (function() {
				return j
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/uniqueId.js"),
				o = n.n(r),
				i = n("./node_modules/raf/index.js"),
				a = n.n(i),
				c = n("./node_modules/react/index.js"),
				d = n.n(c),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/higherOrderComponents/asModal/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/layout/row/Inline/index.tsx"),
				p = n("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				b = n.n(p);
			var x = Object(u.a)(e => {
					const {
						children: t,
						title: n
					} = e;
					return d.a.createElement("div", {
						className: b.a.wrapper
					}, d.a.createElement(h.a, {
						className: b.a.titleRow
					}, n), d.a.createElement("div", {
						className: b.a.detailsContainer
					}, t), d.a.createElement(h.a, {
						className: b.a.buttonRow
					}, d.a.createElement(m.l, {
						className: b.a.confirmButton,
						onClick: e.onConfirmed
					}, s.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				f = n("./src/reddit/controls/ErrorText/index.m.less"),
				g = n.n(f);
			class E extends d.a.Component {
				constructor(e) {
					super(e), this.spanRef = d.a.createRef(), this.toggleModal = () => {
						this.setState({
							isModalOpen: !this.state.isModalOpen
						})
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${o()()}`,
						isModalOpen: !1
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					a()(() => {
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
						className: t,
						errorModalBody: n,
						errorModalTitle: r = s.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: o = s.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						textHasOverflowed: i,
						isModalOpen: a
					} = this.state;
					return d.a.createElement("div", {
						className: Object(l.a)(g.a.wrapper, t)
					}, d.a.createElement("span", {
						className: g.a.description,
						ref: this.spanRef
					}, e), i && d.a.createElement("span", {
						className: g.a.moreText,
						onClick: this.toggleModal
					}, o), a && d.a.createElement(x, {
						onConfirmed: this.toggleModal,
						title: r
					}, n || e))
				}
			}
			const _ = e => {
					const {
						className: t,
						errorClassName: n,
						errorModalTitle: s,
						fallbackMessage: r,
						messages: o = []
					} = e, i = o.length ? o : r ? [r] : [];
					return i.length ? d.a.createElement("div", {
						className: t
					}, i.map((e, t) => d.a.createElement(E, {
						className: n,
						errorModalTitle: s,
						key: t
					}, e))) : null
				},
				j = e => d.a.createElement(_, {
					fallbackMessage: s.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = E
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/featureFlags/index.ts");

			function c(e, t, n) {
				const s = Object(i.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(o.b)(s)(e => {
					const {
						featureEnabled: s,
						...o
					} = e, i = o;
					return s ? r.a.createElement(t, i) : void 0 !== n ? r.a.createElement(n, i) : null
				})
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, n) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				o = n.n(r);
			const i = e => {
					let {
						isLoading: t
					} = e;
					return Object(s.a)(o.a.loadingBackground, {
						[o.a["m-loading"]]: t
					})
				},
				a = e => Object(s.a)(o.a.loadingBar, i(e))
		},
		"./src/reddit/helpers/trackers/getRichTextSourceElement.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/contexts/PageLayer/index.tsx"),
				r = n("./src/reddit/helpers/isComment.ts"),
				o = n("./src/reddit/helpers/isPost.ts"),
				i = n("./src/telemetry/models/Outbound.ts");
			const a = e => {
				let {
					renderingObjectInfo: t,
					pageLayer: n
				} = e;
				if (t && (Object(r.b)(t) || Object(o.b)(t))) return Object(r.b)(t) ? i.SourceElement.Comment : Object(s.x)(n) ? i.SourceElement.PostDetail : Object(s.H)(n) ? i.SourceElement.ListingPostDetail : void 0
			}
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "g", (function() {
				return g
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "e", (function() {
				return C
			}));
			var s, r, o = n("./src/reddit/constants/tracking.ts"),
				i = n("./src/reddit/helpers/isComment.ts"),
				a = n("./src/reddit/helpers/isPost.ts"),
				c = n("./src/reddit/helpers/trackers/getRichTextSourceElement.ts"),
				d = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = n("./src/reddit/selectors/subreddit.ts"),
				u = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(s || (s = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(r || (r = {}));
			const m = e => ({
					...u.n(e),
					source: r.LINK,
					action: o.c.CLICK,
					noun: s.INTERNAL_LINK
				}),
				h = e => ({
					...u.n(e),
					source: r,
					screen: u.Y(e),
					discoveryUnit: {
						id: "xd_100",
						name: s.SUBREDDIT_HOVERCARD,
						type: d.e.Listing,
						title: s.SUBREDDIT_HOVERCARD
					}
				}),
				p = (e, t) => {
					const {
						renderingObjectInfo: n,
						subredditName: s
					} = t;
					if (!n || !Object(a.b)(n) && !Object(i.b)(n)) return {
						outbound: void 0
					};
					const r = Object(a.b)(n) ? "postId" : "commentId",
						o = {
							url: `/r/${s}/`,
							sourceElement: Object(c.a)(t),
							subredditName: s,
							[r]: n.id
						},
						d = Object(l.z)(e, {
							subredditName: s
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
						renderingObjectInfo: n
					} = t;
					if (!n || !Object(a.b)(n) && !Object(i.b)(n)) return {};
					const s = Object(a.b)(n) ? n.belongsTo.id : n.subredditId;
					return {
						post: u.H(e, n.id),
						subreddit: u.hb(e, s),
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
					noun: s.SUBREDDIT_HOVERCARD,
					subreddit: u.ib(t, e),
					screen: u.Y(t)
				}),
				g = (e, t) => n => ({
					...h(n),
					source: r.DISCOVERY_UNIT,
					action: o.c.VIEW,
					noun: s.ITEM_POST,
					post: u.H(n, t),
					subreddit: u.ib(n, e),
					screen: u.Y(n)
				}),
				E = (e, t) => n => ({
					...h(n),
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: s.ITEM_POST,
					post: u.H(n, t),
					subreddit: u.ib(n, e),
					screen: u.Y(n)
				}),
				_ = e => t => ({
					...h(t),
					subreddit: u.hb(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: s.HEADER_SUBREDDIT
				}),
				j = e => t => ({
					...h(t),
					subreddit: u.hb(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: s.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				C = e => t => ({
					...h(t),
					subreddit: u.hb(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: s.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/selectors/subredditMention.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/featureFlags/index.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/subreddit.ts");
			const a = e => r.d.subredditMentionD2xExperiment(e),
				c = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: a,
						experimentName: s.kf
					}) || ""
				},
				d = e => {
					const t = c(e);
					return t === s.qf.SmIcon || t === s.qf.SmIconHc
				},
				l = (e, t) => {
					let {
						subredditName: n
					} = t;
					return !!e.subreddits.api.models.pending[n]
				},
				u = (e, t) => {
					let {
						subredditName: n
					} = t;
					return !!e.subreddits.api.models.error[n]
				},
				m = (e, t) => {
					let {
						subredditName: n
					} = t;
					const s = Object(i.Y)(e, {
						subredditName: n
					});
					return (s && s.postIds || []).slice(0, 2)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ChatMessageInput~ChatPost.1901b9e37eb6ab9f825b.js.map