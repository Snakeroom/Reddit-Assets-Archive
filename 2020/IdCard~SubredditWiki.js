// https://www.redditstatic.com/desktop2x/IdCard~SubredditWiki.aa4436277e99f6e2d811.js
// Retrieved at 3/11/2020, 3:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["IdCard~SubredditWiki"], {
		"./src/lib/humanizeDate/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./src/reddit/i18n/utils.ts");
			const s = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
				o = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				i = (e, t) => t ? e.getUTCDate() : e.getDate(),
				a = (e, t, n) => {
					const i = t ? e.getUTCMonth() : e.getMonth(),
						a = n ? o : s;
					return Object(r.c)(a[i])
				},
				c = (e, t) => t ? e.getUTCFullYear() : e.getFullYear();

			function d(e, t, n, r) {
				const s = new Date(1e3 * e),
					o = a(s, n, r),
					d = t ? i(s, n) + ", " : "";
				return "".concat(o, " ").concat(d).concat(c(s, n))
			}
		},
		"./src/reddit/actions/subreddit/inlineEditing.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return f
			})), n.d(t, "a", (function() {
				return I
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/structuredStyles/index.ts"),
				i = n("./src/reddit/actions/subreddit/constants.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/constants/blade.ts"),
				d = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				l = n("./src/reddit/models/Image/index.tsx"),
				u = n("./src/reddit/models/Toast/index.ts"),
				p = n("./src/reddit/selectors/structuredStyles.ts"),
				m = n("./src/reddit/selectors/subreddit.ts"),
				b = n("./src/telemetry/index.ts");
			const h = Object(s.a)(i.p),
				g = Object(s.a)(i.q),
				x = Object(s.a)(i.o),
				f = (e, t, n) => async (r, s, o) => {
					const i = Object(m.y)(s(), {
						subredditName: e
					});
					if (i) return I(i, t, n)(r, s, o)
				}, _ = () => r.fbt._("Error uploading image, please try again later", null, {
					hk: "7ZIYs"
				}), I = (e, t, n) => async (s, i, m) => {
					const f = await Object(l.e)(t);
					s(h());
					const I = i();
					try {
						await Object(o.g)("communityIcon", f, e.id)(s, i, m)
					} catch (O) {
						return Object(b.a)(Object(d.c)(I, "something went wrong with the uploading the image")), s(Object(a.e)({
							kind: u.b.Error,
							text: _()
						})), void s(x())
					}
					const y = Object(p.d)(i(), {
						name: "communityIcon"
					});
					if (!y) return Object(b.a)(Object(d.c)(I, "image is null")), s(Object(a.e)({
						kind: u.b.Error,
						text: _()
					})), void s(x());
					await Object(o.k)(e.id, {
						communityIcon: y
					}, c.b.idCard, n)(s, i, m), s(Object(a.e)({
						kind: u.b.SuccessCommunity,
						text: r.fbt._("Successfully updated Community Icon!", null, {
							hk: "29LGdg"
						})
					})), s(g())
				}
		},
		"./src/reddit/components/IdCard/Banner.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/components/IdCard/index.m.less"),
				i = n.n(o);
			const a = s.a.memo(e => {
				const {
					bannerBackgroundImage: t
				} = e;
				return s.a.createElement("div", {
					className: i.a.Banner,
					style: t && t.length ? {
						backgroundImage: "url(".concat(t, ")")
					} : void 0
				})
			})
		},
		"./src/reddit/components/IdCard/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			}));
			var r = n("./src/app/strings/index.ts"),
				s = n("./src/config.ts"),
				o = n("./src/reddit/constants/listings.ts"),
				i = n("./src/reddit/constants/page.ts");
			const a = e => e && e.toLowerCase() === o.b.Popular,
				c = e => e && e.toLowerCase() === o.b.All,
				d = e => e && e === i.b,
				l = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40,
						n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 68;
					return {
						height: n,
						image: e,
						width: t
					}
				},
				u = e => {
					let t, n, i, u, p, {
						language: m,
						listingName: b,
						subreddit: h,
						idCardWidget: g
					} = e;
					const x = g && g.subscribersText || Object(r.a)(m, "structuredStyles.widgets.id-card.subscribersText"),
						f = g && g.currentlyViewingText || Object(r.a)(m, "structuredStyles.widgets.id-card.currentlyViewingText");
					let _, I;
					if (d(b)) {
						t = "".concat(s.a.assetPath, "/img/id-cards/home-banner@2x.png"), i = l("url('".concat(s.a.assetPath, "/img/id-cards/snoo-home@2x.png')")), p = o.c[o.b.Home]; {
							n = Object(r.a)(m, "listings.home.longDescription");
							const e = Object(r.a)(m, "listings.home.title");
							u = e.charAt(0).toUpperCase() + e.slice(1)
						}
					} else c(b) ? (t = "".concat(s.a.assetPath, "/img/id-cards/banner@2x.png"), n = Object(r.a)(m, "listings.all.longDescription"), i = l("url('".concat(s.a.assetPath, "/img/id-cards/snoo-home@2x.png')")), u = "r/all", p = o.c[o.b.All]) : a(b) ? (t = "".concat(s.a.assetPath, "/img/id-cards/banner@2x.png"), n = Object(r.a)(m, "listings.popular.longDescription"), i = l("url('".concat(s.a.assetPath, "/img/id-cards/snoo-home@2x.png')")), u = "r/popular", p = o.c[o.b.Popular]) : b && (n = g && g.description, i = l(""), u = h.displayText, p = h.url, I = g && g.subscribersCount, _ = g && g.currentlyViewingCount);
					return Object.assign({
						snooBackground: i,
						description: n,
						titleText: u,
						url: p,
						subscribersCount: I,
						subscribersText: x,
						currentlyViewingText: f,
						currentlyViewingCount: _
					}, t ? {
						bannerBackgroundImage: t
					} : {})
				}
		},
		"./src/reddit/components/IdCard/index.m.less": function(e, t, n) {
			e.exports = {
				categoryContainer: "_2cn386lOe1A_DTmBUA-qSM",
				icon: "_2XJvPvYIEYtcS4ORsDXwa3",
				subredditIcon: "_2Vkdik1Q8k0lBEhhA_lRKE",
				largeSubredditIcon: "eGjjbHtkgFc-SYka3LM3M",
				metaTextContainer: "j9k2MUR13FjoBBeLo1C1m",
				metaText: "_3Evl5aOozId3QVjs7iry2c",
				memberIcon: "_1qhTBEK-QmJbvMP4ckhAbh",
				headerButtonsContainer: "_3nzVPnRRnrls4DOXO_I0fn",
				overflowButton: "_1LAmcxBaaqShJsi8RNT-Vp",
				communityCoinCount: "_2bWoGvMqVhMWwhp4Pgt4LP",
				coinIcon: "tWeTbHFf02PguTEonwJD0",
				coinsTooltipContent: "_2AbGMsrZJPHrLm9e-oyW1E",
				helpIcon: "_1cB7-TWJtfCxXAqqeyVb2q",
				Banner: "hpxKmfWP2ZiwdKaWpefMn",
				banner: "hpxKmfWP2ZiwdKaWpefMn",
				Title: "_20Kb6TX_CdnePoT8iEsls6",
				title: "_20Kb6TX_CdnePoT8iEsls6",
				TitleShifted: "t9oUK2WY0d28lhLAh3N5q",
				titleShifted: "t9oUK2WY0d28lhLAh3N5q",
				AdorableSnoo: "_2KqgQ5WzoQRJqjjoznu22o",
				adorableSnoo: "_2KqgQ5WzoQRJqjjoznu22o",
				TitleLink: "_2D7eYuDY6cYGtybECmsxvE",
				titleLink: "_2D7eYuDY6cYGtybECmsxvE",
				TitleText: "_19bCWnxeTjqzBElWZfIlJb",
				titleText: "_19bCWnxeTjqzBElWZfIlJb",
				TitleTextShiftedContainer: "_2TC7AdkcuxFIFKRO_VWis8",
				titleTextShiftedContainer: "_2TC7AdkcuxFIFKRO_VWis8",
				TitleTextWithSecondaryTitle: "_35WVFxUni5zeFkPk7O4iiB",
				titleTextWithSecondaryTitle: "_35WVFxUni5zeFkPk7O4iiB",
				UserCounts: "_7kAMkb9SAVF8xJ3L53gcW",
				userCounts: "_7kAMkb9SAVF8xJ3L53gcW",
				SubscriberCount: "nEdqRRzLEN43xauwtgTmj",
				subscriberCount: "nEdqRRzLEN43xauwtgTmj",
				Online: "_3_HlHJ56dAfStT19Jgl1bF",
				online: "_3_HlHJ56dAfStT19Jgl1bF",
				CakeDay: "_2QZ7T4uAFMs_N83BZcN-Em",
				cakeDay: "_2QZ7T4uAFMs_N83BZcN-Em",
				cakeIcon: "_19sQCxYe2NApNbYNX5P5-L",
				Count: "_3XFx6CfPlg-4Usgxm0gK8R",
				count: "_3XFx6CfPlg-4Usgxm0gK8R",
				CountMetaText: "_34InTQ51PAhJivuc_InKjJ",
				countMetaText: "_34InTQ51PAhJivuc_InKjJ",
				UserType: "_29_mu5qI8E1fq6Uq5koje8",
				userType: "_29_mu5qI8E1fq6Uq5koje8",
				WidgetHeader: "_2BY2-wxSbNFYqAy98jWyTC",
				widgetHeader: "_2BY2-wxSbNFYqAy98jWyTC",
				Description: "_3sGbDVmLJd_8OV8Kfl7dVv",
				description: "_3sGbDVmLJd_8OV8Kfl7dVv",
				Buttons: "_1qiHDKK74j6hUNxM0p9ZIp",
				buttons: "_1qiHDKK74j6hUNxM0p9ZIp",
				SubscribeButton: "_1eMniuqQCoYf3kOpyx83Jj",
				subscribeButton: "_1eMniuqQCoYf3kOpyx83Jj",
				CreatePostButton: "_326PJFFRv8chYfOlaEYmGt",
				createPostButton: "_326PJFFRv8chYfOlaEYmGt",
				CreateCommunityButton: "Jy6FIGP1NvWbVjQZN7FHA",
				createCommunityButton: "Jy6FIGP1NvWbVjQZN7FHA",
				VisitCommunityButton: "_1cDoUuVvel5B1n5wa3K507",
				visitCommunityButton: "_1cDoUuVvel5B1n5wa3K507",
				ModSettings: "_2_w8DCFR-DCxgxlP1SGNq5",
				modSettings: "_2_w8DCFR-DCxgxlP1SGNq5",
				ModToolsLink: "_1aS-wQ7rpbcxKT0d5kjrbh",
				modToolsLink: "_1aS-wQ7rpbcxKT0d5kjrbh",
				CategoryContainer: "_2cn386lOe1A_DTmBUA-qSM",
				titleTextContainer: "_2Zdkj7cQEO3zSGHGK2XnZv",
				editIconText: "wzFxUZxKK8HkWiEhs0tyE",
				iconFilePicker: "_3R24jLERJTaoRbM_vYd9v0",
				HorizontalLine: "_38lwnrIpIyqxDfAF1iwhcV",
				horizontalLine: "_38lwnrIpIyqxDfAF1iwhcV",
				subredditTitle: "yobE-ux_T1smVDcFMMKFv",
				CommunityTypeContainer: "_2DVpJZAGplELzFy4mB0epQ",
				communityTypeContainer: "_2DVpJZAGplELzFy4mB0epQ",
				communityType: "x1f6lYW8eQcUFu0VIPZzb",
				communityTypeIcon: "LTiNLdCS1ZPRx9wBlY2rD",
				communityTypeText: "_18e78ihYD3tNypPhtYISq3"
			}
		},
		"./src/reddit/components/IdCard/renderFakeSubredditTitle.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/IdCard/index.m.less"),
				a = n.n(i);
			const c = e => {
				let {
					snooBackground: t
				} = e;
				return s.a.createElement("div", {
					className: a.a.AdorableSnoo,
					style: {
						background: t.image,
						backgroundSize: "".concat(t.width, "px ").concat(t.height, "px"),
						height: t.height,
						width: t.width
					}
				})
			};
			t.a = e => {
				let {
					titleText: t,
					snooBackground: n
				} = e;
				return s.a.createElement("div", {
					className: Object(o.a)(a.a.Title, a.a.TitleShifted)
				}, s.a.createElement(c, {
					snooBackground: n
				}), s.a.createElement("div", {
					className: a.a.TitleTextShiftedContainer
				}, s.a.createElement("span", {
					className: a.a.TitleText
				}, t)))
			}
		},
		"./src/reddit/components/OverflowMenu/index.m.less": function(e, t, n) {
			e.exports = {
				_Dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				MenuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				menuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				mIsEnabled: "uMPgOFYlCc5uvpa2Lbteu",
				MenuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				menuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				DropdownRow: "_2DO72U0b_6CUw3msKGrnnT",
				dropdownRow: "_2DO72U0b_6CUw3msKGrnnT"
			}
		},
		"./src/reddit/components/OverflowMenu/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return O
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/reddit/i18n/utils.ts"),
				u = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				p = n("./src/reddit/controls/Dropdown/index.tsx"),
				m = n("./src/reddit/controls/Dropdown/Row.tsx"),
				b = n("./src/reddit/icons/fonts/Menu/index.tsx"),
				h = n("./src/reddit/selectors/tooltip.ts"),
				g = n("./src/reddit/components/OverflowMenu/index.m.less"),
				x = n.n(g);
			const f = c.a.wrapped(p.a, "_Dropdown", x.a),
				_ = Object(u.a)(f),
				I = c.a.button("MenuButton", x.a),
				y = c.a.wrapped(b.a, "MenuIcon", x.a),
				O = c.a.wrapped(m.b, "DropdownRow", x.a),
				j = Object(i.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: n
						} = t;
						return Object(h.b)(n)(e)
					}
				}),
				T = Object(o.b)(j, (e, t) => {
					let {
						dropdownId: n
					} = t;
					return {
						toggleDropdown: () => e(Object(d.h)({
							tooltipId: n
						}))
					}
				}),
				C = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = T(e => s.a.createElement(I, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": Object(l.c)("more options"),
				className: Object(a.a)(e.className, {
					[x.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: C(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : s.a.createElement(y, null), s.a.createElement(_, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition
			}, e.children)))
		},
		"./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/actions/subreddit/inlineEditing.ts"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/controls/ImageInput/index.tsx"),
				u = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				m = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				b = n("./src/reddit/i18n/components.tsx"),
				h = n("./src/reddit/i18n/utils.ts"),
				g = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				x = e => s.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 16 17",
					version: "1.1"
				}, s.a.createElement("path", {
					d: "M8.566 5.835l2.4 2.4a.8.8 0 0 1-1.132 1.131L8.8 8.332V13.6a.8.8 0 1 1-1.6 0V8.332L6.166 9.366a.8.8 0 0 1-1.132-1.131l2.4-2.4a.803.803 0 0 1 1.132 0zm3.091-2.292A3.547 3.547 0 0 1 15.2 7.085a.8.8 0 0 1-1.6 0 1.945 1.945 0 0 0-2.318-1.904.802.802 0 0 1-.869-.43A4.206 4.206 0 0 0 6.628 2.4 4.233 4.233 0 0 0 2.4 6.629a.8.8 0 0 1-1.6 0A5.835 5.835 0 0 1 6.628.799a5.788 5.788 0 0 1 4.941 2.745l.088-.001z",
					id: "a"
				})),
				f = n("./src/reddit/models/ApiRequestState/index.ts"),
				_ = n("./src/reddit/selectors/inlineSubredditEditing.ts"),
				I = n("./src/reddit/components/SubredditIcon/index.m.less"),
				y = n.n(I);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var j = function(e, t) {
				var n = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]])
				}
				return n
			};
			class T extends s.a.Component {
				constructor(e) {
					super(e)
				}
				render() {
					const e = this.props,
						{
							subredditId: t,
							className: n,
							inTopBar: r
						} = e,
						o = j(e, ["subredditId", "className", "inTopBar"]),
						i = [n, y.a.inTopBar, y.a.iconContainer];
					return r ? i.push(y.a.emptyEditableIconInTopBar) : i.push(y.a.editableIcon, y.a.emptyEditableIcon), s.a.createElement("span", O({}, o, {
						className: Object(a.a)(...i)
					}), r ? s.a.createElement(x, {
						className: y.a.emptyUploadButton
					}) : s.a.createElement(g.a, {
						className: y.a.emptyPlusButton
					}), this.props.children)
				}
			}
			const C = e => {
					const {
						iconColor: t,
						className: n,
						alt: r,
						role: o,
						onClick: i,
						inTopBar: c,
						src: d
					} = e;
					return s.a.createElement("span", {
						className: y.a.iconContainer
					}, s.a.createElement("img", {
						onClick: i,
						role: o,
						alt: r,
						src: d,
						className: Object(a.a)(n, {
							[y.a.editableIcon]: !c
						}),
						style: {
							backgroundColor: t || ""
						}
					}), e.children)
				},
				w = Object(i.c)({
					isLoading: _.b
				});
			class E extends s.a.PureComponent {
				constructor(e) {
					super(e), this.inputRef = null, this.openImageUpload = () => {
						this.inputRef && this.inputRef.click(), this.props.sendEvent(m.b)
					}, this.setInputRef = e => this.inputRef = e, this.renderImageUploader = () => s.a.createElement(l.a, {
						className: y.a.imageUploader,
						inputRef: this.setInputRef,
						multiple: !1,
						onChange: e => {
							const t = Object(f.b)();
							this.setState({
								apiRequestId: t
							}), this.props.onFileSelected(e, t)
						}
					}), this.state = {
						apiRequestId: null
					}
				}
				renderEditButton() {
					const {
						url: e
					} = Object(p.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					});
					return this.props.inTopBar ? s.a.createElement("span", {
						className: y.a.clickableUploadText,
						onClick: this.openImageUpload
					}, e ? s.a.createElement(b.c, null, "Update icon") : s.a.createElement(b.c, null, "Add icon")) : null
				}
				getSharedProps() {
					return {
						onClick: this.openImageUpload,
						role: "presentation",
						className: this.props.className
					}
				}
				renderEditableIcon() {
					const {
						url: e,
						color: t
					} = Object(p.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), n = s.a.createElement(s.a.Fragment, null, s.a.createElement(C, O({
						src: e,
						alt: Object(h.c)("Subreddit icon"),
						iconColor: t,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader());
					return this.props.linkTo ? s.a.createElement("a", {
						href: this.props.linkTo
					}, n) : n
				}
				renderEmptyState() {
					return this.props.linkTo ? s.a.createElement("a", {
						href: this.props.linkTo
					}, s.a.createElement(T, O({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader()) : s.a.createElement(s.a.Fragment, null, s.a.createElement(T, O({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader())
				}
				renderSpinner() {
					if (this.props.isLoading) {
						const e = [y.a.loadingIcon];
						let t = 22;
						return this.props.inTopBar && (e.push(y.a.loadingIconInTopBar), t = 32), s.a.createElement(u.a, {
							className: Object(a.a)(...e),
							sizePx: t
						})
					}
					return null
				}
				render() {
					const {
						url: e
					} = Object(p.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), t = e ? this.renderEditableIcon() : this.renderEmptyState(), n = this.renderEditButton();
					return n ? s.a.createElement("div", {
						className: y.a.flexContainer
					}, t, n) : t
				}
			}
			t.a = Object(o.b)(w, (e, t) => ({
				onFileSelected: (n, r) => {
					e(Object(c.a)(t.subreddit, n, r))
				}
			}))(Object(d.b)(E))
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			class o extends s.a.Component {
				constructor(e) {
					super(e), this.onFileInput = e => {
						const t = e.currentTarget.files,
							n = this.props.multiple ? [...t] : t[0];
						this.props.onChange(n), this.setState(() => ({
							value: n
						}))
					}, this.state = {
						value: e.value || ""
					}
				}
				componentWillReceiveProps(e) {
					this.setState(() => ({
						value: e.value || ""
					}))
				}
				render() {
					const {
						props: e,
						state: t
					} = this, n = "string" == typeof t.value ? t.value : "", r = "object" == typeof t.value ? t.value : null, o = n || r;
					return s.a.createElement("div", {
						className: e.className
					}, n && s.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: n,
						tabIndex: e.tabIndex
					}), !o && s.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						type: "file",
						onChange: this.onFileInput,
						accept: "image/x-png,image/jpeg",
						multiple: e.multiple || !1,
						tabIndex: e.tabIndex
					}))
				}
			}
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/featureFlags/index.ts"),
				c = function(e, t) {
					var n = {};
					for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var s = 0;
						for (r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]])
					}
					return n
				};

			function d(e, t, n) {
				const r = Object(i.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(o.b)(r)(e => {
					const {
						featureEnabled: r
					} = e, o = c(e, ["featureEnabled"]);
					return r ? s.a.createElement(t, o) : void 0 !== n ? s.a.createElement(n, o) : null
				})
			}
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		}
	}
]);
//# sourceMappingURL=IdCard~SubredditWiki.aa4436277e99f6e2d811.js.map